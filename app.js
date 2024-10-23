const http = require('http')//Paquete interno HTTP

http.createServer((req,res) => {
    res.write('Hola Mundo'); //Escribe una respuesta en la pagina web de respuesta
    res.end();//Se le indica al servidor que finalizo el enviar respuesta
})
.listen(8080) //La aplicacion correra en el puerto 8080 http://127.0.0.1:8080
//localhost:8080

console.log('Escuchando en el puerto', 8080)