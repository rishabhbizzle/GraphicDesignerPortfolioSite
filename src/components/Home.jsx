import React from "react";
import icon from "../assets/icon.png";
import Typed from "react-typed";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full md:flex-row">
        <div className="hidden md:flex justify-center items-center">
          <img className="" src={icon} alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="md:mb-[-10px] text-red-600">Hi, my name is</p>

          <div className="items-center">
            <h1 className="text-5xl sm:text-7xl font-bold text-white">
              Sushant Tomar
            </h1>
            <div className="flex flex-row">
              <h2 className="text-2xl sm:text-5xl font-bold text-gray-400">
                I'm a
              </h2>
              <Typed
                className="pl-2 md:pl-3 lg:pl-4 text-2xl sm:text-5xl font-bold text-gray-400 items-center"
                strings={["Graphic Designer", "Video Editor"]}
                typeSpeed={199}
                backSpeed={200}
                loop
              />
            </div>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I’m a Graphic Designer & Video Editor. Looking to bring my skills and expertise to a dynamic and innovative team where I can contribute to the creation of impactful and effective designs.
            </p>
            <div>
              <Link to="about" smooth={true} offset={50} duration={500}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
                  Know More
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
