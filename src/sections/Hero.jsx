import React from 'react'
import { BsCart } from "react-icons/bs";
import Feature1 from "/public/images/Featured1.webp"
import Feature2 from "/public/images/Featured2.webp"
import Feature3 from "/public/images/Featured3.webp"
import Feature4 from "/public/images/Featured4.webp"
import hero from "/public/images/Hero.png"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='flex justify-center'>
        <div className='flex items-center w-[88%]'>
            {/* left side */}
            <div>

            <h1 className='text-[#212121] text-6xl font-bold max-[650px]:text-4xl'>An Industrial Take on Streetwear</h1>
            <p className='text-lg font-medium text-[#746D66] my-7 max-w-[500px] '>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          
          
            <Link to="/ProductItems">
            <button className='bg-[#212121] p-4 flex text-white items-center gap-3 mb-16 '><BsCart className='text-xl'/>Start Shopping </button>
            </Link>
            <div className='flex flex-wrap gap-5'>
                <img src={Feature1} alt="" />
                <img src={Feature2} alt="" />
                <img src={Feature3} alt="" />
                <img src={Feature4} alt="" />

            </div>
            </div>
            {/* right side */}
            <div className=''>
                <img src={hero} alt="" className=' w-[600px] h-auto max-[1000px]:hidden '  />
            </div>
        </div>
    </section>
  )
}

export default Hero