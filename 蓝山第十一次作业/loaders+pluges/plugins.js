// function FileListPlugin(options){}
// FileListPlugin.prototype.apply=function(compliler){
//     compliler.plugin('emit',function(compliation,callback){//指定一个webpack自身的钩子
//         //处理数据
//         assets:{
//             './index.html': {
//                 source: [Function:source],     //文件源码
//                 size:[Function:size]           //文件大小
//             }
//           }

//     })
// }
class HWP {
    apply(compliler) {
        compliler.hooks.emit.tapAsync((compilation, callback) => {
            let html = `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        </body>
        </html>
            `

            compilation.assets['index.html'] = {
                source() {
                    return html
                },
                size(){
                    return html.length;
                }
            };

            callback();
        })
    }
}