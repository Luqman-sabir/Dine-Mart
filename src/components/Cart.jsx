import OrderDetail from "./OrderDetail"
import { useSelector } from "react-redux"
import { RiShoppingBagLine } from "react-icons/ri";
const Cart = () => {
    const cartItems = useSelector((state)=>state.sliceData.data)
  return (
    <section className="flex justify-center h-screen">

    <div className="w-[80%]">
        <h1 className=" text-2xl font-bold max-[600px]:text-xl">Shopping Cart</h1>
    {
        cartItems.length > 0 ?
        <OrderDetail/>     :
        <div className="flex flex-col items-center mt-10">
            <RiShoppingBagLine className="text-6xl max-[600px]:text-4xl" />
            <h1 className=" text-4xl font-bold max-[600px]:text-2xl">Your Card is Empty</h1>
            </div>
    }
    </div>
    </section>
  )
}

export default Cart
