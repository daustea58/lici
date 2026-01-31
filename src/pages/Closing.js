import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Code } from 'lucide-react';

const Closing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        {/* Animated emoji */}
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.2, 1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          className="text-8xl mb-6"
        >
          🎉
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-950/40 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 shadow-2xl mb-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300" style={{ fontFamily: 'Playfair Display, serif' }}>
            That's It! ✨
          </h1>
          
          <div className="space-y-4 text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="text-lg">
              Ini hadiah simpel dari aku buat kamu, bb. Semoga suka ya! 💙
            </p>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center justify-center gap-2 py-4"
            >
              <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
              <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>I Love You</span>
              <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
            </motion.div>

            <p className="text-yellow-400 font-semibold">
              Semoga hari ini spesial dan penuh kebahagiaan! 🎂🎈
            </p>
          </div>
        </motion.div>

        {/* Funny animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-6 mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Code className="w-6 h-6 text-blue-400" />
            </motion.div>
            <span className="text-blue-200 text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>Website ini dibuat dengan:</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-white font-semibold">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span style={{ fontFamily: 'Fredoka, sans-serif' }}>Cinta yang tulus</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white font-semibold">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span style={{ fontFamily: 'Fredoka, sans-serif' }}>Sedikit kode</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white font-semibold">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span style={{ fontFamily: 'Fredoka, sans-serif' }}>Dan banyak banget harapan! 😆</span>
            </div>
          </div>
        </motion.div>

        {/* Creator signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-bold px-6 py-3 rounded-full shadow-2xl border-4 border-blue-600" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💙
              </motion.span>
              <span>by</span>
              <span className="text-xl font-black">RYZEN</span>
            </div>
          </div>
        </motion.div>

        {/* Floating hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: window.innerHeight + 50, x: Math.random() * window.innerWidth }}
              animate={{ 
                y: -50,
                x: Math.random() * window.innerWidth,
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute text-4xl"
            >
              {['💙', '💕', '✨', '🎂'][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Closing;