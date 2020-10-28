const http = require('http');

const server = http.createServer((req, res) => {
    
    if (req.url == "/"){
        res.writeHead(200, {
            'Content-type' : 'text/html'
        })

        res.end("<h1>Hello from Nedo_server</h1>");
    }
    if (req.url == "/users") {
        res.writeHead(200, {
            'Content-type' : 'text/json'
        })
        
        const users = [
            {name:"user001", age:"228"},
            {name:"user002", age:"322"}
        ]
        res.end(JSON.stringify(users));
    }

})

server.listen(3228, () => {
    console.log("server runing...");
})