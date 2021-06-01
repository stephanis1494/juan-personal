import { BrowserRouter, Switch, Route } from 'react-router-dom'
// // import './App.css'
import { Home, Blog, Projects, Play, Tools, About } from './components/views'
import Navbar from './components/presentations/Navbar'
import Footer from './components/presentations/Footer'
// COOOOOOOOOOOOOOl


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
          <Route path='/about' component={About} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App


