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
    <div className="min-h-screen bg-white text-gray-900">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">ElderSync</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-500 hover:text-gray-900 transition-colors">How it Works</a>
            <a href="#waitlist" className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 px-6 hero-glow bg-grid overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 border border-emerald-200 bg-emerald-50/80 backdrop-blur-sm text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-medium mb-8 tracking-wide uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
              </span>
              Launching Soon in Singapore
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-delay-1 text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] tracking-[-0.035em] mb-6">
              Care for aging parents,{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                without the worry
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-xl mx-auto">
              Medication tracking, daily check-ins, and emergency alerts — all in one simple app that keeps your whole family connected.
            </p>

            {/* Email Signup */}
            <div id="waitlist" className="animate-fade-up-delay-3 max-w-md mx-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300" />
                  <div className="relative flex bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="flex-1 px-4 py-3.5 text-sm bg-transparent focus:outline-none placeholder:text-gray-400"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-5 py-2.5 m-1 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all disabled:opacity-50 flex items-center gap-2 shrink-0"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Joining...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-emerald-900">You're on the list!</p>
                    <p className="text-xs text-emerald-600">We'll notify <strong>{email}</strong> when we launch.</p>
                  </div>
                </div>
              )}
              <p className="text-xs text-gray-400 mt-3 tracking-wide">
                Join 200+ families already on the waitlist
              </p>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 max-w-4xl mx-auto animate-float">
            <div className="bg-gray-950 rounded-2xl p-1 shadow-2xl shadow-gray-900/20 ring-1 ring-white/10">
              {/* Window Chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <div className="ml-4 flex-1 h-6 bg-white/5 rounded-md" />
              </div>
              {/* Mock Dashboard */}
              <div className="bg-gray-900 rounded-xl mx-1 mb-1 p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Dad</p>
                        <p className="text-xs text-emerald-400">All clear today</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-xs text-gray-400">Morning meds taken</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-xs text-gray-400">Check-in completed</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Mom</p>
                        <p className="text-xs text-amber-400">Needs attention</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="text-xs text-gray-400">Evening meds pending</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-xs text-gray-400">Breakfast confirmed</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-xl p-5 border border-emerald-500/20">
                    <p className="text-xs text-emerald-300/70 uppercase tracking-wider font-medium mb-1">This Week</p>
                    <p className="text-4xl font-bold text-white tracking-tight">94<span className="text-xl text-emerald-400">%</span></p>
                    <p className="text-xs text-gray-400 mt-1">Medication adherence</p>
                    <div className="mt-5 flex gap-1 items-end">
                      {[70, 85, 100, 90, 100, 60, 95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-emerald-500/50"
                          style={{ height: `${h * 0.32}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-14 bg-gray-950 border-y border-gray-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '25%', label: 'of Singapore will be 65+ by 2030' },
              { value: '210K+', label: 'family caregivers nationwide' },
              { value: '50%', label: 'of elderly miss medications' },
              { value: '24hrs', label: 'average worry per caregiver/week' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1.5 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium text-emerald-600 uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything you need to care from afar
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Simple, thoughtful tools that give you visibility into your parents' wellbeing — without being intrusive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: 'Medication Reminders',
                desc: 'Gentle reminders at the right time with photo verification so you know for sure.',
                color: 'emerald',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: 'Daily Check-ins',
                desc: 'Simple one-tap questions. See how they\'re doing at a glance, every day.',
                color: 'blue',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                ),
                title: 'SOS Emergency',
                desc: 'One big button when they need help. Instant alerts with their location.',
                color: 'rose',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Family Dashboard',
                desc: 'Medication status, activities, and wellness trends — all in one place.',
                color: 'violet',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Caregiver Coordination',
                desc: 'Keep helpers and family in sync with shared notes and task handoffs.',
                color: 'amber',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Senior-Friendly Design',
                desc: 'Big buttons, clear text, simple navigation. Built for tablets and easy use.',
                color: 'teal',
              },
            ].map((feature, i) => {
              const colorMap: Record<string, string> = {
                emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
                blue: 'bg-blue-50 text-blue-600 border-blue-100',
                rose: 'bg-rose-50 text-rose-600 border-rose-100',
                violet: 'bg-violet-50 text-violet-600 border-violet-100',
                amber: 'bg-amber-50 text-amber-600 border-amber-100',
                teal: 'bg-teal-50 text-teal-600 border-teal-100',
              }
              return (
                <div
                  key={i}
                  className="group relative p-6 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${colorMap[feature.color]}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-28 px-6 bg-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium text-emerald-600 uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Get started in minutes
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Three simple steps to peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Set up their profile',
                desc: 'Add medications, schedules, and emergency contacts. Takes 5 minutes.',
              },
              {
                step: '02',
                title: 'Install the app',
                desc: 'Put it on their tablet. Big buttons, simple interface — they\'ll get it immediately.',
              },
              {
                step: '03',
                title: 'Stay connected',
                desc: 'Get updates on your phone. Know they\'re safe without constant check-in calls.',
              },
            ].map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <span className="text-xs font-mono font-bold text-emerald-500 tracking-widest">{item.step}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px">
                    <div className="w-full h-px bg-gray-300 shimmer-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
            Ready to care with confidence?
          </h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            Join the waitlist and be the first to know when ElderSync launches in Singapore.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/25"
          >
            Join the Waitlist
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-14 px-6 bg-gray-950 border-t border-gray-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-base font-semibold text-white tracking-tight">ElderSync</span>
              </div>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                Making eldercare simple and connected for families across Singapore.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Product</p>
              <ul className="space-y-2.5">
                <li><a href="#features" className="text-sm text-gray-500 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-sm text-gray-500 hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#waitlist" className="text-sm text-gray-500 hover:text-white transition-colors">Join Waitlist</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Company</p>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              &copy; 2026 ElderSync. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Made in Singapore for families everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
