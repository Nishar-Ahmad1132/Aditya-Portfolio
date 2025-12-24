import profileImg from "../assets/images/profile.png";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT – IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-400 opacity-25 blur-2xl group-hover:opacity-40 transition"></div>

            <img
              src={profileImg}
              alt="Aditya Jha"
              className="relative w-72 h-96 object-cover rounded-2xl shadow-xl
                         transform group-hover:-translate-y-2 transition duration-300"
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <h2 className="text-cyan-400 uppercase tracking-widest text-sm">
            About Me
          </h2>

          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Who I Am
          </h1>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I’m <span className="text-white font-medium">Aditya Jha</span>, a
            Business Analytics–focused engineering student with a strong
            interest in turning raw data into meaningful business insights. I
            enjoy working at the intersection of{" "}
            <span className="text-cyan-400">data, strategy,</span> and
            decision-making.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            With hands-on experience in SQL, Python, Power BI, and Excel, I’ve
            worked on real-world datasets to analyze performance, optimize
            processes, and communicate insights through dashboards and
            presentations.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold">Education</h3>
              <p className="text-gray-400 text-sm mt-1">
                B.Tech (Mechanical – Automotive) <br />
                Delhi Technological University
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold">Core Skills</h3>
              <p className="text-gray-400 text-sm mt-1">
                SQL, Python, Power BI, Excel
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold">Interests</h3>
              <p className="text-gray-400 text-sm mt-1">
                Data Analytics, Business Strategy, Dashboards
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold">Strengths</h3>
              <p className="text-gray-400 text-sm mt-1">
                Problem-solving, Communication, Analytical Thinking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
