import React from "react";
import User from "../../assets/user.png";
const StartetBar = () => {
  return (
    <div className="bg-[#f9fafc] py-20">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-4xl font-extrabold">Get Started in 3 Steps</h2>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center items-center">
          <div className="relative py-20 border border-gray-200 px-6 rounded-xl flex flex-col items-center space-y-3.5">
            <img src={User} alt="User icon" className=" h-20 w-20 bg-" />

            <p
              className="absolute top-5 right-5 flex items-center justify-center 
                  w-10 h-10 rounded-full text-white font-bold
                  bg-linear-to-r from-[#4f39f6] to-[#9514fa]"
            >
              01
            </p>

            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartetBar;
