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
            response.statusCode = 200 //setting statuscode to ok/success
            break;
        case '/about':
            path += 'about.html'
            response.statusCode = 200
            break;
        case '/about-me': //this case deal with redirecting to other page
            //using setHeader(Location, 'page')
            response.setHeader('Location', '/about')
            response.statusCode = 301
            break;
        default:
            path += 'error.html'
            response.statusCode = 404
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
// status code describes about the type of response sent to the browser

/*
Status code          there meaning
100 range..................informational response
200 range------------------success code
300 range------------------redirect code
400 range------------------client sied error
500 range------------------server side error
*/