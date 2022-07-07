// how to use express framework in node runtime environment

//response.write() Vs response.readFile() Vs response.send() Vs response.sendFile()
// about {root:__dirname}

const express = require('express');
// express() invokes the express module instances
const app = express();
app.listen(500)

app.get('/', (req, res) => {
    res.send('<P> First Express app</P>'); // this send() will automatically set
    //content type and response status code
    // which means you are not obligated to write status code and content-type 
});