import Head from "next/head"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Features from "../components/Features"
import Trending from "../components/Trending"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import CryptoSection from "../components/CryptoSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-dark text-gray-100 font-sans">
      <Head>
        <title>Ethenanova - Empowering Your Crypto Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <CryptoSection />
        {/* <Trending />
        <CTA /> */}
      </main>

      <Footer />
    </div>
  )
}

