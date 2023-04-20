const loader= require('loader-utils')
module.exports= function loader(source){
  //source代表的是根据loader text规则匹配到的字符串格式的源文件
  let options=loaderUtils.getOptions(this)
  return source.replace('JavaScript','Java')
}