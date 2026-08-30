import React, { useState } from 'react';
import { TECH_NODES } from '../data/portfolioData';
import { Network, CheckCircle2 } from 'lucide-react';

export const TechGraph: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('core');

  const activeNode = TECH_NODES.find((n) => n.id === activeNodeId) || TECH_NODES[0];

  // Satellite nodes surrounding the core
  const satelliteNodes = TECH_NODES.filter((n) => n.id !== 'core');

  return (
    <div className="w-full glass-card p-6 sm:p-10 rounded-3xl border border-white/15 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan mb-1">
            <Network className="w-4 h-4" />
            <span>INTERACTIVE HARDWARE TOPOLOGY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Engineering Technology Ecosystem
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400 flex items-center gap-2 bg-dark-900/80 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
          <span>Hover or click nodes to inspect architecture</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG/Interactive Graph Network */}
        <div className="lg:col-span-7 flex items-center justify-center min-h-[380px] sm:min-h-[420px] relative">
          <svg className="w-full h-full max-w-[480px] aspect-square overflow-visible" viewBox="0 0 400 400">
            {/* Background circular rings */}
            <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="85" fill="none" stroke="rgba(0,240,255,0.12)" />

            {/* Connecting lines from Central Node (200, 200) to satellite nodes */}
            {satelliteNodes.map((node, index) => {
              const angle = (index * (360 / satelliteNodes.length) - 90) * (Math.PI / 180);
              const targetX = 200 + 135 * Math.cos(angle);
              const targetY = 200 + 135 * Math.sin(angle);
              const isSelected = activeNodeId === node.id || activeNodeId === 'core';

              return (
                <g key={`line-${node.id}`}>
                  <line
                    x1="200"
                    y1="200"
                    x2={targetX}
                    y2={targetY}
                    stroke={isSelected ? node.color : 'rgba(255,255,255,0.1)'}
                    strokeWidth={isSelected ? 2 : 1}
                    strokeDasharray={isSelected ? 'none' : '2 2'}
                    className="transition-all duration-300"
                  />
                  {isSelected && (
                    <circle
                      cx={200 + ((targetX - 200) * 0.5)}
                      cy={200 + ((targetY - 200) * 0.5)}
                      r="2"
                      fill={node.color}
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}

            {/* Central Node: RITHIK R */}
            <g
              onClick={() => setActiveNodeId('core')}
              onMouseEnter={() => setActiveNodeId('core')}
              className="cursor-pointer"
              data-cursor="hover"
            >
              <circle
                cx="200"
                cy="200"
                r="45"
                fill="#070a10"
                stroke={activeNodeId === 'core' ? '#00f0ff' : 'rgba(0, 240, 255, 0.4)'}
                strokeWidth={activeNodeId === 'core' ? 3 : 1.5}
                className="transition-all duration-300 shadow-glow-cyan"
              />
              <circle
                cx="200"
                cy="200"
                r="38"
                fill="rgba(0, 240, 255, 0.08)"
              />
              <text
                x="200"
                y="196"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="12"
                fontWeight="bold"
                fontFamily="Space Grotesk"
              >
                RITHIK R
              </text>
              <text
                x="200"
                y="212"
                textAnchor="middle"
                fill="#00f0ff"
                fontSize="8"
                fontFamily="JetBrains Mono"
                letterSpacing="1"
              >
                SYSTEM CORE
              </text>
            </g>

            {/* Satellite Nodes */}
            {satelliteNodes.map((node, index) => {
              const angle = (index * (360 / satelliteNodes.length) - 90) * (Math.PI / 180);
              const nodeX = 200 + 135 * Math.cos(angle);
              const nodeY = 200 + 135 * Math.sin(angle);
              const isCurrent = activeNodeId === node.id;

              return (
                <g
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  className="cursor-pointer group"
                  data-cursor="hover"
                >
                  {/* Outer pulse when active */}
                  {isCurrent && (
                    <circle
                      cx={nodeX}
                      cy={nodeY}
                      r="28"
                      fill="none"
                      stroke={node.color}
                      strokeWidth="1.5"
                      className="animate-ping opacity-50"
                    />
                  )}
                  {/* Base Circle */}
                  <circle
                    cx={nodeX}
                    cy={nodeY}
                    r="24"
                    fill="#0b1019"
                    stroke={isCurrent ? node.color : 'rgba(255,255,255,0.2)'}
                    strokeWidth={isCurrent ? 2.5 : 1}
                    className="transition-all duration-300"
                  />
                  {/* Short Label */}
                  <text
                    x={nodeX}
                    y={nodeY + 3}
                    textAnchor="middle"
                    fill={isCurrent ? '#ffffff' : '#94a3b8'}
                    fontSize="7.5"
                    fontWeight="bold"
                    fontFamily="JetBrains Mono"
                  >
                    {node.label.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Node Telemetry & Detailed Description */}
        <div className="lg:col-span-5 bg-dark-900/90 rounded-2xl border border-white/10 p-6 flex flex-col justify-between h-full min-h-[300px] shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase border"
                style={{
                  color: activeNode.color,
                  borderColor: `${activeNode.color}40`,
                  backgroundColor: `${activeNode.color}15`,
                }}
              >
                {activeNode.category.toUpperCase()} NODE
              </span>
              <span className="text-xs font-mono text-slate-400">TELEMETRY # {activeNode.id.toUpperCase()}</span>
            </div>

            <h4 className="text-2xl font-display font-bold text-white mb-2">
              {activeNode.label}
            </h4>

            <p className="text-sm font-mono text-brand-cyan mb-4">
              {activeNode.description}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed bg-dark-950/60 p-4 rounded-xl border border-white/5">
              {activeNode.details}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-brand-emerald">
              <CheckCircle2 className="w-3.5 h-3.5" /> Hardware Calibrated
            </span>
            <span>Rithik R ECE Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
};
