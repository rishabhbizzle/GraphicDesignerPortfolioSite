import React from 'react'
import Bar from "../assets/Bar.jpg";
import Bar2 from "../assets/Bar2.jpg";
import Bar3 from "../assets/Bar3.jpg";
import Sushi from'../assets/Sushi.jpg'
import Treasure from'../assets/Treasure.jpg'
import Forest from "../assets/Forest.jpg";
import Forest2 from "../assets/Forest2.jpg";
import Forest3 from "../assets/Foresttop.jpg";
import Forest4 from "../assets/Forest3.jpg";
import Building from "../assets/Building.jpg";
import Building2 from "../assets/Building2.jpg";
import Building3 from "../assets/Building3.jpg";


function ThreeD() {
  return (
    <div className="w-full bg-black">
      <div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-sm object-cover" src={Sushi} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Building} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Building2} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Building3} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Treasure} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Bar} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Bar2} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Bar3} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Forest} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Forest2} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Forest3} alt="" />
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <img className="rounded-lg object-cover" src={Forest4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeD