import './App.css'
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductItems from './components/ProductItems';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Hero from './sections/Hero';
import Promotion from './sections/Promotion';
import Products from './sections/Products';
import Foot from './sections/Foot';
import ProductCard from './components/ProductCard';
const router = createBrowserRouter(
  [
    {
       path:"/",
       element:
       <div>
        <Header/>
        <Hero/>
        <Promotion/>
        <Products/>
      
        <Foot/>
        <Footer/> 
       </div>
    },
    {
      path:"/Cart",
      element:
      <div>
        <Header/>  
        <Cart/>
        <Foot/>
        <Footer/>,  
      </div>
   },
   {
    path:"/ProductItems",
    element:
    <div>
      <Header/>  
      <ProductItems/>
      <Foot/>
        <Footer/> 
      ,  
    </div>
 },
  ]
)

function App() {
  return (
   <div>
      <RouterProvider router={router} />

   </div>
  )
}

export default App
