import React, { useState } from 'react';
import FirmCard from './FirmCard.jsx';

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
  'Subscription Model',
];

export default function FirmGrid({ firms, title, subtitle, compact = false }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const safeFirms = Array.isArray(firms) ? firms : [];

  const filteredFirms = safeFirms.filter((firm) => {
    if (activeFilter === 'All') return true;
    if (!firm.tags) return false;
    
    if (activeFilter === 'cTrader / Match-Trader') {
      return firm.tags.some((t) =>
        ['cTrader', 'Match-Trader', 'cTrader / Match-Trader'].includes(t)
      );
    }
    return firm.tags.includes(activeFilter);
  });

  return (
    <div>
      {/* Title + Filters row — matches live site layout */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
        {title && (
          <div className="shrink-0">
            <h2 className="text-3xl font-bold mb-1">{title}</h2>
            {subtitle && <p className="text-slate-400">{subtitle}</p>}
          </div>
        )}
        <div className="flex flex-wrap gap-2 md:justify-end">
          {filters.map((filter) => (
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredFirms.map((firm) => (
          <FirmCard key={firm.id} firm={firm} compact={compact} />
        ))}
      </div>
    </div>
  );
}
