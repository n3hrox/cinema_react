import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'
import Contact from './Contact'
import Movies from './Movies'
import Seats from './Seats'

const Main = () => (
  <main>
  <div className="content">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/movies' component={Movies}/>
      <Route path='/seats' component={Seats}/>
    </Switch>
  </div>
  </main>
)

export default Main
