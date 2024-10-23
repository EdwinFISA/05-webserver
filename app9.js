const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))

app.get('/holamundo', function (req,res){
    res.send('Hola mundo en su respectica ruta')
})

//Para servir en cualquier ruta invalida http://localhost:8080/invalida
//dirname+ path completo absoluto del recurso a desplegar
app.get('*', (req,res)=> {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})