
import NavbarSimple from './layout/navbar';
import CustomCarousel from './layout/carousel';
import MultipleItemCarousel from './layout/MultiItemCarousel';
import FooterWithLogo from './layout/footer'

function App() {
  
  return (
<>
    
<div className="bg-custom2 pb-4">
  <div className="p-2 inset-x-0 top-10 z-10">
    <NavbarSimple/>   
  </div>
  <div className='flex justify-center items-center pt-5 '>
    <CustomCarousel/>
    <div className="font-bold  w-[70%] text-white text-3xl p-8 ">
				<p className='text-center'>Everyday Luxe range featuring premium bed linen for everyday use.</p>
				
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
   
</>

  );
}

export default App;
