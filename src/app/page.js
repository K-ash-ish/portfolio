import Image from "next/image";
import Skills from "./components/Skills";

export default function Home({ children }) {
  const skills = [
    "html",
    "css",
    "javascript",
    "reactjs",
    "git",
    "firebase",
    "tailwindcss",
    "redux toolkit",
  ];
  return (
    <main className=" h-[90%] border-2 flex items-center justify-evenly">
      <div className="flex flex-col items-center justify-evenly w-1/2 h-5/6 ">
        <Image
          src="/profile-pic.png"
          width={130}
          height={200}
          className="rounded-full w-auto h-auto"
          alt="img"
        />
        <div className="text-center ">
          <h1 className="text-5xl m-4">Hi, I'm Kashish</h1>
          <p className="text-5xl m-4">A Web Developer</p>
        </div>
      </div>
      <div className="w-1/2    h-5/6 flex flex-col justify-evenly items-center">
        {/* <p className="text-xl px-4  ">
          I'm a ReactJS developer. Currently exploring new opportunities.
          Learning and growing everyday. Let's connect and build something
          together.
        </p> */}
        <div className="flex uppercase flex-row  w-1/2 h-1/2 items-center justify-center flex-wrap">
          {/* moving part animation with skills */}
          {skills.map((skill) => {
            console.log(skill);
            return <Skills skill={skill} />;
          })}
        </div>
      </div>
    </main>
  );
}
