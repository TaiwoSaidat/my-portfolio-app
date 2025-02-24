import React from "react";
import code from "../../assets/code.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="px-10 w-full flex gap-12 flex-col lg:flex-row justify-center items-center 
		align-center mt-40 mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[100vh]"
    >
      {/* heading text */}
      <div className="flex-1 flex flex-col justify-center items-center gap-5">
        <div>
          <h4 className="text-center text-xl font-bold">Hi and welcome to</h4>
          <h2 className="text-center text-[#a8dadc] text-5xl font-bold">
            My Portfolio Website
          </h2>
        </div>
        <p className="text-center">i am a Front End Engineer...</p>
      </div>

      {/* image */}
      <div className="flex-1 ">
        <img
          src={code}
          alt="code.svg"
          className="w-full h-36 md:h-48 lg:h-96 bg-cover "
        />
      </div>
    </section>
  );
}

export default Hero;
