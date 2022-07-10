import React, { useState } from "react";
import { motion } from "framer-motion";
import defaultlarge from "../Assets/default-large.svg";
import hoverlarge from "../Assets/hover-large.svg";
import decentralizedcloud from "../Assets/decentralized-cloud.svg";

export const Right = (props) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 2,
        },
      }}
    >
      <div className="flex flex-col items-center justify-center h-96 pt-16">
        <img src={decentralizedcloud} alt="decentralized-cloud" />
        <div className="flex flex-col space-y-5">
          <div
            className="cursor-pointer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={props.login}
          >
            {isHovering ? (
              <img src={hoverlarge} alt="logo" />
            ) : (
              <img src={defaultlarge} alt="logo" />
            )}
          </div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="ring-1 ring-black-200 bg-white w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#39489D] text-blue-900"
                name=""
                id=""
              />
            </div>
            <div className="">
              <input
                type="Password"
                placeholder="Password"
                className="ring-1 ring-black-200 bg-white w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#39489D] text-blue-900"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="inline-block border-2 border-[#39489D] py-2 px-6 rounded-lg text-[#39489D] uppercase text-sm self-center hover:shadow hover:bg-[#39489D] hover:text-white font-bold hover:cursor-pointer">
            <div>Login</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
