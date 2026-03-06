"use client"

import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast"

export default function Providers({ children }) {
  return (
    <SessionProvider>
      {children}

      {/* Global Toast */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "10px",
            background: "#283618",
            color: "#FEFAE0",
            border: "1px solid #DDA15E",
          },
        }}
      />
    </SessionProvider>
  )
}