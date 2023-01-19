import React from "react";
import { BsCheck } from "react-icons/bs";

const NotificationDiv = () => {
  return (
    <div className="flex justify-center  items-start">
      <div className="text-lime-600 ">
        <BsCheck size={22} />
      </div>
      <div>
        <p className="font-semibold">Notification</p>
        <p className="text-[9px] font-medium md:text-[10px]">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime deserunt
          voluptatibus consequatur similique voluptates!
        </p>
      </div>
    </div>
  );
};

export default NotificationDiv;
