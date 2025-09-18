import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML", level: "60%" },
    { name: "CSS", level: "75%" },
    { name: "JavaScript", level: "60%" },
    { name: "React", level: "75%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "Node.js", level: "65%" },
  ];

  return (
    <section id="skills" className="px-6 py-20 bg-gray-900 text-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-cyan-400">{skill.level}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-cyan-400 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
