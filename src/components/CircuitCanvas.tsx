import React, { useEffect, useRef } from 'react';

export const CircuitCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    const mouse = { x: -1000, y: -1000, radius: 180 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Nodes structure
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      type: 'mcu' | 'trace' | 'chip';
      pulse: number;
      pulseSpeed: number;
    }

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1.5,
          type: Math.random() > 0.8 ? 'mcu' : Math.random() > 0.4 ? 'trace' : 'chip',
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
        });
      }
    };

    initNodes();

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Screen boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.pulse += node.pulseSpeed;
        const glow = Math.sin(node.pulse) * 0.4 + 0.6;

        // Mouse interaction
        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        let nodeAlpha = 0.35;

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius);
          nodeAlpha = 0.35 + force * 0.65;
          node.x -= (dxMouse / distMouse) * force * 1.2;
          node.y -= (dyMouse / distMouse) * force * 1.2;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (distMouse < mouse.radius ? 1.4 : 1), 0, Math.PI * 2);
        ctx.fillStyle = node.type === 'mcu' 
          ? `rgba(0, 240, 255, ${nodeAlpha * glow})` 
          : `rgba(59, 130, 246, ${nodeAlpha * 0.8 * glow})`;
        ctx.fill();

        // Connect nearby nodes with circuit lines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 140;
          if (distance < maxDist) {
            const lineAlpha = (1 - distance / maxDist) * 0.18;
            ctx.beginPath();
            
            // PCB-style 90-degree trace simulation
            if (i % 2 === 0) {
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, node.y);
              ctx.lineTo(other.x, other.y);
            } else {
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(node.x, other.y);
              ctx.lineTo(other.x, other.y);
            }

            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Circuit pulse point travelling along connection
            if (i % 3 === 0) {
              const t = (Math.sin(time + i) + 1) / 2;
              const px = node.x + dx * t;
              const py = node.y + dy * t;
              ctx.beginPath();
              ctx.arc(px, py, 1.2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(0, 240, 255, ${lineAlpha * 2.5})`;
              ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-45 transition-opacity duration-1000"
      style={{ willChange: 'transform' }}
    />
  );
};
