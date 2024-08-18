import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "20px",
      }}
      className={`bg-zinc-700 p-4 rounded-xl ${width} min-h-[24rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Get In Touch</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Lets go get it there</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-7xl font-bold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full mt-6 py-2 px-5 border-[1px] border-zinc-50">
              Contact US
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-400 font-medium ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
