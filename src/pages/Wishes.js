import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift, ArrowRight } from 'lucide-react';

const Wishes = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-12 px-6 flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="inline-block mb-6"
          >
            <Gift className="w-20 h-20 text-yellow-400" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200" style={{ fontFamily: 'Playfair Display, serif' }}>
            Selamat Ulang Tahun, bb! 🎂
          </h1>
        </motion.div>

        {/* Main message */}
        <motion.div 
          variants={itemVariants}
          className="bg-blue-950/40 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 shadow-2xl mb-6"
        >
          <div className="space-y-6 text-blue-50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem' }}>
            <p>
              Hai bb yang paling cantik dan spesial! 💙
            </p>
            
            <p>
              Hari ini, aku cuma mau bilang betapa bersyukurnya aku bisa kenal dan deket sama kamu. Dari awal yang aneh (iya, nama FB aku emang bikin kamu notice 😭), sampe sekarang kita udah lewatin banyak momen berharga bareng.
            </p>

            <div className="flex items-center gap-3 py-4">
              <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
            </div>

            <p>
              Aku masih inget banget waktu pertama kali ke rumah kamu, deg-degan ketemu orang tua kamu. Tapi saat liat mereka baik banget, aku langsung mikir: "Ini jodoh bukan sih?" Dan sampai sekarang, aku percaya kamu adalah orang yang Tuhan kirim buat aku. 🫠💖
            </p>

            <p>
              Makasih udah jadi bagian paling indah di hidup aku. Makasih udah sabar ngadepin aku yang kadang annoying. Makasih udah mau dengerin cerita-cerita random aku. Dan yang paling penting, makasih udah sayang sama aku. 💕
            </p>

            <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl p-6 border-2 border-yellow-400/30 my-6">
              <p className="text-center font-semibold text-xl text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                "Di usia yang baru ini, semoga kamu makin bahagia, makin sukses, dan yang paling penting... makin sayang sama aku! 😆💙"
              </p>
            </div>

            <p>
              Aku doain semoga semua impian kamu tercapai, semoga selalu sehat, dan semoga kita bisa terus bareng sampe tua nanti. Aamiin! 🤲✨
            </p>

            <p className="font-semibold text-lg">
              Sekali lagi, Happy Birthday bb tersayang! 🎉🎂
            </p>

            <p className="text-right italic text-blue-200 mt-8">
              I love you so much, Lixie 💙<br/>
              - Ryzen
            </p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {['🎈', '🎁', '🎂'].map((emoji, idx) => (
            <motion.div
              key={idx}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: idx * 0.3,
                repeatDelay: 1
              }}
              className="bg-blue-950/40 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 text-center shadow-xl"
            >
              <div className="text-5xl">{emoji}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Next button */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/closing')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-lg rounded-full border-2 border-yellow-400 shadow-2xl shadow-blue-500/50 transition-all"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Lanjut 💙
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Wishes;