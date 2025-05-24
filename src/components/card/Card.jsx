import React from "react";
import phone from "./phone.png";
import laptop from "./laptops.png";
import home from "./appliances.png";
import headphone from "./headphones.png";
import { Smartphone, LaptopMinimal, Refrigerator, Headset } from "lucide-react";

function Card() {
  const products = [
    {
      id: 1,
      name: "Mobile Phones",
      url: phone,
      icon: <Smartphone />,
      description:
        "Premium smartphones: Apple iOS, Samsung AMOLED, OnePlus fast charging, and more.",
    },
    {
      id: 2,
      name: "Gaming Laptops",
      url: laptop,
      icon: <LaptopMinimal />,
      description:
        "High-performance laptops: ASUS TUF, MSI Katana, Dell G15 for seamless gaming.",
    },
    {
      id: 3,
      name: "Home Appliances",
      url: home,
      icon: <Refrigerator />,
      description:
        "Smart TVs, ACs, washing machines—energy-efficient and feature-rich for modern homes.",
    },
    {
      id: 4,
      name: "Headphones and accessories",
      url: headphone,
      icon: <Headset />,
      description:
        "Sony noise-canceling headphones, AirPods Pro, smartwatches, and premium audio gear",
    },
  ];
  return products.map((product) => {
    return (
      <div className="hover:scale-99 hover:border-cyan-100 hover:backdrop-blur-4xl w-auto h-auto m-2 
      grid place-content-center p-2 rounded-2xl justify-items-center 
      hover:duration-300 font-roboto_condensed  bg-gradient-to-r from-[#0f061e] via-[#2b213b] to-[#0f061e] ">
        <img src={product.url} className="w-3/4"></img>
        <div className="grid grid-rows-1 justify-items-center p-5 m-3 rounded-2xl h-auto hover:border-cyan-100 ">
          <div className=" font-bold flex gap-3">
            <span>{product.icon}</span>
            {product.name}
          </div>
          <p className="flex justify-center mt-3">{product.description}</p>
        </div>
      </div>
    );
  });
}

export default Card;
