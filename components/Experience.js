"use client";
import { useEffect, useState } from "react";

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const [currentTab, setCurrentTab] = useState("experience");
  
  const experience = [
    {
      company: "Core Initiative",
      position: "Backend Developer Intern",
      period: "2023",
      description: "Contributed to backend development during internship program. Worked on RESTful API development, database management, and system integration."
    }
  ];
  
  const education = [
    {
      institution: "Vocational School (SMK)",
      degree: "Computer and Network Engineering",
      year: "2017 - 2020",
      description: "Studied computer networking, basic programming, and system administration."
    },
    {
      institution: "Junior High School (SMP)",
      degree: "General Education",
      year: "2014 - 2017"
    },
    {
      institution: "Elementary School (SD)",
      degree: "General Education",
      year: "2008 - 2014"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-black text-green-500 font-mono p-6 rounded-xl shadow-[0_0_20px_#00ffcc] border border-[#00ffcc] w-full max-w-3xl mx-auto mt-8">
        <div className="text-sm mb-4">
          <span className="text-green-300">$</span> ls -la career/
        </div>
        
        {/* Tabs */}
        <div className="flex mb-4 border-b border-green-900">
          <button 
            className={`px-4 py-2 ${currentTab === 'experience' ? 'text-[#00ffcc] border-b-2 border-[#00ffcc]' : 'text-gray-500'}`}
            onClick={() => setCurrentTab('experience')}
          >
            experience.log
          </button>
          <button 
            className={`px-4 py-2 ${currentTab === 'education' ? 'text-[#00ffcc] border-b-2 border-[#00ffcc]' : 'text-gray-500'}`}
            onClick={() => setCurrentTab('education')}
          >
            education.log
          </button>
        </div>
        
        {/* Content */}
        <div className="text-sm text-white">
          <div className="text-[#00ffcc] mb-2 text-xl pb-2">
            {currentTab === 'experience' ? 'Professional Experience' : 'Education History'}
          </div>
          
          {currentTab === 'experience' ? (
            <div>
              {experience.map((job, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <span className="text-[#ff66cc] font-bold">{job.position}</span>
                    <span className="text-green-300">{job.period}</span>
                  </div>
                  <div className="text-gray-400">{job.company}</div>
                  <div className="mt-2">{job.description}</div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <span className="text-[#ff66cc] font-bold">{edu.institution}</span>
                    <span className="text-green-300">{edu.year}</span>
                  </div>
                  <div className="text-gray-400">{edu.degree}</div>
                  {edu.description && <div className="mt-2">{edu.description}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 