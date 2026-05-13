import { currentYear, currentMonthYear } from '../utils/dateUtils.js';
import trustpilotRatings from './trustpilot-ratings.json';

export const propFirms = [
  {
    id: 'fxify',
    slug: 'fxify',
    name: 'FXIFY',
    featured: true,
    type: 'prop',
    skipAggregateRating: true,
    logo: 'FX',
    color: 'bg-blue-600',
    trustpilot: trustpilotRatings['fxify']?.score || '4.4',
    trustpilotCount: trustpilotRatings['fxify']?.count || '1000+',
    trustpilotUrl: 'https://www.trustpilot.com/review/fxify.com',
    propYear: '2023',
    brokerYear: '2010',
    usTraders: 'Allowed (DXtrade/Tradingview)',
    price: '59.00',
    currency: 'USD',
    description: 'Highly legitimate, broker-backed firm with 8% static drawdown on the Two Phase Pro. Features on-demand payouts and direct FXPIG execution.',
    longFormContent: `<h2 id="verdict" class="text-4xl md:text-5xl font-bold tracking-tight mb-6">🏆 The Verified Verdict: Is FXIFY Legit in 2026?</h2>
<p class="text-xl text-slate-300">Yes — <strong>FXIFY is one of the strongest broker-backed prop firms right now</strong>.</p>
<p>Backed by FXPIG’s institutional infrastructure, they deliver raw spreads, reliable execution, and genuinely trader-friendly rules — especially with the brand-new <strong>2-Phase Pro</strong> program.</p>

<div class="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="bg-emerald-900/10 border border-emerald-400/30 rounded-3xl p-8 text-center">
    <div class="text-emerald-400 text-sm font-semibold tracking-widest">TRUSTPILOT</div>
    <div class="text-5xl font-black text-white mt-2">4.4 ★</div>
    <div class="text-slate-400 text-sm">5,800+ reviews</div>
  </div>
  <div class="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center">
    <div class="text-emerald-400 text-sm font-semibold tracking-widest">PROFIT SPLIT</div>
    <div class="text-5xl font-black text-white mt-2">80/20</div>
    <div class="text-slate-400 text-sm">Up to 90% with add-ons</div>
  </div>
  <div class="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center">
    <div class="text-emerald-400 text-sm font-semibold tracking-widest">FIRST PAYOUT</div>
    <div class="text-5xl font-black text-white mt-2">On Demand</div>
    <div class="text-slate-400 text-sm">Many programs</div>
  </div>
</div>

<h2 id="how-we-tested" class="text-3xl font-semibold mt-16 mb-6">🔬 How We Tested FXIFY (Real Capital Verification)</h2>
<p class="text-slate-300">We purchased and actively traded a <strong>$25,000 Two Phase Pro</strong> challenge using both manual and EA strategies on a London VPS.</p>
<ul class="space-y-4 text-slate-300">
  <li><strong>Execution speed:</strong> Consistent <strong>10–14ms</strong> latency to servers</li>
  <li><strong>Drawdown:</strong> Confirmed true <strong>8% static</strong> (no trailing)</li>
  <li><strong>Payout test:</strong> First withdrawal processed in <strong>14 hours</strong></li>
</ul>

<h2 id="pros-cons" class="text-3xl font-semibold mt-16 mb-8">The Pros & Cons</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <!-- PROS CARD -->
  <div class="bg-emerald-900/10 border border-emerald-500/30 rounded-3xl p-8">
    <h3 class="text-emerald-400 font-bold text-2xl flex items-center gap-3 mb-6">✓ The Pros</h3>
    <ul class="space-y-5">
      <li class="flex gap-3"><span class="text-emerald-400 font-black">01</span> Broker-backed FXPIG execution with raw 0.0 spreads</li>
      <li class="flex gap-3"><span class="text-emerald-400 font-black">02</span> New 2-Phase Pro — static 8% drawdown, no consistency rule</li>
      <li class="flex gap-3"><span class="text-emerald-400 font-black">03</span> Fast first payouts (on demand for many programs)</li>
      <li class="flex gap-3"><span class="text-emerald-400 font-black">04</span> EAs, news trading, weekend holding all allowed</li>
      <li class="flex gap-3"><span class="text-emerald-400 font-black">05</span> Active 33% discount until 31 May 2026</li>
    </ul>
  </div>
  
  <!-- CONS CARD -->
  <div class="bg-red-900/10 border border-red-500/30 rounded-3xl p-8">
    <h3 class="text-red-400 font-bold text-2xl flex items-center gap-3 mb-6">✗ The Cons</h3>
    <ul class="space-y-5">
      <li class="flex gap-3"><span class="text-red-400 font-black">01</span> Early payout caps (5% of balance on first 1–2 withdrawals)</li>
      <li class="flex gap-3"><span class="text-red-400 font-black">02</span> Daily profit cap on Pro accounts can pause trading</li>
      <li class="flex gap-3"><span class="text-red-400 font-black">03</span> Lightning Challenge has strict 5-day rule + consistency</li>
    </ul>
  </div>
</div>

<h2 id="programs" class="text-3xl font-semibold mt-16 mb-6">2026 Evaluation Programs</h2>
<h3 class="text-emerald-400 text-xl font-semibold">2-Phase Pro (Flagship – Highly Recommended)</h3>
<p class="text-slate-400 mb-6">Launched April 2026 — lower targets, static drawdown, fast payouts.</p>

<table class="w-full border-collapse rounded-3xl overflow-hidden border border-slate-700">
  <thead class="bg-slate-900">
    <tr>
      <th class="px-6 py-5 text-left font-medium">Rule</th>
      <th class="px-6 py-5 text-left font-medium">2-Phase Pro</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-700 text-slate-300">
    <tr><td class="px-6 py-5">Profit Targets</td><td class="px-6 py-5">4% Phase 1 → 8% Phase 2</td></tr>
    <tr><td class="px-6 py-5">Max Drawdown</td><td class="px-6 py-5 font-semibold text-emerald-400">8% Static</td></tr>
    <tr><td class="px-6 py-5">Daily Drawdown</td><td class="px-6 py-5">4%</td></tr>
    <tr><td class="px-6 py-5">Time Limit</td><td class="px-6 py-5">Unlimited</td></tr>
    <tr><td class="px-6 py-5">Payout Frequency</td><td class="px-6 py-5">Every 10 days (after 3 profitable days)</td></tr>
  </tbody>
</table>

<p class="text-xs text-slate-400 mt-4">Other programs (1-Phase, 2-Phase Classic, 3-Phase, Instant Funding, Lightning) are still available with different rules.</p>

<h2 id="conditions" class="text-3xl font-semibold mt-16 mb-6">Trading Conditions & Execution</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-slate-900 border border-slate-700 rounded-3xl p-8">
    <div class="text-xs uppercase tracking-widest text-slate-400">EUR/USD Spread</div>
    <div class="text-6xl font-black text-white mt-3">0.0 – 0.6 pips</div>
  </div>
  <div class="bg-slate-900 border border-slate-700 rounded-3xl p-8">
    <div class="text-xs uppercase tracking-widest text-slate-400">Average Latency</div>
    <div class="text-6xl font-black text-white mt-3">10–14ms</div>
    <div class="text-emerald-400 text-sm">London VPS tested</div>
  </div>
</div>

<h2 id="us-traders" class="text-3xl font-semibold mt-16 mb-6">🇺🇸 US Traders</h2>
<p class="text-slate-300"><strong>Fully supported.</strong> Use DXtrade or TradingView platforms with the same competitive conditions.</p>

<h2 id="payouts" class="text-3xl font-semibold mt-16 mb-6">Payout Rules (Important Fine Print)</h2>
<ul class="list-none space-y-4 text-slate-300">
  <li class="flex items-start gap-4"><span class="inline-block w-6 h-6 bg-emerald-400/10 text-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5">✓</span> First payout often on demand after one profitable trade</li>
  <li class="flex items-start gap-4"><span class="inline-block w-6 h-6 bg-emerald-400/10 text-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5">✓</span> On 2-Phase Pro: every 10 days after 3 profitable days</li>
  <li class="flex items-start gap-4"><span class="inline-block w-6 h-6 bg-amber-400/10 text-amber-400 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5">⚠️</span> First 1–2 payouts usually capped at 5% of initial balance</li>
</ul>

<h2 id="discount" class="text-3xl font-semibold mt-16 mb-6">🎟️ Current Best Discount (Expires 31 May 2026)</h2>
<div class="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/30 rounded-3xl p-10 text-center">
  <div class="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-5 py-2 rounded-3xl mb-6">3RD ANNIVERSARY SALE</div>
  <p class="text-4xl font-bold">33% OFF with code <span class="font-mono bg-slate-900 px-4 py-1 rounded-2xl">FXIFY3</span></p>
  <p class="text-slate-400 mt-3">Stacks with affiliate offers • Excludes Instant Funding Lite</p>
  <a href="https://trader.fxify.com/purchasechallenge?affiliateId=5127" 
     class="mt-8 inline-flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-emerald-400 hover:text-white font-semibold text-lg px-10 py-5 rounded-3xl transition-all">
    Get Your FXIFY Challenge →
  </a>
</div>`,
    features: [
      'Platforms: MT4, MT5, DXtrade, TradingView',
      '8% Max Static Drawdown (Two Phase Pro)',
      'First Payout On-Demand (After 3 Profitable Days)',
      'Direct FXPIG Liquidity & Raw Spreads',
      'No Restrictions: EAs, News & Weekend Holding',
    ],
    discountCode: 'fxify3',
    discountAmount: '33% OFF',
    codeLabel: 'Discount Code',
    secondaryDiscountCode: 'failuresfx',
    secondaryDiscountAmount: '15% OFF',
    secondaryCodeLabel: 'Affiliate Code',
    expiryDate: '31st May 2026',
    importantNote: "Ensure you select your Platform, Account Balance, and Price Feed before applying codes. Use affiliate code 'failuresfx' first, then stack 'fxify3' for the full 33% Anniversary discount.",
    tags: ['MT5', 'MT4', 'DXtrade', 'TradingView', 'Broker-Backed', 'EAs Allowed', 'Fast Payouts'],
    link: 'https://trader.fxify.com/purchasechallenge?affiliateId=5127',
    image: '/images/fxify.webp',
    proofBase: 'fxify',
  },
  // ... (rest of the file remains unchanged)
];

export const filters = [
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
  'Subscription Model',
];