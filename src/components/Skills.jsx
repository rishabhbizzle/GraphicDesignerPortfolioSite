import React, { useState } from "react";
import { MdOutlineComputer } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import Army from "../assets/armyday.png";
import third from '../assets/3d.png'
import second from '../assets/video-editor.png'
import first from '../assets/gd.png'
import Graphics from "./Graphics";
import ThreeD from "./ThreeD";
import Video from "./Video";

function Skills() {
  const [graphic, setGraphic] = useState(false);
  const [video, setVideo] = useState(false);
  const [last, setLast] = useState(true);

  const graphicShow = () => {
    setLast(false);
    setVideo(false);
    setGraphic(true);
  };
  const videoShow = () => {
    setLast(false);
    setVideo(true);
    setGraphic(false);
  };
  const threeDShow = () => {
    setLast(true);
    setVideo(false);
    setGraphic(false);
  };

  return (
    <div className="w-full bg-black px-8" name='skills'>
      <div className="max-w-[1000px] mx-auto">
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-3 py-8">
          <div
            onClick={graphicShow}
            className={
              graphic
                ? "shadow-md scale-105 cursor-pointer shadow-[#040c16] hover:scale-105 duration-500 p-2 md:p-9 bg-red-600"
                : "shadow-md cursor-pointer shadow-[#040c16] hover:scale-105 duration-500 p-2 md:p-9 bg-[#181818]"
            }
          >
                        <img src={first} className="h-16 w-16" alt="" />

            <p className="my-2 text-white font-bold text-2xl">Graphic Design</p>
            <p className="text-gray-200 italic my-3">
              Checkout few of my Graphic Designing work.
            </p>
            {/* <button  className="flex items-center my-2 text-red-600">
              Know More
              <HiArrowNarrowRight className="ml-3 " />
            </button> */}
          </div>
          <div
            onClick={videoShow}
            className={
              video
                ? "shadow-md scale-105 cursor-pointer shadow-[#040c16] hover:scale-105 duration-500 p-2 md:p-9 bg-red-600"
                : "shadow-md shadow-[#040c16] cursor-pointer hover:scale-105 duration-500 p-2 md:p-9 bg-[#181818]"
            }
          >
            <img src={second} className="h-16 w-16" alt="" />

            <p className="my-2 text-white font-bold text-2xl">Video Editing</p>
            <p className="text-gray-200 italic my-3">
              Checkout few of my Video Editing work.
            </p>
            {/* <button  className="flex items-center my-2 text-red-600">
              Know More
              <HiArrowNarrowRight className="ml-3 " />
            </button> */}
          </div>
          <div
            onClick={threeDShow}
            className={
              last
                ? "shadow-md scale-105 cursor-pointer shadow-[#040c16] hover:scale-105 duration-500 p-2 md:p-9 bg-red-600"
                : "shadow-md shadow-[#040c16] cursor-pointer hover:scale-105 duration-500 p-2 md:p-9 bg-[#181818]"
            }
          >
            <img src={third} className="h-16 w-16" alt="" />
            {/* <MdOutlineComputer
              size={60}
              className={last ? "text-black" : "text-red-600"}
            ></MdOutlineComputer> */}
            <p className="my-2 text-white font-bold text-2xl">3-D</p>
            <p className="text-gray-200 italic my-3">
            Checkout few of my 3-D Design work.
            </p>
            {/* <button  className="flex items-center my-2 text-red-600">
              Know More
              <HiArrowNarrowRight className="ml-3 " />
            </button> */}
          </div>
        </div>
        {graphic && <Graphics />}
        {last && <ThreeD />}
        {video && <Video />}
      </div>
    </div>
  );
}

export default Skills;
