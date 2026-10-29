const http = require('http');
const PORT = 8080;
// creating simple http server 
const server = http.createServer((req, res) => {
    // res.writeHead(200, {"content-type": "text/plain"})
    // res.end('welcome to my server');

    // handle different routs
    if (req.url === '/') {
        fetch("http://localhost:8000/")
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log('error : ', err))
        // console.log(resp);
        res.end('home page');
    } else if (req.url === '/about') {
        res.end('about page ', data);
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
})

server.listen(PORT, () => console.log(`srever started at port : ${PORT}`));