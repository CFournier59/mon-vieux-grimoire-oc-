const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
    console.log('Une requête a été reçue !');
});

server.listen(process.env.PORT || 4000);
