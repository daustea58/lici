import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Heart, Sparkles } from 'lucide-react';

const LockScreen = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const birthday = new Date('2026-02-01T00:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = birthday - now;
      
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '22122024') {
      localStorage.setItem('lixie_authenticated', 'true');
      navigate('/music');
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-4 border-yellow-400 mb-6 shadow-2xl shadow-blue-500/50">
            <Heart className="w-12 h-12 text-white" fill="white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300">
              Happy Birthday
            </span>
          </h1>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200" style={{ fontFamily: 'Playfair Display, serif' }}>
              Lixie ✨
            </h2>
          </motion.div>
        </motion.div>

        {/* Countdown */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-950/40 backdrop-blur-md border border-blue-500/20 rounded-2xl p-6 mb-6 shadow-xl"
        >
          <div className="text-center mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <p className="text-blue-200 text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>Countdown menuju hari spesialmu:</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Hari', value: countdown.days },
              { label: 'Jam', value: countdown.hours },
              { label: 'Menit', value: countdown.minutes },
              { label: 'Detik', value: countdown.seconds }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-3 mb-2 border border-yellow-400/30 shadow-lg">
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {String(item.value).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-xs text-blue-300" style={{ fontFamily: 'Fredoka, sans-serif' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Password form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: error ? [1, 1.05, 0.95, 1.02, 1] : 1 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-blue-950/40 backdrop-blur-md border border-blue-500/20 rounded-2xl p-6 shadow-xl"
        >
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-yellow-400" />
              <label className="text-blue-100 font-medium" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Masukkan Kode Rahasia 🔐
              </label>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Hint: Tanggal spesial kita ❤️"
              className="w-full px-4 py-3 bg-slate-900/50 border-2 border-yellow-400/50 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-yellow-400 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-pink-400 text-sm mt-2 flex items-center gap-1"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                <span>❌</span> Salah sayang, coba lagi!
              </motion.p>
            )}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl border-2 border-yellow-400 shadow-lg shadow-blue-500/50 transition-all"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Buka Hadiah 🎁
          </motion.button>
        </motion.form>

        {/* Footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-blue-300/70 text-sm mt-6"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          Psst... tanggal kita jadian itu loh 💙
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LockScreen;