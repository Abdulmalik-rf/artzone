import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LangProvider } from './i18n.jsx'
import { RouteProvider } from './router.jsx'
import App from './App.jsx'
import './styles/base.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <RouteProvider>
        <App />
      </RouteProvider>
    </LangProvider>
  </StrictMode>,
)
