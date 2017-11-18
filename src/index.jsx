import ReactDOM from 'react-dom'
import App from './components/App'
import store from './flux/store'
import { Provider } from 'react-redux'
import React from 'react'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'),
)
