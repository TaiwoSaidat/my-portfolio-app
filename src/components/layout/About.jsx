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
        <img src={taiwo} alt="taiwo" className="w-96 h-96 bg-cover" />
      </div>
      {/* text div */}
      <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6 h-96 text-[#1d3557] font-semibold">
        <div>
          <h2 className="text-center text-5xl font-bold">About Me</h2>
        </div>
        {/* <p className=" font-semibold"> I am</p> */}
        <p className="">
          Front-End Engineer skilled at building scalable, high-performance web
          applications. Committed to delivering responsive, user-focused
          solutions.
        </p>
        <p className="">
          Proven ability to translate Figma designs into responsive,
          production-ready applications, optimize performance, and integrate
          secure APIs. Adept at collaborating in agile teams to deliver
          user-focused solutions that improve engagement and streamline business
          processes.
        </p>
        {/* <p className="">
          Front-end developer, specialising in crafting engaging web
          applications that address various business challenges. Whether working
          individually or part of a team, I am committed to delivering
          high-quality and user friendly applications.
          I am passionate about writing clean, efficient code and solving
          complex problems by building technological solutions out of business
          needs. I thrive on turning design concepts into interactive, beautiful
          websites. I'm excited about the power of web technology to connect
          people and create meaningful experiences. I'm constantly learning and
          looking for new ways to push the boundaries of what's possible.
          <span>
            I have over 1 year of experience working on web applications. I can
            fit into any phase of the software development life cycle and I can
            work both individually or collaboratively.
          </span>
        </p> */}
        {/* <p className="">
          
          I have about 2 years of experience working on web applications. I can
          fit into any phase of the software development life cycle and I can
          work both individually or collaboratively.
        </p> */}
      </div>
    </section>
  );
}

export default About;
