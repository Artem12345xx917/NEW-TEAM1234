const handleRequest = (req, res) => {    
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write('<html>');
        res.write('<head><title>How is it going?</title><head>');
        res.write('<body><h1>I am glad to see you here!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</html>');
        res.end();
    }
    else if (url === '/users') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write('<html>');
        res.write('<head><title>Users</title><head>');
        res.write('<body><ul style="font-size: 20px;"><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></body>');
        res.write('</html>');
        res.end();
    }
    else if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.writeHead(302, { Location: '/' });
            res.end();
        })
    }
}

module.exports = {handleRequest};