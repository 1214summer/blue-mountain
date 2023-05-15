import React, { Component } from "react"
// import { Redirect } from "react-router-dom"  //重定向使用
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            redirectToReferrer: false, // 是否重定向之前的界面
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSumit = this.handleSumit.bind(this)
    }
    // 处理用户名、密码的变化
    handleChange(e) {
        if (e.target.name === "username") {
            this.setState({
                username: e.target.value,
            })
        } else if (e.target.name === "password") {
            this.setState({
                password: e.target.value,
            })
        }
    }
    // 提交登录表单
    async handleSumit(e) {
        e.preventDefault()
        const username = this.state.username
        const password = this.state.password
        if (username.length === 0 || password.length === 0) {
            alert("用户名或密码不能为空！")
            return
        }
        // 保存信息到sessionStorage
        sessionStorage.setItem("username", username)
        // 登录成功后，设置redirectToReferrer为true 
        this.setState({
            redirectToReferrer: true,
        })
        let RedirectUrl = this.props.location.state
            ? this.props.location.state.from.pathname
            : "/"
        // 登陆成功之后的跳转
        this.props.history.push(RedirectUrl)
    }
    render() {
        return (
            <form className="login" onSubmit={this.handleSumit}>
                <div>
                    <label htmlFor="">
                        用户名：
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        密码：
                       <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                </div>
                <input type="submit" value="登录" />
            </form>
        )
    }
}
export default Login 