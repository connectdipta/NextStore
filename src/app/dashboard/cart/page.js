"use client"

import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { FaTrash, FaShoppingCart } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Cart(){

  const [cart,setCart] = useState([])
  const [total,setTotal] = useState(0)

  useEffect(()=>{

    const data =
      JSON.parse(localStorage.getItem("cart")) || []

    setCart(data)

    const sum = data.reduce(
      (acc,item)=>acc + Number(item.price),
      0
    )

    setTotal(sum)

  },[])


  const removeItem = (id) => {

    const updated = cart.filter((item)=>item.id !== id)

    setCart(updated)

    localStorage.setItem("cart",JSON.stringify(updated))

    const sum = updated.reduce(
      (acc,item)=>acc + Number(item.price),
      0
    )

    setTotal(sum)

    toast("Item removed")
  }


  const handleBuy = () => {

    toast.success("Order placed successfully!")

    localStorage.removeItem("cart")

    setCart([])
    setTotal(0)

  }


  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold text-[#283618] mb-8 flex items-center gap-2">
        <FaShoppingCart />
        My Cart
      </h1>

      {cart.length === 0 && (
        <p className="text-[#606C38]">No items in cart</p>
      )}


      <div className="grid md:grid-cols-2 gap-6">

        {cart.map((item)=>(
          <motion.div
            key={item.id}
            whileHover={{ y:-4 }}
            className="bg-white border border-[#DDA15E]/40 rounded-xl shadow-md flex gap-4 p-4"
          >

            <img
              src={item.image}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1">

              <h3 className="font-semibold text-[#283618]">
                {item.title}
              </h3>

              <p className="text-[#BC6C25] font-bold">
                ${item.price}
              </p>

              <button
                onClick={()=>removeItem(item.id)}
                className="text-red-500 text-sm flex items-center gap-1 mt-2"
              >
                <FaTrash />
                Remove
              </button>

            </div>

          </motion.div>
        ))}

      </div>


      {/* TOTAL */}
      {cart.length > 0 && (
        <div className="mt-10 border-t border-[#DDA15E]/40 pt-6">

          <h2 className="text-2xl font-bold text-[#283618]">
            Total: ${total}
          </h2>

          <button
            onClick={handleBuy}
            className="mt-4 bg-[#BC6C25] text-[#FEFAE0] px-6 py-3 rounded-lg hover:bg-[#a85f21] transition"
          >
            Buy Now
          </button>

        </div>
      )}

    </div>
  )
}