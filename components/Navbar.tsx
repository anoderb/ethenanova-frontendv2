"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Twitter, MessageCircle, Github, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavVisible(false)
      } else {
        setIsNavVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <>
      {/* Fixed Background with animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-40"
          />
        )}
      </AnimatePresence>

      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isNavVisible ? "top-0" : "-top-20"
        } ${!isMobileMenuOpen ? "bg-black/5 backdrop-blur-lg" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: isNavVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white z-50">
            Ethenanova
          </a>

          {/* Desktop Menu */}
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* About Us */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors py-2">About Us</button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-black/40 backdrop-blur-lg rounded-lg p-4 min-w-[200px]">
                <div className="grid gap-2">
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    Our Mission
                  </a>
                  <a href="/features" className="text-gray-300 hover:text-white transition-colors">
                    Features
                  </a>
                  <a href="#team" className="text-gray-300 hover:text-white transition-colors">
                    Team
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors py-2">Services</button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-black/40 backdrop-blur-lg rounded-lg p-4 min-w-[200px]">
                <div className="grid gap-2">
                  <a href="#trading" className="text-gray-300 hover:text-white transition-colors">
                    Trading Platform
                  </a>
                  <a href="#dex" className="text-gray-300 hover:text-white transition-colors">
                    DEX Integration
                  </a>
                  <a href="#analytics" className="text-gray-300 hover:text-white transition-colors">
                    Market Analytics
                  </a>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors py-2">Resources</button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-black/40 backdrop-blur-lg rounded-lg p-4 min-w-[200px]">
                <div className="grid gap-2">
                  <a href="#docs" className="text-gray-300 hover:text-white transition-colors">
                    Documentation
                  </a>
                  <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </a>
                  <a href="#community" className="text-gray-300 hover:text-white transition-colors">
                    Community
                  </a>
                </div>
              </div>
            </div>

            {/* Ecosystem */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors py-2">Ecosystem</button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-black/40 backdrop-blur-lg rounded-lg p-4 min-w-[200px]">
                <div className="grid gap-2">
                  <a href="#partners" className="text-gray-300 hover:text-white transition-colors">
                    Partners
                  </a>
                  <a href="#network" className="text-gray-300 hover:text-white transition-colors">
                    Network
                  </a>
                  <a href="#governance" className="text-gray-300 hover:text-white transition-colors">
                    Governance
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/ethenanova"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
              rel="noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/ethenanova"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
              rel="noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/ethenanova"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
              rel="noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Menu Button - Moved slightly to the left */}
          <button
            className="md:hidden text-white z-50 ml-4"
            onClick={toggleMobileMenu}
            style={{ position: "absolute", right: "2rem" }}
          >
            <motion.div animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 z-40 pt-20 overflow-y-auto"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="container mx-auto px-6 py-8 min-h-screen flex flex-col">
                {/* Main Section Headers */}
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <motion.div variants={itemVariants}>
                    <h2 className="text-l font-bold text-white mb-6 text-right">About Us</h2>
                    <div className="space-y-4 text-right">
                      <a href="#about" className="block text-sm text-gray-400 hover:text-white">
                        Our Mission
                      </a>
                      <a href="/features" className="block text-sm text-gray-400 hover:text-white">
                        Features
                      </a>
                      <a href="#team" className="block text-sm text-gray-400 hover:text-white">
                        Team
                      </a>
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <h2 className="text-l font-bold text-white mb-6 text-right">Services</h2>
                    <div className="space-y-4 text-right">
                      <a href="#trading" className="block text-sm text-gray-400 hover:text-white">
                        Trading Platform
                      </a>
                      <a href="#dex" className="block text-sm text-gray-400 hover:text-white">
                        DEX Integration
                      </a>
                      <a href="#analytics" className="block text-sm text-gray-400 hover:text-white">
                        Market Analytics
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Section Headers */}
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <motion.div variants={itemVariants}>
                    <h2 className="text-l font-bold text-white mb-6 text-right">Resources</h2>
                    <div className="space-y-4 text-right">
                      <a href="#docs" className="block text-sm text-gray-400 hover:text-white">
                        Documentation
                      </a>
                      <a href="#blog" className="block text-sm text-gray-400 hover:text-white">
                        Blog
                      </a>
                      <a href="#community" className="block text-sm text-gray-400 hover:text-white">
                        Community
                      </a>
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <h2 className="text-l font-bold text-white mb-6 text-right">Ecosystem</h2>
                    <div className="space-y-4 text-right">
                      <a href="#partners" className="block text-sm text-gray-400 hover:text-white">
                        Partners
                      </a>
                      <a href="#network" className="block text-sm text-gray-400 hover:text-white">
                        Network
                      </a>
                      <a href="#governance" className="block text-sm text-gray-400 hover:text-white">
                        Governance
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Social Icons - Mobile */}
                <motion.div variants={itemVariants} className="mt-8 flex space-x-6 justify-center">
                  <a
                    href="https://github.com/ethenanova"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                    rel="noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/ethenanova"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                    rel="noreferrer"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://discord.gg/ethenanova"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                    rel="noreferrer"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

