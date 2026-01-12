'use client';

import { Twitter, Send, TrendingUp } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: 'https://x.com',
      color: 'hover:bg-white/10',
    },
    {
      name: 'Telegram',
      icon: Send,
      url: 'https://telegram.org',
      color: 'hover:bg-blue-500/20',
    },
    {
      name: 'Pump.fun',
      icon: TrendingUp,
      url: 'https://pump.fun',
      color: 'hover:bg-[#ff3b30]/20',
    },
  ];

  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/20 ${link.color} transition-all duration-300 group`}
              aria-label={link.name}
            >
              <link.icon
                size={28}
                className="text-white/70 group-hover:text-[#ff3b30] group-hover:scale-110 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p
            className="text-white/60 text-lg sm:text-xl mb-4"
            style={{ fontFamily: 'var(--font-hand)' }}
          >
            Real Niggas know type shit.
          </p>
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: 'var(--font-hand)' }}
          >
            © 2026 The Cat in the Trap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
