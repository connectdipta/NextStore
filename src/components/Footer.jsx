"use client"

import { motion } from "framer-motion"
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#283618] text-[#FEFAE0] mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo / About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-[#DDA15E] mb-3">
            NextStore
          </h2>

          <p className="text-sm text-[#FEFAE0]/80">
            Discover premium products and amazing deals with a modern
            shopping experience.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-semibold mb-3 text-[#DDA15E]">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-[#DDA15E] transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-[#DDA15E] transition">
              Products
            </Link>
            <Link href="/login" className="hover:text-[#DDA15E] transition">
              Login
            </Link>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-semibold mb-3 text-[#DDA15E]">
            Follow Us
          </h3>

          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a className="hover:text-[#BC6C25] transition">
              <FaFacebook />
            </a>

            <a className="hover:text-[#BC6C25] transition">
              <FaTwitter />
            </a>

            <a className="hover:text-[#BC6C25] transition">
              <FaInstagram />
            </a>

            <a className="hover:text-[#BC6C25] transition">
              <FaGithub />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-[#606C38]/40 text-center py-4 text-sm text-[#FEFAE0]/70">
        © 2026 NextStore. All rights reserved.
      </div>

    </footer>
  )
}