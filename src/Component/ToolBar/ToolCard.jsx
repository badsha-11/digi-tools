import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const getTagStyle = (tagType) => {
  switch (tagType) {
    case "best seller":
      return "bg-yellow-200 text-yellow-500 rounded-[50px]";
    case "popular":
      return "bg-blue-200 text-blue-500 rounded-[50px]";
    case "new":
      return "bg-green-200 text-green-500 rounded-[50px]";
    default:
      return "hidden";
  }
};

const ToolCard = ({ tool, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);
  const handleBuyNow = () => {
    setIsBuy(true);
    setCarts([...carts, tool]);
    toast("Item Aded To Cart!")
  };

  return (
    <div className="relative border border-gray-300/50 p-5 rounded-xl space-y-4 
                transition-all duration-300 
                hover:shadow-xl hover:scale-[1.02] hover:border-gray-400">
      <div className="p-2.5 inline-flex rounded-[50px] shadow">{tool.icon}</div>

      <p
        className={`absolute top-1.5 right-1.5 px-2 py-1 rounded text-xs font-semibold ${getTagStyle(tool.tagType)}`}
      >
        {tool.tag}
      </p>

      <h2 className="font-bold text-2xl">{tool.name}</h2>
      <p className="text-[#627382]">{tool.description}</p>

      <p>${tool.price}/Mo</p>

      <div className="space-y-2">
        {tool.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaCheck className="text-green-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleBuyNow}
        className={`w-full py-2.5 rounded-[50px] text-white font-bold 
  bg-linear-to-r ${
    isBuy ? "from-green-400 to-green-600" : "from-[#4f39f6] to-[#9514fa]"
  }`}
      >
        {isBuy ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ToolCard;
