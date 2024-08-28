import Button from "./components/button";
import Navigation from "./components/navigation";
import { FaNodeJs } from "react-icons/fa";
import { SiMinecraft } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen text-center pt-5 md:text-left md:p-5">
        <Navigation />
        <div className="flex justify-center w-full text-center mt-32 lg:justify-start lg:pl-10 lg:text-left relative">
          <div className="text-3xl font-bold text-white md:text-4xl relative z-10">
            <div className="absolute h-full right-20 w-full hidden lg:block">
              <div className="w-96 float-end animate-jump animate-infinite animate-duration-[8000ms]">
                <img className="w-full" src="/slogo.webp" />
              </div>
            </div>
            <div className="w-full flex justify-center lg:justify-start">
              <img
                src="/slogo.webp"
                className="w-16 lg:w-12 md:w-32"
                alt="slogo"
              />
            </div>
            Powerful servers for cheap.
            <h2 className="text-xl text-gray-300 md:text-2xl">
              Start now for free! No catches.
            </h2>
            <div className="w-full flex justify-center lg:justify-start">
              <div className="text-lg w-3/4 mt-5 lg:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, accusamus hic cupiditate dicta fuga numquam
                  inventore a. Sapiente cumque perspiciatis cum a quis sunt illo
                  quos incidunt vitae blanditiis! Nemo?
                </p>
                <div className="fmax-w-96 flex justify-center space-x-5 mt-5 lg:justify-start">
                  <Button
                    className="px-5 py-2 w-48 rounded-md transition-all duration-500 bg-purple-500 opacity-85 hover:outline hover:outline-1 hover:scale-105 hover:opacity-100 text-lg"
                    Content="Get Started"
                  />
                  <Button
                    className="px-5 py-2 w-48 rounded-md transition-all duration-500 bg-blue-500 opacity-85 hover:outline hover:outline-1 hover:scale-105  hover:opacity-100 text-lg "
                    Content="Support"
                  />
                </div>
                <div className="flex h-16 items-center space-x-5 mt-2 w-full justify-center lg:justify-start">
                  <FaNodeJs className="h-8 w-8 opacity-50 transition-all duration-300 hover:cursor-pointer hover:opacity-80" />
                  <FaPython className="h-8 w-8 opacity-50 transition-all duration-300 hover:cursor-pointer hover:opacity-80" />
                  <FaServer className="h-8 w-8 opacity-50 transition-all duration-300 hover:cursor-pointer hover:opacity-80" />
                  <SiMinecraft className="h-24 w-24 opacity-50 transition-all duration-300 hover:cursor-pointer hover:opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold mt-24 text-3xl w-full flex justify-center text-white lg:justify-start lg:pl-10 lg:text-xl">
          <h1 className="max-w-2xl">Enjoy powerful performance with up to 300GB of storage, 32GB of RAM, and 16 vCores, designed to meet all your needs</h1>
          <div></div>
        </div>
      </main>
      <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </>
  );
}
