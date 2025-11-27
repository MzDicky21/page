"use client"

import { SpaceRocketButton } from "./maz/space-button";
import { motion } from "framer-motion"

const fadeBottom = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 text-center px-6"
      variants={fadeBottom}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold">Contact Now</h2>
      <p className="text-gray-600 mt-4 mb-12 font-bold">
        Interested in creating a cool website?
      </p>

      <SpaceRocketButton>
        Contact
      </SpaceRocketButton>
    </motion.section>
  );
}
