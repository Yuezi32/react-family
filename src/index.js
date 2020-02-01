import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import './mock'
import './common/style/frame.styl'

const Apps = (
    <Provider store={store}>
      <App />
    </Provider>
  )

ReactDOM.render(Apps, document.getElementById('root'))
