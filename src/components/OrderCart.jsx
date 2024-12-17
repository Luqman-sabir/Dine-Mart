import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
// eslint-disable-next-line react/prop-types
const OrderCart = ({name,image,type,qty,price}) => {
  return (
    <section className="flex justify-center mt-10 ">
    <div className="flex gap-5 w-[80%] ">
        {/* left side */}
        <div id="ri2" className="w-[70%] flex gap-10" >
        <div>
        <img src={image} alt="" className="w-[200px] rounded-lg  h-[180px] " />
      </div>
      {/* right div */}
      <div className="w-[65%]  flex flex-col gap-2"> 
        {/* child 1 */}
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{name}</h2>
            <MdDelete className="text-2xl"/>
        </div>
        <p className="text-[#888AA7] text-lg font-semibold">{type} </p>
        <p className="text-lg font-semibold">Delivery Estimation</p>
        <p className="text-lg text-yellow-400 font-semibold">5 Working Days</p>
        {/* child 2 */}
        <div className="flex items-center justify-between">
        <p className="text-lg font-medium">{price}</p>
          <div className="flex items-center gap-4">
          <FaMinus />
          <span>{qty}</span>
          <FaPlus />
          </div>
        </div>
      </div>
        </div>
        {/* right side */}
       <div id="ri" className="w-[30%] flex flex-col gap-6 px-1  ">
        <h1 className="text-xl font-bold">Order Summary</h1>
        {/* child 1 */}
        <div className="flex justify-between text-lg font-semibold">
        <p>Quantity</p>
        <p>{qty} Product</p>
            
        </div>
        {/* child 2 */}
        <div className="flex justify-between text-lg font-semibold">
        <p>Sub Total</p>
        <p>$150</p>
            
        </div>
        {/* button */}
        <button className="text-center bg-[#212121] text-white p-2">Process to Checkout</button>
      
      </div>
       </div>
       </section>
   
     
     
    
  )
}

export default OrderCart
