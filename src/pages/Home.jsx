import { useEffect, useState } from "react";
import profileImg from "../assets/images/profile.png";

import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const roles = [
  "Business Analyst",
  "Data Analyst",
  "Power BI & SQL Specialist",
  "Python for Data Analytics",
  "Data-Driven Problem Solver",
];


const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex]);

  return (
    <main className="bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I’m <span className="text-cyan-400">Aditya Jha</span>
            </h1>

            <h2 className="mt-4 text-xl md:text-2xl text-cyan-300 font-medium min-h-[32px]">
              {text}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
              I analyze data to uncover insights, optimize business decisions,
              and build impactful dashboards using SQL, Python, and Power BI.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="px-6 py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition shadow-lg"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="px-6 py-3 rounded-md border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-cyan-400 opacity-30 blur-2xl group-hover:opacity-50 transition"></div>

              <img
                src={profileImg}
                alt="Aditya Jha"
                className="relative w-72 h-96 object-cover rounded-2xl shadow-xl
                           transform group-hover:-translate-y-2 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS (STACKED) */}
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
