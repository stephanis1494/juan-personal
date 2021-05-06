import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import { Home, About, Contact } from './components/views'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App