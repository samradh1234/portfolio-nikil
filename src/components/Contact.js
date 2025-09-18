import React from "react";

function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-indigo-600 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 rounded text-black" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded text-black" />
        <textarea placeholder="Message" className="w-full p-3 rounded text-black"></textarea>
        <button className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
