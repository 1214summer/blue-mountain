export default function(){
        var Sign_Tabs =document.querySelector('.Sign_Tabs');
        var btns = Sign_Tabs.querySelectorAll('button');
        var sections = document.querySelectorAll('section');
        //for循环绑定点击事件
        for(var i = 0; i<btns.length; i++){
            btns[i].setAttribute('index',i);
            btns[i].onclick = function(){
               for(var i = 0; i<btns.length; i++){
                  btns[i].className = '';
               }
               this.className = 'active';
                var index = this.getAttribute('index');
                // console.log(index);
                for(var i=0;i<sections.length;i++){
                    sections[i].style.display = 'none';
                }
                sections[index].style.display = 'block';
            }
        }


        $(function(){
            $('#f1').on('submit',function(e){
                // e.preventDefault();
                // alert('可以');
                var data = $(this).serialize();
                console.log(data);
                $.ajax ({
                    url:'https://a842d0dd-15c5-4f11-ae95-027407426e1b.mock.pstmn.io/user/register?mobile='+data.mobile+'&password='+data.password,//传输登录页面数据的接口
                    type:'POST',
                    dataType: 'JSON',
                    success:function(res){
                        console.log(res)
                    }
                })
            })
            $('#f2').on('submit',function(){
                // alert('可以');
                var data = $(this).serialize();
                console.log(data);
                $.ajax ({
                    url:'http://www.liulongbin.top:3006/api/getbooks?mobile='+data.email+'&password='+data.password,//传送登录数据接口
                    type:'POST',
                    data:{
                        id:1
                    },
                    dataType: 'JSON',
                    success:function(res){
                        console.log(res)
                    }
                })
            })
        })
    window.onload = function(){
        //获取要操作的元素
        var btns = document.querySelectorAll('.btn');
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
}
