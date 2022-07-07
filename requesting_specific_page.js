const http = require('http')
const file = require('fs')
const port = 5000
const host = 'localhost'
const run = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    const path = req.url
    if (path == '/index') {
        res.setHeader('Content-Type', 'Text/Html')
        file.readFile('./employe_MS/index.html', (error, data) => {
            if (error) {
                console.log(error)
                res.end()
            } else {
                res.end(data.toString())
            }
        });
    } else if (path == '/about') {
        res.setHeader('Content-Type', 'Text/html')
        file.readFile('./employe_MS/about.html', (error, data) => {
            if (error) {
                console.log(error)
                res.end()
            } else {
                res.end(data.toString())
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        file.readFile("./employe_MS/error.html", (error, data) => {
            res.end(data.toString())
        });
    }
});
run.listen(port, host, () => {
    console.log(`server is ruuning on ${port} : ${host}`);
});