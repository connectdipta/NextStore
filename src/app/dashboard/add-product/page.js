"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { FaPlus } from "react-icons/fa"

export default function AddProduct(){

  const { data: session } = useSession()
  const router = useRouter()

  const [title,setTitle] = useState("")
  const [shortDesc,setShortDesc] = useState("")
  const [description,setDescription] = useState("")
  const [price,setPrice] = useState("")
  const [image,setImage] = useState("")
  const [category,setCategory] = useState("")

  // ADMIN PROTECTION
  useEffect(()=>{

    if(!session){
      router.push("/login")
    }

    if(session && session.user.email !== "dip@gmail.com"){
      router.push("/dashboard")
    }

  },[session,router])


  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!title || !price){
      toast.error("Title and price required")
      return
    }

    const product = {
      id: Date.now(),
      title,
      shortDesc,
      description,
      price,
      image,
      category
    }

    const products =
      JSON.parse(localStorage.getItem("products")) || []

    products.push(product)

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    )

    toast.success("Product added successfully")

    router.push("/dashboard/manage-products")

  }


  return (
    <div className="flex justify-center py-10 px-6">

      <div className="w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-6 text-[#283618]">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#DDA15E]/40 p-8 rounded-xl shadow-md flex flex-col gap-4"
        >

          <input
            placeholder="Title"
            className="border border-[#DDA15E]/40 p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <input
            placeholder="Short Description"
            className="border border-[#DDA15E]/40 p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
            value={shortDesc}
            onChange={(e)=>setShortDesc(e.target.value)}
          />

          <textarea
            placeholder="Full Description"
            className="border border-[#DDA15E]/40 p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <input
            placeholder="Price"
            className="border border-[#DDA15E]/40 p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />

          <select
            className="border border-[#DDA15E]/40 p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="mobile">Mobile</option>
          </select>

          <input
            placeholder="Image URL"
            className="border border-[#DDA15E]/40 p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
          />

          <button className="flex items-center justify-center gap-2 bg-[#BC6C25] text-[#FEFAE0] py-3 rounded-lg hover:bg-[#a85f21] transition">
            <FaPlus />
            Add Product
          </button>

        </form>

      </div>

    </div>
  )
}