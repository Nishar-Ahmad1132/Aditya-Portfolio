import projectsData from "../constants/ProjectData";

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 uppercase tracking-widest text-sm">
            Projects
          </h2>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Featured Work
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Projects showcasing my ability to analyze data, extract insights,
            and present results through dashboards and reports.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6
                         hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-white text-xl font-semibold">
                {project.title}
              </h3>

              {/* Summary */}
              <p className="mt-3 text-gray-400">{project.summary}</p>

              {/* Detailed Description */}
              <ul className="mt-4 space-y-2 text-gray-400 text-sm list-disc list-inside">
                {project.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full
                               bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.github || project.live) && (
                <div className="mt-6 flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      Live →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
