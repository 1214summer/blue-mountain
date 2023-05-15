import Index from "./page/index" 
import Home from "./page/home" 
import Error from "./page/error" 
import Login from "./page/login" 

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  { path: "/", name: "App", component: Index, auth: true },//表示该路由需要权限校验
  { path: "/home", name: "Home", component: Home, auth: true },
  { path: "/login", name: "Login", component: Login },
  { path: "/404", name: "404", component: Error },
]