"use client"

import { motion } from "framer-motion"
import { FaBolt } from "react-icons/fa"
import Link from "next/link"

export default function Banner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#283618] via-[#606C38] to-[#283618] text-[#FEFAE0] py-20 px-6 text-center shadow-xl">

      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#BC6C25]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#DDA15E]/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-3xl mx-auto">

        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-[#BC6C25] p-4 rounded-full text-[#FEFAE0]">
            <FaBolt size={26} />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Special Mega Offer ⚡
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-[#FEFAE0]/80 mb-8"
        >
          Get <span className="font-bold text-[#DDA15E]">30% OFF</span> on selected
          products for a limited time. Don't miss this exclusive deal!
        </motion.p>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#BC6C25] text-[#FEFAE0] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#a85f21] transition"
          >
            <FaBolt />
            Shop Now
          </Link>
        </motion.div>

      </div>
    </section>
  )
}