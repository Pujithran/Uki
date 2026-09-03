const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);

    res.writeHead(200, { 'Contaent-Type': 'text/plain' });
    res.end('Hello from my Node.js server!');
});

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000/`)
})