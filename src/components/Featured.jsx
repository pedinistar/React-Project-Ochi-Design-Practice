import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-14">
        <h1 className="text-7xl font-light tracking-tight">
          Featured Products
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            className="cardcotainer relative w-1/2 h-[80vh] bg-zinc-800"
          >
            <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[12vw] font-semibold uppercase leading-none tracking-tighter text-yellow-300">
              {"Fashion".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full bg-violet-300 rounded-2xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="" alt="" />
            </div>
          </motion.div>
          <motion.div className="cardcotainer relative w-1/2 h-[80vh] bg-zinc-800">
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[12vw] font-semibold uppercase leading-none tracking-tighter text-yellow-300">
              {"Design".split("").map((item, index) => (
                <span key={index} className="inline-block">
                  {item}
                </span>
              ))}
            </h1>
            <div className="card w-full h-full bg-violet-300 rounded-2xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
