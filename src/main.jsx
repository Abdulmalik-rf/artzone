import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Dynamically determine the basename forsubdirectory hosting (e.g. GitHub Pages)
const getBasename = () => {
  if (import.meta.env.DEV) return '/';
  
  const path = window.location.pathname;
  if (!path || path === '/') return '/';
  
  // Extract the first path segment (e.g. 'artzone' or 'about')
  const firstSegment = path.split('/').filter(Boolean)[0];
  
  // Known routes in our React app
  const appRoutes = ['about', 'contact', 'portfolio', 'built-for-you', 'cart', 'shop', 'auth', 'checkout'];
  
  // If first segment is NOT a React Route, treat it as the subdirectory deployment basename
  if (firstSegment && !appRoutes.includes(firstSegment.toLowerCase())) {
    return `/${firstSegment}`;
  }
  
  return '/';
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

