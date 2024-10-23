const express = require('express')
const app = express()
const port = 8080

//Servir contenido estatico public2 donde esta el templated
app.use(express.static('public2'))

//Habilitamos la ruta generic http://localhost:8080/generic
app.get('/generic', (req,res) => {
    res.sendFile(__dirname + '/public2/generic.html')
})

//Habilitamos la ruta generic http://localhost:8080/generic
app.get('/elements', (req,res) => {
    res.sendFile(__dirname + '/public2/elements.html')
})

//Habilitamos la ruta invalida para que despliegue una página de error
app.get('*', (req,res)=> {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

