import "./globals.css"
import Providers from "@/components/Providers"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AosProvider from "@/components/AosProvider"

export const metadata = {
  title: "NextStore",
  description: "Modern Next.js E-commerce Website",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FEFAE0] text-[#283618] antialiased">

        <Providers>
          <AosProvider />

          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </Providers>

      </body>
    </html>
  )
}