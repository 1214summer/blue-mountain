//打印九九乘法表
var str='';

for (var i = 0; i<=9 ;i++) {
    for(var j = 0;j<=i;j++){
        str += i + '*' + j + '=' + j * i + '\t';
    }
    str += '\n';
}
console.log(str);

//冒泡排序
const dedubble = () =>{
    var arr = [2,3,4,3,5,5,6,1,1];
    var ans = [];
    console.log(arr);
    for(var i = 0; i < arr.length;i++){
        if(ans.indexOf(arr[i]) === -1){//判断是否重复  
            ans.push(arr[i]); 
        } 
    } 

  console.log(ans.sort());
}
dedubble();
//爬楼梯
const climb = () =>{
    let n = 3;
    console.log("n="+n);
    var ans = [];
    ans[0] = ans[1] = 1;
    for(let i = 2; i <= n; i++) {
        ans[i] = ans[i - 1] + ans[i - 2];
    }
    console.log(ans[n]);
}
climb();