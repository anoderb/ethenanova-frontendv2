"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="cta" className="py-20 text-center px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          className="text-2xl md:text-4xl font-normal mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Revolutionize Your Crypto Experience?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6 text-gray-300 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join Ethenanova today and unlock the full potential of your crypto investments.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-3 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-white bg-opacity-20 text-white px-5 py-2.5 rounded-full font-medium hover:bg-opacity-30 transition duration-300 w-auto md:w-auto text-sm md:text-base">
            Start Trading Now
          </button>
          <button className="bg-gray-800 bg-opacity-50 text-white px-5 py-2.5 rounded-full font-medium hover:bg-opacity-70 transition duration-300 w-auto md:w-auto text-sm md:text-base">
            Explore Airdrops
          </button>
        </motion.div>
      </div>
    </section>
  )
}
