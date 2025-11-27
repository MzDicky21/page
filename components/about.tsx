"use client"

import { certificates } from '@/lib/data';
import { Award, Code, Lightbulb, Users } from 'lucide-react';
import { motion } from "framer-motion"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative problem-solving approaches",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Effective team communication",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to quality delivery",
    },
  ];

  const fadeTop = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeTop}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Passionate developer with expertise in building modern, responsive web applications
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="mb-20"
          variants={fadeTop}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              I specialize in creating modern web applications with a focus on <span className="font-semibold text-indigo-600">clean architecture</span> and <span className="font-semibold text-indigo-600">modular design</span>. My approach combines technical expertise with creative problem-solving to deliver scalable and maintainable solutions.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              With extensive experience in full-stack development, I'm committed to writing code that not only works efficiently but is also elegant and easy to understand. I believe in continuous learning and staying updated with the latest technologies to provide the best solutions for every project.
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="mb-20"
          variants={fadeTop}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">What I Bring</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          variants={fadeTop}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Certifications & Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Certificate Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold text-sm mb-1">{cert.title}</p>
                    <p className="text-xs opacity-90">{cert.issuer} • {cert.year}</p>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Award className="w-4 h-4 text-indigo-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}