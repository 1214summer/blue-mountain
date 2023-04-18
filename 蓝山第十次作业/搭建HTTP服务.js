const http = require('http')
const server = http.createServer()

server.on('request',(req,res)=> {
    res.write('<head><meta charset="utf-8"/></head>')
    let url = req.url
    if(url === '/login'){
        res.end('登陆页面')
    }else if(url === '/reg'){
        res.end('注册页面')
    }else{
        res.end('404 Not Found')
    }
})
server.listen(3000,() => {
    console.log('服务端已启用，端口3000监听中...')
})
 