import { useSelector } from "react-redux"
import OrderCart from "./OrderCart"


const OrderDetail = () => {
    const cartItems = useSelector((state)=>state.sliceData.data)
    console.log("cartitems",cartItems);
    
  return (
    <section className="">
    <div className="">
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
    </section>
  )
}

export default OrderDetail
