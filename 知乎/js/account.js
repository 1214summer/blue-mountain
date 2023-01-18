
//上传头像
$('.upload-btn').click(function () {
    $('.input-img').click();
    console.log(11);
})
$('.input-img').on('change', function () {
    var file = $('.input-img').get(0).files[0]
    if (!file || file.length == 0) {
      return
    }
    var fileName = file.name;
    var fileType = fileName.substr(fileName.lastIndexOf(".")).toUpperCase();
    if (fileType != ".GIF" && fileType != ".PNG" && fileType != ".JPG" && fileType != ".JPEG") {
      alert('请选择图片文件！') // 提示
      return
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      alert('上传图片大小不能超过 2MB!') // 提示
      $('.input-img').get(0).value = ''
      return
    }
    
    // 有时候，我们上传图片时，需要将图片先预览，那么我们可以将图片转化为 base64 并展示出来
    $('.img').attr('src', fileToBase64(file))
    
    var formdata = new FormData()
    formdata.append("file", file)
    
    $.ajax({
        url: 'https://a842d0dd-15c5-4f11-ae95-027407426e1b.mock.pstmn.io/😣😣 ',
        method: 'post',
        data: formdata,
        processData:false, // 不需要数据序列化，因为传输的数据是 FormData 对象
        contentType:false, // 不需要带有 headers 的 content-type 字段，因为传递 FormData 对象就已经默认了 mutipart/form-data
        xhr: function () {
            var xhr = new XMLHttpRequest()
            xhr.upload.addEventListener('progress', function(e) {
                if (e.lengthComputable) {
                    var progress = Math.round(e.loaded * 100 / e.total) + '%'
                    console.log('上传进度：', progress)
                } else {
                    console.log('无法计算上传进度')
                }
            })
            xhr.upload.addEventListener('load', function(e) {
                console.log('上传成功')
            })
            xhr.upload.addEventListener('error', function(e) {
                console.log('上传失败')
            })
            xhr.upload.addEventListener('abort', function(e) {
                console.log('用户取消上传/浏览器断开了连接')
            })
            return xhr
        }
    }).done(function (data) {
        console.log('后端返回的信息：' + data)
    }).fail(function (err) {
        console.log(err)
        alert('服务器异常')
    })
})
  
/**
  * 文件流转为 base64
  * @param {*} file 
  */
function fileToBase64(file) {
    var URL = window.URL || window.webkitURL;
    return URL.createObjectURL(file);
}  



//修改密码区
$(function(){
    $('#passwordChange').on('submit',function(e){
        e.preventDefault();
        var oringinal = $('#oringinal').val();
    })
    $.PUT('https://a842d0dd-15c5-4f11-ae95-027407426e1b.mock.pstmn.io/127.0.0.1:8080/user/changepass',
    function(res){
        var signUpPW = res.password;
    })
    if(oringinal==signUpPW){ 
        if($('#new').text()!==''){
            $.post('',{password: $('#new').val()},function(res){
                if(res.status==200){
                 return alert('修改密码成功');
                }else {
                 return alert('修改密码失败');
                }
            })
        }else {
            return alert('请输入新密码');
        }
      
    }
})




// 提交信息区
$('.my-form').on('submit',function(e){
    e.preventDefault()
    var data = $(this).serialize();
    console.log(data);
    // alert(11)
     $.ajax ({
        url:'https://a842d0dd-15c5-4f11-ae95-027407426e1b.mock.pstmn.io/127.0.0.1:8080/user/insertinfo',//传输登录页面数据的接口
        type:'POST',
        data: {data},
        dataType: 'JSON',
        success:function(res){
            console.log(res)
        }
    })
})
