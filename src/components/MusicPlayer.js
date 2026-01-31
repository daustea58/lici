import React from 'react';
import { useMusic } from '../MusicContext';
import { Music, Pause, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const { currentTrack, isPlaying, togglePlay } = useMusic();

  if (!currentTrack) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
        
        {/* Player button */}
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-yellow-400 shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-md"
        >
          {/* Rotating background when playing */}
          {isPlaying && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"
            />
          )}
          
          {/* Icon */}
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white relative z-10" fill="white" />
          ) : (
            <Play className="w-6 h-6 text-white relative z-10" fill="white" />
          )}
        </motion.button>

        {/* Track name tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-20 top-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur-md border border-blue-500/30 rounded-lg px-3 py-2 shadow-xl whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white font-medium">{currentTrack.title}</span>
          </div>
          <div className="text-xs text-blue-300 mt-0.5">{currentTrack.artist}</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;