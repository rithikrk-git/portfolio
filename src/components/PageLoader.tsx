import React, { useEffect, useState } from 'react';
import { Cpu, Terminal, Zap } from 'lucide-react';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusLog, setStatusLog] = useState('INITIALIZING HARDWARE CORE...');

  useEffect(() => {
    const logs = [
      { p: 15, text: '[SYS_INIT] Microcontroller ATmega328P: READY' },
      { p: 40, text: '[SYS_INIT] IoT Wireless Gateway ESP8266: ONLINE' },
      { p: 65, text: '[SYS_INIT] Sensor Array & GPS Telemetry: CALIBRATED' },
      { p: 85, text: '[SYS_INIT] Loading Engineering Portfolio...' },
      { p: 100, text: '[SYS_OK] RITHIK R System Initialized.' }
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 8;
        const bounded = Math.min(next, 100);
        
        const matchedLog = logs.find((l) => bounded >= l.p && bounded < l.p + 25) || logs[logs.length - 1];
        if (matchedLog) setStatusLog(matchedLog.text);

        return bounded;
      });
    }, 110);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-dark-950 text-slate-100 transition-opacity duration-500">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
        {/* Animated Tech Icon */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute w-24 h-24 rounded-full border border-brand-cyan/30 animate-ping opacity-30" />
          <div className="absolute w-20 h-20 rounded-full border border-dashed border-brand-cyan/60 animate-spin-slow" />
          <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-brand-cyan/50 flex items-center justify-center shadow-glow-cyan">
            <Cpu className="w-8 h-8 text-brand-cyan animate-pulse" />
          </div>
        </div>

        {/* Title & Brand */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan mb-2">
            <Zap className="w-3 h-3" /> ECE ENGINEERING PORTFOLIO
          </span>
          <h1 className="text-3xl font-display font-extrabold tracking-tight text-white">
            RITHIK R
          </h1>
          <p className="text-xs font-mono text-slate-400 mt-1">
            EMBEDDED SYSTEMS • IoT • AUTOMATION
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-dark-850 rounded-full h-2 p-0.5 border border-slate-800 overflow-hidden mb-4 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-emerald transition-all duration-150 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute top-0 right-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
          </div>
        </div>

        {/* Status Telemetry */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 truncate pr-2">
            <Terminal className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
            <span className="truncate">{statusLog}</span>
          </div>
          <span className="font-bold text-brand-cyan">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
