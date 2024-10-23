const express = require('express')
const app = express()
const port = 8080

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//Servir contenido estatico public2 donde esta el templated
app.use(express.static('public3'))

//controlador de la ruta principal
app.get('/', (req,res) => {
    res.render('home')
})

//Habilitamos la ruta generic http://localhost:8080/generic
app.get('/generic', (req,res) => {
    res.sendFile(__dirname + '/public3/generic.html')
})

//Habilitamos la ruta generic http://localhost:8080/generic
app.get('/elements', (req,res) => {
    res.sendFile(__dirname + '/public3/elements.html')
})

//Habilitamos la ruta invalida para que despliegue una página de error
app.get('*', (req,res)=> {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

/** 
 * Para ejecutar esta aplicacion se tiene que tuilizar node app12.js
 * renderizado las demas partes de la pagina es decir sus ocpiones de 
 * elements y generic. 
 * visitar el sitio web http://localhost:8080
 * El beneficio en este punto, es que ya podemos tener la capacidad de 
 * reutilizar codigo
*/