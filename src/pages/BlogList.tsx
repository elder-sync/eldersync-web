import { Link } from 'react-router-dom'

const articles = [
  {
    slug: 'complete-guide-elderly-care-singapore',
    title: 'The Complete Guide to Elderly Care in Singapore (2026)',
    description:
      'Everything you need to know about elderly care options, costs, government subsidies, and how to choose the right care for your aging parents in Singapore.',
    date: '25 February 2026',
    readTime: '12 min read',
    category: 'Guide',
  },
]

export default function BlogList() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="text-white text-xs font-bold leading-none">CH</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">CareHive</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/blog" className="text-gray-900 font-medium transition-colors">Blog</Link>
            <Link to="/#waitlist" className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium text-emerald-600 uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Elderly Care Insights
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Expert guides, practical tips, and the latest information on eldercare in Singapore — helping you make informed decisions for your family.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group block bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 group-hover:gap-2.5 transition-all">
                  Read article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 px-6 bg-gray-950 border-t border-gray-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold leading-none">CH</span>
              </div>
              <span className="text-base font-semibold text-white tracking-tight">CareHive</span>
            </div>
            <p className="text-xs text-gray-600">&copy; 2026 CareHive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
