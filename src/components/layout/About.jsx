import React from "react";
import taiwo from "../../assets/taiwo4.png";

function About() {
  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 align-center items-center justify-center bg-[#a8dadc] max-w-5xl mx-auto"
    >
      {/* image div */}
      <div className="flex-1 mb-6 ">
        <img
          src={taiwo}
          alt="taiwo"
          className="w-96 h-96 bg-cover border rounded-3xl"
        />
      </div>
      {/* text div */}
      <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6 h-96">
        <div>
          <h2 className="text-center text-[#457b9d] text-5xl font-bold">
            About Me
          </h2>
        </div>
        {/* <p className=" font-semibold"> I am</p> */}
        <p>
         1 am passionate about writing clean, efficient code and solving complex
          problems by building technological solutions out of business needs. I
          thrive on turning design concepts into interactive, beautiful
          websites. I'm excited about the power of web technology to connect
          people and create meaningful experiences. I'm constantly learning and
          looking for new ways to push the boundaries of what's possible..
          <span>
            I have over 1 year of experience working on web applications. I can
            fit into any phase of the software development life cycle and I can
            work both individually or collaboratively.
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
