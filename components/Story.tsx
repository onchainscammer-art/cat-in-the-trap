'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface StanzaProps {
  text: string;
  imagePlaceholder: string;
  imagePosition: 'left' | 'right';
  index: number;
}

function Stanza({ text, imagePlaceholder, imagePosition, index }: StanzaProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="mb-32 sm:mb-40 lg:mb-48">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
          imagePosition === 'right' ? '' : 'lg:flex-row-reverse'
        }`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div className="prose prose-invert prose-lg sm:prose-xl lg:prose-2xl max-w-none">
            <p
              className="text-white/90 leading-relaxed whitespace-pre-line text-lg sm:text-xl lg:text-2xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {text}
            </p>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`${imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className="relative aspect-square bg-gradient-to-br from-[#ff3b30]/20 to-[#1a1a1a] rounded-2xl border-2 border-[#ff3b30]/30 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <p
                className="text-white/50 text-center text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                {imagePlaceholder}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Story() {
  const stanzas = [
    {
      text: `The phone didn't ring, the block was too hot,
We sat by the window, watching the spot.
I sat there with Sally, keeping it low,
With nothing to weigh and nothing to show.
Too risky to serve, too paranoid to sleep,
So we sat in the dark, in way too deep.`,
      imagePlaceholder: '[Image: Empty streets at night]',
      imagePosition: 'right' as const,
    },
    {
      text: `And then on the door... a loud heavy THUMP!
How that knock made our hearts start to jump!
We looked! Then we saw him step in with the pack!
We looked! And we saw him! The Cat with the Sack!
He stepped inside quickly, he locked up the latch,
'Don't worry,' he said. 'I brought a new batch.'`,
      imagePlaceholder: '[Image: The Cat entering with a sack]',
      imagePosition: 'left' as const,
    },
    {
      text: `'Why do you sit there and look at the wall?'
Said the Cat. 'I have bricks! I have enough for us all!
I know some good tricks with the Pyrex and heat,
I can show you exactly how to take over the street!
Look at me! Look at me! Look at me NOW!
It is easy to cook if you only know how.'`,
      imagePlaceholder: '[Image: The Cat with cooking equipment]',
      imagePosition: 'right' as const,
    },
  ];

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-50px' });

  return (
    <section id="story" className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff3b30] mb-4"
            style={{ fontFamily: 'var(--font-marker)' }}
          >
            The Story
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-[#ff3b30] mx-auto"></div>
        </motion.div>

        {/* Stanzas */}
        {stanzas.map((stanza, index) => (
          <Stanza
            key={index}
            text={stanza.text}
            imagePlaceholder={stanza.imagePlaceholder}
            imagePosition={stanza.imagePosition}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
