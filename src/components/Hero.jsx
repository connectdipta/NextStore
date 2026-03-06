"use client"

import { motion } from "framer-motion"
import { FaShoppingCart } from "react-icons/fa"
import { FiCode, FiCpu, FiCamera, FiMusic } from "react-icons/fi"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {

  const [particles,setParticles] = useState([])

  // generate particles on client only
  useEffect(()=>{

    const p = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 2,
    }))

    setParticles(p)

  },[])

  const floatingIcons = [
    { Icon: FiCode, top: "15%", left: "10%" },
    { Icon: FiCpu, top: "20%", left: "85%" },
    { Icon: FiCamera, top: "70%", left: "8%" },
    { Icon: FiMusic, top: "75%", left: "80%" },
  ]

  return (

    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#283618] via-[#3a4d1f] to-[#283618] text-white shadow-xl">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#BC6C25]/30 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#DDA15E]/20 blur-[100px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#BC6C25]/20 blur-[100px] rounded-full"></div>

      </div>

      {/* Floating Particles */}
      {particles.map((p)=>(
        <motion.div
          key={p.id}
          initial={{ opacity:0, y:0 }}
          animate={{ y:-100, opacity:[0,0.8,0] }}
          transition={{
            duration:p.duration,
            repeat:Infinity,
            delay:p.delay,
            ease:"linear"
          }}
          className="absolute bg-white rounded-full"
          style={{
            left:`${p.x}%`,
            top:`${p.y}%`,
            width:`${p.size}px`,
            height:`${p.size}px`
          }}
        />
      ))}

      {/* Floating Icons */}
      {floatingIcons.map((item,i)=>(
        <motion.div
          key={i}
          animate={{
            y:[0,-20,0],
            rotate:[0,5,-5,0]
          }}
          transition={{
            duration:6 + i,
            repeat:Infinity,
            ease:"easeInOut"
          }}
          className="absolute text-[#DDA15E] text-5xl opacity-30"
          style={{
            top:item.top,
            left:item.left
          }}
        >
          <item.Icon/>
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDA15E] to-[#BC6C25]">
            NextStore
          </span>
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-6 text-[#f0ead2] max-w-2xl mx-auto text-lg md:text-xl">
          Discover premium products, unbeatable deals, and a modern shopping
          experience designed just for you.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <Link
            href="/products"
            className="flex items-center gap-2 bg-[#BC6C25] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#a85f21] transition"
          >
            <FaShoppingCart/>
            Shop Now
          </Link>

          <Link
            href="/products"
            className="px-8 py-3 rounded-full border border-[#DDA15E] hover:bg-[#DDA15E]/20 transition"
          >
            Browse Products
          </Link>

        </div>

      </div>

    </section>
  )
}