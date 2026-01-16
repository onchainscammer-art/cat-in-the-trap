'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMusic } from '@/components/MusicProvider';

const memes = [
  '/catmeme1.jpg',
  '/catmeme2.jpg',
  '/catmeme3.jpg',
  '/catmeme4.jpg',
  '/catmeme5.jpg',
  '/catmeme6.jpg',
];

export default function MemesPage() {
  const { startMusic } = useMusic();

  // Start music when page loads
  useEffect(() => {
    startMusic();
  }, [startMusic]);

  return (
    <div className="min-h-screen relative z-10">

      {/* Back button - fixed */}
      <Link href="/" className="fixed top-4 left-4 z-50">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-2 sm:px-6 sm:py-3 bg-[#8B4513] text-white rounded-lg font-bold text-sm sm:text-lg shadow-lg
                     border-2 border-[#D2691E] hover:bg-[#A0522D] transition-all cursor-pointer"
          style={{ fontFamily: 'var(--font-hand)' }}
        >
          ← Back
        </motion.div>
      </Link>

      {/* Meme Gallery */}
      <main className="pt-8 pb-8 px-4">
        {/* Title - not fixed */}
        <h1
          className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg text-center mb-8"
          style={{ fontFamily: 'var(--font-marker)' }}
        >
          Memes
        </h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memes.map((meme, index) => (
            <motion.div
              key={meme}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-2xl
                         border-4 border-[#8B4513] bg-[#2a2520]"
            >
              <Image
                src={meme}
                alt={`Cat meme ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
