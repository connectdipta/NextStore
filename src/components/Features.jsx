"use client"

import { motion } from "framer-motion"
import { FaTruck, FaLock, FaHeadset } from "react-icons/fa"

export default function Features() {
  const features = [
    {
      icon: <FaTruck size={28} />,
      title: "Fast Delivery",
      desc: "Quick and reliable shipping to your doorstep.",
    },
    {
      icon: <FaLock size={28} />,
      title: "Secure Payment",
      desc: "Your transactions are 100% safe and protected.",
    },
    {
      icon: <FaHeadset size={28} />,
      title: "24/7 Support",
      desc: "Our team is always ready to assist you anytime.",
    },
  ]

  return (
    <section className="py-20 max-w-6xl mx-auto">

      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#283618] mb-14"
      >
        Our Features
      </motion.h2>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-white border border-[#DDA15E]/40 p-8 rounded-xl text-center shadow-md hover:shadow-lg transition"
          >

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5 rounded-full bg-[#BC6C25] text-[#FEFAE0]">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg text-[#283618] mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-[#606C38] text-sm">
              {feature.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  )
}