import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './components/views'
import { Provider } from 'react-redux'
import { store } from './store'
// import { Home, Blog, Projects, Play, Tools, About, QRCode, Music } from './components/views'
// import Breakout from './components/views/games/breakout'

const App = () => {
  return (
    <BrowserRouter>
        <Provider store={store}>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/blog' component={Blog} />
          <Route path='/projects' component={Projects} />
          <Route path='/play' component={Play} />
          <Route path='/tools' component={Tools} />
          <Route path='/about' component={About} />
          <Route path='/qr-code' component={QRCode} />
          <Route path='/games/breakout' component={Breakout} />
          <Route path='/music' component={Music} /> */}
        </Switch>
        </Provider>
    </BrowserRouter>
  )
}

export default App


