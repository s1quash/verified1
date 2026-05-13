import React from 'react';
import { ArrowLeft, ShieldCheck, Eye, Database, Lock } from 'lucide-react';

import { currentYear } from '../../utils/dateUtils.js';

export default function Privacy({ onBack }) {
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
            <ShieldCheck size={14} /> Data Protection
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gradient">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: May {currentYear}</p>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <p className="text-lg">
              At VerifiedPropFirm.com, accessible from https://verifiedpropfirm.com, one of our main priorities is the privacy of our visitors. 
              This Privacy Policy document contains types of information that is collected and recorded by VerifiedPropFirm.com and how we use it.
            </p>
            <p className="mt-4">
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
          </section>

          <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Database size={24} className="text-blue-500" /> Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you 
              at the point we ask you to provide your personal information.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Free Tools Form:</strong> When you request our free Custom MT5 Tool Suite, we collect your email address and your evaluation account number to verify your affiliate registration and deliver the files.</li>
              <li><strong>Usage Data:</strong> We automatically collect standard usage data (IP address, browser type, pages visited) via Google Analytics to improve the quality of our Website.</li>
            </ul>
          </section>

          <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Eye size={24} className="text-blue-500" /> How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website.</li>
              <li>Deliver the requested Custom MT5 Tool Suite files to your email address.</li>
              <li>Verify that your prop firm registration was completed via our affiliate links.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Prevent fraud.</li>
            </ul>
          </section>

          <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Lock size={24} className="text-blue-500" /> Cookies and Web Beacons</h2>
            <p>
              Like any other website, VerifiedPropFirm.com uses 'cookies'. These cookies are used to store information including visitors' preferences, 
              and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing 
              our web page content based on visitors' browser type and/or other information.
            </p>
            <p className="mt-4 font-semibold text-white">Affiliate Tracking Cookies</p>
            <p>
              Because we are an affiliate site, when you click on links pointing to third-party prop firms or brokers, a tracking cookie is placed in your browser. 
              This allows the third party to identify that you were referred by VerifiedPropFirm.com so that we may earn a commission. These cookies are controlled 
              by the respective third parties.
            </p>
          </section>

          <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">Third Party Privacy Policies</h2>
            <p>
              VerifiedPropFirm.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies 
              of these third-party prop firms and brokers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
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
