import React from "react";
// Import gulo kheyal korun, fa6 theke X ebong Facebook nile design ekrokom thakbe
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="w-11/12 mx-auto ">
        {/* top */}
        <div className="grid justify-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white pt-28 pb-10">
          <div className=" ">
            <h2 className="text-2xl font-bold">DigiTools</h2>
            <p className="text-[#627382]">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>
          
          <div>
            <ul>
              <li className="font-bold text-xl"><a href="">Product</a></li>
              <li className="text-[#627382]"><a href="">Features</a></li>
              <li className="text-[#627382]"><a href="">Pricing</a></li>
              <li className="text-[#627382]"><a href="">Templates</a></li>
              <li className="text-[#627382]"><a href="">Integrations</a></li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="font-bold text-xl"><a href="">Company</a></li>
              <li className="text-[#627382]"><a href="">About</a></li>
              <li className="text-[#627382]"><a href="">Blog</a></li>
              <li className="text-[#627382]"><a href="">Careers</a></li>
              <li className="text-[#627382]"><a href="">Press</a></li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="font-bold text-xl"><a href="">Resources</a></li>
              <li className="text-[#627382]"><a href="">Documentation</a></li>
              <li className="text-[#627382]"><a href="">Help Center</a></li>
              <li className="text-[#627382]"><a href="">Community</a></li>
              <li className="text-[#627382]"><a href="">Contact</a></li>
            </ul>
          </div>

          {/* Social Links Section - Ekhane change kora hoyeche */}
          <div>
            <h2 className="font-bold text-xl mb-4">Social Links</h2>
            <div className="flex gap-4">
                {/* Instagram */}
                <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
                    <FaInstagram size={20} />
                </a>
                
                {/* Facebook */}
                <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
                    <FaFacebook size={20} />
                </a>

                {/* X (Twitter) */}
                <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
                    <FaXTwitter size={20} />
                </a>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-gray-700 py-6 text-center text-[#627382] flex justify-between">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-9">
                <p>Privacy Policy </p>
                <p>Terms of Service  </p>
                <p>Cookies </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;