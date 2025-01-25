import { setCategory } from "../redux/slices/CategorySlice";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { ProductData } from "../Data/ProductData";
import { CiSearch } from "react-icons/ci";
import { setSearch } from "../redux/slices/SearchSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const DropDown = ({active,setActive}) => {
  const navigate = useNavigate();
    const cartItems = useSelector((state) => state.sliceData.data);
  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);
     const [categories, setCategories] = useState([]);
    
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
    <div className="absolute bg-white z-10 top-20 right-0 p-10 w-[100%] h-screen">
        <div className="flex flex-col items-center gap-7">
            
       <nav className="flex flex-col gap-10 font-semibold text-lg cursor-pointer min-[1000px]:hidden">
          <button
            onClick={() => {
              dispatch(setCategory("All"));
              navigate("/ProductItems")
              setActive(!active)

            }}
            className="text-xl font-semibold  "
          >
            All product{" "}
          </button>

          {categories.map((category, i) => (
            <button
              onClick={() => {
                dispatch(setCategory(category));
                navigate("/ProductItems")
              setActive(!active)
              }}
              key={i}
              className="text-xl font-semibold  "
            >
              {category}{" "}
            </button>
          ))}
        </nav>
        <Link onClick={()=>{
          navigate("/cart")
          setActive(!active)
        }}  className="min-[1000px]:hidden relative">
          <FaShoppingCart className="text-3xl" />
          <div
            className={`absolute -right-9 -top-4 mr-3   z-10 bg-red-400 rounded-xl h-6 w-6 text-center ${
              totalQty > 0 && "animate-bounce delay-500 transition-all"
            }`}
          >
            {totalQty}{" "}
          </div>
        </Link>
        </div>
      
    </div>
  )
}

export default DropDown
