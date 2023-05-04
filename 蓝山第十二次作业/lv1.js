// useMemo()

let lastMemo
let lastMemoDependencies
function useMemo(callback,dependencies){
    if(lastMemoDependencies){
        let changed = !dependencies.every((item,index)=>{
            return item === lastMemoDependencies[index]
        })
        if(changed){
            lastMemo = callback()
            lastMemoDependencies = dependencies
        }
    }else{ 
        lastMemo = callback()
        lastMemoDependencies = dependencies
    }
    return lastMemo
}



//useCallback()


let lastCallback
let lastCallbackDependencies
function useCallback(callback,dependencies){
    if(lastCallbackDependencies){
        let changed = !dependencies.every((item,index)=>{
            return item === lastCallbackDependencies[index]
        })
        if(changed){
            lastCallback = callback
            lastCallbackDependencies = dependencies
        }
    }else{ // 没有传入依赖项
        
        lastCallback = callback
        lastCallbackDependencies = dependencies
    }
    return lastCallback
}
