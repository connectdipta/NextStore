"use client"

import { motion } from "framer-motion"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

export default function Testimonials() {

  const testimonials = [
    {
      text: "Amazing products and super fast delivery. I absolutely love the shopping experience!",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      text: "High quality products and great customer service. Highly recommended!",
      name: "Sarah Smith",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4
    },
    {
      text: "Very smooth checkout and excellent product quality. Will definitely shop again!",
      name: "Michael Lee",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-[#FEFAE0]">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#283618] mb-14">
        What Customers Say
      </h2>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-white border border-[#DDA15E]/40 p-8 rounded-xl shadow-md hover:shadow-lg transition"
          >

            {/* Quote Icon */}
            <FaQuoteLeft className="text-[#BC6C25] text-xl mb-4" />

            {/* Review Text */}
            <p className="text-[#606C38] mb-6 text-sm">
              {t.text}
            </p>

            {/* Stars */}
            <div className="flex gap-1 mb-4 text-[#BC6C25]">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* User */}
            <div className="flex items-center gap-3">

              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover border border-[#DDA15E]"
              />

              <h4 className="font-semibold text-[#283618]">
                {t.name}
              </h4>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}