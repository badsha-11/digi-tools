import React from "react";
import User from "../../assets/user.png";
import Package from "../../assets/package.png";
import Rocket from "../../assets/rocket.png";

const StartetBar = () => {
  return (
    <div className="bg-[#f9fafc] py-20">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-4xl font-extrabold">Get Started in 3 Steps</h2>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center items-center mt-10">
          <div
            className="group relative py-20 border border-gray-200 px-6 rounded-xl flex flex-col items-center space-y-3.5 
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent hover:bg-white shadow-xl"
          >
            <img
              src={User}
              alt="User icon"
              className=" h-20 w-20 bg-violet-200 rounded-full p-2"
            />

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

          <div
            className="group relative py-20 border border-gray-200 px-6 rounded-xl flex flex-col items-center space-y-3.5 
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent hover:bg-white shadow-xl"
          >
            <img
              src={Package}
              alt="Package icon"
              className=" h-20 w-20 bg-violet-200 rounded-full p-2"
            />

            <p
              className="absolute top-5 right-5 flex items-center justify-center 
                  w-10 h-10 rounded-full text-white font-bold
                  bg-linear-to-r from-[#4f39f6] to-[#9514fa]"
            >
              02
            </p>

            <h2 className="text-2xl font-bold">Choose Products</h2>
            <p className="text-[#627382]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

         <div
            className="group relative py-20 border border-gray-200 px-6 rounded-xl flex flex-col items-center space-y-3.5 
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent hover:bg-white shadow-xl"
          >
            <div className="h-20 w-20 bg-violet-200 rounded-full flex items-center justify-center">
              <img
                src={Rocket}
                alt="Package icon"
                className="h-14 w-14 object-contain"
              />
            </div>

            <p
              className="absolute top-5 right-5 flex items-center justify-center 
                  w-10 h-10 rounded-full text-white font-bold
                  bg-linear-to-r from-[#4f39f6] to-[#9514fa]"
            >
              03
            </p>

            <h2 className="text-2xl font-bold">Start Creating</h2>
            <p className="text-[#627382]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartetBar;
