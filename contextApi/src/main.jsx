import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from './Context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider value={{ name: "test1"}}>
      <App />
    </Provider>,
  </StrictMode>,
)
