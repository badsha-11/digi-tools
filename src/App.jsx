import { Suspense } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Tabs from './Component/ToolBar/Tabs'
import React, { useState } from "react";

import NavBar from "./Component/NavBar/NavBar";
import ToolBar from "./Component/ToolBar/ToolBar";
import Cart from "./Component/Cart/Cart";
import StartetBar from "./Component/StartetBar/StartetBar";
import TransparentPricing from "./Component/StartetBar/TransparentPricing";
import Transform from "./Component/StartetBar/Transform";
import Footer from "./Component/StartetBar/Footer";

const getTools = async () => {
  const res = await fetch("/data.json");
  return res.json();
};


function App() {
  const toolsPromise = getTools();
  
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([])
  
  return (
    <>
      <NavBar carts={carts}/>
      <Banner />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} />

      {activeTab === "Products" && (
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
              <div className="relative">
                <div className="w-14 h-14 border-4 border-white/30 rounded-full"></div>
                <div className="absolute top-0 left-0 w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          }
        >
      <ToolBar toolsPromise={toolsPromise} carts={carts} setCarts={setCarts} />
        </Suspense>
      )}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts} />}


      <StartetBar/>
      <TransparentPricing />
      <Transform/>
      <Footer/>




    </>
  );
}

export default App;
