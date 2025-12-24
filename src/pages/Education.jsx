const Education = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 uppercase tracking-widest text-sm">
            Education
          </h2>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Academic Background
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My educational journey and academic achievements that built my
            foundation in engineering and analytics.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-6 space-y-12">
          {/* Item 1 */}
          <div className="relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-cyan-400 rounded-full"></div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg">
                B.Tech – Mechanical Engineering (Automotive)
              </h3>
              <p className="text-cyan-400 text-sm mt-1">
                Delhi Technological University (DTU)
              </p>
              <p className="text-gray-400 text-sm mt-2">2022 – 2026</p>
              <p className="text-gray-400 mt-4">
                CGPA: <span className="text-white font-medium">7.14</span>
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-cyan-400 rounded-full"></div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg">
                Senior Secondary (Class XII)
              </h3>
              <p className="text-cyan-400 text-sm mt-1">
                CBSE – Indraprastha Convent School
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Percentage: <span className="text-white">84.4%</span>
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-cyan-400 rounded-full"></div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg">
                Secondary (Class X)
              </h3>
              <p className="text-cyan-400 text-sm mt-1">
                CBSE – Indraprastha Convent School
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Percentage: <span className="text-white">86.5%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
