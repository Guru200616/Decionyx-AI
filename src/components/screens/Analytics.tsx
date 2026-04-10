import React from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Brain, 
  Zap, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  PlusSquare,
  History
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Analytics() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Page Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold font-headline text-primary-container tracking-tight">Evaluation & Monitoring Hub</h2>
          <p className="text-on-surface-variant mt-1 font-body">Real-time performance audit of the Neural Core architecture.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2 text-sm font-medium border border-outline-variant/30 text-on-surface hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-2">
            <History size={16} />
            Export Logs
          </button>
          <button className="px-5 py-2 text-sm font-medium bg-primary-container text-on-primary-container hover:brightness-110 transition-all rounded-lg shadow-[0_0_15px_rgba(0,242,255,0.3)] flex items-center gap-2">
            <PlusSquare size={16} />
            New Evaluation Set
          </button>
        </div>
      </div>

      {/* Global Performance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Accuracy Rate', value: '96.5%', trend: '+0.4% from baseline', icon: ShieldCheck, color: 'primary-container' },
          { label: 'Hallucination Rate', value: '0.02%', trend: 'Within safety threshold', icon: Brain, color: 'secondary' },
          { label: 'Mean Latency', value: '1.4s', trend: 'p95: 2.1s', icon: Zap, color: 'primary-container' },
          { label: 'Cost Efficiency', value: '+42%', trend: 'Opti-Query active', icon: TrendingUp, color: 'secondary' }
        ].map((metric, i) => (
          <div key={i} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15 flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/60">{metric.label}</span>
              <metric.icon size={20} className={cn(`text-${metric.color}`)} />
            </div>
            <div>
              <div className="text-4xl font-bold font-headline text-on-surface">{metric.value}</div>
              <div className={cn("text-xs font-label mt-1 flex items-center gap-1", metric.color === 'secondary' ? "text-secondary" : "text-primary-container")}>
                {metric.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Layout: Asymmetric Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Agent Consensus Tracking */}
        <div className="lg:col-span-8 bg-surface-container p-8 rounded-xl border border-outline-variant/15 relative overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-headline font-semibold text-on-surface">Agent Consensus Tracking</h3>
              <p className="text-sm text-on-surface-variant">Cross-agent agreement levels on complex reasoning paths.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-container"></div><span className="text-xs font-label text-on-surface-variant">Collector</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary"></div><span className="text-xs font-label text-on-surface-variant">Analyst</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-on-surface"></div><span className="text-xs font-label text-on-surface-variant">Strategist</span></div>
            </div>
          </div>
          
          <div className="h-64 relative flex items-end justify-between gap-1">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="border-t border-outline-variant/10 w-full h-px"></div>
              ))}
            </div>
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <path className="neon-glow-primary opacity-80" d="M0 180 Q 200 120, 400 160 T 800 100 T 1200 140" fill="none" stroke="#00F2FF" strokeWidth="3"></path>
              <path className="opacity-60" d="M0 200 Q 200 180, 400 140 T 800 160 T 1200 120" fill="none" stroke="#dfb7ff" strokeWidth="3"></path>
              <path className="opacity-40" d="M0 220 Q 200 240, 400 200 T 800 180 T 1200 160" fill="none" stroke="#e5e2e1" strokeWidth="2"></path>
            </svg>
            <div className="z-10 w-full flex justify-between px-2 pt-64 text-[10px] font-label text-on-surface-variant/40">
              <span>08:00</span><span>10:00</span><span>12:00</span><span>14:00</span><span>16:00</span><span>18:00</span><span>20:00</span>
            </div>
          </div>
        </div>

        {/* Ground Truth Sets */}
        <div className="lg:col-span-4 bg-surface-container-low p-6 rounded-xl border border-outline-variant/15">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-headline font-semibold text-on-surface">Ground Truth Sets</h3>
            <PlusSquare size={20} className="text-on-surface-variant hover:text-primary-container transition-colors cursor-pointer" />
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-surface-container-highest/30 border border-outline-variant/10 hover:bg-surface-container-highest/50 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-0.5 rounded-full bg-primary-container/10 text-primary-container text-[10px] font-bold tracking-wider uppercase">Active</span>
                <span className="text-[10px] font-label text-on-surface-variant">v4.1.2</span>
              </div>
              <h4 className="font-medium text-sm text-on-surface mb-1">Financial Analysis Golden Set</h4>
              <div className="w-full bg-surface-container-lowest h-1.5 rounded-full mt-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  className="bg-primary-container h-full" 
                  style={{ boxShadow: '0 0 8px rgba(0,242,255,0.5)' }}
                ></motion.div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-on-surface-variant">88% Agreement</span>
                <span className="text-[10px] text-on-surface-variant">1,200 nodes</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-lowest/30 border border-outline-variant/5 hover:bg-surface-container-highest/50 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-0.5 rounded-full bg-outline-variant/20 text-on-surface-variant text-[10px] font-bold tracking-wider uppercase">Standby</span>
                <span className="text-[10px] font-label text-on-surface-variant">v3.9.0</span>
              </div>
              <h4 className="font-medium text-sm text-on-surface mb-1">General Reasoning Baseline</h4>
              <div className="w-full bg-surface-container-lowest h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-outline-variant h-full w-[94%]"></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-on-surface-variant">94% Agreement</span>
                <span className="text-[10px] text-on-surface-variant">5,000 nodes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hallucination Detection Log */}
      <section className="glass-panel rounded-xl border border-outline-variant/15 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-headline font-semibold text-on-surface">Hallucination Detection Log</h3>
            <p className="text-sm text-on-surface-variant">Recent decision grounding and faithfulness audits.</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-label">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Verified</span>
            <span className="flex items-center gap-1 ml-4"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Warning</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-label border-collapse">
            <thead>
              <tr className="text-[11px] uppercase tracking-[0.1em] text-on-surface-variant/60 border-b border-outline-variant/5">
                <th className="px-6 py-4 font-semibold">Decision ID</th>
                <th className="px-6 py-4 font-semibold">Prompt Intent</th>
                <th className="px-6 py-4 font-semibold text-center">Faithfulness Score</th>
                <th className="px-6 py-4 font-semibold">Grounding Status</th>
                <th className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {[
                { id: '#DEC-88219-X', intent: 'Portfolio rebalance request based on Q3 projection models.', score: '0.992', status: 'Verified Grounding', type: 'verified' },
                { id: '#DEC-88218-X', intent: 'Cross-chain liquidity bridge optimization strategy.', score: '0.715', status: 'Low Logic Consensus', type: 'warning' },
                { id: '#DEC-88217-X', intent: 'Energy grid load prediction for decentralized clusters.', score: '0.985', status: 'Verified Grounding', type: 'verified' }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-primary-container/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <code className="text-primary-container/80 text-[12px]">{row.id}</code>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-on-surface max-w-xs truncate">{row.intent}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      "inline-block px-3 py-1 rounded-full text-xs font-bold",
                      row.type === 'verified' ? "bg-green-900/30 text-green-400" : "bg-amber-900/30 text-amber-400"
                    )}>{row.score}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs text-on-surface">
                      {row.type === 'verified' ? (
                        <CheckCircle2 size={14} className="text-green-500" />
                      ) : (
                        <AlertCircle size={14} className="text-amber-500" />
                      )}
                      {row.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-on-surface-variant hover:text-primary-container transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Model Comparison & Drift Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-primary-container/10 border-4 border-primary-container/20 flex items-center justify-center">
            <Activity size={32} className="text-primary-container" />
          </div>
          <div>
            <h4 className="font-headline font-bold text-lg text-on-surface">A/B Testing Active</h4>
            <p className="text-sm text-on-surface-variant">Core v4.2 (Challenger) vs Core v4.1.8 (Baseline). Divergence: 1.2%</p>
            <div className="mt-3 flex gap-2">
              <div className="px-2 py-1 bg-surface-container-highest rounded text-[10px] font-label text-on-surface">COHERENCE: +3%</div>
              <div className="px-2 py-1 bg-surface-container-highest rounded text-[10px] font-label text-on-surface">LATENCY: -120ms</div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-secondary/10 border-4 border-secondary/20 flex items-center justify-center">
            <AlertCircle size={32} className="text-secondary" />
          </div>
          <div>
            <h4 className="font-headline font-bold text-lg text-on-surface">Data Drift Warning</h4>
            <p className="text-sm text-on-surface-variant">Anomalous inputs detected in Financial-Stream-02. Recalibration suggested.</p>
            <button className="mt-2 text-xs font-bold text-secondary flex items-center gap-1 group">
              RUN SYSTEM AUDIT <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
