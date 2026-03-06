"use client"

import productsData from "@/data/products.json"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaSearch, FaShoppingCart } from "react-icons/fa"

export default function Products(){

  const [products,setProducts] = useState([])
  const [search,setSearch] = useState("")
  const [page,setPage] = useState(1)

  const productsPerPage = 6

  useEffect(()=>{

    const adminProducts =
      JSON.parse(localStorage.getItem("products")) || []

    setProducts([...productsData,...adminProducts])

  },[])


  // FIXED SEARCH
  const filtered = products.filter((p)=>{

    if(!p.title) return false

    return p.title
      .toLowerCase()
      .includes(search.trim().toLowerCase())

  })


  const start = (page-1) * productsPerPage
  const paginated = filtered.slice(start,start + productsPerPage)

  const totalPages =
    Math.ceil(filtered.length / productsPerPage)


  return (

    <div className="min-h-screen bg-gradient-to-b from-[#FEFAE0] to-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#283618] mb-10 text-center">
          Explore Our Products
        </h1>


        {/* SEARCH */}
        <div className="flex justify-center mb-12">

          <div className="flex items-center w-full md:w-[450px] border border-[#DDA15E]/40 rounded-full px-4 py-2 bg-white shadow-sm">

            <FaSearch className="text-[#606C38]"/>

            <input
              placeholder="Search products..."
              className="ml-3 w-full outline-none"
              value={search}
              onChange={(e)=>{
                setSearch(e.target.value)
                setPage(1) // reset pagination
              }}
            />

          </div>

        </div>


        {/* PRODUCTS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {paginated.length > 0 ? (

            paginated.map((p)=>(

              <motion.div
                key={p.id}
                whileHover={{y:-8}}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-[#DDA15E]/30 hover:shadow-xl transition"
              >

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-52 w-full object-cover hover:scale-110 transition duration-300"
                  />

                </div>


                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="font-semibold text-lg text-[#283618]">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {p.shortDescription}
                  </p>

                  <p className="text-[#BC6C25] text-xl font-bold mt-3">
                    ${p.price}
                  </p>


                  <div className="flex gap-3 mt-4">

                    <Link
                      href={`/products/${p.id}`}
                      className="flex-1 text-center bg-[#BC6C25] text-white py-2 rounded-lg hover:bg-[#a85f21] transition"
                    >
                      View
                    </Link>

                    <button
                      className="px-4 bg-[#283618] text-white rounded-lg hover:bg-[#1e2a13]"
                    >
                      <FaShoppingCart/>
                    </button>

                  </div>

                </div>

              </motion.div>

            ))

          ) : (

            <p className="col-span-3 text-center text-gray-500">
              No products found
            </p>

          )}

        </div>


        {/* PAGINATION */}
        {totalPages > 1 && (

          <div className="flex justify-center gap-3 mt-14">

            {[...Array(totalPages)].map((_,i)=>(

              <button
                key={i}
                onClick={()=>setPage(i+1)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  page===i+1
                    ? "bg-[#BC6C25] text-white"
                    : "bg-white border border-[#DDA15E] text-[#283618]"
                }`}
              >
                {i+1}
              </button>

            ))}

          </div>

        )}

      </div>

    </div>
  )
}