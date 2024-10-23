const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Home Page')
})

app.get('/holamundo', function (req,res){
    res.send('Hola mundo en su respectica ruta')
})

//validacion para cualquier otra ruta que no este definida
//localhost:8080/ruta-no-definida
app.get('*', function (req,res){
    res.send('404 | Page not found')
})

app.listen(8080);