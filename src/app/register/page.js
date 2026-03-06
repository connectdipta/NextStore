"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import { FaUserPlus } from "react-icons/fa"

export default function Register(){

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [photo,setPhoto] = useState(null)

  const handleRegister = async(e)=>{

    e.preventDefault()

    if(!photo){
      toast.error("Please upload photo")
      return
    }

    const formData = new FormData()
    formData.append("image",photo)

    const res = await fetch(
      "https://api.imgbb.com/1/upload?key=6c4bcdca2f2708f455e46b0f31549904",
      {
        method:"POST",
        body:formData
      }
    )

    const data = await res.json()

    const newUser = {
      name,
      email,
      password,
      image:data.data.url
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || []

    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))

    toast.success("Registered successfully")

    setTimeout(()=>{
      window.location.href="/login"
    },1500)

  }

  return(

    <div className="flex justify-center items-center min-h-[70vh] px-6">

      <form
        onSubmit={handleRegister}
        className="bg-white border border-[#DDA15E]/40 p-8 w-full max-w-md rounded-xl shadow-md"
      >

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-[#283618]">
          Register
        </h2>

        {/* Name */}
        <input
          placeholder="Name"
          className="border border-[#DDA15E]/40 p-3 w-full mb-4 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
          onChange={(e)=>setName(e.target.value)}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border border-[#DDA15E]/40 p-3 w-full mb-4 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
          onChange={(e)=>setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="border border-[#DDA15E]/40 p-3 w-full mb-4 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
          onChange={(e)=>setPassword(e.target.value)}
        />

        {/* Photo Upload */}
        <input
          type="file"
          className="mb-5 w-full"
          onChange={(e)=>setPhoto(e.target.files[0])}
        />

        {/* Button */}
        <button className="flex items-center justify-center gap-2 bg-[#BC6C25] text-[#FEFAE0] w-full py-3 rounded-lg hover:bg-[#a85f21] transition">
          <FaUserPlus />
          Register
        </button>

      </form>

    </div>
  )
}