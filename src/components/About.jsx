import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#D2FF72] rounded-t-3xl text-zinc-900">
      <h1 className="text-[3vw] leading-[3.5vw] tracking-tight mb-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui.
        Numquam similique earum unde eos distinctio totam a quas enim incidunt
        labore laboriosam, inventore quos quibusdam iste sed at necessitatibus
        voluptas! Inventore vero laborum esse soluta, assumenda aut iusto
        molestias.
      </h1>
      <div className="w-full flex gap-5 pt-10 mt-20 border-t-[1px] border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach</h1>
          <button className="flex gap-10 items-center uppercase px-10 py-5 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-400 rounded-xl"></div>
      </div>
    </div>
  );
};

export default About;
