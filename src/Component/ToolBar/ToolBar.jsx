
import { use } from "react";
import ToolCard from "./ToolCard";


const ToolBar = ({ toolsPromise, carts, setCarts }) => {
  const tools = use(toolsPromise);
  
  
  return (
    <div className="w-11/12 mx-auto my-28">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
        {
            tools.map(tool => (
                <ToolCard key={tool.id} tool={tool} carts={carts} setCarts={setCarts}/>
            ))
        }
      </div>
    </div>
  );
};

export default ToolBar;
