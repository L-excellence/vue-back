let http = require('http');
let users = [
    { id: 1, name: 'cyl' },
    { id: 2, name: 'cegz' },
    { id: 3, name: 'shuaige' },
]
let server = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users));
    } else {
        res.end('Not Found');
    }
});
server.listen(3000, () => {
    console.log('后端API接口服务器，已经启动在 3000 端口上!')
});