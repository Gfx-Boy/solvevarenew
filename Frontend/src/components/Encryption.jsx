"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../motion";
import { ENC, lockmain, locktop } from "../assets/assets";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[1]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[0px] absolute z-[1] w-[50px] h-[20px]">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <img
            src={locktop}
            alt="Lock top"
            width={50}
            height={50}
            className="w-[39px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <img
            src={lockmain}
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[1] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="auto"
          className="w-full h-auto"
          src={ENC}
        />
      </div>
    </div>
  );
};

export default Encryption;
