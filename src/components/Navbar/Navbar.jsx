import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const onClickHandler = () => {
    setShow(!show);
  };

  return (
    <div className="w-screen h-[80px] z-10  bg-zinc-200  fixed drop-shadow-lg top-0 left-0 ">
      <div className="px-5 w-full h-full flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl mr-4 sm:text-3xl uppercase">Brand.</h1>
          <ul className="hidden  md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-2">
          <button className="border-none bg-transparent text-black">signIn</button>
          <button className="ml-2">signOut</button>
        </div>
        {/* Responsive */}
        <div className="md:hidden" onClick={onClickHandler}>
          {show ? <GrFormClose size="25px" /> : <MdMenu size="25px" />}
        </div>
      </div>
      {show && (
        <ul className="absolute px-8 w-full bg-zinc-200 py-3">
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-zinc-300 w-full">Platform</li>
          <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
          <div className="mt-4 flex flex-col">
            <button className="mb-3 bg-transparent text-indigo-600 border-indigo-600">
              singIn
            </button>
            <button>singOut</button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
