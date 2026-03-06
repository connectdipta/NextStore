"use client"

import products from "@/data/products.json"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaShoppingCart } from "react-icons/fa"

export default function ProductsPreview() {

  const preview = products.slice(0,3)

  return (
    <section className="py-20 bg-[#FEFAE0]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#283618] mb-14">
          Popular Products
        </h2>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {preview.map((p)=>(
            <motion.div
              key={p.id}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#DDA15E]/40 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="font-semibold text-lg text-[#283618]">
                  {p.title}
                </h3>

                <p className="text-[#606C38] text-sm mb-3">
                  ${p.price}
                </p>

                <Link href={`/products/${p.id}`}>
                  <button className="flex items-center gap-2 bg-[#BC6C25] text-[#FEFAE0] px-4 py-2 rounded-lg hover:bg-[#a85f21] transition">
                    <FaShoppingCart />
                    View Product
                  </button>
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}