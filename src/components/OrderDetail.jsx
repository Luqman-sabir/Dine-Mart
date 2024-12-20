import { useSelector } from "react-redux"
import OrderCart from "./OrderCart"


const OrderDetail = () => {
    const cartItems = useSelector((state)=>state.sliceData.data)
    const totalQty = cartItems.reduce((total,item)=>total + item.qty ,0);

    const totalPrice = cartItems.reduce((Price,item)=>Price + item.qty*item.price,0);
    console.log("totalprice",totalPrice);    
    console.log("cartitems",cartItems);
    
  return (
    <section className="flex justify-center mt-10 " >
    <div className=" w-[90%] flex gap-5 max-[1100px]:flex-col"id="">
      <div className="flex flex-col w-full  gap-5">
        {
            cartItems.map((item)=>(
                <OrderCart
                key={item.id}
                id = {item.id}
                name = {item.name}
                image = {item.image}
                price = {item.price}
                qty = {item.qty}
                type = {item.type}
                
                />

            ))
        }
        </div>
      
    
         <div id="ri" className="w-[35%] flex flex-col gap-6 px-1 max-[1100px]:w-[100%] ">
        <h1 className="text-xl font-bold">Order Summary</h1>
        {/* child 1 */}
        <div className="flex justify-between text-lg font-semibold ">
        <p>Quantity</p>
        <p>{totalQty} Product</p>
            
        </div>
        {/* child 2 */}
        <div className="flex justify-between text-lg font-semibold">
        <p>Sub Total</p>
        <p>Rs:{totalPrice}</p>
            
        </div>
        {/* button */}
        <button className="text-center bg-[#212121] text-white p-2">Process to Checkout</button>
      
        </div>
      </div>
    </section>
  )
}

export default OrderDetail
