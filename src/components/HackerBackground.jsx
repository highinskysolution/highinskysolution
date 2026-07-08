import React, { useEffect, useRef } from 'react';

const HackerBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    // Hacker-style code snippets
    const codeSnippets = [
      "const cloud = new SkyAPI({ secure: true });",
      "await cloud.connect('highinskysolutions.com');",
      "function scaleCluster(nodes) {",
      "  return nodes.map(n => n.deploy());",
      "}",
      "class DigitalInfrastructure extends Core {",
      "  constructor() {",
      "    super();",
      "    this.security = 'AES-256';",
      "    this.status = 'READY';",
      "  }",
      "}",
      "import { autoPlay, loop, muted } from 'vite';",
      "const apiToken = process.env.API_TOKEN;",
      "db.leads.insert({ service, email, date });",
      "SMTP.sendNotification({ to: 'admin', lead });",
      "system.network.bandwidth.usage = '0.04%';",
      "console.log('[OK] Infrastructure healthy.');",
      "Object.freeze(securityHeaders);",
      "nginx.configure({ port: 443, ssl: true });",
      "01001000 01001001 01000111 01001000",
      "01010011 01001011 01011001 01010011",
      "const database = await connectMongo();",
      "Vercel.deploy({ main: './dist', production: true });",
      "const optimizedChunks = Webpack.optimize();"
    ];

    const fontSize = 14;
    const spacing = 28; // column width
    const columns = Math.ceil(canvas.width / spacing);

    // Initialize drop data for columns
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops.push({
        x: i * spacing,
        y: Math.random() * -canvas.height - 50,
        speed: 1 + Math.random() * 1.5,
        snippetIndex: Math.floor(Math.random() * codeSnippets.length),
        charOffset: 0
      });
    }

    const draw = () => {
      // Clear canvas with high transparency black to generate glow trails
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      drops.forEach((drop) => {
        const snippet = codeSnippets[drop.snippetIndex];
        const text = snippet;
        
        // Highlight the current character (leading character)
        const charToShow = text.charAt(drop.charOffset % text.length);
        ctx.fillStyle = '#67e8f9'; // brand.light
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 8;
        ctx.fillText(charToShow, drop.x, drop.y);

        // Draw trailing characters fading away
        ctx.shadowBlur = 0; // Turn off shadow blur for trails to optimize performance
        
        // 1st trailing char
        ctx.fillStyle = 'rgba(6, 182, 212, 0.45)'; // brand.DEFAULT
        const prevChar1 = text.charAt((drop.charOffset - 1 + text.length) % text.length);
        ctx.fillText(prevChar1, drop.x, drop.y - fontSize);

        // 2nd trailing char
        ctx.fillStyle = 'rgba(6, 182, 212, 0.25)';
        const prevChar2 = text.charAt((drop.charOffset - 2 + text.length) % text.length);
        ctx.fillText(prevChar2, drop.x, drop.y - fontSize * 2);

        // 3rd trailing char
        ctx.fillStyle = 'rgba(8, 145, 178, 0.15)'; // brand.dark
        const prevChar3 = text.charAt((drop.charOffset - 3 + text.length) % text.length);
        ctx.fillText(prevChar3, drop.x, drop.y - fontSize * 3);

        // Advance drop position
        drop.y += drop.speed;

        // Progress character stream slowly
        if (Math.random() > 0.3) {
          drop.charOffset++;
        }

        // Reset column drop once it falls off screen
        if (drop.y > canvas.height) {
          drop.y = Math.random() * -100 - 50;
          drop.speed = 1 + Math.random() * 1.5;
          drop.snippetIndex = Math.floor(Math.random() * codeSnippets.length);
          drop.charOffset = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{
        display: 'block',
        backgroundColor: '#0a0a0a',
        opacity: 0.25 // Subtle mix into background
      }}
    />
  );
};

export default HackerBackground;
