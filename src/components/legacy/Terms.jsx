import React from 'react';
import { ArrowLeft, Scale, ShieldAlert, FileText, AlertTriangle } from 'lucide-react';

import { currentYear } from '../../utils/dateUtils.js';

export default function Terms({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="VerifiedPropFirm Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight hidden sm:block">VerifiedPropFirm<span className="text-blue-500">.com</span></span>
          </div>
          <button onClick={onBack} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={18} /> Back to Home
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
            <Scale size={14} /> Legal Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gradient">Terms and Conditions</h1>
          <p className="text-slate-400">Last updated: May {currentYear}</p>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><FileText size={24} className="text-blue-500" /> 1. Acceptance of Terms</h2>
            <p>
              By accessing and using VerifiedPropFirm.com ("we", "our", "us", or "the Website"), you accept and agree to be bound by the terms and provision of this agreement. 
              In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle size={24} className="text-orange-500" /> 2. No Financial Advice</h2>
            <p className="mb-4">
              <strong>All information provided on VerifiedPropFirm.com is for educational and informational purposes only.</strong> 
              Nothing contained on our Website constitutes financial, investment, legal, tax, or other professional advice.
            </p>
            <p>
              Trading Forex, CFDs, and other financial instruments carries a high level of risk and may not be suitable for all investors. 
              The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, 
              level of experience, and risk appetite. You should not invest money that you cannot afford to lose.
            </p>
          </section>

          <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">3. Affiliate Disclosure</h2>
            <p>
              VerifiedPropFirm.com acts as an affiliate for various proprietary trading firms and brokers listed on this Website. 
              This means that if you click on a link or use a discount code provided on our Website and subsequently make a purchase or open an account, 
              we may receive a commission at no additional cost to you. 
            </p>
            <p className="mt-4">
              While we strive to provide accurate, unbiased, and objective comparison data, the compensation we receive may influence the placement 
              or prominence of firms listed on the Website.
            </p>
          </section>

          <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">4. Custom MT5 Tool Suite Promotion</h2>
            <p>
              Users who register with a partner firm using our affiliate links may be eligible to receive our "Custom MT5 Tool Suite" for free. 
              To claim these tools, users must submit their valid evaluation account number through the verification form on our Website.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Tools are provided "as-is" without warranty of any kind, express or implied.</li>
              <li>We hold no liability for any financial losses incurred while using these indicators. Past performance is not indicative of future results.</li>
              <li>We reserve the right to deny the distribution of tools if we cannot verify your registration through our affiliate network.</li>
            </ul>
          </section>

          <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><ShieldAlert size={24} className="text-red-500" /> 5. Limitation of Liability</h2>
            <p>
              VerifiedPropFirm.com, its owners, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, 
              or punitive damages arising out of your access to, or use of, the Website. 
            </p>
            <p className="mt-4">
              We are not responsible for the actions, platform performance, payout denials, rule changes, or any disputes you may have with the third-party 
              prop firms or brokers listed on this site. Any contract or agreement you enter into is strictly between you and the respective third-party company.
            </p>
          </section>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-8 pb-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 text-xs">
          &copy; {currentYear} VerifiedPropFirm.com. All rights reserved. Built for Traders.
        </div>
      </footer>
    </div>
  );
}
