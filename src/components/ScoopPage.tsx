import React, { useState } from 'react'
import { ArrowLeft, CreditCard, Smartphone, MapPin, Phone } from 'lucide-react'

interface ScoopPageProps {
  onBack: () => void
}

export default function ScoopPage({ onBack }: ScoopPageProps) {
  const [scoops, setScoops] = useState(1)
  const [step, setStep] = useState<'select' | 'payment' | 'address'>('select')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  })
  
  const pricePerScoop = 12.99
  const totalPrice = scoops * pricePerScoop

  const handleAddressChange = (field: string, value: string) => {
    setAddress(prev => ({ ...prev, [field]: value }))
  }

  const handleOrderComplete = () => {
    alert(`Order placed! ${scoops} scoops for $${totalPrice.toFixed(2)} will be delivered to ${address.street}, ${address.city}`)
  }

  const isAddressComplete = address.street && address.city && address.state && address.zip && address.phone

  // Step 1: Scoop Selection
  if (step === 'select') {
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

            {/* Continue button */}
            <button 
              onClick={() => setStep('payment')}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xl font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Continue to Payment
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

  // Step 2: Payment Method Selection
  if (step === 'payment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-8">
        <div className="max-w-2xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setStep('select')}
              className="text-pink-600 hover:text-pink-700 text-lg font-medium flex items-center gap-2"
            >
              ← Back
            </button>
            <h1 className="text-3xl font-bold text-pink-600">Payment Method</h1>
            <div></div>
          </div>

          {/* Main content */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Choose Payment Platform
              </h2>
              <p className="text-gray-600 text-lg">
                Select how you'd like to pay for your {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
              </p>
            </div>

            {/* Order Summary */}
            <div className="bg-pink-50 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-gray-800">Order Total:</span>
                <span className="text-pink-600">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 mt-2">{scoops} {scoops === 1 ? 'Scoop' : 'Scoops'} × ${pricePerScoop}</p>
            </div>

            {/* Payment Options */}
            <div className="space-y-4 mb-8">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                  paymentMethod === 'card'
                    ? 'border-pink-500 bg-pink-50'
                    : 'border-gray-200 hover:border-pink-300'
                }`}
              >
                <CreditCard className="w-8 h-8 text-pink-500" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">Credit/Debit Card</h3>
                  <p className="text-gray-600">Pay with Visa, Mastercard, or American Express</p>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                  paymentMethod === 'paypal'
                    ? 'border-pink-500 bg-pink-50'
                    : 'border-gray-200 hover:border-pink-300'
                }`}
              >
                <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold">
                  P
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">PayPal</h3>
                  <p className="text-gray-600">Pay securely with your PayPal account</p>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod('apple')}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                  paymentMethod === 'apple'
                    ? 'border-pink-500 bg-pink-50'
                    : 'border-gray-200 hover:border-pink-300'
                }`}
              >
                <Smartphone className="w-8 h-8 text-pink-500" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">Apple Pay</h3>
                  <p className="text-gray-600">Quick and secure payment with Touch ID</p>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod('google')}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                  paymentMethod === 'google'
                    ? 'border-pink-500 bg-pink-50'
                    : 'border-gray-200 hover:border-pink-300'
                }`}
              >
                <div className="w-8 h-8 bg-red-500 rounded text-white flex items-center justify-center font-bold">
                  G
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">Google Pay</h3>
                  <p className="text-gray-600">Pay with your Google account</p>
                </div>
              </button>
            </div>

            {/* Continue button */}
            <button
              onClick={() => setStep('address')}
              disabled={!paymentMethod}
              className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xl font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Continue to Delivery
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Step 3: Address Entry
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-8">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setStep('payment')}
            className="text-pink-600 hover:text-pink-700 text-lg font-medium flex items-center gap-2"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold text-pink-600">Delivery Address</h1>
          <div></div>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Where should we deliver?
            </h2>
            <p className="text-gray-600 text-lg">
              Enter your delivery address for your flower scoops
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-pink-50 rounded-2xl p-6 mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Order:</span>
              <span className="font-semibold">{scoops} {scoops === 1 ? 'Scoop' : 'Scoops'}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Payment:</span>
              <span className="font-semibold capitalize">{paymentMethod}</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold">
              <span className="text-gray-800">Total:</span>
              <span className="text-pink-600">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Address Form */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <MapPin className="inline w-5 h-5 mr-2" />
                Street Address
              </label>
              <input
                type="text"
                value={address.street}
                onChange={(e) => handleAddressChange('street', e.target.value)}
                placeholder="123 Main Street"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">City</label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                  placeholder="New York"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">State</label>
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) => handleAddressChange('state', e.target.value)}
                  placeholder="NY"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">ZIP Code</label>
              <input
                type="text"
                value={address.zip}
                onChange={(e) => handleAddressChange('zip', e.target.value)}
                placeholder="10001"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <Phone className="inline w-5 h-5 mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                value={address.phone}
                onChange={(e) => handleAddressChange('phone', e.target.value)}
                placeholder="(555) 123-4567"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg"
              />
            </div>
          </div>

          {/* Complete Order button */}
          <button
            onClick={handleOrderComplete}
            disabled={!isAddressComplete}
            className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xl font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Complete Order - ${totalPrice.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  )
}