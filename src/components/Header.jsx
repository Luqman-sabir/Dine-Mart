import logo from "/public/images/Logo.webp"
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
const Header = () => {
  return (
    <header className="flex justify-center items-center sticky top-0 bg-white py-2">
      <div className="flex justify-between w-[90%] p-5">
     <Link to="/">
      <img src={logo} alt="" />
     
     </Link>
      <nav className="flex gap-10 font-semibold text-lg cursor-pointer max-[1000px]:hidden">
        <h4>All Products</h4>
        <h4>Male</h4>
        <h4>Female</h4>
        <h4>Kids</h4>
      </nav>
      <div className="flex items-center gap-2 rounded-lg max-[1000px]:hidden">
      <CiSearch className="text-lg " />
        <input type="text" placeholder="What you looking for" className="outline-none"  />
      </div>
      <Link to = "/Cart" className="max-[1000px]:hidden" >
       <FaShoppingCart className="text-2xl" />
      
      </Link>
      <IoIosMenu className="text-3xl min-[1000px]:hidden" />
      </div>
    </header>
    
  )
}

export default Header
