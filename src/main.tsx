import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BlogList from './pages/BlogList.tsx'
import ElderCareGuide from './pages/ElderCareGuide.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/complete-guide-elderly-care-singapore" element={<ElderCareGuide />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
