import React from 'react'

interface LandingPageProps {
  onScoopNow: () => void
}

export default function LandingPage({ onScoopNow }: LandingPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200">
      <div className="text-center px-8">
        {/* Decorative flowers */}
        <div className="mb-8 relative">
          <div className="absolute -top-4 -left-8 text-6xl animate-bounce">🌸</div>
          <div className="absolute -top-2 -right-6 text-4xl animate-pulse">🌺</div>
          <div className="absolute -bottom-4 left-4 text-5xl animate-bounce delay-300">🌷</div>
        </div>

        {/* Main title */}
        <h1 className="text-8xl md:text-9xl font-bold text-pink-600 mb-8 tracking-tight">
          Flower
        </h1>
        <h1 className="text-8xl md:text-9xl font-bold text-pink-500 mb-12 tracking-tight -mt-4">
          Scoops
        </h1>

        {/* Scoop Now button */}
        <button
          onClick={onScoopNow}
          className="bg-pink-500 hover:bg-pink-600 text-white text-2xl font-semibold px-12 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
        >
          Scoop Now
        </button>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-4 text-3xl">
          <span className="animate-spin-slow">🌻</span>
          <span className="animate-bounce">🌹</span>
          <span className="animate-pulse">🌼</span>
        </div>
      </div>
    </div>
  )
}