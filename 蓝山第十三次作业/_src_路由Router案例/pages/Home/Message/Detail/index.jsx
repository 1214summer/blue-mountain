import React, { Component } from 'react'
// import qs from 'querystring'

const DetailData =[
  {id:'01',content:'你好'},
  {id:'02',content:'我好'},
  {id:'03',content:'大家好'}
]
export default class Detail extends Component {
  render() {
    // 接受params参数
    const{id,title}=this.props.match.params

    // 接受search参数
    // const {search}=this.props.location
    // const {id,title} = qs.parse(search.slice(1))

    //接受state参数
    // const {id,title}=this.props.location.state

    const findResult = DetailData.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
      <div>
         <ul>
            <li>ID:{id}</li>
            <li>TITILE:{title}</li>
            <li>CONTENT:{findResult.content}</li> 
         </ul>
      </div>
    )
  }
}
 