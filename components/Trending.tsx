"use client"

import { motion } from "framer-motion"

export default function Trending() {
  const trendingTokens = [
    { name: "Bitcoin", symbol: "BTC", price: "$45,000", change: "+5.2%" },
    { name: "Ethereum", symbol: "ETH", price: "$3,200", change: "+3.7%" },
    { name: "Cardano", symbol: "ADA", price: "$1.20", change: "+2.1%" },
    { name: "Solana", symbol: "SOL", price: "$150", change: "+8.5%" },
  ]

  const latestInsights = [
    { title: "The Rise of DeFi 2.0: What You Need to Know", date: "2023-05-15", tag: "Analysis" },
    {
      title: "Exclusive: New Layer 2 Solution Promises 100x Faster Transactions",
      date: "2023-05-12",
      tag: "News",
    },
    { title: "Upcoming Airdrop: Don't Miss This Opportunity", date: "2023-05-10", tag: "Airdrop" },
  ]

  return (
    <section id="trending" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <motion.h3
              className="text-2xl md:text-3xl font-semibold mb-6 text-white tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Trending Tokens
            </motion.h3>
            <div className="bg-gray-800 rounded-lg shadow-xl p-6">
              {trendingTokens.map((token, index) => (
                <motion.div
                  key={index}
                  className="flex justify-between items-center mb-4 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <span className="font-medium text-white">{token.name}</span>
                    <span className="text-gray-400 font-light ml-2">({token.symbol})</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">{token.price}</span>
                    <span className="text-green-500 font-light ml-2">{token.change}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <motion.h3
              className="text-2xl md:text-3xl font-semibold mb-6 text-white tracking-tight"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Latest Insights & Opportunities
            </motion.h3>
            <div className="bg-gray-800 rounded-lg shadow-xl p-6">
              {latestInsights.map((article, index) => (
                <motion.div
                  key={index}
                  className="mb-4 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium text-white mb-1">{article.title}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-sm font-light">{article.date}</p>
                    <span className="text-xs font-semibold bg-purple-600 text-white px-2 py-1 rounded">
                      {article.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
