import { Twitter, MessageCircle, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Brand & Description */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">Ethenanova</h3>
            <p className="text-gray-400 font-light max-w-xs">
              Empowering Your Crypto Journey with Smart Tools and Insights.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
              <Github className="w-6 h-6" />
            </a>
          </div>

          {/* Legal Info */}
          <div className="text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Ethenanova. All rights reserved.</p>
            <p className="mt-1">Crypto investments are subject to market risks. Invest responsibly.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
