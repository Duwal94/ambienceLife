import React from "react";
import bck3 from '../assets/logo.png';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium font-custom1"
      >
        <a href="#" className="flex items-center  hover:text-black transition-colors">
          Bedding
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium font-custom1"
      >
        <a href="/Wallpaper" className="flex items-center hover:text-black transition-colors">
          Wallpaper
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium font-custom1"
      >
        <a href="#" className="flex items-center hover:text-black transition-colors">
         Curtains
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium font-custom1"
      >
        <a href="#" className="flex items-center hover:text-black transition-colors">
        Cushion Covers
        </a>
      </Typography>
    </ul>
  );
}
 
export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="z-40 bg-custom1 sticky top-0  h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-0">  
      <div className="flex items-center  justify-between text-white ">    
      <div className="flex flex-row">
      <img src={bck3} className="h-12 mr-5 rounded-md" alt="Logo" />
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-2.5 font-custom1 "
          >         
          Ambience LifeStyle
        </Typography>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}