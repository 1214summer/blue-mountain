
var arr = [1,2,[3,4,5,[6,7],[8,9,[10]]],[11,12]];
//1递归
var new_arr1=[];//降维之后的新数组1
function myFun01(arr01){
    for(var i=0;i<arr01.length;i++){
        if(Array.isArray(arr01[i])){
            arguments.callee(arr01[i]);//调用函数本身
            // myFun01(arr01[i]);
        }else{
            new_arr1.push(arr01[i]);//给数组压入元素
        }
    }
}
myFun01(arr);
console.log(new_arr1);


//2toString方法
let newArr = arr.toString().split(',');

console.log(newArr) ;


//3将多维数组变成字符串，再转化为一维数组
var a=arr.join()//多维数组转字符串，默认用逗号分隔
console.log(a.split(","));//字符串转数组用逗号分隔


//4使用空字符串的方法
let newArr1 = (arr+ '').split(',');

console.log(newArr1) ;
