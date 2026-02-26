import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ElderCareGuide() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">ElderSync</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/blog" className="text-gray-500 hover:text-gray-900 transition-colors">Blog</Link>
            <Link to="/#waitlist" className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Elderly Care Guide</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                Guide
              </span>
              <span className="text-sm text-gray-400">25 February 2026</span>
              <span className="text-sm text-gray-400">12 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              The Complete Guide to Elderly Care in Singapore (2026)
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              With one in four Singaporeans projected to be aged 65 and above by 2030, planning for elderly care has become one of the most important decisions families face. This comprehensive guide covers every option available — from home care and day care to nursing homes and modern tech solutions — along with costs, government subsidies, and how to choose the right path for your loved ones.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-100">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Table of Contents</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#understanding" className="text-emerald-600 hover:text-emerald-700 transition-colors">1. Understanding Elderly Care in Singapore</a></li>
              <li><a href="#types" className="text-emerald-600 hover:text-emerald-700 transition-colors">2. Types of Elderly Care Options</a></li>
              <li><a href="#costs" className="text-emerald-600 hover:text-emerald-700 transition-colors">3. Costs of Elderly Care in Singapore (2026)</a></li>
              <li><a href="#subsidies" className="text-emerald-600 hover:text-emerald-700 transition-colors">4. Government Subsidies and Financial Assistance</a></li>
              <li><a href="#choosing" className="text-emerald-600 hover:text-emerald-700 transition-colors">5. How to Choose the Right Care Option</a></li>
              <li><a href="#comparison" className="text-emerald-600 hover:text-emerald-700 transition-colors">6. Comparison Table: All Care Options at a Glance</a></li>
              <li><a href="#aging-in-place" className="text-emerald-600 hover:text-emerald-700 transition-colors">7. Aging in Place: The Growing Preference</a></li>
              <li><a href="#tech-solutions" className="text-emerald-600 hover:text-emerald-700 transition-colors">8. Technology Solutions for Elderly Care</a></li>
              <li><a href="#tips" className="text-emerald-600 hover:text-emerald-700 transition-colors">9. Practical Tips for Caring for Elderly Parents at Home</a></li>
              <li><a href="#conclusion" className="text-emerald-600 hover:text-emerald-700 transition-colors">10. Conclusion</a></li>
            </ol>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Section 1 */}
            <h2 id="understanding" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
              1. Understanding Elderly Care in Singapore
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Singapore is aging rapidly. According to the Department of Statistics, the proportion of residents aged 65 and above has grown from 14.4% in 2019 to an estimated 19.9% in 2025, and is projected to reach 25% by 2030. This demographic shift means that more families than ever are navigating the complex landscape of elderly care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The good news is that Singapore offers one of the most comprehensive elderly care ecosystems in Asia. From government-subsidised home care services to world-class nursing facilities, there are options for every need and budget. The challenge lies in understanding what's available and making the right choice for your family's unique situation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you're a working adult caring for aging parents, a sandwich generation family juggling childcare and eldercare, or someone planning ahead for your own retirement, this guide will walk you through every aspect of elderly care in Singapore.
            </p>

            {/* Section 2 */}
            <h2 id="types" className="text-2xl font-bold text-gray-900 mt-14 mb-4 scroll-mt-24">
              2. Types of Elderly Care Options
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Singapore provides a range of elderly care services designed to meet different levels of need. Here's a detailed look at each option:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Home Care Services
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Home care is the most popular choice among Singaporean families, and for good reason. It allows elderly parents to remain in their familiar environment while receiving professional support. Home care services in Singapore include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Medical home care:</strong> Includes nursing care, physiotherapy, occupational therapy, and speech therapy delivered at home by qualified healthcare professionals. These are often provided by organisations like NTUC Health, St Luke's ElderCare, and the Agency for Integrated Care (AIC).</li>
              <li><strong>Personal care assistance:</strong> Help with daily activities such as bathing, dressing, feeding, and mobility. This is ideal for seniors who are semi-ambulant or have mild disabilities.</li>
              <li><strong>Domestic helper care:</strong> Many families in Singapore hire foreign domestic workers (FDWs) to provide round-the-clock care. The Ministry of Manpower (MOM) provides guidelines and grants for families employing FDWs for eldercare.</li>
              <li><strong>Meals on Wheels:</strong> Meal delivery services for homebound seniors who cannot prepare their own meals. Subsidised options are available through various VWOs (Voluntary Welfare Organisations).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Day Care Centres (Senior Care Centres)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Senior Care Centres (formerly known as Day Care Centres) provide supervised care during the day, allowing caregivers to continue working. These centres typically operate from 7am to 7pm on weekdays and offer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Structured activities including exercise, cognitive games, and social programmes</li>
              <li>Basic nursing care and medication management</li>
              <li>Meals and refreshments</li>
              <li>Transportation to and from the centre</li>
              <li>Dementia-specific programmes for seniors with cognitive impairment</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              There are over 100 Senior Care Centres across Singapore, many located within HDB estates for convenience. After government subsidies, costs can be as low as $10–$50 per day depending on the means-testing assessment.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Nursing Homes (Residential Care)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nursing homes provide 24-hour skilled nursing care for seniors who require constant medical attention or supervision. Singapore has both government-funded and private nursing homes. Key considerations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Government-funded homes:</strong> Operated by VWOs and heavily subsidised. Wait times can be several months. Monthly fees after subsidy range from $450 to $2,500.</li>
              <li><strong>Private nursing homes:</strong> More immediate availability and often better amenities, but significantly higher costs — typically $2,500 to $6,000+ per month.</li>
              <li><strong>Specialised dementia care:</strong> Some facilities offer dedicated dementia wards with specially trained staff, secure environments, and therapeutic programmes.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Community Hospitals and Rehabilitation
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              For seniors recovering from acute illnesses, surgeries, or strokes, community hospitals provide step-down care including rehabilitation and transitional care. Facilities like Bright Vision Hospital, Sengkang Community Hospital, and Outram Community Hospital offer programmes specifically designed to help seniors regain independence before returning home.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Technology-Enabled Care
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              An increasingly important category is technology-assisted eldercare. As Singapore pushes its Smart Nation initiative, a growing number of tech solutions are emerging to help families monitor and care for elderly parents remotely:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Personal Emergency Response Systems (PERS):</strong> Wearable devices with SOS buttons that connect to 24/7 monitoring centres</li>
              <li><strong>Medication management apps:</strong> Digital reminders and tracking to ensure medication adherence</li>
              <li><strong>Smart home sensors:</strong> Motion and activity sensors that detect falls or unusual patterns</li>
              <li><strong>Family coordination platforms:</strong> Apps like ElderSync that help families coordinate care, track medications, and stay connected</li>
              <li><strong>Telehealth services:</strong> Virtual consultations with doctors, reducing the need for clinic visits</li>
            </ul>

            {/* Section 3 */}
            <h2 id="costs" className="text-2xl font-bold text-gray-900 mt-14 mb-4 scroll-mt-24">
              3. Costs of Elderly Care in Singapore (2026)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Understanding the costs involved is crucial for planning. Here's a breakdown of typical elderly care costs in Singapore as of 2026:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Care Type</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Cost Range (per month)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">After Subsidy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Home care (medical)</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">$200 – $3,000</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">$50 – $800</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Foreign domestic worker</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">$800 – $1,200 (salary + levy)</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">$500 – $900 (with concessionary levy)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Day care centre</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">$1,000 – $2,500</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">$200 – $600</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Nursing home (government)</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">$2,000 – $3,500</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">$450 – $2,500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Nursing home (private)</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">$2,500 – $6,000+</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Limited subsidies</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Eldercare technology (apps/devices)</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">$10 – $100</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Some SG Digital subsidies</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              It's worth noting that these costs can vary significantly based on the level of care required, the provider, and the location. Government subsidies can reduce costs by 30% to 80% depending on the household's per capita income.
            </p>

            {/* Section 4 */}
            <h2 id="subsidies" className="text-2xl font-bold text-gray-900 mt-14 mb-4 scroll-mt-24">
              4. Government Subsidies and Financial Assistance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Singapore's government provides extensive financial support for eldercare. Understanding and utilising these subsidies can significantly reduce the financial burden on families. Here are the key schemes available in 2026:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Home Caregiving Grant (HCG)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Home Caregiving Grant provides a monthly cash payout of <strong>$250 or $400</strong> to help families offset the costs of caring for a loved one at home. To qualify:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>The care recipient must be a Singapore Citizen</li>
              <li>They must have at least moderate disability (require help with at least 3 Activities of Daily Living)</li>
              <li>They must not be residing in a residential long-term care institution</li>
              <li>The household monthly per capita income must not exceed $3,600 (for $400 payout) or $4,800 (for $250 payout)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Applications can be made through the Agency for Integrated Care (AIC) or any approved eldercare service provider. The grant is deposited directly into the caregiver's bank account.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              CareShield Life and ElderShield
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              CareShield Life is a national long-term care insurance scheme that provides a monthly cash payout if you develop severe disability. Key features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Compulsory for all Singapore Citizens and Permanent Residents born in 1980 or later</li>
              <li>Provides lifetime payouts starting from <strong>$600 per month</strong> in 2026, increasing over time</li>
              <li>Payouts are not means-tested — everyone who qualifies gets the same amount</li>
              <li>Premiums can be paid using MediSave</li>
              <li>Supplementary plans are available for higher coverage</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Pioneer Generation and Merdeka Generation Benefits
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Seniors who qualify under these special packages receive additional healthcare benefits:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Pioneer Generation (born 1949 or earlier, obtained citizenship by 1986):</strong> Additional 50% subsidies for outpatient care at polyclinics and CHAS GP clinics, annual MediSave top-ups of $200–$800, disability assistance of up to $100/month</li>
              <li><strong>Merdeka Generation (born 1950–1959, obtained citizenship by 1996):</strong> Additional 25% subsidies, annual MediSave top-ups of $200, one-off top-up of $100 to PAssion Silver Card</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Other Financial Assistance
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>MediSave:</strong> Can be used to pay for approved eldercare services including day care, nursing homes, and home care</li>
              <li><strong>MediFund:</strong> Safety net for patients who are unable to pay their medical bills even after government subsidies and MediSave/MediShield Life</li>
              <li><strong>Seniors' Mobility and Enabling Fund (SMF):</strong> Subsidises assistive devices and home modifications (grab bars, ramps, etc.) for seniors</li>
              <li><strong>Silver Support Scheme:</strong> Quarterly cash supplements for the bottom 20% of elderly Singaporeans by income</li>
              <li><strong>Foreign Domestic Worker (FDW) Levy Concession:</strong> Reduced monthly levy of $60 (instead of $300) for families hiring an FDW to care for elderly or disabled persons</li>
            </ul>

            {/* Section 5 */}
            <h2 id="choosing" className="text-2xl font-bold text-gray-900 mt-14 mb-4 scroll-mt-24">
              5. How to Choose the Right Care Option
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Choosing the right eldercare option depends on multiple factors. Here's a systematic approach to making this important decision:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Step 1: Assess Care Needs
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Start by honestly evaluating your parent's current and likely future needs:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Physical health:</strong> Can they perform Activities of Daily Living (ADLs) independently? Do they need help with bathing, dressing, eating, or mobility?</li>
              <li><strong>Cognitive health:</strong> Are there signs of memory loss, confusion, or dementia? Has a doctor made a diagnosis?</li>
              <li><strong>Medical needs:</strong> Do they need regular nursing care, wound management, or medication administration?</li>
              <li><strong>Emotional wellbeing:</strong> Are they socially isolated? Do they show signs of depression or loneliness?</li>
              <li><strong>Safety concerns:</strong> Have there been falls? Are they safe at home alone?</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Step 2: Consider Family Circumstances
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Who is the primary caregiver, and what is their capacity?</li>
              <li>Are family members nearby or overseas?</li>
              <li>What is the family's budget for eldercare?</li>
              <li>Does the home environment need modifications for safety?</li>
              <li>Can siblings share caregiving responsibilities?</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Step 3: Respect Your Parent's Preferences
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Research consistently shows that the vast majority of elderly Singaporeans prefer to age in place — remaining in their own homes rather than moving to a facility. While this isn't always possible, including your parent in the decision-making process leads to better outcomes and helps preserve their dignity and autonomy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Step 4: Start with the Agency for Integrated Care (AIC)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The AIC is the government body that coordinates eldercare services in Singapore. They offer a free care assessment and can connect you with appropriate services. Visit their website or call the Silver Line at 1800-650-6060 for guidance.
            </p>

            {/* Section 6 */}
            <h2 id="comparison" className="text-2xl font-bold text-gray-900 mt-14 mb-4 scroll-mt-24">
              6. Comparison Table: All Care Options at a Glance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Use this comparison to quickly evaluate which elderly care option might be the best fit for your family:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-3 text-left font-semibold text-gray-900">Option</th>
                    <th className="border border-gray-200 px-3 py-3 text-left font-semibold text-gray-900">Best For</th>
                    <th className="border border-gray-200 px-3 py-3 text-left font-semibold text-gray-900">Cost / Month</th>
                    <th className="border border-gray-200 px-3 py-3 text-left font-semibold text-gray-900">Pros</th>
                    <th className="border border-gray-200 px-3 py-3 text-left font-semibold text-gray-900">Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600 font-medium">Home care</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Mild to moderate needs</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">$50–$800</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Familiar environment, flexible</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Limited hours, family must coordinate</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="border border-gray-200 px-3 py-3 text-gray-600 font-medium">FDW caregiver</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">24/7 care at home</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">$500–$900</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Round-the-clock, cost-effective</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Training needed, management burden</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600 font-medium">Day care centre</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Social engagement + care</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">$200–$600</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Social interaction, structured activities</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Weekdays only, transport needed</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="border border-gray-200 px-3 py-3 text-gray-600 font-medium">Nursing home</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">High care needs</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">$450–$6,000+</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">24/7 professional care</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Emotional adjustment, wait times</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600 font-medium">Tech solutions</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Remote monitoring</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">$10–$100</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Low cost, peace of mind</td>
                    <td className="border border-gray-200 px-3 py-3 text-gray-600">Not a replacement for physical care</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 7 */}
            <h2 id="aging-in-place" className="text-2xl font-bold text-gray-900 mt-14 mb-4 scroll-mt-24">
              7. Aging in Place: The Growing Preference
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aging in place — the ability to live safely and comfortably in one's own home as one ages — has become the preferred model in Singapore. The government has actively supported this through several initiatives:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Enhancement for Active Seniors (EASE) Programme:</strong> HDB subsidises up to 95% of the cost of home modifications like grab bars, slip-resistant floor treatment, and ramps. Most households pay only $125 out of pocket.</li>
              <li><strong>Community Networks for Seniors (CNS):</strong> A nationwide programme that connects isolated seniors with befrienders and community resources</li>
              <li><strong>Senior-friendly HDB features:</strong> Newer HDB developments include features like wider corridors, barrier-free access, and integrated senior care centres</li>
              <li><strong>Active Ageing Centres (AACs):</strong> Community spaces offering health screening, social activities, and referral services, located across all HDB towns</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              For aging in place to work effectively, families often need to combine multiple support systems: home modifications, regular check-ins (whether in person or through technology), community services, and sometimes part-time professional care. The key is building a comprehensive support system rather than relying on a single solution.
            </p>

            {/* Section 8 */}
            <h2 id="tech-solutions" className="text-2xl font-bold text-gray-900 mt-14 mb-4 scroll-mt-24">
              8. Technology Solutions for Elderly Care
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Technology is rapidly transforming how families manage elderly care in Singapore. Here's how modern solutions are filling critical gaps:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Remote Monitoring
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              For working adults who can't be with their parents during the day, remote monitoring solutions provide peace of mind without being intrusive. Smart sensors can detect unusual patterns — like a parent who hasn't left the bedroom by noon or hasn't opened the refrigerator — and send alerts to family members.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Medication Management
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Medication non-adherence is one of the biggest challenges in elderly care. Studies show that up to 50% of elderly patients don't take their medications as prescribed, leading to preventable hospitalisations and health complications. Digital medication trackers provide timely reminders and allow family members to verify whether medications have been taken.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Family Coordination
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              One of the most overlooked aspects of eldercare is coordination among family members. When siblings share caregiving responsibilities, communication gaps can lead to missed medications, duplicate doctor appointments, or conflicting care instructions. Family coordination platforms centralise all care information and make it accessible to everyone involved.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Emergency Response
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Personal Emergency Response Systems (PERS) have evolved significantly. Modern solutions combine wearable devices with smartphone apps, GPS tracking, and automatic fall detection. In Singapore, the Government's Senior Mobility and Enabling Fund (SMF) can subsidise the cost of such devices for qualifying seniors.
            </p>

            {/* Section 9 */}
            <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-14 mb-4 scroll-mt-24">
              9. Practical Tips for Caring for Elderly Parents at Home
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you're taking care of elderly parents at home in Singapore, these practical strategies can help:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Safety First
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Install grab bars in the bathroom and near the toilet</li>
              <li>Ensure adequate lighting throughout the home, especially at night</li>
              <li>Remove tripping hazards like loose rugs and cluttered pathways</li>
              <li>Apply non-slip stickers to bathroom floors and the bathtub</li>
              <li>Consider a shower chair or bench for safe bathing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Medication Management
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Use a pill organiser sorted by day and time</li>
              <li>Set up digital reminders through an app or smart device</li>
              <li>Keep an updated medication list accessible to all family members</li>
              <li>Schedule regular medication reviews with the doctor (at least every 6 months)</li>
              <li>Watch for side effects, especially when new medications are introduced</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Nutrition and Meals
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Ensure balanced meals with sufficient protein to prevent muscle loss</li>
              <li>Encourage adequate fluid intake — dehydration is common among seniors</li>
              <li>Consider Meals on Wheels or catered meal services for days when cooking isn't possible</li>
              <li>Adapt meals for specific dietary needs (diabetes, hypertension, chewing difficulties)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Social Engagement
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Encourage participation in community activities at nearby Active Ageing Centres</li>
              <li>Help them stay connected with friends through video calls or messaging</li>
              <li>Consider a Senior Care Centre a few days a week for structured social activities</li>
              <li>Regular family visits and outings make a significant difference</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Caregiver Self-Care
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Don't forget to take care of yourself. Caregiver burnout is real and common. Singapore offers support through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Caregiver Support Groups:</strong> Run by AIC, Alzheimer's Disease Association, and various VWOs</li>
              <li><strong>Respite care:</strong> Temporary care services that give caregivers a break (available at nursing homes and day care centres)</li>
              <li><strong>Caregiver Training Grant:</strong> Subsidises training courses on caregiving skills</li>
              <li><strong>Employee caregiver support:</strong> Many Singapore employers now offer eldercare leave and flexible work arrangements</li>
            </ul>

            {/* Section 10 */}
            <h2 id="conclusion" className="text-2xl font-bold text-gray-900 mt-14 mb-4 scroll-mt-24">
              10. Conclusion
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Navigating elderly care in Singapore can feel overwhelming, but you don't have to figure it out alone. The key takeaways from this guide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Start early:</strong> Don't wait for a crisis. Begin planning and exploring options before urgent care is needed.</li>
              <li><strong>Use available subsidies:</strong> Singapore's government provides substantial financial support — make sure you're claiming everything you're entitled to.</li>
              <li><strong>Combine solutions:</strong> The best care plans often combine multiple approaches — for example, home care plus day care plus technology monitoring.</li>
              <li><strong>Include your parent:</strong> Involve them in decisions wherever possible to preserve dignity and autonomy.</li>
              <li><strong>Take care of yourself:</strong> Sustainable caregiving requires looking after your own wellbeing too.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              As Singapore continues to invest in eldercare infrastructure and technology, families have more tools than ever to ensure their aging parents receive the care they deserve while maintaining independence and dignity.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                Simplify your eldercare journey
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl">
                ElderSync helps Singapore families coordinate care, track medications, and stay connected with aging parents — all in one simple app. Join the waitlist and be the first to know when we launch.
              </p>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md">
                  <div className="flex bg-white/10 rounded-xl border border-white/10 overflow-hidden backdrop-blur-sm">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="flex-1 px-4 py-3.5 text-sm bg-transparent text-white focus:outline-none placeholder:text-gray-500"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-5 py-2.5 m-1 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-all disabled:opacity-50 flex items-center gap-2 shrink-0"
                    >
                      {loading ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-5 py-4 max-w-md">
                  <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-white">You're on the list!</p>
                    <p className="text-xs text-gray-400">We'll notify <strong className="text-gray-300">{email}</strong> when we launch.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Complete Guide to Elderly Care in Singapore (2026)',
            description:
              'Comprehensive guide covering elderly care options, costs, government subsidies, and how to choose the right care for aging parents in Singapore.',
            datePublished: '2026-02-25',
            dateModified: '2026-02-25',
            author: {
              '@type': 'Organization',
              name: 'ElderSync',
              url: 'https://eldersync-web.netlify.app',
            },
            publisher: {
              '@type': 'Organization',
              name: 'ElderSync',
              url: 'https://eldersync-web.netlify.app',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://eldersync-web.netlify.app/blog/complete-guide-elderly-care-singapore',
            },
          }),
        }}
      />

      {/* Footer */}
      <footer className="py-14 px-6 bg-gray-950 border-t border-gray-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-base font-semibold text-white tracking-tight">ElderSync</span>
            </div>
            <p className="text-xs text-gray-600">&copy; 2026 ElderSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
