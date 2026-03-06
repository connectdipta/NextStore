"use client"

import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { FaShoppingCart, FaPlus, FaBox, FaSignOutAlt } from "react-icons/fa"

export default function DashboardLayout({ children }) {

  const { data: session } = useSession()

  const [localUser,setLocalUser] = useState(null)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("loggedUser"))
    if(user) setLocalUser(user)
  },[])

  const user = session?.user || localUser

  const isAdmin = user?.email === "dip@gmail.com"

  const handleLogout = () => {
    localStorage.removeItem("loggedUser")
    signOut({ callbackUrl: "/" })
  }

  return (
    <div className="flex min-h-screen bg-[#FEFAE0]">

      {/* Sidebar */}
      <div className="w-64 bg-[#283618] text-[#FEFAE0] flex flex-col justify-between shadow-lg">

        {/* Top */}
        <div className="p-6">

          <h2 className="text-2xl font-bold mb-8">
            Dashboard
          </h2>

          <div className="flex flex-col gap-4">

            {/* USER MENU */}
            {!isAdmin && (
              <Link
                href="/dashboard/cart"
                className="flex items-center gap-2 hover:text-[#DDA15E] transition"
              >
                <FaShoppingCart />
                My Cart
              </Link>
            )}

            {/* ADMIN MENU */}
            {isAdmin && (
              <>
                <Link
                  href="/dashboard/add-product"
                  className="flex items-center gap-2 hover:text-[#DDA15E] transition"
                >
                  <FaPlus />
                  Add Product
                </Link>

                <Link
                  href="/dashboard/manage-products"
                  className="flex items-center gap-2 hover:text-[#DDA15E] transition"
                >
                  <FaBox />
                  Manage Products
                </Link>
              </>
            )}

          </div>

        </div>

        {/* Bottom Profile */}
        <div className="p-6 border-t border-[#606C38] flex items-center gap-3">

          <img
            src={user?.image || "https://i.pravatar.cc/150"}
            className="w-10 h-10 rounded-full border border-[#DDA15E]"
          />

          <div className="flex flex-col flex-1">

            <span className="text-sm">
              {user?.name || "User"}
            </span>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-red-300 text-sm hover:text-red-400"
            >
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>

      </div>

      {/* Page Content */}
      <div className="flex-1 p-10">
        {children}
      </div>

    </div>
  )
}