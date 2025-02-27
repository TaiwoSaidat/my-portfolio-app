import React from "react";

function Navbar() {
  return (
    <nav className="w-full px-5 sm:px-10 py-5 shadow-xl backdrop-blur-lg fixed top-0 z-10">
      <div className="container flex flex-col lg:flex-row gap-5 justify-between w-full items-center max-w-5xl mx-auto">
        <h3 className="text-3xl text-[#a8dadc] font-bold">OYEWALE TAIWO</h3>
        <ul className="flex gap-3 align-center p-1 flex-wrap">
          <li>
            <a
              className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded 
							hover:text-black hover:bg-[#457b9d]"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded 
							hover:text-black hover:bg-[#457b9d]"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded 
							hover:text-black hover:bg-[#457b9d]"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded 
						hover:text-black hover:bg-[#457b9d]"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
