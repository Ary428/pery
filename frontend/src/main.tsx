import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ArticleProvider } from './context/ArticleContext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ArticleProvider>
        <App />
      </ArticleProvider>
    </BrowserRouter>
  </StrictMode>,
)
