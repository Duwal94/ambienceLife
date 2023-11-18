import React from 'react';
import SidebarWithLogo from '../layout/Sidebar';
import Product from '../layout/product'; // Import your EcommerceCard component

const Wallpaper = () => {
  const products = [
    {
      _id: "1010001",
      img: "/bg3.jpg",
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "10022001",
      img: "/bg3.jpg",
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "10330001",
      img: "/bg3.jpg",
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "1003001",
      img: "/bg3.jpg",
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "1000201",
      img: "/beding.jpg",
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "100002",
      img: "/Rugs.jpg",
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "100003",
      img: "/Rugs.jpg",
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "100004",
      img: "/Rugs.jpg",
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "100005",
      img: "/bg3.jpg",
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
    },
  ];

  return (
    <div className="bg-white flex relative  ">
      <SidebarWithLogo />
      <div className="container  m-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Product
            key={index}
            _id={product._id}
            img={product.img}
            productName={product.productName}
            price={product.price}
            color={product.color}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;

