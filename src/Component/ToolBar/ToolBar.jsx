import React, { use } from "react";
import ToolCard from "./ToolCard";

const ToolBar = ({ toolsPromise }) => {
  const tools = use(toolsPromise);
  
  return (
    <div className="w-11/12 mx-auto my-28">
      <div className="text-center mb-3.5">
        <h2 className="text-4xl font-extrabold">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
            tools.map(tool => (
                <ToolCard tool={tool}/>
            ))
        }
      </div>
    </div>
  );
};

export default ToolBar;
