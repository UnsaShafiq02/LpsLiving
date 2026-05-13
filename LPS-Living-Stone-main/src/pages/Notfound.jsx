import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D6E4F] via-[#0b5c42] to-[#064635]">

      {/* glow */}
      <div className="absolute top-[-220px] left-[-200px] w-[550px] h-[550px] bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-220px] right-[-200px] w-[550px] h-[550px] bg-white/5 blur-3xl rounded-full" />

      {/* floating dots */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-3 h-3 bg-white/30 rounded-full top-1/4 left-1/4"
      />

      <motion.div
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-2 h-2 bg-white/20 rounded-full bottom-1/3 right-1/4"
      />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl px-6 text-white"
      >

        {/* 404 */}
        <h1 className="text-[130px] sm:text-[180px] font-black leading-none tracking-tight text-white">
          404
        </h1>

        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          Oops! Page Not Found
        </h2>

        <p className="mt-5 text-white/80 text-base sm:text-lg leading-7">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate('/')}
            className="
              flex items-center justify-center gap-2
              px-8 py-4 rounded-2xl
              bg-white text-[#0D6E4F]
              font-bold
              hover:bg-[#f0f0f0]
              hover:scale-105 active:scale-95
              transition
            "
          >
            <Home size={18} />
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="
              flex items-center justify-center gap-2
              px-8 py-4 rounded-2xl
              bg-white/10 text-white
              border border-white/20
              font-semibold
              backdrop-blur-xl
              hover:bg-white/20
              hover:scale-105 active:scale-95
              transition
            "
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

        {/* decorative line */}
        <motion.div
          animate={{ scaleX: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-12 h-[2px] w-44 mx-auto bg-white/40 rounded-full"
        />

      </motion.div>
    </div>
  );
};

export default NotFound;