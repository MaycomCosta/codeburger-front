import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Routes from './Routes/Routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,

  document.getElementById('root')
)
