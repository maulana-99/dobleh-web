"use client";
import { useEffect, useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [showResumeMessage, setShowResumeMessage] = useState(false);
  
  const contactInfo = [
    { icon: "📧", label: "Email", value: "maulana.be.dv@gmail.com" },
    { icon: "🌐", label: "GitHub", value: "github.com/maulana-99" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/muhama-ilham-maulana" },
    { icon: "📱", label: "Phone", value: "+62 812 3456 7890" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const handleResumeDownload = () => {
    // In a real app, this would link to an actual PDF file
    setShowResumeMessage(true);
    setTimeout(() => setShowResumeMessage(false), 3000);
  };

  return (
    <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-black text-green-500 font-mono p-6 rounded-xl shadow-[0_0_20px_#00ffcc] border border-[#00ffcc] w-full max-w-3xl mx-auto mt-8 mb-12">
        <div className="text-sm mb-4">
          <span className="text-green-300">$</span> contact --info
        </div>
        
        <div className="text-[#00ffcc] mb-2 text-xl border-b border-green-500 pb-2">
          Contact Information
        </div>
        
        <div className="mt-6 text-white">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <span className="text-2xl mr-4">{item.icon}</span>
              <div>
                <div className="text-gray-400 text-xs">{item.label}</div>
                <div className="text-[#00ffcc]">{item.value}</div>
              </div>
            </div>
          ))}
          
          <div className="mt-8 mb-6">
            <h3 className="text-[#ff66cc] mb-4">Resume / CV</h3>
            <button
              onClick={handleResumeDownload}
              className="px-4 py-2 bg-gray-900 border border-green-500 hover:bg-gray-800 text-green-400 rounded-md transition-colors duration-300"
            >
              $ wget resume.pdf
            </button>
            
            {showResumeMessage && (
              <div className="mt-4 text-green-300 text-sm animate-pulse">
                Downloading CV... Check your downloads folder.
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-4 mt-6">
          <div className="text-sm text-gray-500">
            <span className="text-green-300">$</span> echo "Thank you for visiting my portfolio!"
          </div>
        </div>
      </div>
    </div>
  );
} 