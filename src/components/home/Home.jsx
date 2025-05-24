import React from "react";
import LandingPage from "../landingPage/LandingPage";
import Navigation from "../navigation/Navigation";
import Products from "../products/Products";
import { Outlet } from "react-router-dom";
import Deals from "../deals/Deals";

function Home() {
  return (
    <>
      {/* <Deals /> */}
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Home;
