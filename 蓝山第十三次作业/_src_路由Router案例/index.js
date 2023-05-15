import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import {HashRouter} from 'react-router-dom'

const container=document.getElementById('root')
const root=createRoot(container)

//渲染App到页面
root.render(
    <HashRouter>
      <App/>
    </HashRouter>
)
