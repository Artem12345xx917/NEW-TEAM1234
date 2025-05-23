const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (url === '/' && method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Home</title></head><body>');
    res.write('<h1>Welcome!</h1>');
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter username" required>');
    res.write('<button type="submit">Send</button></form>');
    res.write('</body></html>');
    return res.end();
  }

  if (url === '/users' && method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Users</title></head><body>');
    res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
    res.write('</body></html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
      const parsedBody = qs.parse(Buffer.concat(body).toString());
      console.log('Username:', parsedBody.username);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});