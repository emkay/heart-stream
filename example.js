const http = require('http')
const hs = require('.')

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
  hs.pipe(res)
}).listen(8080)
