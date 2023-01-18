window.onload = function(){
    //获取要操作的元素
    var btns = document.querySelectorAll('btn');
    var sections = document.querySelectorAll('section');
    
    //移除选中态
    function removeActive(){
        //移除标签选中样式
        btns.forEach(btn=>{
            btn.classList.remove('active');
        });
        //移除内容区选中态样式
        sections.forEach(section=>{
            section.classList.remove('active');
        })
    }

    //遍历所有标签
    
}
