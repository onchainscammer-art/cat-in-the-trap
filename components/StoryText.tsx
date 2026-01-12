'use client';

interface WobblyLineProps {
  children: React.ReactNode;
  tilt?: number;
  offset?: number;
}

export function WobblyLine({ children, tilt = 0, offset = 0 }: WobblyLineProps) {
  return (
    <p
      className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#2a2520]"
      style={{
        fontFamily: 'var(--font-serif)',
        transform: `rotate(${tilt}deg) translateY(${offset}px)`,
        display: 'inline-block',
        width: '100%'
      }}
    >
      {children}
    </p>
  );
}

interface EmphasisProps {
  children: React.ReactNode;
  type?: 'shout' | 'big' | 'impact' | 'scary';
}

export function Emphasis({ children, type = 'big' }: EmphasisProps) {
  const styles = {
    shout: 'text-2xl sm:text-3xl lg:text-4xl font-black text-[#ff3b30] inline-block transform rotate-2',
    big: 'text-xl sm:text-2xl lg:text-3xl font-bold inline-block transform -rotate-1',
    impact: 'text-3xl sm:text-4xl lg:text-5xl font-black text-[#ff3b30] inline-block transform rotate-3 drop-shadow-lg',
    scary: 'text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2a2520] inline-block transform -rotate-2 italic'
  };

  return (
    <span className={styles[type]} style={{ fontFamily: 'var(--font-marker)' }}>
      {children}
    </span>
  );
}

export function Highlight({ children, color = 'yellow' }: { children: React.ReactNode; color?: string }) {
  const colors = {
    yellow: 'bg-yellow-200/40',
    red: 'bg-red-200/40',
    blue: 'bg-blue-200/40'
  };

  return (
    <span className={`${colors[color as keyof typeof colors]} px-1 transform -rotate-1 inline-block`}>
      {children}
    </span>
  );
}

export function MotionLines({ className = "" }: { className?: string }) {
  return (
    <svg width="60" height="40" viewBox="0 0 60 40" className={`inline-block ${className}`}>
      <path d="M 5 10 L 25 10" stroke="#ff3b30" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M 10 20 L 35 20" stroke="#ff3b30" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M 5 30 L 30 30" stroke="#ff3b30" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
