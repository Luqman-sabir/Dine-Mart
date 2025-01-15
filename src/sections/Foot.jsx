import React from 'react';
import logo from "/public/images/Logo.webp";
import { Link } from 'react-router-dom';

const Foot = () => {
  return (
    
      <footer className="text-gray-600 flex justify-center body-font ">
        <div className="container  w-[90%] px-5 py-24 mx-auto flex gap-16  max-[1000px]:flex-col">
          <div className="w-[30%] flex-shrink-0  max-[1000px]:w-[70%]  ">
            <img src={logo} alt="" className='w-[180px] ' />
            <p className="mt-8 text-md font-semibold text-gray-500">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          </div>
          <div className="flex-grow flex max-[500px]:flex-col md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-gray-600 tracking-widest text-lg font-bold mb-3">Compony</h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800">About</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800">Terms of Use</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800">How it Works</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-gray-600 tracking-widest text-lg font-bold mb-3">Support</h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800">Support Carrer</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800">24th Service</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800">Quick Chat</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-gray-600 tracking-widest text-lg font-bold mb-3">Contact</h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800">Whatsapp</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800">Support 24th</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
   
  );
};

export default Foot;
