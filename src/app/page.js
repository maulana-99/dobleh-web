import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 max-w-3xl mx-auto text-gray-800 font-sans">
      <header className="mb-16 text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500">
          <Image
            src="/profile-placeholder.png"
            alt="Profile Picture"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-5xl font-extrabold mb-2 text-gray-900">Muhama Ilham Maulana</h1>
        <p className="text-xl text-gray-600">Backend Web Developer</p>
        <div className="mt-4 space-x-4">
          <a
            href="https://github.com/maulana-99"
            className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg inline-block"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="mailto:maulana.be.dv@gmail.com"
            className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg inline-block"
          >
            Email
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3 text-blue-700 border-b pb-1">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3 text-blue-700 border-b pb-1">Education</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>SD</li>
          <li>SMP</li>
          <li>SMK</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3 text-blue-700 border-b pb-1">Experience</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Internship at Core Initiative (3 months) as Backend Developer</li>
          <li>Final Project at Core Initiative as Full Stack Developer</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-16 border-t pt-6">
        &copy; 2025 Muhama Ilham Maulana. All rights reserved.
      </footer>
    </main>
  );
}
