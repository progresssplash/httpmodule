const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url == "/") {
        var readStream = fs.createReadStream('index.html');
        readStream.pipe(res);
    } else if (req.url == "/index") {
        var readStream = fs.createReadStream('index.html');
        readStream.pipe(res); 
    } else if (req.url == "/about") {
        var readStream = fs.createReadStream('about.html');
        readStream.pipe(res);
    } else if (req.url == "/contact") {
        var readStream = fs.createReadStream('contact.html');
        readStream.pipe(res);
    } else {
        var readStream = fs.createReadStream('404.html');
        readStream.pipe(res);
    }
    
}).listen(4000);

console.log("Server is running on port 4000")