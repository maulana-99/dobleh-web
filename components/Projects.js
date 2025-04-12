"use client";
import { useEffect, useState } from "react";

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      name: "E-Commerce API",
      description: "Developed a RESTful API for an e-commerce platform using Laravel. Implemented user authentication, product management, shopping cart functionality, and order processing.",
      tech: ["PHP", "Laravel", "MySQL", "RESTful API", "JWT"],
      year: "2023"
    },
    {
      id: 2,
      name: "Inventory Management System",
      description: "Created a backend system for tracking inventory in a warehouse environment. Features include stock management, order tracking, and reporting tools.",
      tech: ["Node.js", "Express", "MongoDB", "Docker"],
      year: "2022"
    },
    {
      id: 3,
      name: "School Management API",
      description: "Built a comprehensive API for a school management system. Handles student records, course management, attendance tracking, and grade reporting.",
      tech: ["PHP", "Laravel", "PostgreSQL", "API"],
      year: "2022"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-black text-green-500 font-mono p-6 rounded-xl shadow-[0_0_20px_#00ffcc] border border-[#00ffcc] w-full max-w-3xl mx-auto mt-8">
        <div className="text-sm mb-4">
          <span className="text-green-300">$</span> ls -la projects/ | grep "featured"
        </div>
        
        <div className="text-[#00ffcc] mb-2 text-xl border-b border-green-500 pb-2">
          Featured Projects
        </div>
        
        <div className="mt-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="mb-4 p-3 border border-gray-800 rounded hover:border-green-700 cursor-pointer transition-colors"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[#ff66cc]">{project.name}</h3>
                <span className="text-gray-400 text-xs">{project.year}</span>
              </div>
              
              {selectedProject === project.id && (
                <div className="mt-3 text-white text-sm">
                  <p className="mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-900 text-xs rounded-md text-green-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedProject !== project.id && (
                <div className="text-gray-500 text-xs mt-1">
                  Click to expand details...
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-sm text-gray-500 mt-4">
          <span className="text-green-300">$</span> echo "Click on a project to view details"
        </div>
      </div>
    </div>
  );
} 