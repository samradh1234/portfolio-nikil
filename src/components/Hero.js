import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      
      {/* Heading Animation (bouncy logo-style) */}
      <motion.h2
        className="text-5xl font-extrabold mb-4"
        initial={{ scale: 0, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 8, duration: 0.8 }}
      >
        Hello, I’m Nikhil
      </motion.h2>

      {/* Subtitle Animation (smooth fade-up with delay) */}
      <motion.p
        className="text-xl md:text-2xl mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        A Creative Frontend Developer who turns ideas into digital experiences ✨
      </motion.p>

      {/* Button Animation (pop-in + hover effect) */}
      <motion.a
        href="#projects"
        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore My Work
      </motion.a>
    </section>
  );
}

export default Hero;
