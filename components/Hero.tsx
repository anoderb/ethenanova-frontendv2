"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        opacity,
        scale,
        backgroundImage: "url('/images/background1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-dark opacity-80" />

      {/* Teks & Konten */}
      <div className="z-10 text-center px-4">
        <motion.h1
          className="text-6xl md:text-7xl font-normal mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ethenanova
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-300 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering Your Crypto Journey with Smart Insights & Seamless Trading
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-30 transition duration-300 inline-flex items-center gap-2">
            Connect with Ethenanova
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}
