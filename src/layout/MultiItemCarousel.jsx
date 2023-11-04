import { useState } from 'react';
import EcommerceCard from './CatCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight ,} from '@fortawesome/free-solid-svg-icons';

const items = [
  { id: 1, title: 'Bedding' , img:"/beding.jpg"},
  { id: 2, title: 'Rugs' ,img:"/Rugs.jpg"},
  { id: 3, title: 'Ready Made Curtains',img:"/curtains.jpg"},
  { id: 4, title: 'Cushion Covers' ,img:"/cushins.jpg"},
  { id: 5, title: 'Decor Accessories',img:"/bg3.jpg"},

];

const MultipleItemCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevItem = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const nextItem = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <>
   
    <div class="absolute w-[9%] left-0 opacity-60 h-full bg-custom5 z-10"></div>
    <div class="absolute w-[10%] right-0 opacity-60 h-full bg-custom5 z-10"></div>
    <div className="flex items-center justify-between h-screen relative">   
   
   
    <button
      className={`z-40 text-gray-500 hover:text-gray-700 `}
      onClick={prevItem}
      
    >
      <FontAwesomeIcon icon={faChevronLeft} size={"3x"} /> {/* Replace "Previous" with the left arrow icon */}
    </button>
    <button
      className={`absolute z-20 right-0  text-gray-500 hover:text-gray-700 `}
      onClick={nextItem}
      
    >
      <FontAwesomeIcon icon={faChevronRight}  size={"3x"} /> {/* Replace "Next" with the right arrow icon */}
    </button>
    <div className="flex space-x-4  ">
    
  <div
    className="flex transition-transform ease-in-out duration-200 z-0"
    style={{ transform: `translateX(-${startIndex * (100 / 40)}%)` }}
  >
    {[...items.slice(startIndex), ...items.slice(0, startIndex)].map((item, index) => (
      <div
        key={item.id}
        className="z-0 transition-transform duration-300 transform scale-90 hover:scale-100"
      >
        <EcommerceCard img={item.img} name={item.title} />
      </div>
    ))}
  </div>
</div>


    
  
  </div>
  </>
  );
};

export default MultipleItemCarousel;
