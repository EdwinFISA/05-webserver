const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Home Page')
})

app.get('/holamundo', function (req,res){
    res.send('Hola mundo en su respectica ruta')
})

app.listen(8080);