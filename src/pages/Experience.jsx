import experienceData from "../constants/ExperienceData";

const Experience = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 uppercase tracking-widest text-sm">
            Experience
          </h2>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Professional Journey
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Hands-on experience gained through internships and fellowships,
            applying analytics and business fundamentals to real-world problems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-6 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 bg-cyan-400 rounded-full"></div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold text-lg">{exp.role}</h3>

                <p className="text-cyan-400 text-sm mt-1">
                  {exp.company} · {exp.duration}
                </p>

                <ul className="mt-4 space-y-2 text-gray-400 text-sm list-disc list-inside">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
