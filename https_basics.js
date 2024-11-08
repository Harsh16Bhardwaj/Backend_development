 
const fs = require('fs');
const http = require('http');

const myServer = http.createServer((req, res) => {
    fs.appendFile('log.txt', `${Date.now()}: New Request recieved`)
    // console.log(req.headers);
    if(req.url === './favicon.ico') return res.end();
    res.end("Hello From Server");
    
});

myServer.listen(3000, () => {
    console.log('Server is running on port 3000');
})