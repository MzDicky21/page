import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const skills = [
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "from-yellow-400 to-yellow-500",
    glow: "shadow-yellow-500/50",
    textColor: "text-yellow-400"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "from-blue-400 to-blue-600",
    glow: "shadow-blue-500/50",
    textColor: "text-blue-400"
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/50",
    textColor: "text-cyan-400"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "from-gray-200 to-gray-400",
    glow: "shadow-gray-400/50",
    textColor: "text-gray-200"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "from-teal-400 to-cyan-500",
    glow: "shadow-teal-500/50",
    textColor: "text-teal-400"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "from-green-400 to-green-600",
    glow: "shadow-green-500/50",
    textColor: "text-green-400"
  },
];

export function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-purple-300/80 text-lg">Exploring the tech universe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Orbital ring */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

              {/* Card */}
              <div className={`relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:${skill.glow} hover:shadow-2xl`}>
                {/* Icon container with orbit animation */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-12`}>
                    <div className={`text-5xl text-slate-950 group-hover:scale-110 transition-transform duration-500`}>
                      {skill.icon}
                    </div>

                    {/* Rotating orbit ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-white/30 animate-spin" style={{ animationDuration: '10s' }} />
                  </div>
                </div>

                {/* Skill name */}
                <h3 className={`text-2xl font-bold text-center ${skill.textColor} group-hover:text-white transition-colors duration-300`}>
                  {skill.name}
                </h3>

                {/* Decorative stars around card */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}