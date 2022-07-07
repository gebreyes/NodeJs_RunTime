const http = require('http')
const file = require('fs')
const os = require('os')
const host = 'localhost'
const port = 500

const run = http.createServer((request, response) => {
    console.log(request.url, request.method);
    console.log(os.platform)
    let path = './employe_MS/'; // specifying the default path
    // now we have to iterate on every request url using switch statement
    // and We declared variable path using let because path variable modify itself based 
    //on the switch statement
    //                       How??
    switch (request.url) {
        // now define the cases
        case '/': // root one if you simply type localhost:500
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        default:
            path += 'error.html'
            break;
    }
    // Now the below lines of code deals with sending response to the user/client
    response.setHeader('Content-Type', 'text/Html');
    file.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            response.end();
        } else {
            response.end(data.toString())
        }
    });
});
run.listen(port, host, () => {
    console.log(`server is ruuning on ${port} : ${host}`);
});