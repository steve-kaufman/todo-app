import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

import './index.sass'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={ configureStore({todos: [
    { id: 7, name: 'Trash', description: 'Take out the trash tonight', isCompleted: false },
    { id: 8, name: 'Dishes', description: 'Do the dishes', isCompleted: false }
  ]}) }>
    <App />
  </Provider>, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
