import React from 'react';
import { Send, Bot, Sparkles, ListTodo, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function DecisionHub() {
  return (
    <div className="flex flex-col h-full">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-8 py-10 space-y-8 max-w-4xl mx-auto w-full no-scrollbar">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="glass-panel p-4 rounded-2xl rounded-tr-none max-w-[80%]">
            <p className="text-sm leading-relaxed text-on-surface">
              Simulate a phased market entry into APAC for our carbon-offset SaaS, targeting Singapore and Sydney initially. Provide a risk-adjusted capital allocation model.
            </p>
          </div>
        </div>

        {/* Agent Reasoning Log */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-primary-container">
            <Bot size={16} />
            <span className="font-label text-[10px] uppercase tracking-widest font-bold">Consensus Process Initiated</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-4 rounded-xl border-l-2 border-primary-container"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-label text-primary-container uppercase">Collector Agent</span>
                <span className="text-[10px] text-on-surface-variant">0.4s</span>
              </div>
              <p className="text-[12px] text-on-surface-variant">Scraped 14k data points from ACRA (Singapore) and ASIC (Australia). Identified 22 direct competitors.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-4 rounded-xl border-l-2 border-secondary"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-label text-secondary uppercase">Analyst Agent</span>
                <span className="text-[10px] text-on-surface-variant">1.2s</span>
              </div>
              <p className="text-[12px] text-on-surface-variant">Pattern detected: B2B adoption in NSW is growing at 14% MoM vs Singapore's 8.2% stability.</p>
            </motion.div>
          </div>
        </div>

        {/* AI Response */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-start"
        >
          <div className="bg-surface-container-low border border-outline-variant/10 p-6 rounded-2xl rounded-tl-none w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center">
                <Sparkles size={18} className="text-on-primary-container" />
              </div>
              <div>
                <h3 className="font-headline text-sm font-bold text-primary-container">Decionyx Strategic Output</h3>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Unified Agent Consensus (High Confidence)</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">
                Based on multi-agent synthesis, a <strong className="text-primary-container">Sydney-first</strong> pilot is recommended over Singapore due to the current regulatory tailwinds in Australia's carbon tax legislation.
              </p>
              
              <div className="grid grid-cols-2 gap-6 my-4">
                <div className="p-3 rounded-lg bg-surface-container-highest/50 border border-outline-variant/10">
                  <div className="text-[10px] text-on-surface-variant uppercase mb-1">Projected ROI (12m)</div>
                  <div className="text-xl font-headline font-bold text-primary-container">284%</div>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-highest/50 border border-outline-variant/10">
                  <div className="text-[10px] text-on-surface-variant uppercase mb-1">Risk Volatility</div>
                  <div className="text-xl font-headline font-bold text-secondary">Low-Mid</div>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10">
                <h4 className="text-xs font-bold mb-3 flex items-center gap-2">
                  <ListTodo size={14} className="text-primary-container" />
                  Implementation Milestones
                </h4>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-primary-container"></span>
                    Phase 1: Operational setup in Sydney CBD (Month 1-3)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-primary-container"></span>
                    Phase 2: Regional scaling via Singapore Hub (Month 4-8)
                  </li>
                </ul>
              </div>
            </div>

            {/* Retrieved Evidence */}
            <div className="mt-6 pt-6 border-t border-outline-variant/10">
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest block mb-3">Retrieved Evidence</span>
              <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                <div className="flex-shrink-0 w-48 h-24 rounded-lg bg-cover bg-center border border-outline-variant/20 relative group overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/data1/400/200')" }}>
                  <div className="absolute inset-0 bg-background/60 group-hover:bg-background/20 transition-all flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white px-2 text-center uppercase">NSW Carbon Forecast 2025</span>
                  </div>
                </div>
                <div className="flex-shrink-0 w-48 h-24 rounded-lg bg-cover bg-center border border-outline-variant/20 relative group overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/data2/400/200')" }}>
                  <div className="absolute inset-0 bg-background/60 group-hover:bg-background/20 transition-all flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white px-2 text-center uppercase">Singapore Density Map</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Prompt Bar Area */}
      <div className="p-8 pt-0">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Suggestions */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {[
              "Stress test this model against a 20% AUD inflation",
              "Compare with EMEA entry costs",
              "Generate legal compliance checklist"
            ].map((text, i) => (
              <button key={i} className="flex-shrink-0 px-4 py-2 rounded-full border border-outline-variant/20 text-[11px] font-medium text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all whitespace-nowrap">
                "{text}"
              </button>
            ))}
          </div>
          {/* Input */}
          <div className="relative">
            <input 
              type="text" 
              className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all text-sm outline-none shadow-xl pr-16"
              placeholder="Query the Oracle..."
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-xl bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center text-on-primary-container shadow-lg hover:scale-105 transition-transform">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
