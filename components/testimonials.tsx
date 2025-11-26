import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "Working with this developer was an absolute pleasure! Their attention to detail and creative problem-solving skills brought our vision to life beyond expectations.",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    rating: 5
  },
  {
    text: "Exceptional work! The project was delivered on time with outstanding quality. Highly professional and great communication throughout the process.",
    name: "Michael Chen",
    role: "Product Manager, Digital Wave",
    rating: 5
  },
  {
    text: "A true expert in their field. They transformed our complex requirements into an elegant, user-friendly solution. Would definitely work together again!",
    name: "Emily Rodriguez",
    role: "Founder, Creative Studios",
    rating: 5
  },
  {
    text: "Impressive technical skills combined with excellent soft skills. They understood our needs perfectly and delivered a product that exceeded our expectations.",
    name: "David Thompson",
    role: "CTO, Innovation Labs",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 2 + 2 + 's',
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-blue-400">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
              <FaStar className="text-xl animate-pulse" />
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-400" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
            Voices from across the digital cosmos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Card */}
              <div className="relative bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Quote icon with orbit */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                    <FaQuoteLeft className="text-2xl text-white" />
                  </div>
                  {/* Orbit ring */}
                  <div className="absolute inset-0 border-2 border-dashed border-blue-400/30 rounded-2xl animate-spin" style={{ animationDuration: '8s' }} />
                </div>

                {/* Testimonial text */}
                <p className="text-slate-200 leading-relaxed mb-6 text-base">
                  {testimonial.text}
                </p>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className="text-yellow-400 text-sm group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 0.05}s` }}
                    />
                  ))}
                </div>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-transparent mb-4" />

                {/* Author info */}
                <div>
                  <h4 className="font-bold text-white text-lg mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-300/70 text-sm">
                    {testimonial.role}
                  </p>
                </div>

                {/* Decorative corner stars */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}