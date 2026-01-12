'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Gallery() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-50px' });

  // Placeholder images - will be replaced with actual memes
  const memes = [
    { id: 1, height: 'h-64', text: 'Meme 1' },
    { id: 2, height: 'h-80', text: 'Meme 2' },
    { id: 3, height: 'h-72', text: 'Meme 3' },
    { id: 4, height: 'h-96', text: 'Meme 4' },
    { id: 5, height: 'h-64', text: 'Meme 5' },
    { id: 6, height: 'h-80', text: 'Meme 6' },
    { id: 7, height: 'h-72', text: 'Meme 7' },
    { id: 8, height: 'h-64', text: 'Meme 8' },
  ];

  return (
    <section id="gallery" className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]/50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff3b30] mb-4"
            style={{ fontFamily: 'var(--font-marker)' }}
          >
            Trap Activities
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-[#ff3b30] mx-auto"></div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6">
          {memes.map((meme, index) => (
            <MemeCard key={meme.id} meme={meme} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface MemeCardProps {
  meme: {
    id: number;
    height: string;
    text: string;
  };
  index: number;
}

function MemeCard({ meme, index }: MemeCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4 sm:mb-6 break-inside-avoid"
    >
      <div
        className={`${meme.height} relative bg-gradient-to-br from-[#ff3b30]/20 to-[#1a1a1a] rounded-lg border-2 border-[#ff3b30]/20 overflow-hidden group cursor-pointer transition-all duration-300 hover:border-[#ff3b30]/60 hover:scale-[1.02]`}
        style={{
          filter: 'contrast(1.1) saturate(0.9)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <p
            className="text-white/50 text-center text-sm sm:text-base group-hover:text-white/70 transition-colors"
            style={{ fontFamily: 'var(--font-hand)' }}
          >
            [{meme.text} Placeholder]
          </p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#ff3b30]/0 group-hover:bg-[#ff3b30]/10 transition-all duration-300"></div>
      </div>
    </motion.div>
  );
}
