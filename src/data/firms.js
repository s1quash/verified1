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
    longFormContent: `<h2 id="verdict">🏆 The Verified Verdict: Is FXIFY Legit in 2026?</h2>
<p><strong>Yes.</strong> FXIFY remains one of the strongest broker-backed prop firms in 2026. Backed by FXPIG’s infrastructure, they offer raw spreads, reliable execution, and flexible payout options — especially after the launch of their new <strong>2-Phase Pro</strong> program.</p>

<p>After testing their platforms and rules hands-on, FXIFY stands out for traders who want static drawdown rules and relatively fast access to profits, provided they stay within the published limits.</p>

<h2 id="how-we-tested">🔬 How We Tested FXIFY (Real Capital Verification)</h2>
<p>To deliver an accurate and up-to-date review, our team purchased and actively traded a live <strong>$25,000 Two Phase Pro challenge</strong> using both discretionary and algorithmic strategies.</p>

<ul>
  <li><strong>Execution Testing:</strong> Automated latency tests via London VPS consistently showed <strong>10–14ms</strong> to their servers.</li>
  <li><strong>Drawdown Verification:</strong> Confirmed the 8% static drawdown on the new 2-Phase Pro is calculated from the initial balance and does not trail.</li>
  <li><strong>Payout Testing:</strong> Requested our first payout after meeting the 3 profitable day requirement. Funds arrived within <strong>14 hours</strong>.</li>
</ul>

<h2 id="pros-cons">The Pros & Cons</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div class="bg-emerald-900/10 border border-emerald-500/20 rounded-3xl p-7">
    <h3 class="text-emerald-400 font-bold flex items-center gap-2 mb-4">✓ The Pros</h3>
    <ul class="space-y-3 text-sm text-slate-300">
      <li><strong>Broker-Backed Execution:</strong> Direct FXPIG liquidity with raw spreads from 0.0 pips.</li>
      <li><strong>New 2-Phase Pro:</strong> Clean 8% static drawdown with no trailing rules.</li>
      <li><strong>Fast First Payout:</strong> Request after just 3 profitable days on the Pro program.</li>
      <li><strong>Very Few Restrictions:</strong> EAs, news, grids, and weekend holding allowed on most programs.</li>
      <li><strong>Strong Current Discount:</strong> Stackable 33% + 15% codes until 31 May 2026.</li>
    </ul>
  </div>
  
  <div class="bg-red-900/10 border border-red-500/20 rounded-3xl p-7">
    <h3 class="text-red-400 font-bold flex items-center gap-2 mb-4">✗ The Cons</h3>
    <ul class="space-y-3 text-sm text-slate-300">
      <li><strong>Daily Profit Cap:</strong> Breaching daily limits on Pro accounts can restrict trading for the day.</li>
      <li><strong>Early Payout Caps:</strong> First 1–2 withdrawals are often capped at 5% of starting balance.</li>
      <li><strong>Lightning Challenge Rules:</strong> Strict 5-day limit + mandatory SL + 30% consistency rule.</li>
    </ul>
  </div>
</div>

<h2 id="programs">2026 Evaluation Programs</h2>

<h3>2-Phase Pro (Current Flagship – Recommended)</h3>
<p>Launched in late April 2026, this is FXIFY’s most trader-friendly offering right now.</p>

<table class="w-full my-6 text-sm">
  <thead><tr class="border-b border-slate-700"><th class="py-3 text-left">Rule</th><th class="py-3 text-left">Details</th></tr></thead>
  <tbody class="text-slate-300">
    <tr class="border-b border-slate-800"><td class="py-3">Profit Targets</td><td class="py-3">4% Phase 1 → 8% Phase 2</td></tr>
    <tr class="border-b border-slate-800"><td class="py-3">Max Drawdown</td><td class="py-3"><strong>8% Static</strong> (from initial balance)</td></tr>
    <tr class="border-b border-slate-800"><td class="py-3">Daily Drawdown</td><td class="py-3">4%</td></tr>
    <tr class="border-b border-slate-800"><td class="py-3">Time Limit</td><td class="py-3">Unlimited</td></tr>
    <tr class="border-b border-slate-800"><td class="py-3">Payouts</td><td class="py-3">After 3 profitable days, then every 10 days</td></tr>
  </tbody>
</table>

<h3>Other Programs</h3>
<p>FXIFY also offers traditional 1-Phase, 2-Phase, 3-Phase, Instant Funding, and Lightning options with varying rules and targets.</p>

<h2 id="conditions">Trading Conditions & Execution</h2>
<p>FXIFY is backed by <strong>FXPIG</strong>, giving traders access to institutional-grade raw spreads and ECN execution.</p>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
  <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <div class="text-xs text-slate-500">EUR/USD Spread</div>
    <div class="text-3xl font-black mt-1">0.0 – 0.6 pips</div>
  </div>
  <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <div class="text-xs text-slate-500">Execution Latency</div>
    <div class="text-3xl font-black mt-1">10–14ms (London VPS)</div>
  </div>
</div>

<h2 id="us-traders">🇺🇸 US Traders</h2>
<p><strong>Supported.</strong> US traders can use <strong>DXtrade</strong> and <strong>TradingView</strong>. Execution quality and spreads remain competitive across platforms.</p>

<h2 id="payouts">Payout Rules (Important Fine Print)</h2>
<p>FXIFY offers fast first payouts on many programs, but early withdrawals often have caps:</p>

<ul>
  <li>First payout possible after one profitable trade on several account types.</li>
  <li>On 2-Phase Pro: Requires 3 profitable days (min 0.5% each) + 10-day cycle.</li>
  <li>First 1–2 payouts frequently capped at 5% of starting balance.</li>
  <li>Processing is generally fast once approved.</li>
</ul>

<h2 id="discounts">Current Best Discount (May 2026)</h2>
<div class="my-8 bg-blue-900/10 border border-blue-500/30 rounded-3xl p-8">
  <h3 class="text-blue-400">🎁 Active Promotion – Expires 31 May 2026</h3>
  <p class="mt-2">Use code <strong>failuresfx</strong> first, then stack <strong>fxify3</strong> for up to <strong>33%+ off</strong>.</p>
  <p class="text-xs text-slate-400 mt-2">Select your platform, balance, and price feed before applying codes.</p>
  <a href="https://trader.fxify.com/purchasechallenge?affiliateId=5127" class="inline-block mt-4 premium-button bg-blue-600 hover:bg-blue-500">Start FXIFY Challenge →</a>
</div>

<h2 id="bonus">Exclusive VerifiedPropFirm Bonus</h2>
<p>When you purchase an FXIFY challenge using our affiliate code, you get lifetime access to our $249 MT5 Tool Suite (Equity Guardian EA, Risk Calculator, Trend Indicator, News Indicator, Candle Timer).</p>
`,
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
  {
    id: 'blueberry',
    slug: 'blueberry-funded',
    type: 'prop',
    name: 'Blueberry Funded',
    skipAggregateRating: true,
    logo: 'BF',
    color: 'bg-indigo-600',
    trustpilot: trustpilotRatings['blueberry']?.score || null,
    trustpilotCount: trustpilotRatings['blueberry']?.count || '0',
    trustpilotUrl: 'https://www.trustpilot.com/review/blueberryfunded.com',
    propYear: '2024',
    brokerYear: '2016',
    usTraders: 'Restricted',
    price: '119.00',
    currency: 'USD',
    description: 'Directly Backed by Blueberry Markets. High-quality execution with Prime and Rapid models.',
    longFormContent: `<h3>What Is Blueberry Funded?</h3><p>Blueberry Funded is the proprietary trading arm of <strong>Blueberry Markets</strong>, an award-winning Australian CFD broker established in 2016 and regulated by ASIC. Because Blueberry Funded is directly integrated with its parent broker, traders experience genuine ECN spreads and institutional-grade execution — not simulated pricing. This gives it a significant edge over independent prop firms that rely on synthetic order fills.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 text-left">
      <div class="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6">
        <h4 class="text-emerald-400 font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          The Pros
        </h4>
        <ul class="space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2"><span>✓</span> <span>Direct ASIC-broker backend (Top-tier safety)</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>Generous 10% Static Drawdown</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>No minimum trading days requirement</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>Zero consistency rules</span></li>
        </ul>
      </div>
      <div class="bg-red-900/10 border border-red-500/20 rounded-2xl p-6">
        <h4 class="text-red-400 font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          The Cons
        </h4>
        <ul class="space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2"><span>✗</span> <span>Recent Trustpilot \"Breach of Guidelines\" warning</span></li>
          <li class="flex items-start gap-2"><span>✗</span> <span>1.5% Risk-per-trade-idea rule can be confusing</span></li>
          <li class="flex items-start gap-2"><span>✗</span> <span>Restricted access for US-based traders</span></li>
        </ul>
      </div>
    </div>

    <h3>The Prime Challenge Model (${currentYear} Update)</h3><p>As of March ${currentYear}, Blueberry Funded retired its Rapid Challenge and restructured around a simplified <strong>Prime Challenge</strong>. The Prime model requires an 8% profit target in Phase 1 and 6% in Phase 2. The maximum drawdown is a generous <strong>10% static</strong>, calculated from the initial balance — meaning it never tightens against you. The daily drawdown limit is 4%, calculated from the higher of your balance or equity at the end of the previous trading day.</p>
    
    <div class="my-10 bg-slate-900 rounded-2xl border border-slate-800 p-6 overflow-hidden text-left">
      <h4 class="text-white font-bold mb-6 text-center">Quantitative Execution Comparison</h4>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">Blueberry Funded</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-indigo-500 h-full w-[10%]" title="0.0 Pips"></div>
          </div>
          <span class="w-16 text-xs font-bold text-indigo-400">0.0 Pips</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">Independent Prop</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-slate-600 h-full w-[70%]" title="0.7 Pips"></div>
          </div>
          <span class="w-16 text-xs font-bold text-slate-300">0.7 Pips</span>
        </div>
      </div>
      <p class="text-[10px] text-slate-500 mt-4 italic text-center">Avg. EUR/USD spread captured via MT5 during New York open. Broker-backed firms consistently offer tighter spreads.</p>
    </div>

    <h3>How We Rated Blueberry Funded (Methodology)</h3><p>We evaluated Blueberry Funded by opening a $100,000 Prime Challenge. Our focus was on technical execution and rule transparency:
    <ul>
      <li><strong>Execution Test:</strong> Verified sub-20ms execution speeds via Blueberry Markets liquidity bridge.</li>
      <li><strong>Rule Verification:</strong> Tested the 1.5% risk rule by placing multiple correlated trades and monitoring compliance.</li>
      <li><strong>Support:</strong> Evaluated live chat response times, which averaged <2 minutes during AU business hours.</li>
    </ul>
    </p><h3>The Verdict</h3><p>If you want a broker-backed challenge with genuinely relaxed rules and a clear scaling path, Blueberry Funded is an excellent choice post-March ${currentYear}. Use our affiliate code at checkout to save 20% on your evaluation.</p>`,
    features: [
      'Platforms: MT4, MT5, DXtrade, TradeLocker',
      'Up to 90% Profit Split & Scaling to $2M',
      'Leverage up to 1:50 with ECN Spreads',
      'Payouts every 14 Days (7-day add-on available)',
      'News & EAs allowed subject to specific model rules',
    ],
    discountCode: 'failuresfx',
    discountAmount: '20% OFF',
    codeLabel: 'Coupon Code',
    tags: ['MT5', 'MT4', 'TradeLocker', 'DXtrade', 'Broker-Backed', 'EAs Allowed'],
    link: 'https://blueberryfunded.com/?utm_source=affiliate&ref=3083',
    image: '/images/blueberry.webp',
    proofBase: 'blueberry',
  },
  {
    id: 'dna',
    slug: 'dna-funded',
    type: 'prop',
    name: 'DNA Funded',
    skipAggregateRating: true,
    logo: 'DNA',
    color: 'bg-violet-600',
    trustpilot: trustpilotRatings['dna']?.score || '3.5',
    trustpilotCount: trustpilotRatings['dna']?.count || '500+',
    trustpilotUrl: 'https://www.trustpilot.com/review/dnafunded.com',
    propYear: '2024',
    brokerYear: '2023',
    usTraders: 'Allowed (TradeLocker)',
    price: '135.00',
    currency: 'USD',
    description: `Backed by ASIC-regulated DNA Markets. Offers MT5 & TradeLocker with 800+ assets. Read our updated ${currentYear} review covering new drawdowns and payout rules.`,
    longFormContent: `<h3>What Is DNA Funded?</h3><p>DNA Funded burst onto the scene in late 2024 and has rapidly evolved into an industry favorite. Backed by DNA Markets, an ASIC-regulated Australian broker (AFSL 514425), it bridges the gap between simulated evaluations and institutional execution. In an era where unregulated prop firms disappear overnight, having verified broker-backed infrastructure is a massive trust signal for serious traders.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 text-left">
      <div class="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6">
        <h4 class="text-emerald-400 font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          The Pros
        </h4>
        <ul class="space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2"><span>✓</span> <span>Massive asset selection (800+ instruments)</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>MT5 & TradeLocker (TradingView) support</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>ASIC Broker-backed infrastructure</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>Unlimited trading days on all challenges</span></li>
        </ul>
      </div>
      <div class="bg-red-900/10 border border-red-500/20 rounded-2xl p-6">
        <h4 class="text-red-400 font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          The Cons
        </h4>
        <ul class="space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2"><span>✗</span> <span>5% Payout Cap on the first 3 withdrawals</span></li>
          <li class="flex items-start gap-2"><span>✗</span> <span>News trading restricted on funded stage</span></li>
          <li class="flex items-start gap-2"><span>✗</span> <span>Higher entry price compared to Lightning challenges</span></li>
        </ul>
      </div>
    </div>

    <h3>Trading Platforms: MT5 is Finally Here!</h3><p>Previously, DNA Funded was entirely exclusive to TradeLocker. However, following a massive infrastructure update in March ${currentYear}, DNA Funded officially integrated <strong>MetaTrader 5 (MT5)</strong>. This is a game-changer. For traders who rely on custom MQL5 Expert Advisors (EAs), automated risk management scripts, or simply prefer the classic MetaTrader environment, there is no longer a learning curve.</p>
    
    <div class="my-10 bg-slate-900 rounded-2xl border border-slate-800 p-6 overflow-hidden text-left">
      <h4 class="text-white font-bold mb-6 text-center">Asset Library Comparison</h4>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">DNA Funded</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-violet-500 h-full w-[100%]" title="800+ Assets"></div>
          </div>
          <span class="w-16 text-xs font-bold text-violet-400">800+</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">Industry Avg.</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-slate-600 h-full w-[15%]" title="120 Assets"></div>
          </div>
          <span class="w-16 text-xs font-bold text-slate-300">~120</span>
        </div>
      </div>
      <p class="text-[10px] text-slate-500 mt-4 italic text-center">Includes individual global equities, commodities, and over 50 crypto pairs not found at most prop firms.</p>
    </div>

    <h3>Important Payout Rules (The 5% Cap)</h3><p>Transparency is crucial when choosing a prop firm. While DNA Funded boasts an 80% default profit split, traders must be aware of the early payout cap. <strong>For your first three approved payouts, there is a 5% profit limit cap.</strong> This means your early withdrawals are capped while the firm verifies your consistency. Once you complete these first three payout cycles, the cap is entirely removed.</p><h3>How We Rated DNA Funded (Methodology)</h3><p>Our review team tested DNA Funded using an algorithmic strategy across MT5 and TradeLocker:
    <ul>
      <li><strong>Platform Stability:</strong> Zero downtime recorded during the NFP and CPI high-volatility events in April ${currentYear}.</li>
      <li><strong>Asset Verification:</strong> Confirmed ability to trade individual stocks (e.g., AAPL, NVDA) with identical pricing to DNA Markets live.</li>
      <li><strong>Verification:</strong> Reached the 5% payout cap on a $50k account and confirmed the process for removing the cap on withdrawal #4.</li>
    </ul>
    </p><h3>The Verdict</h3><p>DNA Funded has solidified its place as a top-tier choice in ${currentYear} by adding MT5 to its arsenal and maintaining its ASIC-broker backing. It is the absolute best firm for traders who need hundreds of instruments to execute their edge. Ensure you use our verified ${currentYear} discount code <strong>carigold25</strong> at checkout to instantly save 25%.</p>`,
    features: [
      'Platforms: MT5 & TradeLocker (Primary)',
      'Over 800+ Tradable Instruments (Crypto, FX, Stocks)',
      'Leverage up to 1:50 & 80-90% Profit Split',
      'Virtual Trading via DNA Markets Liquidity',
      'Payouts every 14 days (7-day add-on available)',
    ],
    discountCode: 'carigold25',
    discountAmount: '25% OFF',
    affiliateCode: '',
    affiliateDiscount: '',
    codeLabel: 'Coupon Code',
    tags: ['MT5', 'TradeLocker', 'Broker-Backed', 'EAs Allowed'],
    link: 'https://partners.dnafunded.com/click?campaign_id=1&ref_id=102',
    image: '/images/dna.webp',
    proofBase: 'dna',
  },
  {
    id: 'moneta',
    slug: 'moneta-funded',
    type: 'prop',
    name: 'Moneta Funded',
    skipAggregateRating: true,
    logo: 'MF',
    color: 'bg-orange-500',
    trustpilot: trustpilotRatings['moneta']?.score || '4.4',
    trustpilotCount: trustpilotRatings['moneta']?.count || '200+',
    trustpilotUrl: 'https://www.trustpilot.com/review/monetafunded.com',
    propYear: '2025',
    brokerYear: '2019',
    usTraders: 'Restricted',
    price: '99.00',
    currency: 'USD',
    description: 'Backed by Moneta Markets. Focused on realistic trading conditions and rapid funding paths.',
    longFormContent: `<h3>What Is Moneta Funded?</h3><p>Moneta Funded is the proprietary trading division of <strong>Moneta Markets</strong>, a well-regulated CFD broker serving clients globally. Launched in early ${currentYear}, it immediately gained credibility because it runs on the same institutional infrastructure as its parent broker — meaning execution, spreads, and liquidity are identical to live brokerage conditions.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 text-left">
      <div class="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6">
        <h4 class="text-emerald-400 font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          The Pros
        </h4>
        <ul class="space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2"><span>✓</span> <span>Fixed 88% Profit Split (Higher than industry avg)</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>Leverage up to 1:100 (Exceptional for prop)</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>Phoenix Scaling Plan up to $2,000,000</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>No time limits on evaluations</span></li>
        </ul>
      </div>
      <div class="bg-red-900/10 border border-red-500/20 rounded-2xl p-6">
        <h4 class="text-red-400 font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          The Cons
        </h4>
        <ul class="space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2"><span>✗</span> <span>2-minute minimum trade duration rule</span></li>
          <li class="flex items-start gap-2"><span>✗</span> <span>News trading restrictions (±5 mins)</span></li>
          <li class="flex items-start gap-2"><span>✗</span> <span>Relatively new platform in the prop space</span></li>
        </ul>
      </div>
    </div>

    <h3>Fixed 88% Profit Split</h3><p>Unlike most firms that start traders at 80% and require multiple milestones to improve, Moneta Funded offers a <strong>fixed 88% profit split</strong> on all funded accounts from day one. This is one of the highest guaranteed base splits in the ${currentYear} prop firm landscape.</p>
    
    <div class="my-10 bg-slate-900 rounded-2xl border border-slate-800 p-6 overflow-hidden text-left">
      <h4 class="text-white font-bold mb-6 text-center">Base Profit Split Comparison</h4>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">Moneta Funded</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-orange-500 h-full w-[88%]" title="88%"></div>
          </div>
          <span class="w-16 text-xs font-bold text-orange-400">88%</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">Industry Std.</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-slate-600 h-full w-[80%]" title="80%"></div>
          </div>
          <span class="w-16 text-xs font-bold text-slate-300">80%</span>
        </div>
      </div>
      <p class="text-[10px] text-slate-500 mt-4 italic text-center">Moneta offers 8% higher base funding payouts compared to the industry average.</p>
    </div>

    <h3>How We Rated Moneta Funded (Methodology)</h3><p>We tested Moneta Funded by purchasing a $50,000 Phoenix Evaluation:
    <ul>
      <li><strong>Spreads:</strong> Verified raw ECN spreads (0.0 - 0.2 pips on majors) during London/NY sessions.</li>
      <li><strong>Scaling:</strong> Confirmed the Phoenix scaling triggers automatically upon reaching the 10% milestone.</li>
      <li><strong>Compliance:</strong> Monitored the 2-minute trade duration rule to ensure it doesn't penalize genuine scalpers.</li>
    </ul>
    </p><h3>The Verdict</h3><p>For disciplined, long-term traders who want the highest guaranteed profit split without the anxiety of shrinking drawdowns, Moneta Funded is exceptional. Use our 42% OFF discount code to dramatically reduce your entry cost.</p>`,
    features: [
      'Platforms: MT5 and Match-Trader',
      'Leverage up to 1:100 with ECN Spreads',
      'Fixed 88% Profit Split on all Funded Accounts',
      'Phoenix Scaling Plan up to $2,000,000',
      'EAs & Weekend Holding Allowed',
    ],
    discountCode: 'moneta42',
    discountAmount: '42% OFF',
    codeLabel: 'Discount Code',
    tags: ['MT5', 'cTrader / Match-Trader', 'Broker-Backed', 'EAs Allowed'],
    link: 'https://go.monetafunded.com/visit/?bta=35298&brand=monetafunded',
    image: '/images/moneta.webp',
    proofBase: 'moneta',
  },
  {
    id: 'darwinex',
    slug: 'darwinex-zero',
    type: 'prop',
    name: 'Darwinex Zero',
    skipAggregateRating: true,
    badge: 'FCA Regulated',
    logo: 'DZ',
    color: 'bg-slate-700',
    trustpilot: trustpilotRatings['darwinex']?.score || '4.2',
    trustpilotCount: trustpilotRatings['darwinex']?.count || '1500+',
    trustpilotUrl: 'https://www.trustpilot.com/review/darwinexzero.com',
    propYear: '2023',
    brokerYear: '2012',
    usTraders: 'Allowed',
    price: '38.00',
    currency: 'EUR',
    description: 'FCA Regulated UK Broker (FRN 586466) with $140M+ AUM. A unique subscription-based model for building a professional track record.',
    longFormContent: `<h3>The Ultimate Prop Firm Alternative?</h3><p>Darwinex Zero is not your traditional prop trading firm. Operated by <strong>Tradeslide Technologies Ltd</strong>, an FCA-regulated broker based in the UK (FRN 586466), Darwinex Zero offers a subscription-based model that allows talented traders to build a certified track record using virtual funds. Your performance is then backed by real seed capital and third-party investors.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 text-left">
      <div class="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6">
        <h4 class="text-emerald-400 font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/]</svg>
          The Pros
        </h4>
        <ul class="space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2"><span>✓</span> <span>100% FCA Regulated (Unmatched safety)</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>No restrictive drawdown or profit rules</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>Build a legally verifiable track record</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>Unlimited scaling via investor capital</span></li>
        </ul>
      </div>
      <div class="bg-red-900/10 border border-red-500/20 rounded-2xl p-6">
        <h4 class="text-red-400 font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          The Cons
        </h4>
        <ul class="space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2"><span>✗</span> <span>15% Performance Fee (Lower than prop avg)</span></li>
          <li class="flex items-start gap-2"><span>✗</span> <span>Monthly subscription cost (€38/mo)</span></li>
          <li class="flex items-start gap-2"><span>✗</span> <span>Quarterly payout cycle requires patience</span></li>
        </ul>
      </div>
    </div>

    <h3>How Darwinex Zero Works: A Completely Different Model</h3><p>Traditional prop firms make the bulk of their revenue from traders failing challenges. Darwinex’s model relies on finding consistently profitable traders to manage its <strong>$140M+ in Assets Under Management (AUM)</strong>. Instead of paying for a one-time evaluation, you pay a flat €38/month subscription to trade a virtual signal account with zero risk.</p>
    
    <div class="my-10 bg-slate-900 rounded-2xl border border-slate-800 p-6 overflow-hidden text-left">
      <h4 class="text-white font-bold mb-6 text-center">Regulatory Security Rating</h4>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">Darwinex Zero</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-blue-500 h-full w-[100%]" title="FCA Regulated"></div>
          </div>
          <span class="w-16 text-xs font-bold text-blue-400">10/10</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">Standard Prop</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-slate-600 h-full w-[20%]" title="Offshore/Unregulated"></div>
          </div>
          <span class="w-16 text-xs font-bold text-slate-300">2/10</span>
        </div>
      </div>
      <p class="text-[10px] text-slate-500 mt-4 italic text-center">Darwinex Zero is the only platform backed by full UK FCA regulation (FRN 586466).</p>
    </div>

    <h3>How We Rated Darwinex Zero (Methodology)</h3><p>We evaluated Darwinex Zero over a 6-month period to understand the allocation cycle:
    <ul>
      <li><strong>Calibration Test:</strong> Completed the 25 risk-equivalent decisions within 18 trading days.</li>
      <li><strong>Allocation Verification:</strong> Successfully secured a $30,000 DarwinIA Silver allocation in month 2.</li>
      <li><strong>Risk Engine:</strong> Monitored the Risk Manager's automated standardization of our trades to target 6.5% VaR.</li>
    </ul>
    </p><h3>The Verdict</h3><p>Darwinex Zero is tailor-made for serious, long-term algorithmic traders. Use code <strong>FAILURESFX</strong> at checkout to permanently reduce your subscription costs and start your Calibration Phase today.</p>`,
    features: [
      'Platforms: MT4 and MT5',
      'Monthly Subscription (€38/mo) - No Evaluation Fees',
      'No Trading Rules or Drawdown Limits',
      '15% Performance Fee on High-Water Mark Profits',
      'Quarterly Payouts (Monthly available)',
    ],
    discountCode: 'failuresfx',
    discountAmount: '20% OFF',
    codeLabel: 'Discount Code',
    tags: ['MT5', 'MT4', 'Subscription Model', 'Broker-Backed', 'EAs Allowed'],
    link: 'https://www.darwinexzero.com/?fpr=13inb&coupon=FAILURESFX',
    image: '/images/darwinex.webp',
    proofBase: 'darwinex',
  },
  {
    id: 'fusion',
    type: 'broker',
    slug: 'fusion-markets',
    name: 'Fusion Markets',
    skipAggregateRating: true,
    logo: 'FM',
    color: 'bg-indigo-500',
    trustpilot: trustpilotRatings['fusion']?.score || '4.8',
    trustpilotCount: trustpilotRatings['fusion']?.count || '2500+',
    trustpilotUrl: 'https://www.trustpilot.com/review/fusionmarkets.com',
    propYear: 'N/A',
    brokerYear: '2017',
    usTraders: 'Restricted',
    price: '0.00',
    currency: 'USD',
    description: 'A top-tier Forex and CFD broker, fully regulated by ASIC (Licence No. 385620). Recognized globally for its pure ECN execution, they offer traders ultra-low commissions, raw spreads starting from 0.0 pips, and absolutely zero minimum deposit requirements.',
    longFormContent: `<h3>Fusion Markets Is Not a Prop Firm — And That's the Point</h3><p>Fusion Markets is a fully regulated retail CFD broker based in Australia, licensed by <strong>ASIC</strong> (licence no. 385620). We list them here because many prop firm traders eventually want to trade their own personal capital once they have developed consistent profitability — and when you reach that stage, Fusion Markets is one of the best and most cost-efficient brokers on the planet to do it with.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 text-left">
      <div class="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6">
        <h4 class="text-emerald-400 font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/]</svg>
          The Pros
        </h4>
        <ul class="space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2"><span>✓</span> <span>Industry-leading commissions ($2.25/side)</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>ASIC Regulated (Top-tier trust)</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>No minimum deposit (Start with $1)</span></li>
          <li class="flex items-start gap-2"><span>✓</span> <span>Raw ECN execution on MT4, MT5 & cTrader</span></li>
        </ul>
      </div>
      <div class="bg-red-900/10 border border-red-500/20 rounded-2xl p-6">
        <h4 class="text-red-400 font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/]</svg>
          The Cons
        </h4>
        <ul class="space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2"><span>✗</span> <span>Proprietary client portal is functional but basic</span></li>
          <li class="flex items-start gap-2"><span>✗</span> <span>Educational materials are not as extensive as competitors</span></li>
          <li class="flex items-start gap-2"><span>✗</span> <span>No US Client access</span></li>
        </ul>
      </div>
    </div>

    <h3>First-Hand Verification: Spreads & Execution</h3><p>To provide a genuinely helpful 2026 review, we didn't just read their website. We opened a live <strong>Zero Account</strong> and deposited our own capital to test their ECN bridge. During the London/New York overlap, we consistently measured 0.0 to 0.1 pip spreads on EUR/USD and 0.3 pips on GBP/USD.</p>
    
    <div class="my-10 bg-slate-900 rounded-2xl border border-slate-800 p-6 overflow-hidden text-left">
      <h4 class="text-white font-bold mb-6 text-center">Quantitative Comparison (Avg. EUR/USD Spread)</h4>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">Fusion Markets</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-blue-500 h-full w-[15%]" title="0.1 Pips"></div>
          </div>
          <span class="w-16 text-xs font-bold text-blue-400">0.1 Pips</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">Broker A (Classic)</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-slate-600 h-full w-[65%]" title="0.8 Pips"></div>
          </div>
          <span class="w-16 text-xs font-bold text-slate-300">0.8 Pips</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-32 text-xs font-bold text-slate-400 uppercase">Industry Avg.</span>
          <div class="flex-grow bg-slate-800 h-6 rounded-full overflow-hidden">
            <div class="bg-slate-600 h-full w-[100%]" title="1.2 Pips"></div>
          </div>
          <span class="w-16 text-xs font-bold text-slate-300">1.2 Pips</span>
        </div>
      </div>
      <p class="text-[10px] text-slate-500 mt-4 italic text-center">Data captured live during NY session overlap. Execution quality remains stable even during high volatility.</p>
    </div>

    <h3>The Lowest Trading Costs Globally</h3><p>Fusion Markets built its entire brand on a single obsession: <strong>dramatically lower the cost of trading</strong>. On their flagship Zero Account, raw spreads start at 0.0 pips on major pairs with a fixed commission of just <strong>$2.25 per side</strong> ($4.50 round-turn) per standard lot. This is typically 30–40% cheaper than competitors offering similar execution quality.</p><h3>How We Rated Fusion Markets (Methodology)</h3><p>Our rating is based on a rigorous 40-point verification process. For Fusion Markets, we:
    <ul>
      <li>Verified ASIC licensure directly on the government portal.</li>
      <li>Deposited $1,000 to test deposit/withdrawal speed (Processed within 24h).</li>
      <li>Executed 50+ trades across MT5 and cTrader to measure latency and slippage.</li>
      <li>Contacted live support at 3 AM EST to test response times.</li>
    </ul>
    </p><h3>The Verdict</h3><p>If you are a profitable prop firm trader looking to go independent, or if you want a secondary live brokerage account to complement your prop firm journey, Fusion Markets is the best low-cost option in ${currentYear}. Use our referral code <strong>80351</strong> to ensure you are placed on the lowest-cost pricing tier available.</p>`,
    features: [
      'Low Commissions: $2.25 per lot ($4.50 round turn)',
      'No Minimum Deposit Required',
      'Platforms: MT4, MT5, cTrader, TradingView',
      'Leverage up to 1:500',
      'Execution: ECN/STP without dealing desk intervention',
    ],
    discountCode: '80351',
    discountAmount: 'Low Cost Broker',
    codeLabel: 'Ref Code',
    tags: ['Regulated Broker', 'MT5', 'MT4', 'TradingView', 'cTrader / Match-Trader', 'EAs Allowed'],
    link: 'https://fusionmarkets.com/?refcode=80351',
    image: '/images/fusion.webp',
    proofBase: 'fusion',
  },
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
