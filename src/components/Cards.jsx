import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-32">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-2xl w-full h-full bg-slate-500 flex items-center justify-center">
          <svg
            width="92"
            height="98"
            viewBox="0 0 168 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.6141 1.6V57H39.5141V50C37.7141 52.4 35.3474 54.3 32.4141 55.7C29.5474 57.0333 26.4141 57.7 23.0141 57.7C18.6807 57.7 14.8474 56.8 11.5141 55C8.18073 53.1333 5.5474 50.4333 3.61406 46.9C1.7474 43.3 0.814063 39.0333 0.814063 34.1V1.6H14.8141V32.1C14.8141 36.5 15.9141 39.9 18.1141 42.3C20.3141 44.6333 23.3141 45.8 27.1141 45.8C30.9807 45.8 34.0141 44.6333 36.2141 42.3C38.4141 39.9 39.5141 36.5 39.5141 32.1V1.6H53.6141ZM80.2273 45.5H104.927V57H64.3273V45.7L88.5273 13.1H64.4273V1.6H104.627V12.9L80.2273 45.5ZM167.267 28.1C167.267 30.1 167.134 31.9 166.867 33.5H126.367C126.701 37.5 128.101 40.6333 130.567 42.9C133.034 45.1667 136.067 46.3 139.667 46.3C144.867 46.3 148.567 44.0667 150.767 39.6H165.867C164.267 44.9333 161.201 49.3333 156.667 52.8C152.134 56.2 146.567 57.9 139.967 57.9C134.634 57.9 129.834 56.7333 125.567 54.4C121.367 52 118.067 48.6333 115.667 44.3C113.334 39.9667 112.167 34.9667 112.167 29.3C112.167 23.5667 113.334 18.5333 115.667 14.2C118.001 9.86666 121.267 6.53333 125.467 4.2C129.667 1.86667 134.501 0.699998 139.967 0.699998C145.234 0.699998 149.934 1.83333 154.067 4.1C158.267 6.36666 161.501 9.6 163.767 13.8C166.101 17.9333 167.267 22.7 167.267 28.1ZM152.767 24.1C152.701 20.5 151.401 17.6333 148.867 15.5C146.334 13.3 143.234 12.2 139.567 12.2C136.101 12.2 133.167 13.2667 130.767 15.4C128.434 17.4667 127.001 20.3667 126.467 24.1H152.767Z"
              fill="#E1E1E1"
            />
          </svg>
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 transition-all hover:bg-slate-950 hover:text-slate-100">
            &copy;2019
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative rounded-2xl w-1/2 h-full bg-slate-900">
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 transition-all hover:bg-slate-950 hover:text-slate-100">
            &copy;2021
          </button>
        </div>
        <div className="card relative rounded-2xl w-1/2 h-full bg-slate-900">
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 transition-all hover:bg-slate-950 hover:text-slate-100">
            &copy;2023
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
