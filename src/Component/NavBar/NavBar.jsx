import React from "react";
import { CiShoppingCart } from "react-icons/ci";
const NavBar = ({ carts }) => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            {/* responcive nav */}
            <ul
              tabIndex="-1"
              className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent text-2xl font-bold">
            DigiTools
          </a>
        </div>
        {/* big scring nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1">
            <li>
              <a href="#" className="group relative rounded-lg overflow-hidden">
                <span className="absolute inset-0 bg-linear-to-r from-[#4f39f6] to-[#9514fa] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Products
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="group relative rounded-lg overflow-hidden">
                <span className="absolute inset-0 bg-linear-to-r from-[#4f39f6] to-[#9514fa] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Features
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="group relative rounded-lg overflow-hidden">
                <span className="absolute inset-0 bg-linear-to-r from-[#4f39f6] to-[#9514fa] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Pricing
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="group relative rounded-lg overflow-hidden">
                <span className="absolute inset-0 bg-linear-to-r from-[#4f39f6] to-[#9514fa] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Testimonials
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="group relative rounded-lg overflow-hidden">
                <span className="absolute inset-0 bg-linear-to-r from-[#4f39f6] to-[#9514fa] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  FAQ
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* nav btn */}
        <div className="navbar-end gap-1.5">
          <div className="relative">
            <CiShoppingCart className="btn btn-ghost hover:text-red-500 p-2.5 rounded-[50px]" />

            {/* badge */}
            {carts.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {carts.length}
              </span>
            )}
          </div>
          <p className="hover:text-red-500">
            <a href="#">Login</a>
          </p>
          <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-[50px]">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
