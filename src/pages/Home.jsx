import React from 'react';

import CustomCarousel from '../layout/carousel';
import Multi from '../layout/multicarosel2';


const Home = () => {
  return (
    <div className="bg-custom3">
    <div className='flex justify-center items-center  lg:pt-12 lg:flex-row flex-col '>
            <CustomCarousel/>
            <div className="lg:w-[70%]  lg:text-6xl lg:p-8 text-md  p-3 font-medium  bg-custom1  lg:bg-custom3 text-white  lg:text-black">
              <p className='text-center lg:font-custom '>Everyday Luxe range featuring premium bed linen for everyday use.</p>
            </div>
          </div>
     <div className="bg-custom5  py-8">
     <p className='text-center lg:text-5xl text-3xl p-5 font-bold  '>SHOP CATEGORIES</p>
          <div className="container mx-auto overflow-x-auto">            
            <Multi />
          </div>
        </div>
    </div>
  );
};

export default Home;