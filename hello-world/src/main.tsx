import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <p>This is paragraph 1</p>
    <p>This is paragraph 2</p>
    <button className="myButton">This is the Button</button>
  </React.StrictMode>
)
