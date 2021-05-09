import { BrowserRouter, Switch, Route } from 'react-router-dom'
// // import './App.css'
import Navbar from './components/presentations/Navbar';
import Home from './components/views/Home'
import Blog from './components/views/Blog'
import Projects from './components/views/Projects'
import Play from './components/views/Play'
import Tools from './components/views/Tools'

// Didn't work with destructuring
// import { Home, Blog, Projects, Play, Tools } from './components/views'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />        

      <div className="content">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/projects' component={Projects} />
          <Route path='/play' component={Play} />
          <Route path='/tools' component={Tools} />
        </Switch>
      </div>
      
    </BrowserRouter>
  )
}

export default App


