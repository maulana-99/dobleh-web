// components/Hero.js
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiArchlinux } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center px-6 md:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full max-w-7xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-green-400">Muhama Ilham Maulana</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl flex items-center gap-2 flex-wrap">
            Backend Web Developer
            <span className="flex items-center gap-1 text-green-400">
              <SiArchlinux className="inline text-xl" />
              Arch User
            </span>
            | Clean code, efficient backend, and solid logic.
          </p>

          {/* ✅ Icon social */}
          <div className="flex gap-5 text-2xl">
            {/* GitHub */}
            <a
              href="https://github.com/maulana-99"
              target="_blank"
              className="hover:text-green-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* Gmail */}
            <a
              href="mailto:maulana.be.dv@gmail.com"
              className="hover:text-green-400 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Tombol Resume */}
          <div>
            <a
              href="/resume.pdf" // tambah kan resume/cv di sini
              target="_blank"
              className="inline-block mt-4 bg-green-500 text-black px-5 py-2 rounded-xl font-medium hover:bg-green-600 transition"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Gambar */}
        <div className="flex justify-center">
          <Image
            src="/img1.png"
            alt="Hero Image"
            width={400}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
