import React from "react";
import head from "./head.png";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="w-full h-screen flex gap-2 text-gray-300 font-roboto_condensed font-light ">
        <div className="w-1/2 grid  p-4 h-80vh m-5 grid-rows-12  ">
          <p className="p-2 font-goth row-span-4 motion-rotate-in-loop motion-opacity-in-0 motion-translate-x-in-50 motion-blur-in-md motion-duration-[2s] ">
            <span className="bg-gradient-to-r from-[#ad68de] to-[#4E0FAB] bg-clip-text text-transparent text-7xl ">
              Gupta{" "}
            </span>
            <br></br>
            <br></br>
            <span className=" text-6xl ">Electronics</span>
          </p>
          <p className="text-2xl row-span p-2 font-bold row-span-1 motion-rotate-in-loop motion-opacity-in-0 motion-translate-x-in-50 motion-blur-in-md motion-duration-[2s] motion-delay-500">
            Welcome to Our Online Shop
          </p>
          <p className="p-2 text-white/80 row-span-3 w-full flex justify-center items-center *:motion-rotate-in-loop motion-opacity-in-0 motion-translate-x-in-50 motion-blur-in-md motion-duration-[2s] motion-delay-700">
            Your trusted destination for the latest gadgets, electronics, and
            expert tech support. Whether you're upgrading your smartphone,
            shopping for a new laptop, or setting up a home theater, we offer
            top brands, competitive prices, and personalized service. Our
            knowledgeable staff is here to help you find the perfect
            device—plus, enjoy hassle-free repairs, warranty support, and
            exclusive in-store deals. Visit us today and experience tech made
            simple!
          </p>
          <div
            className="flex justify-center  w-full row-span-2 items-center 
        motion-rotate-in-loop motion-opacity-in-0 motion-translate-x-in-50 motion-blur-in-md motion-duration-[2s] motion-delay-1000"
          >
            <Link to='/products' className="flex justify-center w-full" ><Button className="sm:p-5 rounded-full w-1/4 h-1/2  sm:text-xl bg-inherit
             border border-white hover:border-none hover:bg-gradient-to-r from-[#7d0ba2] via-[#4e0fab] to-[#4e0fab] cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#4e0fab] ">
              Explore
              <ArrowUpRight></ArrowUpRight>
            </Button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex  justify-center motion-rotate-in-loop motion-opacity-in-0 motion-translate-y-in-50 motion-blur-in-md motion-duration-[2s] motion-delay-1500 items-start">
          <img src={head} height="90%"></img>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
