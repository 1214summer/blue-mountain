const http = require('http')
const Websocket = require('websocket').server
//建立服务端
const httpSever = http.createServer().listen(8080,function(){
    console.log("服务器已启用，端口8080监听中...")
})

// 建立握手机制
const wsServer = new Websocket({
    httpServer:httpSever,
    autoAcceptConnections:false
})
let conArr = []
//处理客户端发来的信息，并发送给所有客户端
wsServer.on('request',function(request){
    let connection = request.accept()
    conArr.push(connection)
    connection.on('message',function(mes){
        console.log(mes)
        for(let i =0;i<conArr.length;i++){
            conArr[i].send(msg.utf8Data)
        }
    })
})