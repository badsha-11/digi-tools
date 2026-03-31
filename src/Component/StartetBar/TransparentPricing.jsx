import { FaCheck } from "react-icons/fa";

const TransparentPricing = () => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="text-center space-y-2.5 mb-10">
        <h2 className="text-5xl font-extrabold">Simple, Transparent Pricing</h2>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10 justify-center items-center">
        <div className="border border-gray-200 p-6 space-y-2 rounded-xl shadow=xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl  hover:bg-white shadow-xl h-100">
          <h2 className="text-2xl font-bold">Starter</h2>
          <p className="text-[#627382]">Perfect for getting started</p>
          <div className="flex items-center">
            <h2 className="text-5xl font-extrabold">$0</h2>
            <p className="text-[#627382]">/Month</p>
          </div>
          <div>
            <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 text-sm mt-1" />
            <p className="text-[#627382]">Access to 10 free tools</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 text-sm mt-1" />
            <p className="text-[#627382]">Basic templates</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 text-sm mt-1" />
            <p className="text-[#627382]">Community support</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 text-sm mt-1" />
            <p className="text-[#627382]">1 project per month</p>
          </div>
          </div>
          <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] checked:bg-white checked:text-[#9514fa] text-white w-full rounded-full mt-20.5">Get Started Free</button>
        </div>

        <div className="border border-gray-200 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white p-6 space-y-2 rounded-xl shadow=xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl  hover:bg-white shadow-xl h-100">
          <h2 className="text-2xl font-bold">Pro</h2>
          <p className="">Best for professionals</p>
          <div className="flex items-center">
            <h2 className="text-5xl font-extrabold">$29</h2>
            <p className="">/Month</p>
          </div>
          <div>
            <div className="flex items-start gap-2">
            <FaCheck className="text-white text-sm mt-1" />
            <p className="">Access to all premium tools</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-white text-sm mt-1" />
            <p className="">Unlimited templates</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-white text-sm mt-1" />
            <p className="">Priority support</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-white text-sm mt-1" />
            <p className="">Unlimited projects</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-white text-sm mt-1" />
            <p className="">Cloud sync</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-white text-sm mt-1" />
            <p className="">Advanced analytics</p>
          </div>
          </div>
          <button className="btn  bg-white text-[#9514fa] w-full rounded-full mt-9">Get Started Free</button>
        </div>

        <div className="border border-gray-200 p-6 space-y-2 rounded-xl shadow=xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl  hover:bg-white shadow-xl h-100">
          <h2 className="text-2xl font-bold">Enterprise</h2>
          <p className="text-[#627382]">For teams and businesses</p>
          <div className="flex items-center">
            <h2 className="text-5xl font-extrabold">$99</h2>
            <p className="text-[#627382]">/Month</p>
          </div>
          <div>
            <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 text-sm mt-1" />
            <p className="text-[#627382]">Everything in Pro</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 text-sm mt-1" />
            <p className="text-[#627382]">Team collaboration</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 text-sm mt-1" />
            <p className="text-[#627382]">Custom integrations</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 text-sm mt-1" />
            <p className="text-[#627382]">Dedicated support</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 text-sm mt-1" />
            <p className="text-[#627382]">SLA guarantee</p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 text-sm mt-1" />
            <p className="text-[#627382]">Custom branding</p>
          </div>
          </div>
          <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] checked:bg-white checked:text-[#9514fa] text-white w-full rounded-full mt-9">Get Started Free</button>
        </div>
      </div>
    </div>
  );
};

export default TransparentPricing;
