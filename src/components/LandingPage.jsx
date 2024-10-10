import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.3"
      className="w-full h-screen bg-zinc-900 pt-2"
    >
      <div className="textstructure mt-52 px-20">
        {["Fashion", "Is Our", "Passion"].map((elem, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "11vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                    }}
                    className="w-[11vw] h-[6vw] bg-[#FF7315] mr-8 rounded-lg"
                  ></motion.div>
                )}
                <h1 className="uppercase leading-none font-semibold tracking-tighter text-[7.4vw]">
                  {elem}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex items-center justify-between py-5 px-20">
        {[
          "For Public and Private Fashion Houses",
          "From First Pitch To IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tighter leading-none"
          >
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full cursor-pointer font-light text-sm uppercase transition-all hover:bg-[#eeee] hover:text-black">
            Start The Project
          </div>
          <div className="flex items-center justify-center w-10 h-10 border-[1px] border-zinc-400  rounded-full cursor-pointer transition-all hover:bg-[#eeee] hover:text-zinc-800">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
