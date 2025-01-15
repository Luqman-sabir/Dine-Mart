import React from 'react'
import event1 from "/public/images/event1.webp"
import event2 from "/public/images/event2.webp"
import img8 from "/public/images/img8.png"


const Promotion = () => {
  return (
    <div className='flex flex-col gap-7 mt-10 items-center'>

        <h1 className='text-center font-bold text-3xl '>Our Promotions Events</h1>
    <section className='w-[88%] flex gap-5 max-[1000px]:flex-col'>
    
        {/* left side */}
            <div className=' flex flex-col gap-5  ' >
                {/* child left */}
                <div className='bg-[#D6D6D8] max-[400px]:flex-col flex items-center justify-between '>
                    <div className='px-10 max-[400px]:mt-5'>
                        <h3 className='font-bold text-3xl '>GET UP TO  60%</h3>
                        <p className='font-semibold text-lg'>For the summer season</p>
                    </div>
                    <img src={event1} alt="" />

                </div>
                                    {/* child right */}

                <div className='bg-[#212121] text-white py-14 text-center'>
                  <h1 className='text-4xl font-bold '>GET 30% Off</h1>
                  <h3 className='my-2 font-semibold'>USE PROMO CODE</h3>
                  <button className='py-1 cursor-pointer px-[10%] bg-[#474747] rounded-lg font-semibold text-lg'>DINEWEEKENDSALE</button>
                </div>
            </div>
       {/* right side */}
       <div className='flex gap-5 max-[650px]:flex-col justify-center'>

       <div className='bg-[#EFE1C7] flex flex-col justify-between '>
        <div className='p-5'>
            <h2 className='text-xl'>Flex Sweatshirt</h2>
            <p className='font-bold text-lg'>$75.00</p>
        </div>
        <img src={event2} alt="" className=' '/>
       </div>
       <div className='bg-[#D7D7D9] flex flex-col justify-between '>
        <div className='p-5'>
            <h2 className='text-xl'>Flex Push Button Bomber

</h2>
            <p className='font-bold text-lg'>$190.00</p>
        </div>
        <img src={img8} alt="" className='h-[70%] '/>
       </div>
       </div>
    

    </section>
    </div>
  )
}

export default Promotion