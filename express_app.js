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
app.get('/index', (req, res) => {
    res.sendFile('./employe_MS/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
    res.sendFile('./employe_MS/about.html', { root: __dirname });
    // when we use sendFile method it always take absolute path of the computer 
    //not the current directory so it is very important to use {root:__dirname}
});
app.get('/about-me', (req, res) => {
    res.redirect('/about')
});
app.use((req, res) => {
    res.sendFile('./employe_MS/error.html', { root: __dirname })
        //we have use use() method always at the end
})