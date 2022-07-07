const http = require('http');
//const { text } = require('stream/consumers');
const server = http.createServer((req, res) => {
    //req.send(req.url, req.method);
    console.log(req.url, req.method);
    //Sending response to the client
    res.setHeader('Content-Type', 'text/plain');
    res.write(" this is plain text");
    res.setHeader('Content-Type', 'text/Html');
    res.write('<h1> Response </h1>');
    res.write('<p> HTML page for User </p>');
    res.end();

});

server.listen(500, 'localhost', () => {
    console.log("Server listening to port 500");
});