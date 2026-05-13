import React, { useState, useEffect } from 'react';
import { Copy, Zap, ShieldCheck, Info, Maximize2 } from 'lucide-react';

const PROOF_SUFFIXES = ['', '2', '3', '4', '5'];

export default function FirmCard({ firm, hideReviewLink = false, compact = false }) {
  const [copiedCode, setCopiedCode] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [proofImages, setProofImages] = useState([]); // [{suffix, src}] confirmed loaded

  useEffect(() => {
    // After hydration, imperatively probe each possible image URL.
    // This avoids onLoad-before-hydration race conditions in Astro.
    PROOF_SUFFIXES.forEach((suffix) => {
      const candidates = [
        `/images/proofs/${firm.proofBase}-proof${suffix}.webp`,
        `/images/proofs/${firm.proofBase}-proof${suffix}.png`,
        `/images/proofs/${firm.proofBase}-proof${suffix}.jpg`,
        `/images/proofs/${firm.proofBase}-proof${suffix}.jpeg`,
      ];

      let idx = 0;

      const tryNext = () => {
        if (idx >= candidates.length) return; // all failed, do nothing

        const img = new Image();
        img.onload = () => {
          // Confirmed this URL works — add to state
          setProofImages((prev) =>
            prev.find((p) => p.suffix === suffix)
              ? prev
              : [...prev, { suffix, src: candidates[idx] }]
          );
        };
        img.onerror = () => {
          idx++;
          tryNext(); // try next extension
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

  const count = proofImages.length;

  const gridClass =
    count === 1 ? 'grid-cols-1' :
    count === 2 ? 'grid-cols-2' :
    'grid-cols-3';

  const heightClass =
    count === 1 ? 'h-52 sm:h-60' : 'h-24 sm:h-32';

  if (!firm || typeof firm !== 'object') {
    return null;
  }

  return (
    <>
      <article
        className={`premium-card flex flex-col relative transition-all duration-300 ${
          firm.featured
            ? 'ring-2 ring-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)] md:-translate-y-2'
            : ''
        }`}
      >
        {(firm.featured || firm.badge) && (
          <div className="absolute -top-3 -right-3 z-20">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-blue-400/50 flex items-center gap-1.5 shadow-blue-500/50 animate-pulse">
              <Zap size={14} className="fill-current" />
              <span>{firm.badge || 'Top Pick'}</span>
            </div>
          </div>
        )}

        <div className="h-48 overflow-hidden relative border-b border-slate-800 rounded-t-3xl block group">
          <img
            src={firm.image}
            alt={`Trading platform and dashboard preview for ${firm.name} prop firm evaluation`}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            fetchPriority={hideReviewLink ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
        </div>

        <div className="p-6 flex-grow bg-slate-900">
          <div className="flex justify-between items-start mb-4">
            <div>
              <a href={firm.type === 'broker' ? `/brokers/${firm.slug}` : `/prop-firms/${firm.slug}`} className="hover:text-blue-400 transition-colors">
                <h3 className="text-xl font-bold">{firm.name}</h3>
              </a>
              {firm.trustpilot && (
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex text-yellow-500 text-[10px]">
                    {'★'.repeat(Math.max(0, Math.floor(Number(firm.trustpilot || 0)) || 0))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-300">
                    {firm.trustpilot}
                    <span className="text-slate-400 font-medium ml-1">
                      ({firm.trustpilotCount} reviews) on Trustpilot
                    </span>
                  </span>
                </div>
              )}
              <div className="flex flex-wrap gap-1 mt-2">
                {Array.isArray(firm.tags) && firm.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* US Traders badge */}
            {firm.usTraders && (
              <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border mt-2 ${
                firm.usTraders.includes('Restricted')
                  ? 'bg-red-500/10 border-red-500/20 text-red-400'
                  : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              }`}>
                <span>🌎</span>
                <span>US: {firm.usTraders.includes('Restricted') ? 'Restricted' : 'Allowed'}</span>
              </div>
            )}
          </div>

          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{firm.description}</p>
          
          <div className="flex gap-4 mb-5 py-1.5 px-3 rounded-lg bg-slate-950/30 border border-slate-800/50 w-fit">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-slate-400 uppercase font-bold tracking-tight">Prop:</span>
              <span className="text-xs font-bold text-slate-400">{firm.propYear}</span>
            </div>
            <div className="w-px h-3 bg-slate-800 self-center"></div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-slate-400 uppercase font-bold tracking-tight">Broker:</span>
              <span className="text-xs font-bold text-slate-400">{firm.brokerYear}</span>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {Array.isArray(firm.features) && firm.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                <div className="mt-0.5 p-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <ShieldCheck size={14} className="text-blue-500" />
                </div>
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 bg-slate-950/80 border-t border-slate-800">
          {firm.importantNote && (
            <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-3.5 mb-5 text-xs text-blue-200/90 leading-relaxed flex gap-3 items-start backdrop-blur-sm">
              <Info size={16} className="shrink-0 mt-0.5 text-blue-400" />
              <p>{firm.importantNote}</p>
            </div>
          )}

          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-400">
                  {firm.codeLabel || 'Promo Code'}:
                </span>
                <span className="text-xs text-blue-400 font-medium">{firm.discountAmount}</span>
                {firm.expiryDate && (
                  <span className="text-[10px] text-red-500 font-bold mt-0.5 animate-pulse uppercase tracking-wider">
                    Expires: {firm.expiryDate}
                  </span>
                )}
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

          {/* Proof screenshots — only rendered if not in compact mode */}
          {!compact && count > 0 && (
            <div className={`mb-4 grid gap-2 ${gridClass}`}>
              {[...proofImages]
                .sort((a, b) => PROOF_SUFFIXES.indexOf(a.suffix) - PROOF_SUFFIXES.indexOf(b.suffix))
                .map(({ suffix, src }, idx) => (
                  <div
                    key={suffix}
                    className={`rounded-lg overflow-hidden border border-slate-800/50 bg-slate-900 cursor-zoom-in relative group ${heightClass}`}
                  >
                    <img
                      src={src}
                      loading="lazy"
                      width={200}
                      height={120}
                      alt={`Verified ${firm.name} discount code proof screenshot ${idx + 1}`}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                      onClick={() => setSelectedImage(src)}
                    />
                    <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center transition-all duration-300 pointer-events-none">
                      <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 p-2 rounded-full border border-white/30 shadow-2xl backdrop-blur-md transform scale-90 group-hover:scale-100 transition-transform">
                          <Maximize2 size={20} className="text-white" />
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">View Proof</span>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          )}

          {compact && count > 0 && (
            <a 
              href={firm.type === 'broker' ? `/brokers/${firm.slug}#how-to-apply` : `/prop-firms/${firm.slug}#how-to-apply`}
              className="flex items-center justify-between p-4 mb-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group shadow-inner"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none mb-1.5">Checkout Verified</span>
                  <span className="block text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">Read Review & View Proof →</span>
                </div>
              </div>
              <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 group-hover:bg-slate-700 transition-colors">
                <Maximize2 size={16} className="text-slate-400 group-hover:text-white" />
              </div>
            </a>
          )}

          <div className="flex flex-col gap-3">
            <a
              href={firm.link}
              rel="sponsored"
              className="premium-button w-full block text-center bg-white text-slate-950 font-bold py-3 hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {firm.tags.includes('Regulated Broker') ? 'Open Account' : 'Start Challenge'}
            </a>
            {!hideReviewLink && (
              <a
                href={firm.type === 'broker' ? `/brokers/${firm.slug}` : `/prop-firms/${firm.slug}`}
                className="w-full block text-center bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold py-3 rounded-xl border border-slate-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Info size={16} />
                Read Full Review
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Expanded proof view"
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-slate-700/50"
          />
          <div className="absolute top-6 right-6 text-white/50 hover:text-white bg-black/50 p-2 rounded-full backdrop-blur-md transition-colors">
            Close
          </div>
        </div>
      )}
    </>
  );
}
