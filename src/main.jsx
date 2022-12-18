import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { DummyPage } from './components/DummyPage'
import LuckyProvider from './Context/Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LuckyProvider>
        <App />
        {/* <DummyPage /> */}
      </LuckyProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
