import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeCart,
} from "../redux/slices/cardSlice";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const OrderCart = ({ id, name, image, type, qty, price }) => {
  const dispatch = useDispatch();
  const Handle = () => {
    dispatch(removeCart({ id }));
    toast(`${name} Removed!`, {
      icon: "👏",
    });
  };
  return (
    <div className=" flex gap-5 max-[650px]:flex-col" id="dd">
      {/* left side */}

      <img
        src={image}
        alt=""
        className="w-[250px] rounded-lg  h-[200px] "
      />

      {/* right div */}
      <div className=" w-[60%]  max-[650px]:w-full " id="dd">
        {/* child 1 */}
        <div className="flex items-center   justify-between">
          <h2 className="text-xl font-semibold">{name}</h2>
          <MdDelete className="text-2xl cursor-pointer" onClick={Handle} />
        </div>
        <p className="text-[#888AA7] text-lg font-semibold">{type} </p>
        <p className="text-lg font-semibold">Delivery Estimation</p>
        <p className="text-lg text-yellow-400 font-semibold">5 Working Days</p>
        {/* child 2 */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">Rs:{price}</p>
          <div className="flex items-center gap-4">
            <FaMinus
              className="cursor-pointer"
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
            />
            <span>{qty}</span>
            <FaPlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
