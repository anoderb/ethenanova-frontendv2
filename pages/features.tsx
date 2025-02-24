"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Features() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <>
      <Navbar />
      <section className="bg-[#141414] text-white min-h-screen py-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Ethenanova Features</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge features of Ethenanova—empowering traders, investors,
              and blockchain enthusiasts with seamless and intelligent solutions.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-xl text-center shadow-lg hover:bg-[#222] transition duration-300"
                variants={fadeInUp}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}

const features = [
  {
    title: "Decentralized Exchange (DEX)",
    description: "Trade across multiple blockchain networks with minimal fees and high security.",
    icon: "🔄",
  },
  {
    title: "AI-Powered Insights",
    description: "Harness artificial intelligence to get real-time analytics and market predictions.",
    icon: "🤖",
  },
  {
    title: "NFT Marketplace",
    description: "Discover, collect, and trade exclusive NFTs within a secure and dynamic marketplace.",
    icon: "🎨",
  },
  {
    title: "Secure Wallet Integration",
    description: "Connect and manage your crypto assets seamlessly with top-tier encryption.",
    icon: "🔐",
  },
  {
    title: "Community Governance",
    description: "Participate in governance decisions and shape the future of the ecosystem.",
    icon: "🗳️",
  },
  {
    title: "Multi-Chain Compatibility",
    description: "Access assets across multiple blockchains, including testnet and mainnet support.",
    icon: "🌐",
  },
  {
    title: "Launchpad for New Projects",
    description: "Support and invest in the next big blockchain startups through Ethenanova’s launchpad.",
    icon: "🚀",
  },
  {
    title: "Bridge & Swap Protocol",
    description: "Effortlessly swap and bridge tokens between various networks in a secure manner.",
    icon: "🔗",
  },
  {
    title: "Crypto Faucet",
    description: "Claim testnet tokens easily to experiment with different blockchain networks.",
    icon: "💧",
  },
]
