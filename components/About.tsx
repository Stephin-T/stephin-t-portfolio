import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlfor } from "@/sanity";

type Props = {
  pageInfo: PageInfo
};

function About({pageInfo}: Props) {
  return (
    <motion.div 
    
    initial={{opacity: 0}} 
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[19px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src={urlfor(pageInfo?.profilePic).url()}
        className="-mb-48  flex-shrink-0  w-56 h-56 rounded-full object-cover md:rounded-lg  md:w-16 md:h-16 xl:w-[450px] xl:h-[350px] xl:mt-[10px] mt-[150px] "
      />
      <div className="space-y-10 px-0 md:mt-1 text-sm md:px-10 mt-[170px] xl:mt-[220px] ">
        <h4 className="text-2xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base ">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
