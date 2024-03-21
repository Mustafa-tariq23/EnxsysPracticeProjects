import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll/modules";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])
  
  const handleThemeSwitch = () =>{
    console.log("moon image clicked")
    setTheme(theme === 'dark'? 'light' : 'dark');
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 bg-white w-full dark:bg-slate-900 dark:text-white z-50">
      <div className="container mx-auto py-5 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img className="w-16 sm:w-10" src="images/logo.png" alt="Logo Here" />
          <span className="text-xl font-semibold  sm:block">MUSTAFA TARIQ</span>
        </div>
        <ul className="md:flex hidden space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase">
          <li className="hover:text-gray-400 ease-in duration-150 cursor-pointer">
            <LinkScroll
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </LinkScroll>
          </li>
          <li className="hover:text-gray-400 ease-in duration-150 cursor-pointer">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About me
            </LinkScroll>
          </li>
          <li className="hover:text-gray-400 ease-in duration-150 cursor-pointer">
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Services
            </LinkScroll>
          </li>
          <li className="hover:text-gray-400 ease-in duration-150 cursor-pointer">
            <LinkScroll
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Works
            </LinkScroll>
          </li>
          <li className="hover:text-gray-400 ease-in duration-150 cursor-pointer">
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </LinkScroll>
          </li>
        </ul>
        <img
          src="images/moon.png"
          alt="moon img"
          className="w-7 hidden md:block cursor-pointer"
          onClick={handleThemeSwitch}
        />

        <div
          className="space-y-1 block md:hidden cursor-pointer p-2"
          onClick={toggleMenu}
        >
          <div
            className={`w-6 h-0.5 bg-black dark:bg-white transform transition-all ${
              isOpen ? "rotate-45 mb-[-5px]" : "rotate-0"
            }`}
          ></div>

          <div
            className={`w-6 h-0.5 bg-black dark:bg-white transform transition-all ${
              isOpen ? "-rotate-45" : "rotate-0"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black dark:bg-white transform transition-all ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>
        <ul
          className={`bg-indigo-500 dark:bg-indigo-900 dark:text-gray-100 absolute top-20 duration-1000 ease-in left-0 w-full p-10 rounded-b-3xl space-y-6 text-white text-center ${
            isOpen ? "" : "hidden"
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
