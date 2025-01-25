import logo from "/public/images/Logo.webp";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ProductData } from "../Data/ProductData";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { setSearch } from "../redux/slices/SearchSlice";
import { IoCloseSharp } from "react-icons/io5";
import DropDown from "./DropDown";

const Header = () => {
  const cartItems = useSelector((state) => state.sliceData.data);
  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(false);
  console.log("active",active);
  

  const listUniqueCatgories = () => {
    const uniqueCategories = [
      ...new Set(ProductData.map((item) => item.Category)),
    ];
    setCategories(uniqueCategories);
    console.log("uniqueCategory", uniqueCategories);
  };
  useEffect(() => {
    listUniqueCatgories();
  }, []);
  const dispatch = useDispatch();
  return (
    <header className="flex justify-center items-center sticky top-0 z-10 bg-white py-2">
      <div className="flex justify-between w-[90%] p-5">
        <Link to="/">
          <img src={logo} alt="" className="h-7" />
        </Link>
        <nav className="flex gap-10 font-semibold text-lg cursor-pointer max-[1000px]:hidden">
         <Link to="/ProductItems">
          <button
            onClick={() => {
              setActive(false)
              dispatch(setCategory("All"));
            }}
            className="text-xl font-semibold  "
          >
            All product{" "}
          </button>
          </Link>
          {categories.map((category, i) => (
            <button
              onClick={() => {
                dispatch(setCategory(category));
                setActive(false)
              }}
              key={i}
              className="text-xl font-semibold  "
            >
              {category}{" "}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2 rounded-lg max-[1000px]:hidden">
          <CiSearch className="text-lg " />
          <input
            type="text"
            placeholder="What you looking for"
            className="outline-none"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>
        <Link to="/Cart" className="max-[1000px]:hidden ">
          <FaShoppingCart className="text-3xl" />
          <div
            className={`absolute right-20 mr-3  top-3 z-10 bg-red-400 rounded-xl h-6 w-6 text-center ${
              totalQty > 0 && "animate-bounce delay-500 transition-all"
            }`}
          >
            {totalQty}{" "}
          </div>
        </Link>

        {active ? (
          <button
            onClick={() => setActive(false)}
            className="text-3xl min-[1000px]:hidden"
          >
            <IoCloseSharp className="" />{" "}
          </button>
        ) : ( 
           <button
          onClick={() => setActive(true)}
          className="text-3xl min-[1000px]:hidden"
        >
          <IoIosMenu />
          </button>
        )}
        {active && 
        <DropDown active={active}setActive={setActive} />}
      </div>
    </header>
  );
};

export default Header;
