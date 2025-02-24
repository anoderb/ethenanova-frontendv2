import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans bg-dark text-white`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp

