import React from "react";
import PricingCard from "../../reusableComponent/PricingCard";

const Pricing = () => {
  return (
    <>
      <div className="'w-full text-white ">
        <div className="w-full h-[700px] bg-indigo-900  absolute  mix-blend-overlay "></div>

        <div className="text-center py-8 text-slate-300 p-[20px] font-semibold">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-4xl font-bold text-white py-8">The right price for your research.</h3>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit <br /> Quia laudantium odio
            ullam inventore aliquid ipsum quasi tenetur velit voluptatum iste.
          </p>
        </div>
      </div>

      <section>
        <div className="flex flex-col justify-center md:flex-row  relative">
          <PricingCard standard={"standard"} price={49} />
          <PricingCard standard={"EnterPrise"} price={89} />
        </div>
      </section>
    </>
  );
};

export default Pricing;
