//frontend/src/main.tsx
// This file is the main entry point of the React application. It sets up the React environment, imports global styles, and renders the main App component within a StrictMode wrapper for better development practices.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
