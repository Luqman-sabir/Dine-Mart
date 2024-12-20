import { useDispatch } from "react-redux"
import  {addToCart}  from "../redux/slices/cardSlice";

// eslint-disable-next-line react/prop-types
const ProductCard = ({image,type,name,price,id,handleToast}) => {
    const dispatch = useDispatch();
    const Handle = ()=>{
        dispatch(addToCart({id,name,image,price,type,qty:1}))
        handleToast(name);
    }
  return (
 
    <div className=' '>
      <img src={image} className='w-[300px] ' alt="product" />
      <h1 className='font-bold text-xl'>{name}</h1>
      <p className='text-[#888AA7] font-semibold text-lg'>{type}</p>
      <p className='font-bold text-lg'>{price}</p>
      <button className="bg-[#212121] text-white p-2 mt-2 rounded-md" onClick={Handle}>Add to cart</button>
    </div>
 
  )
}

export default ProductCard
