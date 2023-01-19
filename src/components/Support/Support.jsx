import React from "react";
// reusable
import SupportCard from "../../reusableComponent/SupportCard";
// icons
import { FiPhone } from "react-icons/fi";
import { HiSupport, HiChip } from "react-icons/hi";
import CoverSupport from "../../assets/support.jpg";

const Support = () => {
  return (
    <>
      <div className="w-full bg-gray-900/90 absolute">
        <img
          src={CoverSupport}
          alt=""
          className="w-full h-[500px] object-cover mix-blend-overlay"
        />
      </div>
      {/* <div className="" style={{ backgroundImage: url(${CoverSupport}) }}></div> */}

      <div className="relative px-[50px] text-center">
        <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center font-semibold">
          Support
        </h2>
        <h3 className="text-5xl font-bold py-6 text-center text-indigo-400 capitalize">
          Finding the right team
        </h3>
        <p className="py-4 text-md text-slate-300 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione
          error tenetur, voluptates architecto possimus <br /> ad! Omnis minima ea quidem quisquam
          unde beatae, minus illo et cum vel?
        </p>
      </div>

      <section>
        <div className="flex flex-col justify-between md:flex-row  w-full ">
          <SupportCard
            icon={<FiPhone />}
            title={"Sales"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem."
            }
          />
          <SupportCard
            icon={<HiSupport />}
            title={"Technical Support"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem."
            }
          />
          <SupportCard
            icon={<HiChip />}
            title={"Media Inquiries"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem."
            }
          />
        </div>
      </section>
    </>
  );
};

export default Support;
