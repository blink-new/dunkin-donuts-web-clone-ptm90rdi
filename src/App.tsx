import React, { useState } from 'react'
import LandingPage from './components/LandingPage'
import ScoopPage from './components/ScoopPage'

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'scoop'>('landing')

  return (
    <div className="min-h-screen bg-pink-50">
      {currentPage === 'landing' ? (
        <LandingPage onScoopNow={() => setCurrentPage('scoop')} />
      ) : (
        <ScoopPage onBack={() => setCurrentPage('landing')} />
      )}
    </div>
  )
}

export default App