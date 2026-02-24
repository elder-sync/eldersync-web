import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">ElderSync</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
            <a href="#waitlist" className="px-5 py-2.5 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Launching Soon in Singapore
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Peace of mind for{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                your parents
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              The care coordination app that helps families look after aging parents — 
              with medication reminders, daily check-ins, and instant emergency alerts.
            </p>

            {/* Email Signup */}
            <div id="waitlist" className="max-w-md mx-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 pr-36 text-lg bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 text-base font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all disabled:opacity-50 shadow-lg shadow-emerald-200"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Joining
                      </span>
                    ) : 'Join Waitlist'}
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-800 mb-1">You're on the list!</h3>
                  <p className="text-emerald-700 text-sm">We'll notify you at <strong>{email}</strong> when we launch.</p>
                </div>
              )}
              <p className="text-sm text-gray-500 mt-4">
                Join 200+ families on the waitlist • No spam, ever
              </p>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-200/50 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Mock Dashboard Cards */}
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">👴</div>
                    <div>
                      <p className="font-semibold text-gray-900">Dad</p>
                      <p className="text-sm text-emerald-600">All good today</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">✓</span>
                      <span className="text-gray-600">Morning meds taken</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">✓</span>
                      <span className="text-gray-600">Breakfast eaten</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl">👵</div>
                    <div>
                      <p className="font-semibold text-gray-900">Mom</p>
                      <p className="text-sm text-amber-600">Needs attention</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">!</span>
                      <span className="text-gray-600">Evening meds pending</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">✓</span>
                      <span className="text-gray-600">Check-in complete</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-5 text-white">
                  <p className="text-emerald-100 text-sm mb-2">This week</p>
                  <p className="text-3xl font-bold mb-1">94%</p>
                  <p className="text-emerald-100 text-sm">Medication adherence</p>
                  <div className="mt-4 flex gap-1">
                    {[1,2,3,4,5,6,7].map((d) => (
                      <div key={d} className={`h-8 flex-1 rounded ${d === 5 ? 'bg-white/30' : 'bg-white/80'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-emerald-400 mb-1">25%</p>
              <p className="text-gray-400 text-sm">of Singapore will be 65+ by 2030</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-400 mb-1">210K+</p>
              <p className="text-gray-400 text-sm">family caregivers in Singapore</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-400 mb-1">50%</p>
              <p className="text-gray-400 text-sm">of elderly miss medications</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-400 mb-1">24hrs</p>
              <p className="text-gray-400 text-sm">average caregiver worry per week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to care from afar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple tools that give you visibility without being intrusive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medication Reminders</h3>
              <p className="text-gray-600 leading-relaxed">
                Gentle reminders at the right time. Photo verification so you know for sure.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Daily Check-ins</h3>
              <p className="text-gray-600 leading-relaxed">
                Simple questions they can answer with one tap. See how they're doing at a glance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
              <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SOS Emergency</h3>
              <p className="text-gray-600 leading-relaxed">
                One big button when they need help. You get alerted instantly with their location.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
              <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                See everything in one place. Medication status, activities, and wellness trends.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Caregiver Coordination</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep helpers and family in sync with shared notes and task handoffs.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Senior-Friendly Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Big buttons, clear text, simple navigation. Designed for tablets and easy use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes, not hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Set up their profile</h3>
              <p className="text-gray-600">Add your parent's medications, schedules, and emergency contacts in 5 minutes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Give them the app</h3>
              <p className="text-gray-600">Install on their tablet. Big buttons, simple interface — they'll get it immediately.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stay connected</h3>
              <p className="text-gray-600">Get updates on your phone. Know they're safe without constant check-in calls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to care with confidence?
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Join the waitlist and be first to know when we launch in Singapore.
          </p>
          <a 
            href="#waitlist" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors shadow-xl"
          >
            Join the Waitlist
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">ElderSync</span>
            </div>
            <p className="text-sm">
              © 2026 ElderSync. Made with ❤️ in Singapore for families everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
