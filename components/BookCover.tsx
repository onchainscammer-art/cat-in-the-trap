'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BookCoverProps {
  onOpen: () => void;
}

export default function BookCover({ onOpen }: BookCoverProps) {
  return (
    // LAYER 1: The Main Container
    // 'relative z-50' ensures this entire screen sits on top of everything else
    <div className="min-h-screen flex items-center justify-center bg-transparent relative z-50">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center p-4 w-full"
      >
        {/* Book Container */}
        {/* We use specific sizing to make sure the book looks good on all screens */}
        <div className="relative w-[85vw] h-[85vh] sm:w-[70vw] sm:h-[80vh] lg:w-[40vw] lg:h-[85vh]">
          
          {/* LAYER 2: The Book Image */}
          {/* pointer-events-none: Ensures the image is strictly visual and can't block clicks */}
          <Image
            src="/bookcover-final.jpg" // <--- UPDATED FILENAME (Rename your file to this!)
            alt="The Cat in the Trap"
            fill
            className="object-contain pointer-events-none select-none"
            priority
          />

          {/* LAYER 3: The Button Wrapper */}
          {/* z-50: Physically lifts the button area above the image */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-50">
            
            {/* LAYER 4: The 'Open Book' Button */}
            {/* Uses onPointerDown for instant mobile response (no double-tap) */}
            <motion.div
              role="button"
              onPointerDown={(e) => {
                e.preventDefault(); // Prevents ghost clicks
                onOpen();
              }}
              whileTap={{ scale: 0.95 }}
              // 'md:hover' means hover effects only happen on Desktop, preventing mobile glitches
              className="w-full px-8 py-4 bg-white text-[#2a2520] rounded-lg font-bold text-lg sm:text-xl shadow-lg 
                         md:hover:shadow-xl md:hover:bg-[#f5f1e8] md:hover:scale-105 
                         transition-all cursor-pointer text-center touch-manipulation select-none"
              style={{ fontFamily: 'var(--font-hand)' }}
            >
              Open Book →
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
