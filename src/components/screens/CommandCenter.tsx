import React from 'react';
import { 
  Activity, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Filter,
  ArrowUpRight,
  ShieldAlert,
  Cloud
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function CommandCenter() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Page Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-headline text-2xl font-black text-on-surface tracking-tight">OS Dashboard</h1>
          <p className="text-sm text-on-surface-variant/80">System Status: <span className="text-primary-container font-bold">OPTIMAL</span></p>
        </div>
        <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant/60 uppercase tracking-widest">
          <Activity size={14} className="text-primary-container" />
          Live Updates Every 5s
        </div>
      </div>

      {/* Neural Health Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-on-surface-variant">Global Confidence</span>
            <span className="text-primary-container text-xs bg-primary-container/10 px-2 py-0.5 rounded-full font-bold">+2.4%</span>
          </div>
          <div className="text-4xl font-headline font-black text-on-surface mb-2">98.4<span className="text-primary-container/50">%</span></div>
          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '98.4%' }}
              className="h-full bg-primary-container neon-glow-primary"
            ></motion.div>
          </div>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-on-surface-variant">Active Agents</span>
            <span className="text-secondary text-xs bg-secondary/10 px-2 py-0.5 rounded-full font-bold">Nominal</span>
          </div>
          <div className="text-4xl font-headline font-black text-on-surface mb-2">1,204</div>
          <div className="flex gap-1">
            <div className="h-1 flex-1 bg-primary-container rounded-full"></div>
            <div className="h-1 flex-1 bg-primary-container rounded-full"></div>
            <div className="h-1 flex-1 bg-primary-container rounded-full"></div>
            <div className="h-1 flex-1 bg-primary-container/20 rounded-full"></div>
          </div>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-on-surface-variant">Decisions Processed</span>
            <span className="text-primary-container text-xs bg-primary-container/10 px-2 py-0.5 rounded-full font-bold">+12k Today</span>
          </div>
          <div className="text-4xl font-headline font-black text-on-surface mb-2">42,891</div>
          <div className="text-xs text-on-surface-variant">Processing latency: 14ms</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Risk vs Reward Section */}
        <div className="lg:col-span-2 space-y-8">
          <section className="glass-panel rounded-xl p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-lg font-bold">Risk vs Reward Analysis</h2>
              <div className="flex gap-2">
                <button className="text-xs px-3 py-1 rounded-full bg-surface-container-highest text-primary-container border border-primary-container/20">Active Scenarios</button>
                <button className="text-xs px-3 py-1 rounded-full text-on-surface-variant hover:bg-surface-container">Historical</button>
              </div>
            </div>
            <div className="relative h-64 w-full bg-surface-container-lowest/50 rounded-lg flex items-center justify-center group overflow-hidden">
              {/* Abstract Chart Representation */}
              <div className="absolute inset-0 flex items-end justify-between px-8 pb-4">
                {[40, 65, 30, 85, 50, 70, 45, 90].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05 }}
                    className={cn(
                      "w-8 rounded-t",
                      i % 2 === 0 ? "bg-secondary/30" : "bg-primary-container/40"
                    )}
                  ></motion.div>
                ))}
              </div>
              <div className="z-10 text-center bg-background/40 backdrop-blur-sm p-4 rounded-xl border border-outline-variant/10">
                <p className="text-sm font-medium text-on-surface">Neural Projection Active</p>
                <p className="text-xs text-on-surface-variant">Correlated with Market Shift Alpha-9</p>
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <path className="neon-glow-primary opacity-60" d="M0,150 Q200,50 400,120 T800,80" fill="none" stroke="#00f2ff" strokeWidth="2"></path>
                <path className="opacity-40" d="M0,180 Q300,120 500,160 T900,100" fill="none" stroke="#dfb7ff" strokeWidth="2"></path>
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/5">
                <p className="text-xs text-on-surface-variant uppercase mb-1">Max Potential Upside</p>
                <p className="text-xl font-headline font-bold text-primary-container">+$4.2M <span className="text-xs font-normal text-on-surface-variant/60">(est)</span></p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/5">
                <p className="text-xs text-on-surface-variant uppercase mb-1">Calculated Exposure</p>
                <p className="text-xl font-headline font-bold text-secondary">-$210K <span className="text-xs font-normal text-on-surface-variant/60">(0.4%)</span></p>
              </div>
            </div>
          </section>

          {/* Decision Stream */}
          <section className="glass-panel rounded-xl overflow-hidden">
            <div className="p-6 border-b border-outline-variant/10 flex items-center justify-between">
              <h2 className="font-headline text-lg font-bold">Autonomous Decision Stream</h2>
              <Filter size={18} className="text-on-surface-variant cursor-pointer hover:text-on-surface" />
            </div>
            <div className="divide-y divide-outline-variant/10">
              {[
                { title: 'Market Liquidity Rebalancing', sector: 'Fintech', id: 'DX-882', conf: '94%', time: '02:14:05', status: 'AUTONOMOUS' },
                { title: 'Supply Chain Path Optimization', sector: 'APAC', id: 'DX-419', conf: '89%', time: '02:12:48', status: 'AUTONOMOUS' },
                { title: 'Arbitrage Execution: Sector 7', sector: 'ETH/USDT', id: 'DX-102', conf: '97%', time: '02:10:12', status: 'COMPLETE', active: true }
              ].map((item, i) => (
                <div key={i} className="p-4 hover:bg-surface-container transition-colors flex items-center gap-4">
                  <div className={cn(
                    "size-10 rounded-full flex items-center justify-center",
                    item.status === 'COMPLETE' ? "bg-primary-container/10 text-primary-container" : "bg-secondary/10 text-secondary"
                  )}>
                    <Zap size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-on-surface truncate">{item.title}</p>
                    <p className="text-xs text-on-surface-variant">Sector: {item.sector} • ID: {item.id}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-on-surface">{item.conf} Conf.</div>
                    <div className="text-[10px] text-on-surface-variant uppercase">{item.time}</div>
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold",
                    item.active ? "bg-primary-container text-on-primary-container" : "bg-surface-container-highest text-on-surface-variant"
                  )}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 text-xs font-bold text-on-surface-variant hover:text-primary-container transition-colors uppercase tracking-widest border-t border-outline-variant/10">
              View Full Archive
            </button>
          </section>
        </div>

        {/* Pending Approvals (HITL) */}
        <div className="space-y-6">
          <section className="glass-panel rounded-xl overflow-hidden flex flex-col h-full border-primary-container/20">
            <div className="p-6 bg-primary-container/5 border-b border-primary-container/10">
              <h2 className="font-headline text-lg font-bold text-on-surface flex items-center gap-2">
                <ShieldAlert size={20} className="text-primary-container animate-pulse" />
                Pending Approvals
              </h2>
              <p className="text-xs text-on-surface-variant mt-1">Human-in-the-loop (HITL) required for high-risk protocols</p>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
              {[
                { type: 'CRITICAL RISK', title: 'Unusual Asset Liquidation', desc: 'AI detected 15% deviation in projected yield for "Project Phoenix". Requesting manual override to dump.', time: '2m ago', color: 'error' },
                { type: 'STRATEGIC SHIFT', title: 'Cloud Provider Migration', desc: 'Optimal routing suggests switching 40% workload to AWS-East-2 for 12% cost reduction.', time: '15m ago', color: 'secondary' },
                { type: 'INFO', title: 'Agent Expansion Request', desc: 'Cluster 4 requires 50 additional nodes for peak holiday traffic analysis.', time: '1h ago', color: 'primary-container' }
              ].map((item, i) => (
                <div key={i} className="bg-surface-container rounded-lg p-5 space-y-4 border border-outline-variant/10">
                  <div className="flex justify-between items-start">
                    <div className={cn(
                      "px-2 py-1 rounded text-[10px] font-bold uppercase",
                      item.color === 'error' ? "bg-error-container/20 text-error" : 
                      item.color === 'secondary' ? "bg-secondary/10 text-secondary" : 
                      "bg-primary-container/10 text-primary-container"
                    )}>
                      {item.type}
                    </div>
                    <span className="text-[10px] text-on-surface-variant">{item.time}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-on-surface">{item.title}</h3>
                    <p className="text-xs text-on-surface-variant mt-1">{item.desc}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-primary-container text-on-primary-container text-xs font-bold rounded-lg hover:brightness-110 transition-all">APPROVE</button>
                    <button className="flex-1 py-2 bg-surface-container-highest text-on-surface text-xs font-bold rounded-lg hover:bg-surface-variant transition-colors">REJECT</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* System Logs (Footer Style) */}
      <section className="glass-panel rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-primary-container neon-glow-primary"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Core Node: Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-secondary"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Auth Layer: Secure</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Cloud size={14} className="text-on-surface-variant" />
            <span className="text-[10px] font-medium text-on-surface-variant/60">Ping: 8ms</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-label text-on-surface-variant/40">V.4.2.0-STABLE</span>
          <div className="flex gap-1">
            {[0.2, 0.4, 0.6, 0.8, 1].map((o, i) => (
              <div key={i} className="w-1 h-3 bg-primary-container" style={{ opacity: o }}></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
