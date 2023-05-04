//创建外壳组件App
import React, { Component } from 'react'
import "./App.css"
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
// import Item from './component/Item'
export default class App extends Component {

    //初始化状态
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:false},
        {id:'004',name:'逛街',done:false},
    ]}
     //用于添加一个todo，接受的是todo对象
     addTodo = (todoObj)=>{
        const {todos}=this.state
        //追加一个todo
        const newTodos = [todoObj,...todos]
        this.setState({todos:newTodos})
     }

     //用于更新一个toddo对象,更新勾选或取消勾选 
     updateTodo=(id,done)=>{
        const {todos}=this.state
        //匹配
        const newTodos=todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj,done}//后面的done表示更换
            else return todoObj
        })
        this.setState({todos:newTodos})
     }

     deletTodo = (id)=>{
        const {todos}=this.state
        const newTodos=todos.filter((todoObj)=>{
            return todoObj.id !== id//返回选定删除项的其他项
        })
        this.setState({todos:newTodos})
     }

     //全选
     checkAllTodo =(done)=>{
        const {todos}=this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
     }

     //清除已经完成的
     clearAllDone =()=>{
        const {todos}=this.state
        //过滤数据
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done//返回还没有被完成的
        })

        this.setState({todos:newTodos})
     }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos}  updateTodo={this.updateTodo} deletTodo={this.deletTodo} />
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }
}

