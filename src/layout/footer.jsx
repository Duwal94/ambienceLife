
import bck3 from '../assets/logo.png';

function FooterWithLogo() {
  return (
   <footer className="w-full bg-custom1 p-8">
  <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-custom1 text-center md:justify-between">
    <div className='flex flex-row '>
    <img src={bck3} alt="logo-ct" className="w-10 rounded-md" />
    <h2 className='m-2 text-white'>Ambience LifeStyle</h2>
    </div>
    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
      <li>
        <a href="#" className="block font-sans text-base font-normal leading-relaxed text-white antialiased transition-colors hover:text-pink-500 focus:text-pink-500">
          About Us
        </a>
      </li>
      <li>
        <a href="#" className="block font-sans text-base font-normal leading-relaxed text-white antialiased transition-colors hover:text-pink-500 focus:text-pink-500">
          License
        </a>
      </li>
      <li>
        <a href="#" className="block font-sans text-base font-normal leading-relaxed text-white antialiased transition-colors hover:text-pink-500 focus:text-pink-500">
          Contribute
        </a>
      </li>
      <li>
        <a href="#" className="block font-sans text-base font-normal leading-relaxed text-white antialiased transition-colors hover:text-pink-500 focus:text-pink-500">
          Contact Us
        </a>
      </li>
    </ul>
  </div>
  <hr className="my-8 border-blue-gray-50" />
  <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-200 antialiased">
    © 2023 Ambience LifeStyle
  </p>
</footer>

  );
}


export default FooterWithLogo;