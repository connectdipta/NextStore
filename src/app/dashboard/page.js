import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { FaBox, FaShoppingCart, FaUser } from "react-icons/fa"

export default async function Dashboard(){

  const session = await getServerSession()

  if(!session){
    redirect("/login")
  }

  return (

    <div className="space-y-8">

      {/* Welcome */}
      <h1 className="text-3xl font-bold text-[#283618]">
        Welcome, {session.user.name}
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Products */}
        <div className="bg-white border border-[#DDA15E]/40 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3">
            <FaBox className="text-[#BC6C25] text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-[#283618]">
                Products
              </h3>
              <p className="text-[#606C38] text-sm">
                Manage your store products
              </p>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white border border-[#DDA15E]/40 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-[#BC6C25] text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-[#283618]">
                Orders
              </h3>
              <p className="text-[#606C38] text-sm">
                View customer orders
              </p>
            </div>
          </div>
        </div>

        {/* Users */}
        <div className="bg-white border border-[#DDA15E]/40 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3">
            <FaUser className="text-[#BC6C25] text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-[#283618]">
                Users
              </h3>
              <p className="text-[#606C38] text-sm">
                Registered customers
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}