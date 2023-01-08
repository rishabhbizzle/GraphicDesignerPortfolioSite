import React from "react";

function Contact() {
  return (
    <div className="w-full h-screen bg-black" name="contact">
      <div className="w-full bg-[#181818] flex flex-col md:flex-row p-8 justify-between items-center">
        <div className="md:w-[40%] my-5">
          <p className="text-white text-3xl text-center md:text-7xl md:text-left">
            Let's work together on your next project
          </p>
        </div>
        <div className="flex justify-center items-center md:w-[60%] px-10 w-full">
          <form
            method="POST"
            action="https://getform.io/f/3aaadc1c-a47e-4b53-8b19-b12a3bbb34f6"
            className="w-full"
          >
            <div className="flex flex-col mx-auto py-2">
              <label
                className="text-white text-l my-2 md:text-xl"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="bg-[#181818] border border-red-600 p-1 text-white"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="flex flex-col mx-auto py-2">
              <label
                className="text-white text-l my-2 md:text-xl"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-[#181818] border border-red-600 p-1 text-white"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="flex flex-col mx-auto py-2">
              <label
                className="text-white text-l my-2 md:text-xl"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="bg-[#181818] border border-red-600 p-1 text-white"
                type="text"
                name="message"
                id="message"
                rows="10"
                placeholder="Enter Your Message"
                required
              />
            </div>
            <button className="text-white bg-red-600 hover:bg-white hover:text-red-600 px-4 py-3 my-8 mx-auto flex items-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
