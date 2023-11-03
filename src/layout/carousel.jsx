import { Carousel, IconButton } from "@material-tailwind/react";
import bck2 from '../assets/bg2.jpg';
import bck3 from '../assets/bg3.jpg';
import bck from '../assets/bg.jpg';

function CustomCarousel() {
  return (
    <Carousel
      className="w-[90%] rounded-xl m-10"
      autoplay={true}
      autoplayDelay={8000}
      loop={true}
      transition={{ duration: 0.8 }}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 z-20"
        >
          {/* SVG icon for previous arrow */}
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 z-20"
        >
          {/* SVG icon for next arrow */}
        </IconButton>
      )}
    >
      <div>
        <div className="h-[600px]">
          <img
            src={bck}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div>
        <div className="h-[600px]">
          <img src={bck2} alt="image 2" className=" h-full object-cover" />
        </div>
      </div>
      <div>
        <div className="h-[600px]">
          <img src={bck3} alt="image 3" className="h-full object-cover" />
        </div>
      </div>
    </Carousel>
  );
}

export default CustomCarousel;
