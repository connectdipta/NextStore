"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { FaGoogle, FaSignInAlt } from "react-icons/fa"

export default function Login() {

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async(e)=>{
    e.preventDefault()

    if(!email || !password){
      toast.error("Please enter email and password")
      return
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || []

    const user = users.find(
      (u)=>u.email === email && u.password === password
    )

    // Local user login
    if(user){
      localStorage.setItem("loggedUser", JSON.stringify(user))
      toast.success("Login successful")
      router.push("/")
      return
    }

    // NextAuth credentials login
    const res = await signIn("credentials",{
      email,
      password,
      redirect:false
    })

    if(res?.error){
      toast.error("Invalid email or password")
    }else{
      toast.success("Login successful")
      router.push("/")
    }
  }

  return (

    <div className="flex justify-center items-center min-h-[70vh] px-6">

      <form
        onSubmit={handleLogin}
        className="bg-white border border-[#DDA15E]/40 p-8 w-full max-w-md rounded-xl shadow-md"
      >

        <h2 className="text-3xl font-bold mb-6 text-center text-[#283618]">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          required
          className="border border-[#DDA15E]/40 p-3 w-full mb-4 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="border border-[#DDA15E]/40 p-3 w-full mb-2 rounded-lg outline-none focus:ring-2 focus:ring-[#DDA15E]"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <div className="text-right mb-4">
          <Link
            href="/forgot-password"
            className="text-sm text-[#606C38] hover:text-[#BC6C25]"
          >
            Forgot Password?
          </Link>
        </div>

        <button className="flex items-center justify-center gap-2 bg-[#BC6C25] text-[#FEFAE0] w-full py-3 mb-3 rounded-lg hover:bg-[#a85f21] transition">
          <FaSignInAlt />
          Login
        </button>

        <button
          type="button"
          onClick={()=>signIn("google",{callbackUrl:"/"})}
          className="flex items-center justify-center gap-2 bg-white border border-[#DDA15E]/40 text-[#283618] w-full py-3 rounded-lg hover:bg-[#FEFAE0] transition"
        >
          <FaGoogle />
          Login with Google
        </button>

        <p className="text-center mt-5 text-sm text-[#606C38]">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-[#BC6C25] font-medium"
          >
            Register
          </Link>
        </p>

      </form>

    </div>
  )
}