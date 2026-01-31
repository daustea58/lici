import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, MapPin, Home, ArrowRight } from 'lucide-react';

const milestones = [
  {
    id: 1,
    icon: MessageCircle,
    title: 'Awal Kenal',
    date: 'Awal cerita kita',
    description: 'Dimulai dari nama FB aneh "Ryzen susu gede" yang bikin kamu notice aku. Aneh? Iya. Tapi nyata 😭💙',
    color: 'from-blue-500 to-blue-600',
    emoji: '📱'
  },
  {
    id: 2,
    icon: Heart,
    title: 'Jadian',
    date: '22 Desember 2024',
    description: 'Hari dimana kita resmi jadi "kita". Tanggal yang ga akan pernah aku lupain, sayang~ 💕',
    color: 'from-pink-500 to-red-500',
    emoji: '❤️'
  },
  {
    id: 3,
    icon: MapPin,
    title: 'First Meet',
    date: '06 Juni 2025',
    description: 'Pertama kali ketemu langsung, deg-degan banget! Tapi seneng banget akhirnya bisa liat senyummu secara langsung 🥰',
    color: 'from-purple-500 to-indigo-600',
    emoji: '🌟'
  },
  {
    id: 4,
    icon: Home,
    title: 'Ke Rumah Orang Tua',
    date: 'Momen berkesan',
    description: 'Deg-deg-an parah ketemu orang tuamu! Tapi ternyata baik banget... Bikin aku mikir: "Ini jodoh bukan sih?" 🫠💖',
    color: 'from-yellow-500 to-orange-500',
    emoji: '🏡'
  }
];

const Timeline = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300" style={{ fontFamily: 'Playfair Display, serif' }}>
            Timeline Kita 💙
          </h1>
          <p className="text-blue-200 text-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Perjalanan indah kita berdua~
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-500 rounded-full" />

          {/* Timeline items */}
          <div className="space-y-8">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative pl-20"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} border-4 border-yellow-400 shadow-2xl flex items-center justify-center z-10"
                    style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-blue-950/40 backdrop-blur-md border border-blue-500/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-yellow-400/50 transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-4xl">{milestone.emoji}</span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {milestone.title}
                        </h3>
                        <div className="text-yellow-400 text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {milestone.date}
                        </div>
                      </div>
                    </div>
                    <p className="text-blue-100 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {milestone.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Next button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/game')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-lg rounded-full border-2 border-yellow-400 shadow-2xl shadow-blue-500/50 transition-all"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Lanjut ke Game 🎮
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;