import React from 'react';
import { ProductData } from '../Data/ProductData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:false,
          speed:500,
          
        }
      }
    ]


  };

  return (
    <section className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="w-[88%] "> {/* Adjust width based on your design */}
        <Slider {...settings}>
          {ProductData.map((item, index) => (
            <div key={index} className="hover:scale-110 transition-all duration-500  cursor-pointer">
              <img src={item.Image} alt={item.Name} className="mx-auto mb-4 w-[100%]  " />
              <h1 className="text-xl font-semibold">{item.Name}</h1>
              <p className="text-lg text-gray-600">{item.Price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Products;
