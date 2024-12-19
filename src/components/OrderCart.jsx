import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeCart } from "../redux/slices/cardSlice";
// eslint-disable-next-line react/prop-types
const OrderCart = ({id,name,image,type,qty,price}) => {
  const dispatch = useDispatch();
  const Handle = ()=>{
       dispatch(removeCart({id}))
  }
  return (
    <div className="w-[1000px] flex justify-between   " id="dd">
        {/* left side */}
        <div  className=" flex gap-10" >
        <div>
        <img src={image} alt="" className="w-[280px] rounded-lg  h-[180px] " />
      </div>
      {/* right div */}
      <div className=" w-[700px] flex flex-col gap-2"> 
        {/* child 1 */}
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{name}</h2>
            <MdDelete className="text-2xl cursor-pointer" onClick={Handle}/>
        </div>
        <p className="text-[#888AA7] text-lg font-semibold">{type} </p>
        <p className="text-lg font-semibold">Delivery Estimation</p>
        <p className="text-lg text-yellow-400 font-semibold">5 Working Days</p>
        {/* child 2 */}
        <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Rs:{price}</p>
          <div className="flex items-center gap-4">
          <FaMinus className="cursor-pointer"  onClick={()=>qty>1 ?dispatch(decrementQty({id})):qty=0}/>
          <span>{qty}</span>
          <FaPlus onClick={()=>dispatch(incrementQty({id}))} className="cursor-pointer" />
          </div>
        </div>
      </div>
        </div>
       </div>

   
     
     
    
  )
}

export default OrderCart
