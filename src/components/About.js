import React from "react";

function About() {
  return (
    <section id="about" className="px-0 py-0 bg-gray-800">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-stretch text-gray-300">
        {/* Profile Image - Full Half Side */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/w.jpg" // 👈 inside public/images/
            alt="kunne"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Content - Other Half */}
        <div className="w-full md:w-1/2 px-6 py-20 space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">
            About Me
          </h2>

          {/* Intro */}
          <p>
            Hello! I’m <span className="font-semibold text-white">Nikhil</span>, a passionate
            <span className="text-yellow-400"> Full-Stack Developer </span> dedicated to
            building interactive, modern, and scalable web applications. 
            My journey in coding started with curiosity and has grown into a 
            career I absolutely love.
          </p>

          {/* Highlights */}
          <ul className="list-disc list-inside space-y-2">
            <li>💻 Skilled in <strong>React, Node.js, and Tailwind CSS</strong>.</li>
            <li>🚀 Experienced in creating responsive, fast, and accessible UIs.</li>
            <li>🔒 Interested in performance optimization & web security.</li>
            <li>🌱 Always learning new technologies to improve my craft.</li>
          </ul>

          {/* Personal touch */}
          <p>
            When I’m not coding, you’ll find me near  Patte 
    
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
