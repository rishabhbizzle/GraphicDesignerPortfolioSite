import React from "react";
import Army from "../assets/red and blue.jpg";
import Carrot from "../assets/carrot.jpg";
import Edu from "../assets/education.jpg";
import Matte from "../assets/matte.jpg";
import Grid from "../assets/grid.jpg";
import Manipulation from "../assets/manipulation.jpg";


function Graphics() {
  return (
    <div className="w-full bg-black">
      <div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-sm object-cover" src={Matte} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Army} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Grid} alt="" />
            </div>
          </div>
          
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Edu} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Carrot} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Manipulation} alt="" />
            </div>
          </div>
          {/* <div className="flex justify-center basis-1/3 flex-1 p-8 bg-[#181818] items-center">
            <div>
              <img className="rounded-lg object-cover h-[50em] items-center" src={Manipulation} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Graphics;
