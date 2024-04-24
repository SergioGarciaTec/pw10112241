let express = require('express');
let mysql = require('mysql');
let cors = require('cors');
const { response } = require('express');

let app = express();
app.use(express.json());
app.use(cors());

//Rutas de acceso
app.get("/",function(req,res){
    res.send("Rutassssss de iniciosssss");
})

//Encender servidor
let puerto = 3000;
app.listen(puerto,function(){
    console.log("Servidor escuchando puerto "+puerto);
})