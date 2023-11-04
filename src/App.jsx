
import NavbarSimple from './layout/navbar';
import CustomCarousel from './layout/carousel';
import MultipleItemCarousel from './layout/MultiItemCarousel';
import FooterWithLogo from './layout/footer'

function App() {
  
  return (
<div className='bg-custom2'>
    
<div className="bg-custom2 pb-1">
  <div className=" ml-[13%]  z-10">
    <NavbarSimple/>   
  </div>
  <div className='flex justify-center items-center pt-12 '>
    <CustomCarousel/>
    <div className=" w-[70%] text-white text-6xl p-8 ">
				<p className='text-center font-custom '>Everyday Luxe range featuring premium bed linen for everyday use.</p>
				
	    	</div>
  </div> 
</div>
<div className="bg-custom5 min-h-screen py-8">
  <div className="container mx-auto">
    <MultipleItemCarousel />
  </div>
</div>
<div>
    <FooterWithLogo/>
</div>
   
</div>

  );
}

export default App;
