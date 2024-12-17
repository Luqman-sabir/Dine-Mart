
import { ProductData } from '../Data/ProductData'
import ProductCard from './ProductCard'

const ProductItems = () => {
  return (
    <section className='flex justify-center mt-10'>
    <div className='flex flex-wrap gap-24 w-[80%]'>
      {
        ProductData.map((item) => (
            <ProductCard 
            key = {item.id}
            id = {item.id}
            image = {item.Image}
            name = {item.Name}
            type = {item.Type}
            price = {item.Price}
            />
        ) 
    )
      }
    </div>
    </section>
  )
}

export default ProductItems
