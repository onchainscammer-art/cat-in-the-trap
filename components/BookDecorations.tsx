'use client';

// Coffee Stain
export function CoffeeStain({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        <ellipse cx="60" cy="60" rx="50" ry="48" fill="#8B4513" opacity="0.12" />
        <ellipse cx="62" cy="58" rx="45" ry="43" fill="#A0522D" opacity="0.08" />
        <circle cx="65" cy="55" r="38" fill="#CD853F" opacity="0.06" />
      </svg>
    </div>
  );
}

// Ink Splatter
export function InkSplatter({ className = "", color = "#2a2520" }: { className?: string; color?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="8" fill={color} opacity="0.3" />
        <circle cx="25" cy="22" r="4" fill={color} opacity="0.25" />
        <circle cx="38" cy="28" r="5" fill={color} opacity="0.2" />
        <circle cx="32" cy="38" r="3" fill={color} opacity="0.28" />
        <circle cx="22" cy="35" r="2" fill={color} opacity="0.22" />
      </svg>
    </div>
  );
}

// Torn Corner
export function TornCorner({ corner = "top-right" }: { corner?: string }) {
  const positions = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0"
  };

  return (
    <div className={`absolute ${positions[corner as keyof typeof positions]} w-16 h-16 pointer-events-none`}>
      <svg width="100%" height="100%" viewBox="0 0 64 64" className={corner.includes('left') ? 'scale-x-[-1]' : ''}>
        <path
          d="M 0 0 L 64 0 L 50 12 L 58 20 L 45 25 L 48 35 L 35 30 L 30 45 L 20 35 L 12 50 L 0 40 Z"
          fill="#f5f1e8"
          stroke="#d4cfc4"
          strokeWidth="1"
        />
        <path
          d="M 0 0 L 64 0 L 50 12 L 58 20 L 45 25 L 48 35 L 35 30 L 30 45 L 20 35 L 12 50 L 0 40 Z"
          fill="#e8e4d9"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

// Hand-drawn Frame for illustrations
export function HandDrawnFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          stroke="#2a2520"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          strokeDasharray="1"
          style={{
            strokeDashoffset: 0,
            filter: 'url(#roughen)'
          }}
        />
        <defs>
          <filter id="roughen">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
      </svg>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

// Doodles
export function StarDoodle({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 2 L14 10 L22 10 L16 15 L18 22 L12 17 L6 22 L8 15 L2 10 L10 10 Z"
          fill="none"
          stroke="#ff3b30"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

export function ArrowDoodle({ className = "", direction = "right" }: { className?: string; direction?: string }) {
  const rotation = {
    right: 0,
    left: 180,
    up: -90,
    down: 90
  };

  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotation[direction as keyof typeof rotation]}deg)` }}>
      <svg width="40" height="20" viewBox="0 0 40 20">
        <path
          d="M 2 10 L 30 10 M 25 5 L 35 10 L 25 15"
          fill="none"
          stroke="#2a2520"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

// Fingerprint smudge
export function Fingerprint({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="40" height="50" viewBox="0 0 40 50">
        <ellipse cx="20" cy="25" rx="15" ry="20" fill="#6b5d4f" opacity="0.08" />
        <path
          d="M 10 15 Q 20 10 30 15"
          fill="none"
          stroke="#6b5d4f"
          strokeWidth="1"
          opacity="0.15"
        />
        <path
          d="M 12 22 Q 20 18 28 22"
          fill="none"
          stroke="#6b5d4f"
          strokeWidth="1"
          opacity="0.15"
        />
        <path
          d="M 13 29 Q 20 26 27 29"
          fill="none"
          stroke="#6b5d4f"
          strokeWidth="1"
          opacity="0.15"
        />
      </svg>
    </div>
  );
}

// Circle doodle
export function CircleDoodle({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30">
        <circle
          cx="15"
          cy="15"
          r="12"
          fill="none"
          stroke="#ff3b30"
          strokeWidth="2"
          strokeDasharray="2 3"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
