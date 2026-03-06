"use client"

import { useEffect,useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import toast from "react-hot-toast"
import { FaTrash, FaEye } from "react-icons/fa"
import { motion } from "framer-motion"

export default function ManageProducts(){

  const { data: session } = useSession()
  const router = useRouter()

  const [products,setProducts] = useState([])

  // ADMIN PROTECTION
  useEffect(()=>{

    if(!session){
      router.push("/login")
    }

    if(session && session.user.email !== "dip@gmail.com"){
      router.push("/dashboard")
    }

  },[session,router])


  useEffect(()=>{

    const data =
      JSON.parse(localStorage.getItem("products")) || []

    setProducts(data)

  },[])



  const deleteProduct=(id)=>{

    const updated =
      products.filter(p=>p.id !== id)

    setProducts(updated)

    localStorage.setItem(
      "products",
      JSON.stringify(updated)
    )

    toast.success("Product deleted")

  }



  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8 text-[#283618]">
        Manage Products
      </h1>

      {products.length === 0 && (
        <p className="text-[#606C38]">
          No products added
        </p>
      )}


      <div className="grid md:grid-cols-2 gap-6">

        {products.map((p)=>(

          <motion.div
            key={p.id}
            whileHover={{ y:-4 }}
            className="bg-white border border-[#DDA15E]/40 p-4 rounded-xl shadow-md flex gap-4 items-center"
          >

            {/* IMAGE */}
            <img
              src={p.image}
              className="w-20 h-20 object-cover rounded"
            />

            {/* INFO */}
            <div className="flex-1">

              <h3 className="font-semibold text-[#283618]">
                {p.title}
              </h3>

              <p className="text-[#BC6C25] font-bold">
                ${p.price}
              </p>

            </div>


            {/* ACTIONS */}
            <div className="flex gap-2">

              <Link
                href={`/products/${p.id}`}
                className="flex items-center gap-1 bg-[#606C38] text-[#FEFAE0] px-3 py-2 rounded-lg hover:opacity-90 transition"
              >
                <FaEye />
                View
              </Link>

              <button
                onClick={()=>deleteProduct(p.id)}
                className="flex items-center gap-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
              >
                <FaTrash />
                Delete
              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  )
}