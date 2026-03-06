"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

import {
  FaHome,
  FaBox,
  FaPlus,
  FaSignOutAlt,
  FaCog,
  FaBars,
  FaTimes,
  FaShoppingCart
} from "react-icons/fa";

export default function Navbar() {

  const { data: session } = useSession();

  const [localUser,setLocalUser] = useState(null);
  const [open,setOpen] = useState(false);
  const [mobile,setMobile] = useState(false);

  // detect local login
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if(user) setLocalUser(user);
  },[]);

  const user = session?.user || localUser;

  const isAdmin = user?.email === "dip@gmail.com";

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    toast.success("Logged out successfully");
    signOut({ callbackUrl: "/" });
  };

  return (

    <nav className="sticky top-0 z-50 bg-[#283618] text-[#FEFAE0] shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <span className="text-[#DDA15E]">NextStore</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center gap-2 hover:text-[#DDA15E]">
              <FaHome/> Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/products" className="flex items-center gap-2 hover:text-[#DDA15E]">
              <FaBox/> Products
            </Link>
          </motion.div>

          {/* Cart */}
          {!isAdmin && user && (
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/dashboard/cart" className="flex items-center gap-2 hover:text-[#DDA15E]">
                <FaShoppingCart/> Cart
              </Link>
            </motion.div>
          )}

          {!user ? (

            <Link
              href="/login"
              className="bg-[#BC6C25] text-[#FEFAE0] px-5 py-2 rounded-full font-medium hover:bg-[#a85f21]"
            >
              Login
            </Link>

          ) : (

            <div className="relative">

              {/* Avatar */}
              <img
                src={user.image || "https://i.pravatar.cc/150"}
                alt="user"
                onClick={()=>setOpen(!open)}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#DDA15E]"
              />

              <AnimatePresence>
                {open && (

                  <motion.div
                    initial={{ opacity:0, y:12 }}
                    animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, y:12 }}
                    className="absolute right-0 mt-3 w-56 bg-[#FEFAE0] text-[#283618] rounded-xl shadow-xl border border-[#DDA15E]/40 overflow-hidden"
                  >

                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-[#DDA15E]/40 text-sm">
                      <p className="font-semibold">{user.name || "User"}</p>
                      <p className="text-xs text-[#606C38]">{user.email}</p>
                    </div>

                    {/* User Cart */}
                    {!isAdmin && (
                      <Link
                        href="/dashboard/cart"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#f7f2d6] text-sm"
                      >
                        <FaShoppingCart/> My Cart
                      </Link>
                    )}

                    {/* Admin Menu */}
                    {isAdmin && (
                      <>
                        <Link
                          href="/dashboard/add-product"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-[#f7f2d6] text-sm"
                        >
                          <FaPlus/> Add Product
                        </Link>

                        <Link
                          href="/dashboard/manage-products"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-[#f7f2d6] text-sm"
                        >
                          <FaCog/> Manage Products
                        </Link>
                      </>
                    )}

                    <div className="border-t border-[#DDA15E]/40"></div>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 text-sm"
                    >
                      <FaSignOutAlt/> Logout
                    </button>

                  </motion.div>

                )}
              </AnimatePresence>

            </div>

          )}

        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={()=>setMobile(!mobile)}>
            {mobile ? <FaTimes size={20}/> : <FaBars size={20}/>}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobile && (

          <motion.div
            initial={{ opacity:0, height:0 }}
            animate={{ opacity:1, height:"auto" }}
            exit={{ opacity:0, height:0 }}
            className="md:hidden border-t border-[#606C38] bg-[#283618] px-6 py-4 space-y-4"
          >

            <Link href="/" className="flex items-center gap-2">
              <FaHome/> Home
            </Link>

            <Link href="/products" className="flex items-center gap-2">
              <FaBox/> Products
            </Link>

            {!isAdmin && user && (
              <Link href="/dashboard/cart" className="flex items-center gap-2">
                <FaShoppingCart/> Cart
              </Link>
            )}

            {!user ? (

              <Link
                href="/login"
                className="block bg-[#BC6C25] text-[#FEFAE0] text-center py-2 rounded-lg"
              >
                Login
              </Link>

            ) : (

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-400"
              >
                <FaSignOutAlt/> Logout
              </button>

            )}

          </motion.div>

        )}
      </AnimatePresence>

    </nav>

  );
}