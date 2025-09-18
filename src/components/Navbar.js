import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center px-8 py-4 bg-indigo-600 text-white fixed w-full shadow-md z-10"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo with Different Animation */}
      <motion.h1
        className="text-2xl font-bold"
        initial={{ scale: 0, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 8, duration: 0.8 }}
      >
        My Portfolio
      </motion.h1>

      {/* Nav Links */}
      <motion.ul
        className="flex space-x-6 font-medium"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {["About", "Projects", "Skills", "Contact"].map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-300"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
