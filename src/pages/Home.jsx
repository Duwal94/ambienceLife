import React from 'react';

import CustomCarousel from '../layout/carousel';
import MultipleItemCarousel from '../layout/MultiItemCarousel';


const Home = () => {
  return (
    <div className="bg-custom3">
    <div className='flex justify-center items-center pt-12 '>
            <CustomCarousel/>
            <div className="w-[70%] text-white text-6xl p-8">
              <p className='text-center font-custom '>Everyday Luxe range featuring premium bed linen for everyday use.</p>
            </div>
          </div>
     <div className="bg-custom5 min-h-screen py-8">
          <div className="container mx-auto overflow-x-auto">
            <MultipleItemCarousel />
          </div>
        </div>
    </div>
  );
};

export default Home;