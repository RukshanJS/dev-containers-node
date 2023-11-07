// Load the HTTP module
const http = require('http');

// Define the port to listen on
const port = 3000;

// Create an HTTP server that responds to all requests with "Hello, World!"
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

// Start the server listening on port 8080
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
