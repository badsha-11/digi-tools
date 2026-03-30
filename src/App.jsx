import { Suspense } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";

import NavBar from "./Component/NavBar/NavBar";
import ToolBar from "./Component/ToolBar/ToolBar";

const getTools = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const toolsPromise = getTools();
  return (
    <>
      <NavBar />
      <Banner />
      <Suspense
        fallback={
          <div class="flex items-center justify-center h-screen bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
            <div class="relative">
              <div class="w-14 h-14 border-4 border-white/30 rounded-full"></div>
              <div class="absolute top-0 left-0 w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        }
      >
        <ToolBar toolsPromise={toolsPromise} />
      </Suspense>
    </>
  );
}

export default App;
