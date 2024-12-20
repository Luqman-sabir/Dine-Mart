
import { ProductData } from '../Data/ProductData'
import ProductCard from './ProductCard'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const ProductItems = () => {
  const category = useSelector((state)=>state.category.category)
  const  search = useSelector((state) => state.search.search)
  const handleToast = (name)=>toast.success(`Added  ${name}`)
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    
    <section className='flex justify-center mt-10'>
    <div className='flex flex-wrap gap-24 w-[80%] max-[887px]:justify-center'>
      {
       
          ProductData.filter((item)=>{
            if (category==="All") {
             return item.Type.toLowerCase().includes(search.toLowerCase());

            }
            else{
              return category === item.Category&& item.Type.toLowerCase().includes(search.toLowerCase())
            }
        }).map((item) => (
            <ProductCard 
            key = {item.id}
            id = {item.id}
            image = {item.Image}
            name = {item.Name}
            type = {item.Type}
            price = {item.Price}
            handleToast = {handleToast}
            />
        ) 
    )
  }
    
    </div>
    </section>
    </>
  )
}

export default ProductItems
