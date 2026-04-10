import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Database, 
  Cpu, 
  Activity, 
  History, 
  Settings, 
  Search, 
  Bell, 
  Bot,
  BrainCircuit,
  ShieldCheck,
  LineChart,
  Terminal,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

type Screen = 'decision-hub' | 'command-center' | 'simulation-lab' | 'analytics';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
  collapsed?: boolean;
  key?: React.Key;
}

const SidebarItem = ({ icon: Icon, label, active, onClick, collapsed }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "group flex items-center gap-3 px-3 py-2 rounded-xl transition-all cursor-pointer w-full text-left",
      active 
        ? "bg-surface-container text-primary-container" 
        : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
    )}
  >
    <Icon size={20} className={cn(active && "fill-primary-container/20")} />
    {!collapsed && <span className="font-label text-sm font-medium">{label}</span>}
  </button>
);

export default function Layout({ children, currentScreen, setScreen }: { 
  children: React.ReactNode; 
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { id: 'decision-hub' as Screen, icon: LayoutDashboard, label: 'Decision Hub' },
    { id: 'command-center' as Screen, icon: Cpu, label: 'Command Center' },
    { id: 'simulation-lab' as Screen, icon: BrainCircuit, label: 'Simulation Lab' },
    { id: 'analytics' as Screen, icon: Activity, label: 'Analytics' },
  ];

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className={cn(
        "bg-surface-container-low flex flex-col border-r border-outline-variant/10 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}>
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 text-primary-container neon-glow-primary flex-shrink-0">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
            </svg>
          </div>
          {!collapsed && <h1 className="font-headline font-bold text-lg tracking-tight text-on-surface">DECIONYX AI</h1>}
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={currentScreen === item.id}
              onClick={() => setScreen(item.id)}
              collapsed={collapsed}
            />
          ))}
        </nav>

        <div className="p-6">
          {!collapsed && (
            <div className="bg-surface-container rounded-xl p-4 border border-outline-variant/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="size-2 rounded-full bg-primary-container animate-pulse"></div>
                <span className="text-[10px] font-label uppercase tracking-widest text-primary-container">System Live</span>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">Multi-agent consensus active at 98.4% confidence.</p>
            </div>
          )}
          <div className="mt-6 flex flex-col gap-1">
            {!collapsed && <span className="font-label text-[10px] text-on-surface-variant/40 tracking-widest uppercase">Signature</span>}
            <span className="font-label text-[11px] text-on-surface-variant/40 tracking-[0.1em]">
              {collapsed ? "GR" : "BUILT BY GURU RENGARAJAN"}
            </span>
          </div>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="mt-4 p-2 text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-outline-variant/5 bg-background/80 backdrop-blur-md z-10">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="size-6 rounded-full border border-background bg-primary-container" title="Collector"></div>
              <div className="size-6 rounded-full border border-background bg-secondary-container" title="Strategist"></div>
              <div className="size-6 rounded-full border border-background bg-surface-container-highest" title="Critic"></div>
            </div>
            <span className="text-xs font-label text-on-surface-variant">5 Agents Synchronized</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-surface-container-lowest px-4 py-1.5 rounded-full border border-outline-variant/10 mr-4">
              <Search size={14} className="text-on-surface-variant mr-2" />
              <input 
                type="text" 
                placeholder="Query system nodes..." 
                className="bg-transparent border-none focus:ring-0 text-xs w-48 text-on-surface placeholder:text-on-surface-variant/40"
              />
            </div>
            <button className="text-on-surface-variant hover:text-primary-container transition-colors">
              <History size={20} />
            </button>
            <button className="text-on-surface-variant hover:text-primary-container transition-colors">
              <Bell size={20} />
            </button>
            <button className="text-on-surface-variant hover:text-primary-container transition-colors">
              <Settings size={20} />
            </button>
            <div className="h-8 w-[1px] bg-outline-variant/20 mx-2"></div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/10">
              <div 
                className="size-5 rounded-full bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMmbdRrIqmIQ0sXpr-m4nJWBNSv-yU8tcECiZC5HoImauY-UV4qrgnnb7FhZZsBbCullE08F3OLFLEQ6yvrx9LaDQzfahbL7sRfGGbtvPMkCgYM_KpS4vimgHUgLMEQleoaqhhZCxdqDr1bqAGK23EdT7OgKuEM30BMoN7qvNvrSsh2a0JZgj6HOhrOWotce0Bs-cRvgz45L2s1Ie5My5cOGZcP5aYHDQ6zJsF-nvsVINypxNxsaAXtqJjvVSNKtdcd-2r-f0OGPY')" }}
              ></div>
              <span className="text-xs font-medium">G. Rengarajan</span>
            </div>
          </div>
        </header>

        {/* Screen Content */}
        <main className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full overflow-y-auto"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
