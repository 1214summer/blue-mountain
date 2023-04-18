function sleep(interval){
    return new Promise((resolve)=>{
        setTimeout(resolve,interval)
    })
}

async function print(n){
    for(let i=1;i<=n;i++){
        await sleep(i*1000)
        console.log(i)
    }
}
print(3)