import {React} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'

const container=document.getElementById('app')
const root=createRoot(container)

//渲染App到页面
root.render(<App tab="home"/>)
