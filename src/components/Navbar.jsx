import React, { useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-scroll";


function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed z-10 w-full h-[80px] bg-black text-gray-300 flex justify-between items-center py-2 px-2">
      <div>
        <img src="" alt="" />
      </div>

      {/* Large screen menu */}
      <ul className="hidden md:flex ">
        <li className="px-4">
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="px-4">
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="px-4">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="px-4">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger icons */}
      <div onClick={handleNav} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile-menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex items-center mx-auto justify-center flex-col bg-[#181818] h-screen w-full"
        }
      >
        <li className="p-4 text-4xl">
          <Link onClick={handleNav} to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 text-4xl">
          <Link onClick={handleNav} to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4 text-4xl">
          <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="p-4 text-4xl">
          <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* socials */}
    </div>
  );
}

export default Navbar;
