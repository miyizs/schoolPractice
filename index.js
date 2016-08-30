import React from 'react'
import ReactDOM from 'react-dom'
import StoryPage from './Container/StoryPage'
import { Provider } from 'react-redux'
import store from './store'
import {Router, Route, browserHistory,IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import About from './Container/About'
import Audio from './Container/AudioPage'
import Container from './Container/Container'
const history = syncHistoryWithStore(browserHistory, store)
const rootEl = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <Router  history={history}>
          <Route path='/' component={Container}>
              <IndexRoute component={Audio} />
              <Route path='/about' component={About} />
              <Route path='/audio' component={Audio} />
          </Route>
        </Router>
    </Provider>,
    rootEl
)
