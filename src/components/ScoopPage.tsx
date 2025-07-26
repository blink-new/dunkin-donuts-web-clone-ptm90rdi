import React, { useState } from 'react'

interface ScoopPageProps {
  onBack: () => void
}

export default function ScoopPage({ onBack }: ScoopPageProps) {
  const [scoops, setScoops] = useState(1)
  const pricePerScoop = 12.99
  const totalPrice = scoops * pricePerScoop

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-8">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="text-pink-600 hover:text-pink-700 text-lg font-medium flex items-center gap-2"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold text-pink-600">Flower Scoops</h1>
          <div></div>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How many scoops?
            </h2>
            <p className="text-gray-600 text-lg">
              Each scoop contains a beautiful selection of fresh flowers
            </p>
          </div>

          {/* Scoop selector */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-6 mb-6">
              <button
                onClick={() => setScoops(Math.max(1, scoops - 1))}
                className="w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-2xl font-bold transition-colors"
              >
                -
              </button>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-pink-600 mb-2">
                  {scoops}
                </div>
                <div className="text-gray-600">
                  {scoops === 1 ? 'Scoop' : 'Scoops'}
                </div>
              </div>
              
              <button
                onClick={() => setScoops(Math.min(5, scoops + 1))}
                className="w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-2xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={scoops >= 5}
              >
                +
              </button>
            </div>

            {/* Visual representation */}
            <div className="flex justify-center gap-2 mb-8">
              {Array.from({ length: scoops }, (_, i) => (
                <div key={i} className="text-4xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                  🌸
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-pink-50 rounded-2xl p-6 mb-8">
            <div className="flex justify-between items-center text-lg mb-2">
              <span className="text-gray-700">Price per scoop:</span>
              <span className="font-semibold text-gray-800">${pricePerScoop}</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold">
              <span className="text-gray-800">Total:</span>
              <span className="text-pink-600 text-3xl">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Order button */}
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xl font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Order {scoops} {scoops === 1 ? 'Scoop' : 'Scoops'} - ${totalPrice.toFixed(2)}
          </button>
        </div>

        {/* Quick select options */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Quick select:</p>
          <div className="flex justify-center gap-4">
            {[1, 3, 5].map((num) => (
              <button
                key={num}
                onClick={() => setScoops(num)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  scoops === num
                    ? 'bg-pink-500 text-white'
                    : 'bg-white text-pink-500 border border-pink-300 hover:bg-pink-50'
                }`}
              >
                {num} {num === 1 ? 'Scoop' : 'Scoops'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}