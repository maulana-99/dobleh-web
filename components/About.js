"use client";
import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const aboutData = {
    title: "About Me",
    content: `Hi there! I'm Muhama Ilham Maulana, a dedicated Backend Web Developer with a passion for creating efficient and scalable server-side applications. I enjoy solving complex problems and building robust systems that power modern web applications.

My journey in programming started during my vocational education, and I've been continuously learning and improving my skills ever since. I'm particularly interested in API development, database optimization, and system architecture.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while reading tech blogs.`
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-black text-green-500 font-mono p-6 rounded-xl shadow-[0_0_20px_#00ffcc] border border-[#00ffcc] w-full max-w-3xl mx-auto mt-8">
        <div className="text-sm mb-4">
          <span className="text-green-300">$</span> cat about.txt
        </div>
        
        <div className="text-[#00ffcc] mb-2 text-xl border-b border-green-500 pb-2">
          {aboutData.title}
        </div>
        
        <div className="text-sm text-white leading-relaxed whitespace-pre-wrap">
          {aboutData.content}
        </div>
      </div>
    </div>
  );
} 