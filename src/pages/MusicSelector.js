import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Heart, Smile, Zap, Star } from 'lucide-react';
import { useMusic } from '../MusicContext';

const musicData = {
  sedih: [
    { id: 1, title: 'Menerima Luka', artist: 'Natasya Sabella', url: '/music/menerima-luka.mp3' },
    { id: 2, title: 'Bersenja Gurau', artist: 'Raim Laode', url: '/music/bersenja-gurau.mp3' },
    { id: 3, title: 'Dirimu Yang Dulu', artist: 'Anggis Devaki', url: '/music/dirimu-yang-dulu.mp3' }
  ],
  mood: [
    { id: 4, title: 'Mistletoe', artist: 'Justin Bieber', url: '/music/mistletoe.mp3' },
    { id: 5, title: '18', artist: 'One Direction', url: '/music/18.mp3' },
    { id: 6, title: 'Trouble (Frank)', artist: 'ciaffa, fedo DJ', url: '/music/trouble.mp3' }
  ],
  semangat: [
    { id: 7, title: 'Payphone', artist: 'Maroon 5', url: '/music/payphone.mp3' },
    { id: 8, title: 'Perfect', artist: 'One Direction', url: '/music/perfect.mp3' },
    { id: 9, title: 'Where We Are', artist: 'One Direction', url: '/music/where-we-are.mp3' }
  ],
  favorit: [
    { id: 10, title: 'Kota Ini Tak Sama Tanpamu', artist: 'Nadhif Basalamah', url: '/music/kota-ini.mp3' },
    { id: 11, title: 'Masa Ini, Nanti, dan Masa Indah Lainnya', artist: 'Nuca', url: '/music/masa-ini.mp3' },
    { id: 12, title: '8 Letters', artist: "Why Don't We", url: '/music/8-letters.mp3' }
  ]
};

const categories = [
  { key: 'sedih', label: 'Sedih', icon: Heart, color: 'from-blue-600 to-indigo-700', emoji: '💙' },
  { key: 'mood', label: 'Mood', icon: Smile, color: 'from-purple-600 to-pink-600', emoji: '🌸' },
  { key: 'semangat', label: 'Semangat', icon: Zap, color: 'from-orange-500 to-red-600', emoji: '⚡' },
  { key: 'favorit', label: 'Favorit', icon: Star, color: 'from-yellow-500 to-amber-600', emoji: '⭐' }
];

const MusicSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const { playTrack } = useMusic();
  const navigate = useNavigate();

  const handleSelectSong = (track) => {
    playTrack(track);
    setShowToast(true);
    setTimeout(() => {
      navigate('/timeline');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md w-full"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-4"
          >
            <Music className="w-16 h-16 text-yellow-400" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100" style={{ fontFamily: 'Playfair Display, serif' }}>
            Pilih Musik 🎵
          </h1>
          <p className="text-blue-200" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Musik akan menemani kita selama journey ini~
          </p>
        </motion.div>

        {/* Categories */}
        {!selectedCategory ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.key}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`bg-gradient-to-br ${cat.color} p-6 rounded-2xl border-2 border-yellow-400/30 shadow-xl hover:shadow-2xl transition-all backdrop-blur-sm`}
                >
                  <Icon className="w-12 h-12 text-white mx-auto mb-3" />
                  <div className="text-2xl mb-2">{cat.emoji}</div>
                  <div className="text-white font-bold text-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {cat.label}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {/* Back button */}
            <motion.button
              whileHover={{ x: -5 }}
              onClick={() => setSelectedCategory(null)}
              className="mb-4 text-blue-300 hover:text-blue-100 flex items-center gap-2 transition-colors"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              ← Kembali
            </motion.button>

            {/* Songs list */}
            <div className="space-y-3">
              {musicData[selectedCategory].map((song, idx) => (
                <motion.button
                  key={song.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectSong(song)}
                  className="w-full bg-blue-950/40 backdrop-blur-md border border-blue-500/20 hover:border-yellow-400/50 rounded-xl p-4 text-left transition-all shadow-lg hover:shadow-xl group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center border-2 border-yellow-400/30 group-hover:border-yellow-400 transition-all">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {song.title}
                      </div>
                      <div className="text-blue-300 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {song.artist}
                      </div>
                    </div>
                    <div className="text-2xl group-hover:scale-125 transition-transform">🎧</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Toast notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full shadow-2xl border-2 border-yellow-400 flex items-center gap-2"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              <Music className="w-5 h-5" />
              <span>Musik dipilih! Loading... ✨</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicSelector;