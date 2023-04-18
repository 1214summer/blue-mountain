const { create } = require('domain')
const fs = require('fs')
// 1
fs.copyFile('./src.txt','./origin.txt',function(err){
    if(err) console.log('failed')
    else console.log('succeed')
})

//2
fs.resdFile('./origin.txt',function(err,data){
    if(err) throw new Error('failed')
    fs.writeFile('/src.txt',data,function(err){
        if(err) throw new Error('failed')
    })
})
//3
let file = fs.createReadStream('./origin.txt')
let out = fs.createWriteStream('./src.txt')
file.on('data',data =>{
    out.write(data)
})
file.on('end',()=>{
    out.end()
})

//4
file.pipe(out)