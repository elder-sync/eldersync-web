import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    
    // TODO: Connect to backend API
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50">
      {/* Header */}
      <header className="p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💚</span>
            <span className="text-xl font-bold text-gray-800">ElderSync</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Coming Soon
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Care for your aging parents,{' '}
            <span className="text-green-600">without the worry</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            ElderSync helps families coordinate care for elderly parents — 
            medication reminders, daily check-ins, caregiver coordination, 
            and peace of mind. All in one simple app.
          </p>

          {/* Email Signup */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Be the first to know when we launch. No spam, ever.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-green-100 border border-green-200 rounded-xl p-6">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                You're on the list!
              </h3>
              <p className="text-green-700">
                We'll notify you at <strong>{email}</strong> when ElderSync launches.
              </p>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Medication Reminders
            </h3>
            <p className="text-gray-600">
              Never worry if they took their pills. Photo verification gives you proof and peace of mind.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Daily Check-ins
            </h3>
            <p className="text-gray-600">
              Simple daily questions your parents can answer. See their wellness at a glance.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              SOS Emergency
            </h3>
            <p className="text-gray-600">
              One-touch emergency button. Instantly alerts family with location.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 text-center">
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
            <div className="text-gray-600">of Singapore will be 65+ by 2030</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">210K+</div>
            <div className="text-gray-600">family caregivers in Singapore</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">50%</div>
            <div className="text-gray-600">of elderly miss medications regularly</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">💚</span>
              <span className="font-semibold text-gray-800">ElderSync</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2026 ElderSync. Made with ❤️ in Singapore.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
