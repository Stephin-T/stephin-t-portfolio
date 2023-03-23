import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlfor } from "@/sanity";

type Props = {
  experience : Experience;
};

export default function ExperienceCard({experience}: Props) {
  return (
   
      <article
        className="flex flex-col rounded-lg mt-[150px] items-center space-y-2 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] 
        snap-center p-10 hover:opacity-100 opacity-40 bg-[#292929] cursor-pointer transition-opacity duration-200 overflow-hidden"
      >
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-20 h-20 rounded-full mt-3 xl:w-[120px] xl:h-[120px] object-cover object-center r"
          src={urlfor(experience?.companyImage).url()} alt=""
        />
        <div className="px-0 md:px-10">
          <h4 className="text-2xl font-light text-center">COGNIZANT</h4>
          <p className="font-bold text-md mt-1">FULL STACK DEVELOPER</p>
        </div>
        <div className="flex space-x-2 my-1">
          {experience.technologies.map((technology) => (
            <img 
                key={technology._id}
                className="h-7 w-7 rounded-full"
                src={urlfor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} - { " "} {experience.isCurrentlyWorkingHere ? "Present" 
          : new Date(experience.dateEnded).toDateString()}
          </p>

        <ul className=" list-disc space-y-4 ml-5 text-lg">
         {experience.points.map((point, i)=>(
          <li key={1}>{point}</li>
         ))}
        </ul>
      </article>
    
  );
}
