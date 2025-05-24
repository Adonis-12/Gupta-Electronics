import React from "react";
import profile from "./profile.PNG";

function About() {
  return (
    <div className=" text-white h-screen font-roboto_condensed font-light">
      {/* profile */}
      <div className="flex justify-center mt-8 
      motion-rotate-in-loop motion-opacity-in-0 motion-translate-y-in-50 motion-blur-in-md motion-duration-[2s]">
        <div className=" size-40  rounded-full overflow-hidden outline-3 outline-[#7d0ba2] outline-offset-8 ">
          <img src={profile}></img>
        </div>
      </div>

      <div className="mt-5 grid gap-3 justify-items-center font-goth 
      motion-rotate-in-loop motion-opacity-in-0 motion-translate-y-in-50 motion-blur-in-md motion-duration-[2s] motion-delay-500">
        <h1 className="  text-2xl bg-gradient-to-r from-[#ad68de] to-[#4E0FAB] bg-clip-text text-transparent">Ankit Gupta</h1>
        <p className="font ">Owner, Gupta Electronics</p>
      </div>

      <div className="grid justify-items-center mt-10 gap-5  motion-rotate-in-loop motion-opacity-in-0 motion-translate-x-in-30 motion-blur-in-md motion-duration-[2s] motion-delay-700">
        <div className="grid justify-items-center w-3/4 ">
          <h1 className=" font-bold text-md  ">About gupta electronics</h1>
          <p className="rounded-3xl p-5 hover:scale-102 hover:bg-white/10 hover:backdrop-blur-xs hover:duration-200 hover:border-none ">
            Since 2000, Gupta Electronics has been Subathu's go-to destination
            for cutting-edge gadgets, reliable electronics, and expert tech
            support. What began as a small neighborhood shop has grown into a
            premier retail experience, thanks to our commitment to authentic
            products, competitive pricing, and personalized service.
          </p>
        </div>
        <div className="grid justify-items-center w-3/4 motion-rotate-in-loop motion-opacity-in-0 motion-translate-x-in-30 motion-blur-in-md motion-duration-[2s] motion-delay-900 ">
          <h1 className=" font-bold text-md ">Why Choose Us?</h1>
          <p className="rounded-3xl p-5 hover:scale-102 hover:bg-white/10 hover:backdrop-blur-xs hover:duration-200 hover:border-none ">
            We’re more than just a store—we’re your tech advisors. Our
            knowledgeable staff helps you navigate the latest innovations, from
            smartphones to home theaters, ensuring you find the perfect fit.
            Every product we carry is quality-checked, backed by warranties, and
            sourced directly from trusted brands like <span className="font-bold"> Samsung, Apple, and Sony.</span> 
          </p>
        </div>
        <div className="grid justify-items-center w-3/4 motion-rotate-in-loop motion-opacity-in-0 motion-translate-x-in-30 motion-blur-in-md motion-duration-[2s] motion-delay-1100">
          <h1 className=" font-bold text-md ">Community & Service</h1>
          <p className="rounded-3xl p-5  hover:scale-102 hover:bg-white/10 hover:backdrop-blur-xs hover:duration-200 hover:border-none ">
            Beyond sales, we offer on-the-spot repairs, trade-in programs, and
            installation services—because your convenience matters. Visit us at
            <span className="font-bold"> Lower Bazar, Subathu, Distt. Solan, Himachal pradesh</span> and discover why generations of customers trust Gupta 
            Electronics for all things tech.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
