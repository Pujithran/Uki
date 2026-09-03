const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page');
} else if (req.url === '/about' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the About Page');
} else if (req.url === '/api/students' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([
        { id: 1, name:'Kavindu'},
        { id: 2, name: 'Thanuja'}
    ]));
} else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
}});

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000/`)
})