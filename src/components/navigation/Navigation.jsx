import React from "react";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div
        className=" bg-inherit font-poppins font-light text-white tracking-wide flex justify-center
      motion-rotate-in-loop motion-opacity-in-0 motion-translate-y-in-50 motion-blur-in-md motion-duration-[2s] "
      >
        {/* Navbar */}
        <div className="grid sm:flex sm:justify-between sm:items-center w-3/4 p-4 ">
          <div className="flex gap-1 items-center justify-center">
            <img src={logo} width="20%"></img>
            <p className="bg-gradient-to-r from-white via-[#ad68de] to-[#7d2ed9] bg-clip-text text-transparent  font-poppins font-bold">
              Gupta Electronics
            </p>
          </div>

          <div>
            <ul className="flex gap-5 p-5 tracking-wide w-full">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "text-purple-200 underline underline-offset-8"
                    : "hover:text-purple-200 hover:underline hover:underline-offset-8";
                }}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) => {
                  return isActive
                    ? "text-purple-200 underline underline-offset-8"
                    : "hover:text-purple-200 hover:underline hover:underline-offset-8";
                }}
              >
                <li className="">Products</li>
              </NavLink>
              <NavLink>
                <li className="hover:text-purple-200 hover:underline hover:underline-offset-8">
                  Services
                </li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? "text-purple-200 underline underline-offset-8"
                    : "hover:text-purple-200 hover:underline hover:underline-offset-8";
                }}
              >
                <li className="">About Us</li>
              </NavLink>
              <NavLink to='https://www.google.com/maps/place/GUPTA+ELECTRONICS+SUBATHU/@30.975389,76.9896182,17z/data=!3m1!4b1!4m6!3m5!1s0x3905634c17e745f9:0x9ab5e84a0869da68!8m2!3d30.975389!4d76.9921931!16s%2Fg%2F11rqs6n2tz?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'>
                <li className="hover:text-purple-200 hover:underline hover:underline-offset-8">
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        {/* NAvbar */}
      </div>
    </>
  );
}

export default Navigation;
