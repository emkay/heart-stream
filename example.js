const http = require('http')
const hs = require('.')

http.createServer((req, res) => {
  hs.pipe(res)
}).listen(8080)
