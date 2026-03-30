import React from "react";
import BannerImg from "../../assets/banner.png";
import { GoTriangleRight } from "react-icons/go";
const Banner = () => {
  return (
    <>
      <div className="w-11/12 mx-auto flex flex-col-reverse lg:flex-row gap-16 justify-center items-center my-20">
        <div className="space-y-4">
          <div className="bg-[#e1e7ff] inline-flex justify-center items-center gap-2 p-1.5 rounded-[50px]">
            <div className="flex items-center justify-center  ">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#c5b8f8]">
                <div className="flex items-center justify-center w-3 h-3 rounded-full bg-[#a78ff0]">
                  <div className="w-1 h-1 rounded-full bg-[#7c3aed]"></div>
                </div>
              </div>
            </div>
            <p className="text-sm whitespace-nowrap">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h2 className="font-black text-6xl">
            Supercharge Your <br /> Digital Workflow
          </h2>
          <p className="text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className="flex items-center gap-2.5">
            <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-[50px]">
              Explore Products
            </button>
            <button className="flex items-center gap-1 border rounded-[50px] px-3 py-1.5 text-[15px] font-semibold group hover:border-transparent hover:bg-linear-to-r hover:from-[#4f39f6] hover:to-[#9514fa] hover:text-white transition-all duration-300">
              <GoTriangleRight className="text-[15px]" />
              Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src={BannerImg} alt="BannerImg" />
        </div>
      </div>
      <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-12 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            <div className="text-center md:border-r border-white/30">
              <h2 className="text-4xl md:text-5xl font-bold">50K+</h2>
              <p className="mt-2 text-lg">Active Users</p>
            </div>

            <div className="text-center md:border-r border-white/30 pt-8 md:pt-0">
              <h2 className="text-4xl md:text-5xl font-bold">200+</h2>
              <p className="mt-2 text-lg">Premium Tools</p>
            </div>

            <div className="text-center pt-8 md:pt-0">
              <h2 className="text-4xl md:text-5xl font-bold">4.9</h2>
              <p className="mt-2 text-lg">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
