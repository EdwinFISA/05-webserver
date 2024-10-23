const express = require('express') //requerimos el paquete Express
const app = express()

//Habilitando una ruta
app.get('/', function (req,res){
    res.send('hola mundo')
})

app.listen(8080);