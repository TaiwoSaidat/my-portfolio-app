import React from "react";
import code from "../../assets/code.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className=" w-full flex flex-col md:flex-row justify-between items-center 
    		align-center max-w-5xl mx-auto gap-4 md:pt-24  "
    >
      {/* heading text */}
      <div className="mt-20  flex flex-col justify-center items-center gap-2">
        {/* <div> */}
        <h4 className="text-center text-xl font-bold text-gray">
          Hi and welcome to
        </h4>
        <h2 className="text-center text-secondary text-4xl font-bold ">
          My Portfolio Website
        </h2>
        {/* </div> */}
        <p className="text-center text-gray font-semibold animate-pulse">
          I am a Frontend Engineer...
        </p>
      </div>

      {/* image */}
      <div className=" ">
        <img
          src={code}
          alt="code.svg"
          className="w-48 h-48 md:w-64 md:h-64 rounded-lg bg-cover"
          // className="w-full h-36 md:h-48 lg:h-96  "
        />
      </div>
    </section>
  );
}

export default Hero;
