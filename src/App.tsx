import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Sidebar } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'
import { PageTransition } from './components/layout/page-transition'
import { useMobile } from './hooks/use-mobile'
import { useState } from 'react'

// Pages
import HomePage from './pages/home'
import PlaygroundPage from './pages/playground'
import JavaScriptPage from './pages/javascript'
import HtmlCssPage from './pages/html-css'
import ReactPage from './pages/react'
import InterviewPage from './pages/interview'

export default function App() {
  const location = useLocation()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              } />
              <Route path="/playground" element={
                <PageTransition>
                  <PlaygroundPage />
                </PageTransition>
              } />
              <Route path="/javascript/*" element={
                <PageTransition>
                  <JavaScriptPage />
                </PageTransition>
              } />
              <Route path="/html-css/*" element={
                <PageTransition>
                  <HtmlCssPage />
                </PageTransition>
              } />
              <Route path="/react/*" element={
                <PageTransition>
                  <ReactPage />
                </PageTransition>
              } />
              <Route path="/interview/*" element={
                <PageTransition>
                  <InterviewPage />
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
