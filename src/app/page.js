import Image from "next/image";
import Skills from "./components/Skills";

export default function Home({ children }) {
  return (
    <main className=" h-[90%] border-2 flex items-center justify-evenly">
      <div className="flex flex-col items-center justify-evenly w-1/2 h-5/6 ">
        <Image
          src="/profile-pic.png"
          width={150}
          height={200}
          className="rounded-full "
        />
        <div className="text-center ">
          <h1 className="text-5xl m-4">Hi, I'm Kashish</h1>
          <p className="text-5xl m-4">A Web Developer</p>
        </div>
      </div>
      <div className="w-1/2 text-center capitalize border-2 h-5/6 flex flex-col justify-evenly items-center">
        <div className="flex flex-row border-2 w-1/4 flex-wrap">
          {/* moving part animation with skills */}
          <Skills />
          <p>html</p>
          <p>CSS</p>
          <p>js</p>
          <p>reactjs</p>
          <p>git</p>
          <p>github</p>
          <p>firebase</p>
        </div>
      </div>
    </main>
  );
}
