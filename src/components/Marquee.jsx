import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-20 bg-[#387478] rounded-t-3xl"
    >
      <div className="text border-t-[0.5px] border-b-[0.5px] border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[15vw] font-semibold uppercase pt-10 pb-10 -mt-[3vw] -mb-[3vw] leading-none pr-10"
        >
          THE UZE FASHION HOUSE
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[15vw] font-semibold uppercase pt-10 pb-10 -mt-[3vw] -mb-[3vw] leading-none pr-10"
        >
          THE UZE FASHION HOUSE
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
