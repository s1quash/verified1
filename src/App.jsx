import React, { useState, useEffect } from 'react';
import { Shield, Zap, TrendingUp, Cpu, Gift, CheckCircle2, Copy, ArrowRight, Server, Search, BarChart3, AlertCircle, Code, Menu, X } from 'lucide-react';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { currentYear, currentMonthYear } from './utils/dateUtils.js';

const propFirms = [
  {
    id: 'fxify',
    name: 'FXIFY',
    featured: true,
    logo: 'FX',
    color: 'bg-blue-600',
    description: 'Backed by FXPIG. Features the new Two Phase Pro (Static Drawdown) and Lightning Challenge. Get fast payouts and scale up to $4M.',
    features: [
      'Platforms: MT4, MT5, DXtrade, Tradingview',
      'Drawdown: Static or Trailing options available',
      'Leverage 1:30 standard (1:50 Add-on available)',
      'EAs, Martingale & Weekend Holding Allowed',
      'First Payout On-Demand (No waiting period)'
    ],
    discountCode: 'fxify3',
    discountAmount: '33% OFF',
    codeLabel: 'Discount Code',
    secondaryDiscountCode: 'failuresfx',
    secondaryDiscountAmount: '15% OFF',
    secondaryCodeLabel: 'Affiliate Code',
    importantNote: "For all types of accounts. Please make sure to select all the options first before applying affiliate code and then the discount code, as it would say invalid if you haven't selected Product, Account Balance, Platform and Price Feed. The affiliate code provides 15% discount and discount code is applied on top of it should it have a higher discount.",
    tags: ['MT5', 'MT4', 'DXtrade', 'TradingView', 'Broker-Backed', 'EAs Allowed', 'Fast Payouts'],
    link: 'https://trader.fxify.com/purchasechallenge?affiliateId=5127',
    image: '/images/fxify.png',
    proofBase: 'fxify'
  },
  {
    id: 'blueberry',
    name: 'Blueberry Funded',
    logo: 'BF',
    color: 'bg-indigo-600',
    description: 'Directly Backed by Blueberry Markets (Established 2016). High-quality execution with Prime and Rapid models.',
    features: [
      'Platforms: MT4, MT5, DXtrade, TradeLocker',
      'Up to 90% Profit Split & Scaling to $2M',
      'Leverage up to 1:50 with ECN Spreads',
      'Payouts every 14 Days (7-day add-on available)',
      'News & EAs allowed subject to specific model rules'
    ],
    discountCode: 'failuresfx',
    discountAmount: '20% OFF',
    codeLabel: 'Coupon Code',
    tags: ['MT5', 'MT4', 'TradeLocker', 'DXtrade', 'Broker-Backed', 'EAs Allowed'],
    link: 'https://blueberryfunded.com/?utm_source=affiliate&ref=3083',
    image: '/images/blueberry.png',
    proofBase: 'blueberry'
  },

  {
    id: 'dna',
    name: 'DNA Funded',
    logo: 'DNA',
    color: 'bg-violet-600',
    description: 'Backed by ASIC-regulated DNA Markets (Established 2023). Offers MT5 & TradeLocker with 800+ assets.',
    features: [
      'Platforms: TradeLocker (Primary) & MT5',
      'Over 800+ Tradable Instruments (Crypto, FX, Stocks)',
      'Leverage up to 1:50 & 80-90% Profit Split',
      'Virtual Trading via DNA Markets Liquidity',
      'Payouts every 14 days (7-day add-on available)'
    ],
    discountCode: 'carigold25',
    discountAmount: '25% OFF',
    codeLabel: 'Coupon Code',
    tags: ['TradeLocker', 'Broker-Backed', 'EAs Allowed'],
    link: 'https://partners.dnafunded.com/click?campaign_id=1&ref_id=102',
    image: '/images/dna.png',
    proofBase: 'dna'
  },
  {
    id: 'moneta',
    name: 'Moneta Funded',
    logo: 'MF',
    color: 'bg-orange-500',
    description: 'Backed by Moneta Markets (Established 2020). Focused on realistic trading conditions and rapid funding paths.',
    features: [
      'Platforms: MT5 and Match-Trader',
      'Leverage up to 1:100 with ECN Spreads',
      'Fixed 88% Profit Split on all Funded Accounts',
      'Phoenix Scaling Plan up to $2,000,000',
      'EAs & Weekend Holding Allowed'
    ],
    discountCode: 'moneta42',
    discountAmount: '42% OFF',
    codeLabel: 'Discount Code',
    tags: ['MT5', 'cTrader / Match-Trader', 'Broker-Backed', 'EAs Allowed'],
    link: 'https://go.monetafunded.com/visit/?bta=35298&brand=monetafunded',
    image: '/images/moneta.png',
    proofBase: 'moneta'
  },
  {
    id: 'darwinex',
    name: 'Darwinex Zero',
    logo: 'DZ',
    color: 'bg-slate-700',
    description: 'Backed by Darwinex (Established 2012) with FCA Regulated Infrastructure. A unique subscription model to build a legal track record.',
    features: [
      'Platforms: MT4 and MT5',
      'Monthly Subscription (€38/mo) - No Evaluation Fees',
      'No Trading Rules or Drawdown Limits',
      '15% Performance Fee on High-Water Mark Profits',
      'Quarterly Payouts (Monthly available)'
    ],
    discountCode: 'failuresfx',
    discountAmount: '20% OFF',
    codeLabel: 'Discount Code',
    tags: ['MT5', 'MT4', 'Subscription Model', 'Broker-Backed', 'EAs Allowed'],
    link: 'https://www.darwinexzero.com/?fpr=13inb&coupon=FAILURESFX',
    image: '/images/darwinex.png',
    proofBase: 'darwinex'
  },
  {
    id: 'fusion',
    name: 'Fusion Markets',
    logo: 'FM',
    color: 'bg-indigo-500',
    description: 'A fully regulated retail broker (Established 2017), not a prop firm. Known for ultra-low commissions and raw spreads starting from 0.0 pips.',
    features: [
      'Low Commissions: $2.25 per lot ($4.50 round turn)',
      'No Minimum Deposit Required',
      'Platforms: MT4, MT5, cTrader, TradingView',
      'Leverage up to 1:500',
      'Execution: ECN/STP without dealing desk intervention'
    ],
    discountCode: '80351',
    discountAmount: 'Low Cost Broker',
    codeLabel: 'Ref Code',
    tags: ['Regulated Broker', 'MT5', 'MT4', 'TradingView', 'cTrader / Match-Trader', 'EAs Allowed'],
    link: 'https://fusionmarkets.com/?refcode=80351',
    image: '/images/fusion.png',
    proofBase: 'fusion'
  }
];

const filters = [
  'All', 
  'Regulated Broker',
  'MT5', 
  'MT4', 
  'DXtrade', 
  'TradeLocker', 
  'cTrader / Match-Trader', 
  'TradingView',
  'EAs Allowed', 
  'Broker-Backed', 
  'Subscription Model'
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeFilter, setActiveFilter] = useState('All');
  const [copiedCode, setCopiedCode] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Handle initial load based on URL
    const path = window.location.pathname.replace('/', '');
    if (path === 'terms' || path === 'privacy') {
      setCurrentPage(path);
    } else {
      setCurrentPage('home');
    }

    // Handle browser back/forward buttons
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        const currentPath = window.location.pathname.replace('/', '');
        setCurrentPage(currentPath || 'home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page) => {
    window.history.pushState({ page }, '', `/${page === 'home' ? '' : page}`);
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  const filteredFirms = propFirms.filter(firm => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'cTrader / Match-Trader') {
      return firm.tags.includes('cTrader') || firm.tags.includes('Match-Trader') || firm.tags.includes('cTrader / Match-Trader');
    }
    return firm.tags.includes(activeFilter);
  });

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (currentPage === 'terms') return <Terms onBack={() => navigateTo('home')} />;
  if (currentPage === 'privacy') return <Privacy onBack={() => navigateTo('home')} />;
  if (currentPage === 'contact') return <Contact onBack={() => navigateTo('home')} />;
  if (currentPage === 'services') return <Services onBack={() => navigateTo('home')} />;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
            <img src="/images/logo.png" alt="VerifiedPropFirm Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight hidden sm:block">VerifiedPropFirm<span className="text-blue-500">.com</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button onClick={() => navigateTo('services')} className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
              <Code size={16} className="text-violet-500" /> Custom EAs
            </button>
            <a href="#bonus" className="hover:text-white transition-colors flex items-center gap-1">
              <Gift size={16} className="text-blue-500" /> Free Trading Tools
            </a>
            <a href="#compare" className="bg-white text-slate-950 px-4 py-2 rounded-full font-bold hover:bg-slate-200 transition-colors">
              Find Your Firm
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
            <button 
              onClick={() => { navigateTo('services'); setIsMenuOpen(false); }} 
              className="flex items-center gap-3 w-full text-left text-lg font-semibold text-slate-200 p-3 rounded-xl bg-slate-900 border border-slate-800"
            >
              <div className="bg-violet-500/10 p-2 rounded-lg text-violet-400">
                <Code size={20} />
              </div>
              Custom EAs
            </button>
            <a 
              href="#bonus" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 text-lg font-semibold text-slate-200 p-3 rounded-xl bg-slate-900 border border-slate-800"
            >
              <div className="bg-blue-500/10 p-2 rounded-lg text-blue-400">
                <Gift size={20} />
              </div>
              Free Trading Tools
            </a>
            <a 
              href="#compare" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
            >
              Find Your Firm
            </a>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
            <Zap size={14} /> Updated for {currentMonthYear}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Find the Perfect <span className="text-gradient">Prop Firm.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            No more guessing. We list only reputable prop firms, primarily backed by established FX brokers with proven track records. The site is updated whenever new discounts are available. Get exclusive discounts and claim our custom tool suite when you join.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#compare" className="premium-button bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 flex items-center justify-center gap-2 text-lg">
              Compare Firms <ArrowRight size={20} />
            </a>
            <a href="#bonus" className="premium-button bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 flex items-center justify-center gap-2 text-lg">
              Claim Free Trading Tools <Gift size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Verified Prop Firms</h2>
              <p className="text-slate-400">Filter by your trading style or preferred platform.</p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Firm Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredFirms.map((firm) => (
              <article 
                key={firm.id} 
                className={`premium-card flex flex-col relative transition-all duration-300 ${firm.featured ? 'ring-2 ring-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)] md:-translate-y-2' : ''}`}
              >
                {firm.featured && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-blue-400/50 flex items-center gap-1 shadow-blue-500/50 animate-pulse">
                      <Zap size={14} className="text-yellow-300" /> Top Pick
                    </div>
                  </div>
                )}
                <div className="h-48 overflow-hidden relative border-b border-slate-800 rounded-t-3xl">
                  <img 
                    src={firm.image} 
                    alt={`Trading platform and dashboard preview for ${firm.name} prop firm evaluation`} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                </div>
                <div className="p-6 flex-grow bg-slate-900">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{firm.name}</h3>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {firm.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-slate-800 text-slate-300 border border-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{firm.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {firm.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-slate-950/80 border-t border-slate-800">
                  {firm.importantNote && (
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 mb-4 text-xs text-blue-200 leading-relaxed flex gap-2 items-start">
                      <AlertCircle size={14} className="shrink-0 mt-0.5 text-blue-400" />
                      <p>{firm.importantNote}</p>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-400">{firm.codeLabel || 'Promo Code'}:</span>
                        <span className="text-xs text-blue-400 font-medium">{firm.discountAmount}</span>
                      </div>
                      <button 
                        onClick={() => handleCopy(firm.discountCode)}
                        className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded text-sm font-mono font-bold text-blue-400 transition-colors border border-slate-700"
                      >
                        {copiedCode === firm.discountCode ? 'Copied!' : firm.discountCode}
                        <Copy size={14} />
                      </button>
                    </div>

                    {firm.secondaryDiscountCode && (
                      <div className="flex items-center justify-between border-t border-slate-800/50 pt-3 mt-1">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-400">{firm.secondaryCodeLabel}:</span>
                          <span className="text-xs text-blue-400 font-medium">{firm.secondaryDiscountAmount}</span>
                        </div>
                        <button 
                          onClick={() => handleCopy(firm.secondaryDiscountCode)}
                          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded text-sm font-mono font-bold text-blue-400 transition-colors border border-slate-700"
                        >
                          {copiedCode === firm.secondaryDiscountCode ? 'Copied!' : firm.secondaryDiscountCode}
                          <Copy size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Coupon Proof Screenshots (Auto Fallback for PNG/JPG and Auto Scaling) */}
                  <div className="mb-4 flex flex-wrap gap-2 w-full">
                    {[ '', '2', '3', '4', '5' ].map((suffix, idx) => (
                      <div key={idx} className="flex-1 min-w-[30%] rounded-lg overflow-hidden border border-slate-800/50 bg-slate-900 flex justify-center items-center cursor-zoom-in relative group h-24 sm:h-32">
                        <img 
                          src={`/images/proofs/${firm.proofBase}-proof${suffix}.png`} 
                          alt={`Verified ${firm.name} discount code and coupon proof screenshot ${idx + 1}`} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                          onClick={(e) => setSelectedImage(e.target.src)}
                          onError={(e) => {
                            const src = e.target.src;
                            if (src.endsWith('.png')) e.target.src = `/images/proofs/${firm.proofBase}-proof${suffix}.jpg`;
                            else if (src.endsWith('.jpg')) e.target.src = `/images/proofs/${firm.proofBase}-proof${suffix}.jpeg`;
                            else e.target.parentElement.style.display = 'none';
                          }} 
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <Search size={24} className="text-white drop-shadow-md" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={firm.link}
                    className="premium-button w-full block text-center bg-white text-slate-950 font-bold py-3 hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    {firm.tags.includes('Regulated Broker') ? `Open Account` : `Start Challenge`}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Unfair Advantage (Lead Magnet) */}
      <section id="bonus" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-6 border border-emerald-500/20">
                  <Gift size={14} /> Exclusive Affiliate Bonus
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock our Custom MT5 Tool Suite <span className="text-blue-500">Free.</span></h2>
                <p className="text-slate-400 mb-8 text-lg">
                  Don't just get a discount. Register with any of our partner prop firms using our links, and get lifetime access to our proprietary MQL5 trading indicators.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 transition-all hover:border-slate-600 hover:bg-slate-800">
                    <div className="bg-blue-500/20 p-2 rounded text-blue-400"><Server size={20} /></div>
                    <span className="font-medium text-slate-200">Optimized MT5 Candle Timer Utility</span>
                  </li>
                  <li className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 transition-all hover:border-slate-600 hover:bg-slate-800">
                    <div className="bg-indigo-500/20 p-2 rounded text-indigo-400"><AlertCircle size={20} /></div>
                    <span className="font-medium text-slate-200">News Indicator</span>
                  </li>
                  <li className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 transition-all hover:border-slate-600 hover:bg-slate-800">
                    <div className="bg-emerald-500/20 p-2 rounded text-emerald-400"><TrendingUp size={20} /></div>
                    <span className="font-medium text-slate-200">Proprietary Trend Indicator</span>
                  </li>
                  <li className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 transition-all hover:border-slate-600 hover:bg-slate-800">
                    <div className="bg-violet-500/20 p-2 rounded text-violet-400"><Cpu size={20} /></div>
                    <span className="font-medium text-slate-200">Automated Risk Calculator (.ex5)</span>
                  </li>
                </ul>
              </div>

              {/* Form Section */}
              <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 relative shadow-inner">
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1.5 rounded-full transform rotate-12 shadow-lg">
                  VALUE: $249
                </div>
                <h3 className="text-xl font-bold mb-2">Claim Your Tools</h3>
                <p className="text-slate-400 text-sm mb-6">Enter your new evaluation account number after registering with our affiliate link to verify.</p>
                
                <form name="bonus-claim-legacy" method="POST" data-cloudflare-static className="space-y-4">
                  <input type="hidden" name="_subject" value="New Tool Claim Request!" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select Prop Firm</label>
                    <select name="Prop Firm" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                      <option>FXIFY</option>
                      <option>Blueberry Funded</option>
                      <option>DNA Funded</option>
                      <option>Moneta Funded</option>
                      <option>Darwinex Zero</option>
                      <option>Fusion Markets</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Account Number</label>
                    <input 
                      type="text" 
                      name="Account Number"
                      required
                      placeholder="e.g. 1048593"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email to receive files</label>
                    <input 
                      type="email" 
                      name="Email"
                      required
                      placeholder="trader@example.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <button type="submit" className="premium-button w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 mt-2 flex justify-center items-center gap-2 shadow-lg shadow-blue-600/20 text-lg">
                    Verify & Send My Tools <ArrowRight size={18} />
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4">For manual verification, you can also email us directly at support@verifiedpropfirm.com.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Everything you need to know about prop firms and exclusive discount codes.</p>
          </div>
          
          <div className="space-y-6">
            <article className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">What is a proprietary trading firm?</h3>
              <p className="text-slate-400 leading-relaxed">
                A proprietary trading firm (or "prop firm") provides capital to traders who can prove their profitability and risk management skills. Traders typically undergo an evaluation phase (a challenge). Once passed, they receive a funded account and keep a large percentage (often 80-90%) of the profits they generate, while the firm covers any losses.
              </p>
            </article>

            <article className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">How do prop firm discount codes work?</h3>
              <p className="text-slate-400 leading-relaxed">
                Most reputable prop firms offer coupon codes to partners and affiliates. By using the verified discount codes listed on our site at checkout, you can significantly lower the upfront cost of your evaluation challenge. Our platform automatically provides you with the exact promo, coupon, or referral code needed for each specific firm to ensure you get the best possible deal.
              </p>
            </article>

            <article className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Which prop firm is the best for beginners?</h3>
              <p className="text-slate-400 leading-relaxed">
                The "best" firm depends on your trading style. Beginners often prefer firms with straightforward evaluations and excellent trading conditions, such as FXIFY. Those looking for alternative platforms might consider Moneta Funded, while experienced traders might prefer Darwinex Zero for institutional scaling. For traders looking to trade their own personal capital, we recommend a low-cost true broker like Fusion Markets. Always look for firms with transparent rules, generous drawdowns, and reliable payout histories.
              </p>
            </article>

            <article className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Are prop firms legit or scams?</h3>
              <p className="text-slate-400 leading-relaxed">
                While the industry has seen its share of unreliable companies, there are many highly legitimate, <strong>broker-backed prop firms</strong> that pay out millions to traders monthly. Scams usually involve hidden rules or denial of payouts. To protect yourself, only trade with verified firms that have proven track records. You can use our "Broker-Backed" or "Regulated Broker" filters above to find the most secure options.
              </p>
            </article>

            <article className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Do prop firms allow EAs (Expert Advisors) and bots?</h3>
              <p className="text-slate-400 leading-relaxed">
                Many modern prop firms fully support automated trading. Firms like FXIFY and Blueberry Funded allow the use of Expert Advisors (EAs), algorithms, and trading bots during both the evaluation and funded stages, provided they don't violate specific high-frequency trading (HFT) restrictions. Use our <strong>"EAs Allowed"</strong> filter at the top of the page to instantly view compatible firms, and don't forget to claim our free Custom MT5 Tool Suite when you sign up!
              </p>
            </article>

            <article className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">What platforms do prop firms use besides MT4 and MT5?</h3>
              <p className="text-slate-400 leading-relaxed">
                Due to recent licensing changes, many prop firms have diversified their trading platforms. Beyond the standard MetaTrader 4 and 5, you will frequently find excellent alternatives like <strong>DXtrade</strong>, <strong>TradeLocker</strong>, and <strong>cTrader / Match-Trader</strong>. Our comparison table allows you to filter firms based precisely on these platform offerings.
              </p>
            </article>

            <article className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Can you hold trades over the weekend on a prop firm?</h3>
              <p className="text-slate-400 leading-relaxed">
                Weekend holding rules vary significantly between companies. Some strictly require all positions to be closed before the market closes on Friday to prevent gap risks, while others (like FXIFY) allow weekend holding, giving swing traders much more flexibility. Always verify the specific rules of the firm before purchasing a challenge.
              </p>
            </article>

            <article className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">How long does it take to get a prop firm payout?</h3>
              <p className="text-slate-400 leading-relaxed">
                Payout processing times have improved drastically. While the industry standard used to be 30 days, many top-tier firms now offer payouts every 14 days. Some industry leaders even provide "On-Demand" payouts with no minimum waiting period once you are a fully funded trader. 
              </p>
            </article>

            <article className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Are these prop firm discounts verified?</h3>
              <p className="text-slate-400 leading-relaxed">
                Yes. Unlike generic coupon sites, we actively test and verify every single code. We provide transparent screenshot proof inside every listing showing exactly what the checkout page looks like when the promo code is successfully applied.
              </p>
            </article>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="VerifiedPropFirm Logo" className="h-8 w-auto grayscale opacity-80" />
              <span className="text-xl font-bold tracking-tight text-slate-300">VerifiedPropFirm<span className="text-slate-600">.com</span></span>
            </div>
            <div className="flex gap-6 text-slate-500 text-sm cursor-pointer">
              <span onClick={() => navigateTo('services')} className="hover:text-slate-300 transition-colors">Services</span>
              <span onClick={() => navigateTo('terms')} className="hover:text-slate-300 transition-colors">Terms</span>
              <span onClick={() => navigateTo('privacy')} className="hover:text-slate-300 transition-colors">Privacy</span>
              <span onClick={() => navigateTo('contact')} className="hover:text-slate-300 transition-colors">Contact</span>
            </div>
          </div>
          
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 text-xs text-slate-500 leading-relaxed">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="shrink-0 mt-0.5 text-slate-400" />
              <p>
                <strong>Risk Disclaimer:</strong> Trading forex, CFDs, and other financial instruments carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. The contents of this website are for informational purposes only. We are an affiliate website and may receive a commission if you sign up through our links, at no extra cost to you. We do not provide financial advice.
              </p>
            </div>
          </div>
          
          <div className="text-center text-slate-600 text-xs mt-8">
            &copy; {currentYear} VerifiedPropFirm.com. All rights reserved. Built for Traders.
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-slate-700/50" 
          />
          <div className="absolute top-6 right-6 text-white/50 hover:text-white bg-black/50 p-2 rounded-full backdrop-blur-md transition-colors">
            Close
          </div>
        </div>
      )}
    </div>
  );
}
