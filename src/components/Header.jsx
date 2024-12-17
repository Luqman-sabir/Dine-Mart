import logo from "/public/images/Logo.webp"
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-center items-center ">
      <div className="flex justify-between w-[90%] p-5">
      <img src={logo} alt="" />
      <nav className="flex gap-10 font-semibold text-lg cursor-pointer">
        <h4>All Products</h4>
        <h4>Male</h4>
        <h4>Female</h4>
        <h4>Kids</h4>
      </nav>
      <div className="flex items-center gap-2 rounded-lg ">
      <CiSearch className="text-lg " />
        <input type="text" placeholder="What you looking for" className="outline-none"  />
      </div>
      <FaShoppingCart className="text-xl" />
      </div>
    </header>
    
  )
}

export default Header
