"use client"

import products from "@/data/products.json"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa"
import toast from "react-hot-toast"
import React from "react"

export default function ProductDetails({ params }) {

  const { id } = React.use(params)

  const { data: session } = useSession()
  const [localUser, setLocalUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  const product = products.find((p) => p.id == id)

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("loggedUser"))

    if (user) setLocalUser(user)

    if (!session && !user) {
      router.push("/login")
    }

    setLoading(false)

  }, [session, router])


  // ADD TO CART
  const addToCart = () => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || []

    cart.push(product)

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )

    toast.success("Product added to cart")

  }


  if (loading) {
    return <p className="text-center mt-20">Loading...</p>
  }

  if (!product) {
    return <h1 className="text-center mt-20">Product not found</h1>
  }


  return (

    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* BACK BUTTON */}
      <Link href="/products">
        <button className="flex items-center gap-2 mb-8 border border-[#DDA15E] px-4 py-2 rounded-lg hover:bg-[#DDA15E]/20 transition">
          <FaArrowLeft />
          Back to Products
        </button>
      </Link>


      {/* PRODUCT LAYOUT */}
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="overflow-hidden rounded-xl border border-[#DDA15E]/40 shadow-md"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[350px] object-cover"
          />
        </motion.div>


        {/* DETAILS */}
        <div>

          <h1 className="text-4xl font-bold text-[#283618]">
            {product.title}
          </h1>

          <p className="text-[#606C38] mt-4">
            {product.description}
          </p>

          <p className="text-2xl font-bold mt-6 text-[#BC6C25]">
            ${product.price}
          </p>


          {/* ADD TO CART */}
          <button
            onClick={addToCart}
            className="flex items-center gap-2 mt-6 bg-[#BC6C25] text-[#FEFAE0] px-6 py-3 rounded-lg hover:bg-[#a85f21] transition"
          >
            <FaShoppingCart />
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  )
}