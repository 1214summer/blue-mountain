//获取评论列表
function getCommentList(){
    $.ajax({
        method: 'GET',
        url: 'https://3bdd0501-50bb-4d67-a53d-4dc1af13babb.mock.pstmn.io/127.0.0.1:8080/user/getinfo ',
        // url: 'http://www.liulongbin.top:3006/api/getbooks',
        success: function(res){
            if(res.statue !== 200) return alert('获取评论列表失败')
            console.log('获取数据成功')
            console.log(res);
        }
    })

}
getCommentList()



$(function(){
    //获取推荐内容的函数
    function getPassageList(){
        $.get('',function(res){
            if(res.status !==200){
                return alert('获取文章内容失败');
            }
            console.log(res.data);
        })

    }
    getPassageList()
})





