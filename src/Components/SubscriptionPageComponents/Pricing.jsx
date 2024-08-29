import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto mb-24 px-5">
      <h2 className="text-5xl font-semibold text-gray-900 text-center">
        Pricing
      </h2>
      <div className="flex flex-col md:flex-row gap-1 mt-16">
        {/* 1st card  */}

        <div className="text-white bg-gray-900 px-8 pt-3 pb-8 space-y-4 mb-3 rounded-lg">
          <h5 className="text-sm font-semibold">Annual</h5>
          <div className="flex gap-4">
            <h2 className="text-4xl font-extrabold">$180</h2>
            <div className="font-normal">
              <p>USD/Year</p>
              <p>per year, billed annually</p>
            </div>
          </div>
          <button className="btn bg-white text-primary w-full font-medium">Buy Now</button>
          <p className="flex items-center gap-3 pt-8">
            {" "}
            <FaCheck className="text-primary" />
            <span className="text-sm py-5 border-t">
              Install on up to 2 computers at a time.
            </span>
          </p>
          <p className="flex items-center gap-3">
            {" "}
            <FaCheck className="text-primary" />
            <span className="text-sm py-5 border-t ">
              Get Access to Every Pack + Future Packs
            </span>
          </p>
          <p className="flex items-center gap-3">
            {" "}
            <FaCheck className="text-primary" />
            <span className="text-sm py-5 border-t ">
              *Currency will update at checkout based on your location.
            </span>
          </p>
        </div>

        {/* 2nd card  */}

        <div className="text-gray-900 border-gray-200 border px-8 pt-12 pb-8 space-y-4 mb-3 rounded-lg">
          <h5 className="text-sm font-semibold text-primary tracking-widest">Monthly</h5>
          <div className="flex gap-4">
            <h2 className="text-4xl font-extrabold text-primary">$180</h2>
            <div className="font-normal">
              <p>USD/Year</p>
              <p>per year, billed annually</p>
            </div>
          </div>
          <button className="btn bg-primary text-white w-full font-medium border-none">Buy Now</button>
          <p className="flex items-center gap-3 pt-8">
            {" "}
            <FaCheck className="text-primary" />
            <span className="text-sm py-5 border-t">
              Install on up to 2 computers at a time.
            </span>
          </p>
          <p className="flex items-center gap-3">
            {" "}
            <FaCheck className="text-primary" />
            <span className="text-sm py-5 border-t ">
              Get Access to Every Pack + Future Packs
            </span>
          </p>
          <p className="flex items-center gap-3">
            {" "}
            <FaCheck className="text-primary" />
            <span className="text-sm py-5 border-t ">
              *Currency will update at checkout based on your location.
            </span>
          </p>
        </div>

        {/* 3rd card  */}

        <div className="text-white bg-primary  px-8 pt-12 pb-8 space-y-4 mb-3 rounded-lg">
          <h5 className="text-sm font-semibold text-white">40  Pack Bundle</h5>
          <div className="flex gap-4">
            <h2 className="text-4xl font-extrabold">$675</h2>
            <div className="font-normal">
              <p>USD</p>
              <p>One-Time Payment</p>
            </div>
          </div>
          <button className="btn bg-white text-primary w-full font-medium">Buy Now</button>
          <p className="flex items-center gap-3 pt-8">
            {" "}
            <FaCheck className="text-white" />
            <span className="text-sm py-5 border-t">
              Install on up to 2 computers at a time.
            </span>
          </p>
          <p className="flex items-center gap-3">
            {" "}
            <FaCheck className="text-white" />
            <span className="text-sm py-5 border-t ">
              Get Access to Every Pack + Future Packs
            </span>
          </p>
          <p className="flex items-center gap-3">
            {" "}
            <FaCheck className="text-white" />
            <span className="text-sm py-5 border-t ">
              *Currency will update at checkout based on your location.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
