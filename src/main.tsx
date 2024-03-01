import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/app'

import { enableMS } from './api/mocks'

enableMS().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
