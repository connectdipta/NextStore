"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import { FaKey } from "react-icons/fa"

export default function ResetPassword(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleReset = (e)=>{
    e.preventDefault()

    const users =
      JSON.parse(localStorage.getItem("users")) || []

    const userIndex =
      users.findIndex((u)=>u.email === email)

    if(userIndex === -1){
      toast.error("User not found")
      return
    }

    users[userIndex].password = password

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    )

    toast.success("Password updated successfully")

    setTimeout(()=>{
      window.location.href="/login"
    },1500)
  }

  return(

    <div className="flex justify-center items-center min-h-[70vh] px-6">

      <form
        onSubmit={handleReset}
        className="bg-white border border-[#DDA15E]/40 p-8 w-full max-w-md rounded-xl shadow-md"
      >

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-center text-[#283618]">
          Reset Password
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-[#DDA15E]/40 p-3 w-full mb-4 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter new password"
          className="border border-[#DDA15E]/40 p-3 w-full mb-6 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        {/* Button */}
        <button className="flex items-center justify-center gap-2 bg-[#BC6C25] text-[#FEFAE0] w-full py-3 rounded-lg hover:bg-[#a85f21] transition">
          <FaKey />
          Update Password
        </button>

      </form>

    </div>
  )
}