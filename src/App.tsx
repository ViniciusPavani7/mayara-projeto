import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PaintSplash } from './components/PaintSplash'
import { LandingPage } from './pages/LandingPage'
import { LeticiasPage } from './pages/LeticiasPage'
import { OpenedPage } from './pages/OpenedPage'

type View = 'landing' | 'opened'

function HomeRoutes() {
  const [view, setView] = useState<View>('landing')

  return (
    <>
      <PaintSplash />
      {view === 'landing' && <LandingPage onOpen={() => setView('opened')} />}
      {view === 'opened' && <OpenedPage />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoutes />} />
        <Route path="/leticias" element={<LeticiasPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
