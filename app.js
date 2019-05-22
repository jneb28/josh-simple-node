const http = require('http');

const server = http.createServer((req, res, next) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Simple HTTP Server</title></head>');
        res.write('<body>');
        res.write('<h1>Hello World</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(req.url === '/api') {
        let player = {
            name: 'grubby',
            race: 'orc',
            winRate: '68%'
        }
        res.setHeader('Content-Type', 'application/json');
        var json = JSON.stringify(player);
        res.write(json);
        return res.end(); 
    }
});

let port = 5000;
server.listen(port);