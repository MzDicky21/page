import { projects } from "@/lib/data"

export function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
      <p className="text-gray-600 mb-16 text-lg">Explore my latest work and creative solutions</p>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center group`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <div className={`relative overflow-hidden rounded-2xl ${index === 2
                  ? 'shadow-2xl shadow-indigo-500/30'
                  : 'shadow-lg'
                } transition-all duration-500 group-hover:shadow-2xl ${index === 2
                  ? 'group-hover:shadow-indigo-500/40'
                  : 'group-hover:shadow-gray-400/50'
                }`}>
                <img
                  src={project.image}
                  className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  alt={project.title}
                />
                {index === 2 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10 pointer-events-none"></div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1 rounded-full">
                  Project {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-base">
                {project.description}
              </p>

              <div className="pt-4">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-indigo-600 transition-colors duration-300 group/link"
                >
                  <span>View Project</span>
                  <svg
                    className="w-5 h-5 transform transition-transform duration-300 group-hover/link:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}