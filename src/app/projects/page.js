"use client";
import { useState } from "react";
import { motion } from "../lib/framer";
import Image from "next/image";
import Link from "next/link";

function ProjectCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      className={`border-gray-100 border-2 flex flex-col items-center justify-evenly my-4  ${
        isOpen ? "w-[600px] h-[600px]" : "w-80 h-80"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image
        unoptimized
        src="/yourpoll.png"
        width={200}
        height={200}
        className={`${isOpen ? "w-[400px] h-[400px]" : ""}`}
      />
      <h1>Project Title</h1>
      {isOpen && (
        <div className="flex flex-col">
          <p>
            Create an anonymous poll with YourPoll get RealTime vote results.
          </p>
          <div className=" flex list-none justify-center">
            <li className="border-2 border-rose-500 text-xs rounded-lg mx-1 p-1">
              ReactJS
            </li>
            <li className="border-2 border-rose-500 text-xs rounded-lg mx-1 p-1">
              TailwindCSS
            </li>
            <li className="border-2 border-rose-500 text-xs rounded-lg mx-1 p-1">
              Firebase
            </li>
          </div>
          <div className="flex list-none justify-center">
            <a
              className="underline underline-offset-2 decoration-blue-500 text-sm mx-1 "
              target="_blank"
              href="https://github.com/K-ash-ish/your-poll"
            >
              Github
            </a>
            <li className="underline underline-offset-2 decoration-blue-500 text-sm mx-1 ">
              Live Link
            </li>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const projects = [];

  return (
    <div className="flex items-center justify-around flex-wrap h-[90%] border-2">
      {/* <h1 className="text-xl">Projects</h1> */}
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
