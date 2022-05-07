import 'regenerator-runtime'
import React from 'react'

import ReactDOM from 'react-dom/client'

import { App } from '@/app'

import { ToastContainer } from './utils/toast'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <App />

    <ToastContainer />
  </React.StrictMode>
)
