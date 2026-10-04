import { NavLink } from "react-router"



const Navbar = () => {




  return (
    <div className="p-4  bg-red-300 rounded-xl flex items-center justify-between ">
        <div>logo</div>
        <div className="flex gap-10 text-xl">

            {/* <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Product</p> */}
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/product"}>Product</NavLink>
        </div>
        <button>Login</button>
    </div>
  )
}

export default Navbar
