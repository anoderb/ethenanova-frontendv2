"use client"

import { motion } from "framer-motion"
import { TrendingUp, Zap, Repeat, BookOpen, Gift, Rocket, Link, RefreshCcw, Droplet } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />, 
      title: "Real-Time Market Insights", 
      description: "Stay ahead with our advanced analytics and real-time market data"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-400" />, 
      title: "Exclusive Airdrops", 
      description: "Get early access to promising projects and token distributions"
    },
    {
      icon: <Repeat className="w-12 h-12 text-cyan-400" />, 
      title: "Cross-Chain DEX", 
      description: "Seamlessly swap and bridge tokens across multiple blockchains"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-purple-400" />, 
      title: "Crypto Academy", 
      description: "Learn from experts and master the art of crypto trading"
    },
    {
      icon: <Gift className="w-12 h-12 text-yellow-400" />, 
      title: "NFT Drops", 
      description: "Get exclusive access to the latest NFT collections"
    },
    {
      icon: <Rocket className="w-12 h-12 text-red-400" />, 
      title: "Launchpad", 
      description: "Discover and invest in early-stage blockchain projects"
    },
    {
      icon: <Link className="w-12 h-12 text-green-400" />, 
      title: "Bridge", 
      description: "Effortlessly move assets across different blockchains"
    },
    {
      icon: <RefreshCcw className="w-12 h-12 text-blue-400" />, 
      title: "Swap", 
      description: "Trade assets instantly with low fees and high efficiency"
    },
    {
      icon: <Droplet className="w-12 h-12 text-teal-400" />, 
      title: "Faucet", 
      description: "Claim test tokens for your blockchain development needs"
    },
  ]

  return (
    <section id="features" className="relative py-20 bg-dark">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/bg-5.jpg')" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-normal mb-12 text-center text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Cutting-Edge Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
