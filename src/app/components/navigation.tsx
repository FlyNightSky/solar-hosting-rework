import React from "react";
import HambugerMenu from "./hamburger-menu";
import Button from "./button";

const Navigation = () => {
  return (
    <nav className="text-white flex justify-between items-center w-full">
      <div className="w-48">
        <img src="/Hosting.png" alt="Logo" className="w-48" />
      </div>
      <ul className="hidden space-x-5 max-w-2xl px-10 items-center md:flex flex-grow justify-center">
        <li className="text-lg transition-all duration-200 hover:text-purple-400 hover:cursor-pointer lg:text-xl">
          Home
        </li>
        <li className="text-lg transition-all duration-200 hover:text-purple-400 hover:cursor-pointer lg:text-xl">
          Pricing
        </li>
        <li className="text-lg transition-all duration-200 hover:text-purple-400 hover:cursor-pointer lg:text-xl">
          Status
        </li>
        <li className="text-lg transition-all duration-200 hover:text-purple-400 hover:cursor-pointer lg:text-xl">
          Reviews
        </li>
      </ul>
      <div className="hidden w-96 md:w-48 md:block">
        <Button Content="Get Started" />
      </div>
      <div className="block xl:hidden lg:hidden md:hidden">
        <HambugerMenu />
      </div>
    </nav>
  );
};

export default Navigation;
