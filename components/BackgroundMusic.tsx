'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic({ shouldPlay }: { shouldPlay: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create audio element
    if (!audioRef.current) {
      audioRef.current = new Audio('/catinthetrapsong.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35; // 35% volume for background ambiance
      console.log('Audio element created');
    }

    // Play when shouldPlay becomes true (first user interaction)
    if (shouldPlay && !hasStarted.current) {
      hasStarted.current = true;
      console.log('Attempting to play music...');
      audioRef.current.play()
        .then(() => {
          console.log('Music started successfully!');
        })
        .catch(err => {
          console.error('Audio autoplay prevented:', err);
        });
    }

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [shouldPlay]);

  return null; // This component doesn't render anything
}
