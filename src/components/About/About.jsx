import React from "react";
import PercentBox from "../../reusableComponent/PercentBox";

const About = () => {
  return (
    <section>
      <div className="flex flex-col justify-center text-center ">
        <h2 className="font-bold capitalize text-4xl mb-2">
          Trusted by developers across
          <br /> the world
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Cumque asperiores earum
          placeat veritatis dignissimos itaque.
        </p>
        <div className="flex flex-col justify-center  md:flex-row ">
          <PercentBox percent={"100%"} category={"completion"} />
          <PercentBox percent={"24/7"} category={"delivery"} />
          <PercentBox percent={"100k"} category={"transaction"} />
        </div>
      </div>
    </section>
  );
};

export default About;
