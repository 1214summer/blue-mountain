const http = require('http')
const fs = require('fs')
const server = http.createServer()

server.on('request',(req,res)=> {
    fs.readFile("./table.html",(error,html) => {
      res.statusCode=200
      res.setHeader("Content-Type","text/html")
      res.write(html)
      res.end()
    })
})
server.listen(3000,() => {
    console.log('服务端已启用，端口3000监听中...')
})
 