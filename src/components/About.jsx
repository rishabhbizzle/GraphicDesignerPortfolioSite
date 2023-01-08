import React from 'react'
import { FaLinkedin, FaGoogleDrive } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function About() {
  return (
    <div name="about" >
        <div className="h-24 md:h-8">
      </div>
    <div className='w-full h-screen bg-black text-gray-200'>
      <div className='flex flex-col justify-center items-center w-full h-full p-8'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold md:text-4xl'>
              <p>Hi. I'm Sushant, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Motivated and detail-oriented graphic designer with 6 months of experience in creating visually stunning designs for a variety of clients. With a strong understanding of design principles and the ability to bring ideas to life through effective communication and collaboration. I'm passionate for staying up-to-date on the latest design trends and techniques.</p>  
            </div>
          </div>
          <div className='flex mt-10 mb-20'>
        <ul className='flex py-2 mx-auto'>
          <li className=" mx-2 w-[60px] px-4 h-[60px] flex justify-center items-center hover:scale-110 duration-500 bg-red-600 text-gray-300">
            <a target="_blank"
            rel="noreferrer"
              href="https://www.linkedin.com/in/sushant-kumar-7ab799145/"
              className="flex justify-between items-center w-full text-gray-300"
            >
            <FaLinkedin size={30} />
            </a>
          </li>
          <li className="mx-2 w-[60px] px-4 h-[60px] flex justify-center items-center hover:scale-110 duration-500 bg-red-600 text-gray-300">
            <a target="_blank"
            rel="noreferrer"
              href="https://drive.google.com/drive/folders/1ZFKlP8eiR4xLtdK9QUx0CC3UAgwywagt?usp=share_link"
              className="flex justify-between items-center w-full text-gray-300"
            >
            <FaGoogleDrive size={30} />
            </a>
          </li>
          
          <li className="mx-2 w-[60px] px-4 h-[60px] flex justify-center items-center hover:scale-110 duration-500 bg-red-600 text-gray-300">
            <a target="_blank"
            rel="noreferrer"
              href="/resume.pdf"
              className="flex justify-between items-center w-full text-gray-300"
            >
            <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About