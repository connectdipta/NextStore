"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import { FaKey } from "react-icons/fa"

export default function ResetPassword(){

  const [password,setPassword] = useState("")

  const handleReset=(e)=>{
    e.preventDefault()

    if(!password){
      toast.error("Please enter a password")
      return
    }

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

        <h1 className="text-3xl font-bold mb-6 text-center text-[#283618]">
          Reset Password
        </h1>

        <input
          type="password"
          placeholder="New Password"
          className="border border-[#DDA15E]/40 p-3 w-full mb-6 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="flex items-center justify-center gap-2 bg-[#BC6C25] text-[#FEFAE0] w-full py-3 rounded-lg hover:bg-[#a85f21] transition">
          <FaKey />
          Update Password
        </button>

      </form>

    </div>
  )
}