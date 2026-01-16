'use client';

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

interface MusicContextType {
  startMusic: () => void;
  isPlaying: boolean;
}

const MusicContext = createContext<MusicContextType>({
  startMusic: () => {},
  isPlaying: false,
});

export function useMusic() {
  return useContext(MusicContext);
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create audio element once
    if (!audioRef.current) {
      audioRef.current = new Audio('/catinthetrapsong.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    return () => {
      // Don't cleanup on unmount - we want music to persist
    };
  }, []);

  const startMusic = () => {
    if (hasStarted.current || !audioRef.current) return;

    hasStarted.current = true;
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        console.log('Music started!');
      })
      .catch(err => {
        console.error('Audio play prevented:', err);
        hasStarted.current = false;
      });
  };

  return (
    <MusicContext.Provider value={{ startMusic, isPlaying }}>
      {children}
    </MusicContext.Provider>
  );
}
