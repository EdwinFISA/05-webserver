const express = require('express')
const app = express()
const port = 8080

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//Servir contenido estatico public2 donde esta el templated
app.use(express.static('public3'))

//Enviando argumentos desde el controlador al template home2 (pagina renderizada)
app.get('/', (req, res) => {
    res.render('home2', {
        nombre: 'Edwin Figueroa',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public3/generic.html')
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public3/elements.html')
})

//Habilitamos la ruta invalida para que despliegue una página de error
app.get('*', (req,res)=> {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})