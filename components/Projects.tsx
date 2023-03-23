import React from "react";
import {motion} from "framer-motion";
import { Project } from "@/typings";
import { urlfor } from "@/sanity";

type Props = {
  projects:Project[]
};

function Projects({projects}: Props) {
  return (
    <motion.div
      
    initial={{opacity: 0}} 
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}

      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto 
    items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[19px] text-gray-500 text-2xl">
        Projects
      </h3>

  
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-thin scrollbar-track-gray-400/20% scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
     
     initial={{
        y : -300,
        opacity: 0
     }}
     transition={{duration: 1.2}}
     whileInView={{opacity:1 , y:0}}
     viewport={{once:true}}
    



              src={urlfor(project?.image).url()}
              height="250px"
              width="250px"
              alt=""
              className=" mt-16 rounded-lg md:w-96 md:h-96"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h3 className="text-2xl font-semibold text-center mb-10">
                {" "}
                <span className=" underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:{" "}
                </span> <br />
                <span className="text-xl">
                {project?.title}
                </span>
              </h3>
                   <div className="flex items-center space-x-2 justify-center">
                   {project.technologies.map((technology)=>(
                    <img  className="h-7 w-7 rounded-full"
                     key={technology._id} src={urlfor(technology.image).url()} alt="" />
                   ))}
                   </div>
                 
              <p className="text-sm w-96 text-center md:text-left ">{project.summary}</p>

            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12 ">
        {" "}
      </div>
    </motion.div>
  );
}

export default Projects;
