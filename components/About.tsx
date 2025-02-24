"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-dark relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/bg-4.jpg')" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white tracking-tight">
              About <span className="font-semibold">Ethenanova</span>
            </h2>
            <p className="mb-6 text-white text-lg font-light leading-relaxed">
              Ethenanova is your gateway to the future of finance. We combine cutting-edge blockchain technology with
              user-friendly interfaces, empowering both novice and experienced crypto enthusiasts.
            </p>
            <p className="mb-8 text-white text-lg font-light leading-relaxed">
              Our mission is to democratize access to the crypto world, offering tools and insights once reserved for
              financial institutions. With Ethenanova, you're not just participating in the crypto revolution - you're
              leading it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["All-in-One Crypto Hub", "Multi-Chain Support", "User-Friendly & Secure"].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/20 to-gray-700/20 p-4 rounded-lg text-center backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-white font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img src="/images/bg-2.jpg" alt="Blockchain Illustration" className="w-full rounded-lg" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-gray-800/30 to-gray-700/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
