import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "My personal portfolio using React & Tailwind.",
      img: "/images/1.jpg",
    },
    {
      title: "Weather App",
      desc: "An app made using Python & CSS that shows real-time weather using API.",
      img: "/images/2.jpg",
    },
    {
      title: "Sapthagiri Enterprises",
      desc: "A petrol pump where oil and other products are ready to be purchased.",
      img: "/images/3.jpg",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 bg-gray-900">
      {/* Heading Animation */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-yellow-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {projectList.map((p, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Project Image */}
            <motion.img
              src={p.img}
              alt={p.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project Title */}
            <h3 className="text-xl font-semibold text-cyan-400">{p.title}</h3>

            {/* Project Description */}
            <p className="text-gray-300 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
