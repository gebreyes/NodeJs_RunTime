const http = require('http')
const fs = require('fs') // fs module is used manipulate different
    // file operation from local machine
const server = http.createServer((req, res) => {
    console.log("server created successfully")
    res.setHeader('Content-Type', 'text/Html');

    fs.readFile('./employe_MS/index.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            //console.log()
            //res.write(data.toString(), " ")
            res.end(data.toString()) // end the process after getting response
                //res.end()
        }
    })
})
server.listen(5000, 'localhost', () => {
    console.log("listening to port 5000 with loopback address")
})