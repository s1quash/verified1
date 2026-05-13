import React, { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

import { currentYear } from '../../utils/dateUtils.js';

export default function Contact({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 flex flex-col">
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
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
              <MessageSquare size={14} /> Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gradient">Contact Us</h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Have questions about a specific prop firm, need help claiming your Custom MT5 Tool Suite, or want to discuss a partnership? 
              Drop us a message and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <div className="bg-blue-500/20 p-4 rounded-full text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email Us</h3>
                  <a href="mailto:support@verifiedpropfirm.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                    support@verifiedpropfirm.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <form name="contact-form-legacy" method="POST" data-cloudflare-static className="space-y-6 relative z-10">
              <input type="hidden" name="_subject" value="New Contact Message!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="First Name"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="Last Name"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="Email"
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="trader@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Subject</label>
                  <select name="Subject" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Claim Free Tool Suite</option>
                    <option>Prop Firm Partnership</option>
                    <option>Report an Issue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    name="Message"
                    required
                    rows="4"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="premium-button w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg flex justify-center items-center gap-2 shadow-lg shadow-blue-600/20 text-lg transition-all"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
          </div>

        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-8 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 text-xs">
          &copy; {currentYear} VerifiedPropFirm.com. All rights reserved. Built for Traders.
        </div>
      </footer>
    </div>
  );
}
