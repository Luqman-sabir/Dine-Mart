import './App.css'
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductItems from './components/ProductItems';
// import Home from './pages/Home'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
const router = createBrowserRouter(
  [
    {
       path:"/",
       element:
       <div>
        <Header/>
        <ProductItems/> 
        <Footer/> 
       </div>
    },
    {
      path:"/Cart",
      element:
      <div>
        <Header/>  
        <Cart/>
        <Footer/>,  
      </div>
   },
//    {
//     path:"/Productitems",
//     element: <div>
//     <Header/>  
//     <ProductItems/>  
//   </div>  
//  },
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
