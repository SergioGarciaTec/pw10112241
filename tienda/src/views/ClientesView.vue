<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Clientes</h4>
                <RouterLink to="/clientes/create" class="btn btn-primary float-end">
                    Agregar
                </RouterLink>
            </div>
            <div class="card-body">
                <table class="table table-borderered table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>RFC</th>
                    </thead>
                    <tbody v-if="clientes.length > 0">
                        <tr v-for="(clientes, index) in clientes" :key="index">
                            <td>{{ clientes.id }}</td>
                            <td>{{ clientes.nombre }}</td>
                            <td>{{ clientes.direccion }}</td>
                            <td>{{ clientes.telefono }}</td>
                            <td>{{ clientes.rfc }}</td>
                            <td>
                                Editar
                                &nbsp;
                                <button class="btn btn-danger" @click="deleteCliente(clientes.id)">
                                    Borrar
                                </button>
                                
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="5" style="text-align: center;">Sin registros</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "ClientesView",
        data(){
            return{ 
                clientes: [],
            }
        },
        mounted(){ //cuando se carga la pagina
            this.getClientes();
        },
        methods: {
            getClientes(){
                axios.get('http://localhost:3000/api/clientes/').then(res => {
                    this.clientes = res.data;
                });
            },
            deleteCliente(iddelclienteaborrar){
                axios.delete('http://localhost:3000/api/clientes/' + iddelclienteaborrar).then(res => {
                    if(res.data.affectedRows > 0){
                        this.getClientes(); //se recarguen los datos
                    }
                });
            }
        }
    }
</script>