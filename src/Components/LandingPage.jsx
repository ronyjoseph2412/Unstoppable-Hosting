import React from "react";
import cloudstorage from "../Assets/cloud-storage.png";
import cloudstorage1 from "../Assets/cloud-storage1.png";
import web3 from "../Assets/web3.png";
import { motion } from "framer-motion";

export const LandingPage = (props) => {
  return (
    <div className="flex flex-col px-16">
      <div className="flex flex-row justify-between pt-8 pb-14 text-xl">
        <div></div>
        <div className="flex flex-row space-x-4">
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Contact us</div>
        </div>
        <div>
          <div className="flex flex-row space-x-4">
            <div className="bg-black text-white px-6 py-2 w-fit rounded-xl">
              My Account
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        {/* Right */}
        <div className="flex flex-col justify-between mt-14">
          <div className="text-green-700 text-4xl">
            Find your<br></br> best Cloud Storage
          </div>
          <div
            className="bg-[#F71E1E] hover:bg-[#8F1617] text-white px-6 py-2 w-fit rounded-xl hover:cursor-pointer"
            onClick={props.logout}
          >
            Logout
          </div>
        </div>

        <div className="col-span-2 -ml-20">
          <motion.div
            className="flex flex-row justify-around items-stretch"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.2, delayChildren: 1 },
            }}
          >
            {/* Middle */}
            <motion.div
              initial={{ y: "-100vh", opacity: 0.7 }}
              animate={{
                y: [-10, 10],
                opacity: 1,
                transition: { yoyo: Infinity, delay: 0.2, duration: 1 },
              }}
            >
              <img src={cloudstorage} className="h-80 w-80 z-0" alt="" />
            </motion.div>
            {/* Left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-end justify-between"
            >
              <motion.div
                className="justify-center flex flex-col items-center"
                initial={{ y: "-100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              >
                <img src={cloudstorage1} className="h-28 w-28" alt="" />
                <div className="text-green-700 text-lg">
                  The most encrypted Cloud Storage Platform
                </div>
              </motion.div>
              <motion.div
                className="justify-center flex flex-col items-center"
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              >
                <img src={web3} className="h-28 w-28" alt="" />
                <div className="text-green-700 text-lg">
                  Comes with Intitutive Software Platform
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
