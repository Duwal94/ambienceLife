import React from 'react';
import SidebarWithLogo from '../layout/Sidebar';
import EcommerceCard from '../layout/CatCard'; // Import your EcommerceCard component

const Wallpaper = () => {
  const items = [
    { id: 1, title: 'Bedding' , img:"/beding.jpg"},
    { id: 2, title: 'Rugs' , img:"/Rugs.jpg"},
    { id: 3, title: 'Ready Made Curtains', img:"/curtains.jpg"},
    { id: 4, title: 'Cushion Covers' , img:"/cushins.jpg"},
    { id: 5, title: 'Decor Accessories', img:"/bg3.jpg"},
    { id: 6, title: 'Decor Accessories', img:"/bg3.jpg"},
    { id: 7, title: 'Decor Accessories', img:"/bg3.jpg"},
    { id: 8, title: 'Decor Accessories', img:"/bg3.jpg"},
    { id: 9, title: 'Decor Accessories', img:"/bg3.jpg"},
    { id: 10, title: 'Decor Accessories', img:"/bg3.jpg"},
    { id: 11, title: 'Decor Accessories', img:"/bg3.jpg"},
    { id: 12, title: 'Decor Accessories', img:"/bg3.jpg"},
    { id: 13, title: 'Decor Accessories', img:"/bg3.jpg"},
    { id: 14, title: 'Decor Accessories', img:"/bg3.jpg"},
  ];

  return (
    <div className="bg-white flex relative  ">
      <SidebarWithLogo />
      <div className="container mx-auto m-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {items.map((item) => (
            <EcommerceCard key={item.id} img={item.img} name={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;

