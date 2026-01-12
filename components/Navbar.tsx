'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0xTRAP...';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="backdrop-blur-md bg-[#1a1a1a]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff3b30]"
                style={{ fontFamily: 'var(--font-marker)' }}
              >
                The Cat in the Trap
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="#story"
                className="text-white/80 hover:text-[#ff3b30] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                The Story
              </a>
              <a
                href="#gallery"
                className="text-white/80 hover:text-[#ff3b30] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                The Gallery
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#ff3b30] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                X.com
              </a>
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#ff3b30] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                Pump.fun
              </a>

              {/* Copy CA Button */}
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-[#ff3b30] hover:bg-[#ff3b30]/90 text-white rounded-lg transition-all duration-200 font-semibold"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copy CA</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile Menu Button and Copy CA */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-3 py-2 bg-[#ff3b30] hover:bg-[#ff3b30]/90 text-white rounded-lg transition-all duration-200 text-sm font-semibold"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                {copied ? (
                  <Check size={16} />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
