import React, { useState } from 'react';
import { Code, Zap, ShieldCheck, CheckCircle2, Bot, Send, ArrowLeft } from 'lucide-react';

export default function Services({ onBack }) {
  const [formStatus, setFormStatus] = useState('idle');

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

      <main className="py-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-48 bg-blue-600/20 blur-[100px] -z-10 rounded-full"></div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
            <Bot size={16} /> Professional Development
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Custom <span className="text-gradient">MQL5 EAs & Indicators</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Automate your edge. We build bespoke Expert Advisors (EAs) and custom indicators specifically designed to pass prop firm evaluations and manage funded accounts.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
              <Bot className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Limitless Automation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              If your trading strategy can be expressed in clear, mathematical logic, we can automate it. We turn any mechanical system into a fully functional EA.
            </p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
              <Zap className="text-indigo-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">High-Speed Execution</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Optimized MQL5 architecture ensures your algorithms react to market conditions instantly with minimal latency.
            </p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
              <Code className="text-violet-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Highly Affordable</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional algorithmic trading shouldn't break the bank. Our custom programming services are extremely accessible, with pricing starting from just $30 USD.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">The Development Process</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="text-lg font-bold mb-1">Requirement Gathering</h4>
                <p className="text-slate-400 text-sm">You provide the exact logic, entry/exit parameters, and risk management rules for your strategy.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="text-lg font-bold mb-1">Development & Backtesting</h4>
                <p className="text-slate-400 text-sm">We code the algorithm in MQL5 and run preliminary historical backtests to ensure technical stability.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="text-lg font-bold mb-1">Delivery & Revisions</h4>
                <p className="text-slate-400 text-sm">You receive the compiled `.ex5` file (or source code) and we provide revisions to ensure the EA behaves exactly as requested.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
            <p className="text-slate-400">Describe your strategy in detail. We will review your requirements and get back to you with a development timeline and price estimate.</p>
          </div>

          <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <form 
              name="service-request-legacy"
              method="POST"
              data-cloudflare-static
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New MQL5 Development Request!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Project Type</label>
                <select 
                  name="project_type" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="Expert Advisor (EA)">Expert Advisor (EA)</option>
                  <option value="Custom Indicator">Custom Indicator</option>
                  <option value="Trade Management Panel">Trade Management Panel</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Strategy Details</label>
                <textarea 
                  name="details" 
                  required 
                  rows="6"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Please describe your entry rules, exit rules, risk management, and the platforms/firms you intend to use this on..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full premium-button bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all group"
              >
                Submit Project Request <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
