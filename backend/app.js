let express = require('express');
let mysql = require('mysql');
let cors = require('cors');
const { response } = require('express');

let app = express();
app.use(express.json());
app.use(cors());

//Conexion a MySql
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pwdata',
    port: '3306'
});

//Nos conectamos a MySql
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado a la base de datos');
    }
})
//Rutas de acceso
app.get("/",function(req,res){
    res.send("Rutassssss de iniciosssss");
})

//Seleccionamos todos los clientes
app.get('/api/clientes',(req,res)=>{
    conexion.query('SELECT * FROM clientes',(error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});
//Seleccionamos un cliente en especifico
app.get('/api/clientes/:id',(req,res)=>{
    conexion.query('SELECT * from clientes WHERE id=?',[req.params.id],(error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila);
        }
    });
});

//Encender servidor
let puerto = 3000;
app.listen(puerto,function(){
    console.log("Servidor escuchando puerto "+puerto);
})