import React from 'react';
import { 
  Play, 
  Download, 
  Settings, 
  Bell, 
  DollarSign, 
  IterationCcw, 
  BarChart3,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function SimulationLab() {
  return (
    <div className="p-8 space-y-8 max-w-[1200px] mx-auto w-full">
      {/* Title Section */}
      <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
        <div className="flex min-w-72 flex-col gap-2">
          <h1 className="text-on-surface text-5xl font-black leading-tight tracking-[-0.033em] font-headline">Predictive Simulation Engine</h1>
          <p className="text-primary-container/80 text-lg font-normal leading-normal font-body">Monte Carlo Analysis v4.2 // Active Workspace</p>
        </div>
        <div className="flex gap-3">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-surface-container-high text-on-surface text-sm font-bold border border-outline-variant/20 hover:bg-surface-container-highest transition-colors">
            <Download size={18} className="mr-2" />
            Export Report
          </button>
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary-container text-on-primary-container text-sm font-black uppercase tracking-widest shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all">
            <Play size={18} className="mr-2 fill-current" />
            Run Simulation
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Scenario Configuration */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/15 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
              <h3 className="text-on-surface text-lg font-bold font-headline uppercase tracking-wider">Scenario Config</h3>
              <span className="text-primary-container text-xs font-label bg-primary-container/10 px-2 py-1 rounded">LIVE</span>
            </div>
            {/* Tab Switcher */}
            <div className="flex bg-surface-container-lowest rounded-lg p-1">
              <button className="flex-1 py-2 text-xs font-bold rounded bg-surface-container text-on-surface">INPUTS</button>
              <button className="flex-1 py-2 text-xs font-bold rounded text-on-surface-variant hover:text-on-surface transition-colors">VARIABLES</button>
              <button className="flex-1 py-2 text-xs font-bold rounded text-on-surface-variant hover:text-on-surface transition-colors">LIMITS</button>
            </div>
            {/* Form Inputs */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-on-surface-variant text-xs font-bold uppercase tracking-widest font-label">Initial Capital (USD)</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-lowest border-none rounded-lg text-on-surface font-headline text-xl focus:ring-1 focus:ring-primary-container p-4" 
                    type="text" 
                    defaultValue="2,500,000.00"
                  />
                  <DollarSign size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-container/50" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-on-surface-variant text-xs font-bold uppercase tracking-widest font-label">Iteration Count</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-lowest border-none rounded-lg text-on-surface font-headline text-xl focus:ring-1 focus:ring-primary-container p-4" 
                    type="text" 
                    defaultValue="100,000"
                  />
                  <IterationCcw size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-container/50" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-on-surface-variant text-xs font-bold uppercase tracking-widest font-label">Risk Tolerance</label>
                <input 
                  className="w-full h-1 bg-surface-container-lowest rounded-lg appearance-none cursor-pointer accent-primary-container" 
                  type="range" 
                />
                <div className="flex justify-between text-[10px] font-label text-on-surface-variant">
                  <span>CONSERVATIVE</span>
                  <span>AGGRESSIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Confidence Score Gauge */}
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/15 flex flex-col items-center text-center">
            <h3 className="text-on-surface-variant text-xs font-bold uppercase tracking-widest font-label mb-6">Model Confidence Score</h3>
            <div className="relative size-40 flex items-center justify-center">
              <svg className="size-full transform -rotate-90">
                <circle className="text-surface-container-highest" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="8"></circle>
                <motion.circle 
                  initial={{ strokeDashoffset: 440 }}
                  animate={{ strokeDashoffset: 44 }}
                  className="text-primary-container neon-glow-primary" 
                  cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="439.8" strokeWidth="12"
                ></motion.circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-on-surface text-4xl font-black font-headline">92<span className="text-lg opacity-50">%</span></span>
                <span className="text-[10px] text-primary-container font-bold uppercase tracking-tighter">OPTIMIZED</span>
              </div>
            </div>
            <p className="mt-6 text-on-surface-variant text-xs leading-relaxed italic">Proprietary logic indicates high statistical relevance across 14 vectors.</p>
          </div>
        </div>

        {/* Right Column: Charts & Visualization */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Large Monte Carlo Chart */}
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/15 h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-on-surface text-lg font-bold font-headline uppercase tracking-wider">Monte Carlo Probability Density</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary-container neon-glow-primary"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">Projected Range</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(223,183,255,0.5)]"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">Mean Result</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full relative overflow-hidden bg-surface-container-lowest/50 rounded-lg p-4">
              {/* Simplified Chart Representation */}
              <svg className="w-full h-full" viewBox="0 0 800 300">
                <line stroke="rgba(58, 73, 75, 0.2)" strokeWidth="1" x1="0" x2="800" y1="280" y2="280"></line>
                <line stroke="rgba(58, 73, 75, 0.1)" strokeWidth="1" x1="0" x2="800" y1="200" y2="200"></line>
                <line stroke="rgba(58, 73, 75, 0.1)" strokeWidth="1" x1="0" x2="800" y1="120" y2="120"></line>
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                  className="neon-glow-primary" 
                  d="M 0 280 Q 200 280 300 150 T 450 50 T 600 200 T 800 280" 
                  fill="none" stroke="#00F2FF" strokeWidth="3"
                ></motion.path>
                <line stroke="#dfb7ff" strokeDasharray="4" strokeWidth="2" x1="450" x2="450" y1="0" y2="280"></line>
              </svg>
              {/* Tooltip Overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-10 left-[55%] glass-panel border border-primary-container/20 p-3 rounded shadow-xl"
              >
                <p className="text-[10px] font-bold text-primary-container mb-1">MOST LIKELY OUTCOME</p>
                <p className="text-on-surface text-lg font-headline font-bold">$3.42M Revenue</p>
                <p className="text-[10px] text-on-surface-variant">P-Value: 0.042 (Highly Significant)</p>
              </motion.div>
            </div>
          </div>

          {/* Sensitivity Heatmap */}
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/15 flex flex-col">
            <h3 className="text-on-surface text-lg font-bold font-headline uppercase tracking-wider mb-6">Sensitivity Analysis Heatmap</h3>
            <div className="grid grid-cols-5 gap-2">
              {/* Labels Y */}
              <div className="col-span-1 flex flex-col justify-between text-[10px] font-bold text-on-surface-variant py-2">
                <span>MARKET VOLATILITY</span>
                <span>INTEREST RATES</span>
                <span>ACQUISITION COST</span>
                <span>CHURN RATE</span>
              </div>
              {/* Heatmap Grid */}
              <div className="col-span-4 grid grid-cols-6 grid-rows-4 gap-2">
                {Array.from({ length: 24 }).map((_, i) => {
                  const row = Math.floor(i / 6);
                  const col = i % 6;
                  const intensity = (col + 1) / 6;
                  const isHot = row === 0 && col >= 3;
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.02 }}
                      className={cn(
                        "h-10 rounded border transition-all",
                        row === 0 ? "bg-secondary-container border-secondary-container/30" : "bg-primary-container border-primary-container/20",
                        isHot && "glow-cyan"
                      )}
                      style={{ opacity: intensity * 0.8 }}
                    ></motion.div>
                  );
                })}
              </div>
              {/* Labels X */}
              <div className="col-start-2 col-span-4 flex justify-between text-[10px] font-bold text-on-surface-variant pt-2">
                <span>LOW IMPACT</span>
                <span>CRITICAL THRESHOLD</span>
                <span>MAX DEVIATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
