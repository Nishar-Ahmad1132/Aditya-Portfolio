import profileImg from "../assets/images/img1.jpg";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT – IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="relative group">
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

          {/* <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Engineering • Analytics • Product Thinking
          </h1> */}

          {/* Paragraph 1 */}
          <p className="mt-6 text-gray-400 leading-relaxed">
            Hello, I’m{" "}
            <span className="text-white font-medium">Aditya Jha</span>. I
            operate at the crossroads of{" "}
            <span className="text-cyan-400">
              engineering, analytics, and product strategy
            </span>
            , bringing a multidisciplinary perspective to solve complex business
            and technical problems.
          </p>

          {/* Paragraph 2 */}
          <p className="mt-4 text-gray-400 leading-relaxed">
            With a foundation in Mechanical Engineering (Automotive
            specialization) from Delhi Technological University, my journey
            began with understanding how systems function mechanically and
            evolved into exploring how data and strategy can optimize them at an
            organizational level.
          </p>

          {/* Paragraph 3 */}
          <p className="mt-4 text-gray-400 leading-relaxed">
            As a Business Analyst Intern at Bonami Software, I translated raw
            datasets into meaningful business insights—building dashboards,
            optimizing workflows, and supporting data-driven decision-making for
            cross-functional teams. Through the CrackNonTech Fellowship, I
            further developed consulting frameworks, structured problem-solving,
            and market analysis skills.
          </p>

          {/* Paragraph 4 */}
          <p className="mt-4 text-gray-400 leading-relaxed">
            Parallel to this, I stepped into entrepreneurship as the Co-founder
            of
            <span className="text-white font-medium"> Makhani</span>, where I
            led product design, brand identity, and go-to-market strategy. This
            experience deepened my understanding of user behavior, design
            psychology, and competitive positioning.
          </p>

          {/* Paragraph 5 */}
          <p className="mt-4 text-gray-400 leading-relaxed">
            Today, I aim to build a career at the intersection of{" "}
            <span className="text-cyan-400">
              data analytics, business analysis, and product management
            </span>
            —leveraging engineering intuition, analytical rigor, and
            product-centric thinking to create data-informed, user-focused, and
            impact-driven solutions.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold">Education</h3>
              <p className="text-gray-400 text-sm mt-1">
                B.Tech (Mechanical – Automotive)
                <br />
                Delhi Technological University
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold">Professional Focus</h3>
              <p className="text-gray-400 text-sm mt-1">
                Business Analytst, Product Management, Consulting, Data Analysis
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold">Technical Skills</h3>
              <p className="text-gray-400 text-sm mt-1">
                SQL, Python, Power BI, Excel, JIRA, Databricks
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold">Strengths</h3>
              <p className="text-gray-400 text-sm mt-1">
                Structured Problem Solving Approach,
                Leadership and Collaboration Skills, Communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
