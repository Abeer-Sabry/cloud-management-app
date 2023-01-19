import React from "react";
// icon
import { HiOutlineArrowSmRight } from "react-icons/hi";

const SupportCard = ({ icon, title, paragraph }) => {
  return (
    <div className="bg-white  rounded-lg relative w-full m-5 pt-5 shadow-lg shadow-slate-300/50">
      <span
        className="bg-indigo-600 p-2 w-8 h-8 
      rounded-md text-white absolute top-[-15px] left-5"
      >
        {icon}
      </span>
      <h3 className="capitalize my-3 pl-5 font-semibold">{title}</h3>
      <p className="pl-5 pr-2 my-3 text-sm ">{paragraph}</p>
      <p className="text-indigo-600 flex items-center bg-slate-100 py-3 capitalize pl-5 mt-5 ">
        <span className=" capitalize text-[13px] mr-2 font-semibold">contact us</span>
        <HiOutlineArrowSmRight size={15} />
      </p>
    </div>
  );
};

export default SupportCard;
