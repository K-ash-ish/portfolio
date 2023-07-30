"use client";
import { useState } from "react";
import { motion } from "../lib/framer";
import Image from "next/image";
import { projects } from "../../constant";
function ProjectCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, about, tech, github, link, image } = props;
  console.log(link);
  return (
    <motion.div
      layout
      className={`border-gray-100 border-2 flex flex-col items-center justify-evenly my-4  ${
        isOpen ? "w-[600px] h-[600px]" : "w-80 h-80"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image
        unoptimized
        alt="project-image"
        src={image}
        width={200}
        height={200}
        className={`${isOpen ? "w-[400px] h-[400px]" : ""} rounded-lg`}
      />
      <h1>{title}</h1>
      {isOpen && (
        <div className="flex flex-col">
          <p>{about}</p>
          <div className=" flex list-none justify-center">
            {tech.map((data, index) => {
              return (
                <li
                  key={index}
                  className="border-2 border-rose-500 text-xs rounded-lg mx-1 p-1"
                >
                  {data}
                </li>
              );
            })}
          </div>
          <div className="flex list-none justify-center">
            <a
              className="underline underline-offset-2 decoration-blue-500 text-sm mx-1 "
              target="_blank"
              href={link.github}
            >
              Github
            </a>
            <a
              target="_blank"
              href={link.live}
              className="underline underline-offset-2 decoration-blue-500 text-sm mx-1 "
            >
              Live Link
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="flex items-center justify-around flex-wrap min-h-[90%] border-2">
      {/* <h1 className="text-xl">Projects</h1> */}
      {projects.map((project) => {
        return <ProjectCard key={project.title} {...project} />;
      })}
    </div>
  );
}
