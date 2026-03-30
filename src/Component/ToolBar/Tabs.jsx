

const Tabs = ({setActiveTab,carts}) => {
  
  
  return (
    <div>
      <div className="text-center mt-18 mb-3.5">
        <h2 className="text-4xl font-extrabold">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="mb-10 mt-5">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center bg-transparent shadow-none">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-[50px] w-30 
    checked:bg-linear-to-r checked:from-[#4f39f6] checked:to-[#9514fa] checked:text-white"
            aria-label="Products"
            defaultChecked
            onClick={() => setActiveTab("Products")}
          />

          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-[50px] w-30 
    checked:bg-linear-to-r checked:from-[#4f39f6] checked:to-[#9514fa] checked:text-white"
            aria-label={`Cart (${carts.length})`}
            onClick={() => setActiveTab("Cart")}
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
