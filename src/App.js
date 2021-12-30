import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Blog, Projects, Play, Tools, About, QRCode, Music } from './components/views'
import Breakout from './components/views/games/breakout'
import FlappySquare from './components/views/games/flappysquare'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <BrowserRouter>
      <div className="content">
        <Provider store={store}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/projects' component={Projects} />
          <Route path='/play' component={Play} />
          <Route path='/tools' component={Tools} />
          <Route path='/about' component={About} />
          <Route path='/qr-code' component={QRCode} />
          <Route path='/games/breakout' component={Breakout} />
          <Route path='/games/flappysquare' component={FlappySquare} />
          <Route path='/music' component={Music} />
        </Switch>
        </Provider>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App


