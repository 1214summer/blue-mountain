export default function(){
//获取元素
var comment = document.querySelectorAll('#comment');
var commentList = document.querySelector('.comment-list');
var myComment = document.querySelector('.my-comment');
var BigCommentInput = myComment.querySelector('input');
var pubulishBigComment = myComment.querySelector('button');
var topTab = document.querySelector('.topTab');
var commentCancle = topTab.querySelector('button');
var commentContent = document.querySelector('.comment-content');

//写想法
var writeidea = document.querySelector('.writeidea');//写想法快捷键
var idea = document.querySelector('.idea');//想法区
var publishIdea = document.querySelector('#publish-idea');
var ideaArea = idea.querySelector('textarea');

var ideaCancle = document.querySelector('.idea-cancle');
//想法结束

//提问题
var question = document.querySelector('.question');//提问区
var quiz = document.querySelector('.quiz');//提问按钮
var questionCancle = document.querySelector('.question-cancle');
var questionTextarea = question.querySelector('textarea');
var publishQuestion = document.querySelector('#publish-question');
quiz.onclick = function () {
    question.style.display = 'block';
}
 questionCancle.onclick = function () {
    question.style.display = 'none';
}
publishQuestion.onclick=function(){
    if(questionTextarea.value==''){
        alert('您还没有输入内容');
        return false;
    }else {
        var value=questionTextarea.value;
        //提问的问题传给后端
        // $(function () {
        //     $('#publish').on('submit', function () {

        //     })
        // })
        $.post('后端接收提问的接口',
                [value],
                function(res) {
                    console.log(res);
                }
        )
        alert('发布成功');
        questionTextarea.value='';
        question.style.display='none';
    }
}
//获取文章数据区
function getPassageList(){
$.ajax({
method: 'GET',
url: 'https://3bdd0501-50bb-4d67-a53d-4dc1af13babb.mock.pstmn.io/127.0.0.1:8080/user/getinfo ',
// url: 'http://www.liulongbin.top:3006/api/getbooks',
success: function(res){
    if(res.statue !== 200) return alert('获取评论列表失败');
    console.log('获取数据成功')
    console.log(res);
}
})

}
getPassageList()



//注册事件
var max = document.querySelectorAll('.max');

var icons = document.querySelectorAll('.iconfont');
for (var i = 0; i < icons.length; i++) {
    icons[i].onclick = function () {
        this.style.color = '#056be8';
    }
}
for(var i=0;i<max.length;i++){
    max[i].onclick = function () {
      this.style.color = 'blue';
}
}
// 评论区  需要的数据
$.get('后端发送的评论数据，包括用户头像，用户姓名，评论内容',{
    
})
for (var i=0;i<comment.length;i++){
    comment[i].onclick = function () {
        // commentList.style.z-index = '1';
        commentList.style.display = 'block';
    }
}
commentCancle.onclick = function () {
    commentList.style.display = 'none';
}
pubulishBigComment.onclick = function(){
    if(BigCommentInput.value==''){
        alert('您还没有输入内容');
        return false;
    }else {
        // var commentContentList = commentContent.createElement('.comment-content-list');
        var commentContentList = document.createElement('div');
        commentContentList.className = 'comment-content-list';
        commentContentList.innerHTML = '<h4>我</h4>'+'<br>'+'&nbsp;'+'&nbsp'+BigCommentInput.value;
        commentContentList.style.backgroundColor='#ccc';
        commentContent.insertBefore(commentContentList,commentContent.children[0]);
    }
    BigCommentInput.value='';
}


// 想法区
writeidea.onclick = function () {
    idea.style.display = 'block';
}
publishIdea.onclick = function (){
    if(ideaArea.value==''){
        alert('您还没有输入内容');
        return false;
    }else{
        //后端接收想法的接口
        var value=ideaArea.value;
        $.post('后端接收想法的接口',[value],
               function(res){
                   if(res.statue==200){
                    console.log(res);
                   }
               }
        )

        ideaArea.value = '';
        idea.style.display = 'none'; 
        alert('发布成功');
    }
}

ideaCancle.onclick = function () {
    idea.style.display = 'none';
}




//评论的评论
var answer = document.querySelectorAll('#answer');//回复按钮
var commentComment = document.querySelectorAll('.comment-comment');//回复区域
var commentInput = document.querySelectorAll('#commentInput');//回复框
var pushComment = document.querySelectorAll('#push-comment');//回复评论按钮
for(var i=0;i<answer.length;i++){
    answer[i].setAttribute('index',i);
    answer[i].onclick = function () {
    var index = this.getAttribute('index');
    if(commentComment[index].style.display == 'none'){
        commentComment[index].style.display = 'block'
        }else {
            commentComment[index].style.display = 'none'; 
        }
    }
}
var commentCommentList = document.querySelectorAll('.commentCommentList');
//评论的评论之发送
 for(var i = 0;i<pushComment.length;i++){
    pushComment[i].setAttribute('index',i);
    pushComment[i].onclick = function(){ 
        var index = this.getAttribute('index');
        if(commentInput[index].value !== ''){
           //创建元素
        //    var value = commentInput[index].value;
            var li = document.createElement('li');
            li.innerHTML = commentInput[index].value;
            //添加元素
            // commentCommentList[index].appendChild(li);
            commentCommentList[index].insertBefore(li,commentCommentList[index].children[0]);
            // alert(11);
        } else {
            alert('您没有输入内容');
            return false;
            
        }
        commentInput[index].value = '';
    }

 }

// 回答问题区

//接收问题的数据
$.get('接收问题',[],function(res){
    if(res.status==200){
        console.log(res);
    }
})
//将数据res渲染成页面的结构  innerHTML+button
var answerQuestion = document.querySelector('.answer-question');
var answerarea = document.querySelector('.answerarea');
// var writeAnswer = document.querySelector('#writeArea');
var questionarea = document.querySelector('.questionarea');
var writeBtns = questionarea.querySelectorAll('button');
var myAnswer = document.querySelector('.my-answer');
var answerBtn = myAnswer.querySelector('button');
var answerTab = document.querySelector('.answerTab');
answerQuestion.onclick = function () {
    answerarea.style.display = 'block';
}
var answerFrame = myAnswer.querySelector('textarea');
for (var i = 0; i < writeBtns.length; i++) {
    writeBtns[i].setAttribute('index',i);
    writeBtns[i].onclick = function () {

        myAnswer.style.display = 'block';
        var index = this.getAttribute('index');
        answerBtn.onclick = function () {
           if(answerFrame.value==''){
                alert('请填写回答');
                return false;
           }else{
            //后端接收回答问题内容的接口
                var value=answerFrame.value;
                $.post('后端接收回答问题内容的接口',[value],
                       function(res){
                           if(res.status==200){
                            console.log(res);
                           }
                       }
                )

                writeBtns[index].innerText='已回答';
                writeBtns[index].style.backgroundColor='#438ae0';
                myAnswer.style.display = 'none';
                answerFrame.value = '';
           }
        }

    }
}


answerTab.onclick = function () {
    answerarea.style.display = 'none';
}

//推荐页面之关注用户
var follows = document.querySelectorAll('#follow');
for(var i=0;i<follows.length;i++){
   follows[i].setAttribute('index',i);
   follows[i].addEventListener('click',function (){
    // follows[i].onclick= function(){
        var index = this.getAttribute('index');
        follows[index].innerText = '已关注';
        follows[index].style.backgroundColor = '#438ae0';
    // }
        
   }) 
}

// export.default= {
    //获取评论列
    function getCommentList(){
    $.ajax({
        method: 'GET',
        url: `https://3bdd0501-50bb-4d67-a53d-4dc1af13babb.mock.pstmn.io/127.0.0.1:8080/user/getinfo `,
        // url: 'http://www.liulongbin.top:3006/api/getbooks',
        success: function (res) {
            if (res.statue !== 200) return alert('获取评论列表失败')
            console.log('获取数据成功')
            console.log(res);
        }
    })

}
getCommentList()



$(function () {
    //获取推荐内容的函数
    function getPassageList() {
        $.get('', function (res) {
            if (res.status !== 200) {
                return alert('获取文章内容失败');
            }
            console.log(res.data);
        })

    }
    getPassageList()
})
// }


}


