"use client";
import { useEffect, useState } from "react";

export default function Skills() {
  const [visible, setVisible] = useState(false);
  
  const skillCategories = [
    {
      name: "Backend",
      skills: [
        { name: "PHP", icon: "🐘" },
        { name: "Laravel", icon: "🔺" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "⚡" }
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MySQL", icon: "🐬" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" }
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "🟨" },
        { name: "React", icon: "⚛️" }
      ]
    },
    {
      name: "DevOps",
      skills: [
        { name: "Git", icon: "🔄" },
        { name: "Docker", icon: "🐳" },
        { name: "Linux", icon: "🐧" }
      ]
    },
    {
      name: "Tools",
      skills: [
        { name: "VS Code", icon: "📝" },
        { name: "Postman", icon: "📮" },
        { name: "Terminal", icon: "💻" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-black text-green-500 font-mono p-6 rounded-xl shadow-[0_0_20px_#00ffcc] border border-[#00ffcc] w-full max-w-3xl mx-auto mt-8">
        <div className="text-sm mb-4">
          <span className="text-green-300">$</span> apt list --installed | grep "tech"
        </div>
        
        <div className="text-[#00ffcc] mb-2 text-xl border-b border-green-500 pb-2">
          Technical Skills
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-4">
              <h3 className="text-[#ff66cc] mb-3">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gray-900 rounded-md px-3 py-2 mb-2 flex items-center">
                    <span className="text-xl mr-2">{skill.icon}</span>
                    <span className="text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 