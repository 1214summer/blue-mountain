import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'//路由组件
import About from './pages/About'//路由组件
import Header from './components/Header'//一般组件 
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                        {/* 在React中靠路由链接实现组建的跳转 */}
                            {/* <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink> */}
                            <MyNavLink replace to="/about" >About</MyNavLink>
                            <MyNavLink replace to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                  <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    <Redirect to="/about"/>
                                  </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
