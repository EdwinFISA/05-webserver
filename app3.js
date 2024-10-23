const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n');
    res.write('1, Edwin\n');
    res.write('2, Eduardo\n');
    res.write('3, Figueroa\n');
    res.write('4, Santizo\n');
    res.end();
})
.listen(8080);
console.log('escuchando en el puerto', 8080);