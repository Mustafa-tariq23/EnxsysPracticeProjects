import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-700 dark:bg-gray-800">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-8" src="./img/logo.png" alt="" />
            <span className="text-2xl font-bold text-white">PORTFOLIO</span>
          </div>
          <span className="hidden md:block font-medium text-white">
            <ul className="md:flex hidden space-x-10 text-gray-400 font-bold text-sm uppercase">
              <li className="hover:text-gray-300 ease-in duration-150">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-300 ease-in duration-150">
                <Link to="/about">About me</Link>
              </li>
              <li className="hover:text-gray-300 ease-in duration-150">
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:text-gray-300 ease-in duration-150">
                <Link to="/works">Works</Link>
              </li>
              <li className="hover:text-gray-300 ease-in duration-150">
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </span>
          <div className="flex gap-2 px-4">
            <img
              className="w-4 cursor-pointer"
              src="images/facebook.png"
              alt=""
            />
            <img
              className="w-4 cursor-pointer"
              src="images/instagram.png"
              alt=""
            />
            <img
              className="w-4 cursor-pointer"
              src="images/twitter.png"
              alt=""
            />
            <img
              className="w-4 cursor-pointer"
              src="images/linkedin.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer