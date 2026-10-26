import React, { useEffect, useRef } from 'react';

const MOVIE_HACKER_CODE = [
  '>>> INIT_KERNEL_STREAM [0x7FFF8A01] --force --turbo',
  '[OK] AUTH_HANDSHAKE: RSA-4096 KEY EXCHANGE VERIFIED',
  '0x00401000: 48 89 E5 48 83 EC 20 48 89 7D F8 89 75 F4',
  'struct neural_socket *sock = alloc_edge_node(AP_SOUTH_1);',
  'while (packet = stream->next_frame()) { decrypt_aes256(packet); }',
  '>>> BYPASS_LATENCY: ROUTING VIA FIBER_BACKBONE_09',
  '[SYS_TRACE] Compiling high_in_sky_core.so ... DONE (0.004s)',
  '0x0040104A: 0F 84 C2 00 00 00 48 8B 45 F8 48 83 C0 10',
  'export const DEPLOY_MATRIX = { nodes: 128, firewall: "ACTIVE" };',
  'for (let i = 0; i < 0xFFFF; i++) { inject_edge_cache(i); }',
  '[NET_SEC] Zero-Trust Tunnel -> 192.168.1.254:443 [LOCKED]',
  '>>> EXECUTING QUANTUM_OPTIMIZER // THROUGHPUT: 42.8 GB/s',
  '01001000 01001001 01010011 01010011 // SYNC_COMPLETE',
  'void __fastcall kernel_dispatch(uint64_t *mem_addr) {',
  '  __asm__ volatile("prefetchnta (%0)" :: "r"(mem_addr));',
  '  *mem_addr ^= 0x5A5A5A5A5A5A5A5AULL;',
  '}',
  '[ACCESS_GRANTED] Uploading production build to global edge...',
  '[################] 100% DEPLOYMENT VERIFIED // 0 ERRORS',
  'root@high-in-sky-node01:~# ./deploy_autonomous_cluster.sh -y',
  '>>> SPAWNING 64 WORKER THREADS ... [OK] [OK] [OK] [OK]',
  '0x7FFFA210: E8 4B FE FF FF 85 C0 78 14 48 8B 15 92 20',
  'SELECT * FROM enterprise_clusters WHERE status = "ONLINE";',
  '[SHIELD_ACTIVE] DDoS Mitigation Matrix Online // 0 Loss',
];

const HackerBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createTerminalStream = (index) => {
      const startIdx = (index * 8) % MOVIE_HACKER_CODE.length;
      const initialLines = [];
      for (let i = 0; i < 8; i++) {
        initialLines.push(
          MOVIE_HACKER_CODE[(startIdx + i) % MOVIE_HACKER_CODE.length]
        );
      }
      return {
        index,
        lines: initialLines,
        currentIdx: (startIdx + 8) % MOVIE_HACKER_CODE.length,
        charPos: 0,
        speed: 4.5 + index * 1.2,
        hexCounter: 0x1000 + index * 0x1000,
      };
    };

    const streams = [
      createTerminalStream(0),
      createTerminalStream(1),
      createTerminalStream(2),
    ];

    const getMovieLineColor = (line) => {
      if (
        line.startsWith('>>>') ||
        line.includes('[ACCESS_GRANTED]') ||
        line.includes('100%')
      ) {
        return '#34D399'; // Vivid Matrix Emerald
      }
      if (
        line.startsWith('[OK]') ||
        line.startsWith('[SYS') ||
        line.startsWith('[NET') ||
        line.startsWith('[SHIELD')
      ) {
        return '#38BDF8'; // Vivid Cyber Sky
      }
      if (line.startsWith('0x') || line.startsWith('0100')) {
        return '#10B981'; // Clean Emerald Hex
      }
      if (line.startsWith('root@')) {
        return '#67E8F9'; // Bright Terminal Prompt
      }
      return '#93C5FD'; // Crisp Ice Blue
    };

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Full crisp clear every frame — ZERO overlapping ghost characters
      ctx.clearRect(0, 0, width, height);

      const fontSize = width < 640 ? 11.5 : 13;
      const lineHeight = Math.round(fontSize * 1.85);
      ctx.font = `600 ${fontSize}px "JetBrains Mono", monospace`;
      ctx.textBaseline = 'alphabetic';

      // Choose number of non-overlapping columns based on screen width
      const numCols = width < 768 ? 1 : width < 1280 ? 2 : 3;
      const colGap = 28;
      const totalGap = colGap * (numCols + 1);
      const colWidth = Math.floor((width - totalGap) / numCols);
      const maxLines = Math.max(8, Math.floor((height - 48) / lineHeight) - 1);

      for (let sIdx = 0; sIdx < numCols; sIdx++) {
        const stream = streams[sIdx];
        const colX = colGap + sIdx * (colWidth + colGap);
        const targetLine = MOVIE_HACKER_CODE[stream.currentIdx];

        // Advance fast movie-hacker typing
        stream.charPos += stream.speed;
        if (stream.charPos >= targetLine.length) {
          stream.lines.push(targetLine);
          while (stream.lines.length > maxLines) {
            stream.lines.shift();
          }
          stream.currentIdx =
            (stream.currentIdx + 1) % MOVIE_HACKER_CODE.length;
          stream.charPos = 0;
          stream.hexCounter += 0x10;
        }

        // Strictly clip each terminal column so columns NEVER overlap each other
        ctx.save();
        ctx.beginPath();
        ctx.rect(colX, 0, colWidth, height);
        ctx.clip();

        // Subtle column divider line on left edge
        ctx.fillStyle = 'rgba(56, 189, 248, 0.14)';
        ctx.fillRect(colX, 16, 1, height - 32);

        // Draw scrolling history lines with strict vertical spacing
        stream.lines.forEach((line, i) => {
          const y = 32 + i * lineHeight;
          const fade = Math.min(1, 0.35 + (i / stream.lines.length) * 0.65);
          const addr = (stream.hexCounter - (stream.lines.length - i) * 16)
            .toString(16)
            .toUpperCase()
            .padStart(4, '0');

          ctx.globalAlpha = fade;

          // Address column
          ctx.fillStyle = '#64748B';
          ctx.fillText(`0x${addr}`, colX + 10, y);

          // Code line column (starts strictly after address column)
          ctx.fillStyle = getMovieLineColor(line);
          ctx.fillText(line, colX + 74, y);
        });

        // Draw active rapid-typing line at full brightness
        ctx.globalAlpha = 1;
        const activeY = 32 + stream.lines.length * lineHeight;
        const typedSlice = targetLine.slice(0, Math.floor(stream.charPos));
        const currentAddr = stream.hexCounter
          .toString(16)
          .toUpperCase()
          .padStart(4, '0');

        ctx.fillStyle = '#34D399';
        ctx.fillText(`0x${currentAddr}`, colX + 10, activeY);

        ctx.fillStyle = '#ECFDF5';
        ctx.fillText(typedSlice, colX + 74, activeY);

        // Glowing block cursor at typing head
        const typedWidth = ctx.measureText(typedSlice).width;
        ctx.fillStyle = '#34D399';
        ctx.fillRect(
          colX + 77 + typedWidth,
          activeY - fontSize + 2,
          8,
          fontSize
        );

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      style={{
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 75%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 75%, transparent 100%)',
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-85" />
    </div>
  );
};

export default HackerBackground;
