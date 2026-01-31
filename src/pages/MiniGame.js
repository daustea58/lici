import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const MiniGame = () => {
  const [noClickCount, setNoClickCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleNoClick = () => {
    if (noClickCount < 5) {
      const newCount = noClickCount + 1;
      setNoClickCount(newCount);
      
      // Random position
      const maxX = window.innerWidth - 200;
      const maxY = window.innerHeight - 100;
      setNoPosition({
        x: Math.random() * maxX,
        y: Math.random() * maxY
      });
    }
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      navigate('/wishes');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: window.innerWidth / 2, 
                  y: window.innerHeight / 2,
                  scale: 0,
                  opacity: 1
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: [0, 1, 0.5],
                  opacity: [1, 1, 0],
                  rotate: Math.random() * 360
                }}
                transition={{ duration: 2, delay: Math.random() * 0.5 }}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: ['#fbbf24', '#3b82f6', '#f472b6', '#a78bfa'][Math.floor(Math.random() * 4)]
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center relative z-10"
      >
        {/* Header */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          className="mb-8"
        >
          <div className="text-8xl mb-6">🥺</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-blue-300 to-purple-300" style={{ fontFamily: 'Playfair Display, serif' }}>
            Pertanyaan Penting!
          </h1>
        </motion.div>

        {/* Question */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-950/40 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 mb-8 shadow-2xl"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Kamu sayang aku ga?
            </h2>
            <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
          </div>
          <p className="text-blue-200 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Jawab jujur ya bb~ 💙
          </p>
        </motion.div>

        {/* Buttons */}
        <div className="space-y-4">
          {/* YES Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYesClick}
            className="w-full py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold text-2xl rounded-2xl border-4 border-yellow-400 shadow-2xl shadow-green-500/50 transition-all"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
            data-testid="yes-button"
          >
            ✅ IYA DONG SAYANG! 💕
          </motion.button>

          {/* NO Button (movable) */}
          <AnimatePresence>
            {noClickCount < 5 && (
              <motion.button
                initial={{ opacity: 1 }}
                animate={{ 
                  x: noPosition.x, 
                  y: noPosition.y,
                  opacity: 1
                }}
                exit={{ opacity: 0, scale: 0, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.05 }}
                onClick={handleNoClick}
                onMouseEnter={handleNoClick}
                onTouchStart={handleNoClick}
                className="py-5 px-8 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-bold text-xl rounded-2xl border-2 border-gray-400 shadow-xl transition-all cursor-pointer"
                style={{ 
                  fontFamily: 'Fredoka, sans-serif',
                  position: noClickCount > 0 ? 'fixed' : 'relative',
                  zIndex: 20
                }}
                data-testid="no-button"
              >
                ❌ Enggak
              </motion.button>
            )}
          </AnimatePresence>

          {/* Message when NO button disappears */}
          {noClickCount >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-950/60 backdrop-blur-md border-2 border-yellow-400 rounded-xl p-4"
            >
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <p className="text-white font-semibold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  Tombol "Enggak" nya kabur! 😂
                </p>
              </div>
              <p className="text-blue-200 text-sm mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Ya udah, berarti jawabannya "IYA" kan? Hehe 💙
              </p>
            </motion.div>
          )}
        </div>

        {/* Click counter hint */}
        {noClickCount > 0 && noClickCount < 5 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-300 text-sm mt-6"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Tombol nya kabur! 😆 ({noClickCount}/5)
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default MiniGame;