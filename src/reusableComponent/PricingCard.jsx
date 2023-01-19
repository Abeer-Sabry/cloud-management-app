import React from "react";
import CheckComponent from "./CheckComponent";

const PricingCard = ({ standard, price }) => {
  return (
    <div className="bg-white rounded-lg w-80 shadow-md shadow-slate-300 mr-5 p-3">
      <p className="bg-indigo-500 py-1 rounded-full text-center text-[11px] text-indigo-100 mb-3 w-[100px] uppercase ">
        {standard}
      </p>
      <p className="text-xl my-5 font-bold">
        <span className="text-4xl"> ${price}</span>
        <sub>/mo</sub>{" "}
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum vero labore possimus rerum
      </p>
      <CheckComponent />
      <CheckComponent />
      <CheckComponent />
      <CheckComponent />
      <CheckComponent />
      <CheckComponent />

      <div className="w-full text-center">
        <button className="bg-indigo-600 px-12 text-white w-full capitalize mt-4">
          get started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
