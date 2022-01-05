import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import History from './pages/history'

const App = () =>{
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route path={'/history'} component={History}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App