import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-6 mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Brand */}
        <motion.h1
          className="text-lg font-bold text-yellow-400 mb-4 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © All Right's Reserved By Nikhil {new Date().getFullYear()}
        </motion.h1>

        {/* Links */}
        <motion.ul
          className="flex space-x-6 mb-4 md:mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { name: "GitHub", url: "https://github.com/nikhilshetty32" },
            { name: "Instagram", url: "https://instagram.com/nikhil_patte" },
            { name: "Email", url: "shettynikil31@gmail.com" },
          ].map((link, i) => (
            <motion.li key={i} whileHover={{ scale: 1.1, color: "#facc15" }}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { icon: "fab fa-github", url: "https://github.com/" },
            { icon: "fab fa-instagram", url: "https://instagram.com/" },
            { icon: "fab fa-twitter", url: "https://twitter.com/" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={`${social.icon} text-xl`}></i>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
