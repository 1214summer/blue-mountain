import React, { Component } from "react"
import { Switch } from "react-router-dom" 
import FrontendAuth from "./FrontendAuth" 
import routerMap from "./routerMap"
export default class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <Switch>
        <FrontendAuth routerConfig={routerMap} />
      </Switch>
    ) 
  }
}
 