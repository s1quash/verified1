import React, { useState, useEffect } from 'react';
import { Copy, Info, CheckCircle2, X, Maximize2 } from 'lucide-react';

const PROOF_SUFFIXES = ['', '2', '3', '4', '5'];

export default function CheckoutCTA({ firm }) {
  const [copiedCode, setCopiedCode] = useState(null);
  const [proofImages, setProofImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    PROOF_SUFFIXES.forEach((suffix) => {
      const candidates = [
        `/images/proofs/${firm.proofBase}-proof${suffix}.png`,
        `/images/proofs/${firm.proofBase}-proof${suffix}.jpg`,
        `/images/proofs/${firm.proofBase}-proof${suffix}.jpeg`,
      ];

      let idx = 0;
      const tryNext = () => {
        if (idx >= candidates.length) return;
        const img = new Image();
        img.onload = () => {
          setProofImages((prev) =>
            prev.find((p) => p.suffix === suffix)
              ? prev
              : [...prev, { suffix, src: candidates[idx] }].sort((a, b) => a.suffix.localeCompare(b.suffix))
          );
        };
        img.onerror = () => {
          idx++;
          tryNext();
        };
        img.src = candidates[idx];
      };
      tryNext();
    });
  }, [firm.proofBase]);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const isFusion = firm.slug === 'fusion-markets';

  return (
    <section id="checkout-cta" className="relative bg-[#0b1222] border-2 border-blue-500/20 rounded-2xl p-6 md:p-8 overflow-hidden shadow-2xl">
      {/* Alert Box */}
      {firm.importantNote && (
        <div className="bg-[#111c33] border border-blue-500/20 rounded-xl p-4 mb-8 flex gap-4 items-start">
          <Info className="flex-shrink-0 text-blue-400 mt-0.5" size={20} />
          <p className="text-slate-300 text-sm leading-relaxed">
            {firm.importantNote}
          </p>
        </div>
      )}

      <div className="space-y-8 mb-10">
        {/* Primary Discount Code */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">
              {firm.codeLabel || 'Discount Code'}:
            </h4>
            <div className="text-blue-400 font-black text-xl">{firm.discountAmount}</div>
            {firm.expiryDate && (
              <div className="text-red-500 text-[10px] font-black uppercase tracking-[0.1em] mt-1 animate-pulse">
                EXPIRES: {firm.expiryDate}
              </div>
            )}
          </div>
          <button
            onClick={() => handleCopy(firm.discountCode)}
            className="flex items-center justify-between gap-4 bg-[#1e293b] hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-xl transition-all group min-w-[200px]"
          >
            <span className="font-mono font-black text-blue-400 text-lg tracking-widest">
              {firm.discountCode}
            </span>
            {copiedCode === firm.discountCode ? (
              <CheckCircle2 size={18} className="text-emerald-400" />
            ) : (
              <Copy size={18} className="text-slate-500 group-hover:text-white transition-colors" />
            )}
          </button>
        </div>

        {/* Secondary Affiliate Code (if exists) */}
        {firm.secondaryDiscountCode && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/50">
            <div>
              <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">
                {firm.secondaryCodeLabel || 'Affiliate Code'}:
              </h4>
              <div className="text-blue-400 font-black text-xl">{firm.secondaryDiscountAmount}</div>
            </div>
            <button
              onClick={() => handleCopy(firm.secondaryDiscountCode)}
              className="flex items-center justify-between gap-4 bg-[#1e293b] hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-xl transition-all group min-w-[200px]"
            >
              <span className="font-mono font-black text-blue-400 text-lg tracking-widest">
                {firm.secondaryDiscountCode}
              </span>
              {copiedCode === firm.secondaryDiscountCode ? (
                <CheckCircle2 size={18} className="text-emerald-400" />
              ) : (
                <Copy size={18} className="text-slate-500 group-hover:text-white transition-colors" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Proof Gallery */}
      {proofImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {proofImages.slice(0, 3).map((img, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedImage(img.src)}
              className="relative group overflow-hidden rounded-xl border border-slate-800 bg-slate-950 aspect-video sm:aspect-auto sm:h-32 text-left cursor-zoom-in"
            >
              <img
                src={img.src}
                loading="lazy"
                alt={`${firm.name} payout proof ${i + 1}`}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <Maximize2 size={24} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size verification proof" 
            className="max-w-full max-h-full rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Main CTA Button */}
      <a
        href={firm.link}
        rel="sponsored"
        className="block w-full bg-white hover:bg-slate-100 text-slate-900 font-black py-5 rounded-2xl text-center text-2xl transition-all shadow-xl shadow-white/5 hover:-translate-y-1 active:scale-95"
      >
        {isFusion ? 'Open Account' : 'Start Challenge'}
      </a>
    </section>
  );
}
