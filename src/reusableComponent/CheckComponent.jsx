import React from "react";
import { BsCheck } from "react-icons/bs";

const CheckComponent = () => {
  return (
    <div className="flex mb-1">
      <span className="text-lime-600">
        <BsCheck size={23} />
      </span>
      <p>Lorem, ipsum dolor</p>
    </div>
  );
};

export default CheckComponent;
