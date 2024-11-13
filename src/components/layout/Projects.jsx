import React from "react";
import quizApp from "../../assets/quiz_app.png";
import fireBaseSignUp from "../../assets/fire.png";
import reviews from "../../assets/reviews.png";
import beauty from "../../assets/beautyexpat.png";
import kiddies from "../../assets/kiddiesAuto.png";
import tribute from "../../assets/tribute.png";
import trombone from "../../assets/trombone.png";

function Projects() {
  return (
    <section
      id="projects"
      className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"
    >
      {/* heading title */}
      <h2 className="text-5xl text-[#a8dadc] font-bold text-center">
        My Projects
      </h2>
      <hr />
      <h6 className="text-3xl text-[#a8dadc] font-bold text-center">
        Websites
      </h6>
      {/* project 1 beauty expat*/}
      <div
        className="p-10 bg-[#a8dadc] hover:bg-[#1d3557] flex flex-col justify-center items-center gap-5 lg:flex-row 
				max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full"
      >
        {/* image */}
        <div className="w-80 rounded">
          <a
            href="https://deploy-preview-41--beautyxpert.netlify.app/"
            className="w-full h-full"
          >
            <img
              src={beauty}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        {/* text */}
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            {/*  hover:text-black */}
            <a
              className="hover:underline"
              href="https://deploy-preview-41--beautyxpert.netlify.app/"
            >
              Beauty Expert App
            </a>
          </h2>
          <p>
            This is a react app that connect small business beauty technicians
            to customers. it was built with react.js and Tailwind. This project
            is the collaborative work of a full team, including designers, back
            end developers, other front end developers and project manager. It
            is still in progress.
          </p>
        </div>
      </div>

      {/* project 2 quiz app */}
      <div
        className="p-10 bg-[#a8dadc] hover:bg-[#1d3557] flex flex-col justify-center items-center gap-5 lg:flex-row 
				max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full"
      >
        {/* image */}
        <div className="w-80 rounded">
          <a
            href="https://quiz-application-plum.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={quizApp}
              alt="Project 1"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        {/* text */}
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            {/* hover:text-black */}
            <a
              className="hover:underline"
              href="https://quiz-application-plum.vercel.app/"
            >
              Quiz Application
            </a>
          </h2>
          <p>
            This is a quiz application that shows questions and give a score at
            the end of the quiz. It is built using React JS, HTML and CSS.
          </p>
        </div>
      </div>

      {/* project 3 kiddies auto */}
      <div
        className="p-10 bg-[#a8dadc] hover:bg-[#1d3557] flex flex-col justify-center items-center gap-5 lg:flex-row 
				max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full"
      >
        {/* image */}
        <div className="w-80 rounded">
          <a
            href="https://kiddies-auto-web-app.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={kiddies}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        {/* text */}
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://kiddies-auto-web-app.vercel.app/"
            >
              Kiddies Auto Web
            </a>
          </h2>
          <p>
            This is an ecommerce store built using React JS, HTML, Tailwind and
            CSS. It is still in progress
          </p>
        </div>
      </div>

      {/* project 4 firebase login/ signup */}
      <div
        className="p-10 bg-[#a8dadc] hover:bg-[#1d3557] flex flex-col justify-center items-center gap-5 lg:flex-row 
				max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full"
      >
        {/* image */}
        <div className="w-80 rounded">
          <a
            href="https://login-signup-firebase-seven.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={fireBaseSignUp}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        {/* text */}
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://login-signup-firebase-seven.vercel.app/"
            >
              Signup / Login Application
            </a>
          </h2>
          <p>
            This is a signup/login app using google firebase authentication for
            web applications. It is built using React JS, HTML, Tailwind and
            CSS.
          </p>
        </div>
      </div>

      {/* project 5 feed back app */}
      <div
        className="p-10 bg-[#a8dadc] hover:bg-[#1d3557] flex flex-col justify-center items-center gap-5 lg:flex-row 
				max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full"
      >
        {/* image */}
        <div className="w-80 rounded">
          <a
            href="https://feedback-application-zeta.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={reviews}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        {/* text */}
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://feedback-application-zeta.vercel.app/"
            >
              Feedback Application
            </a>
          </h2>
          <p>
            This is a review app using react. It is built using React JS, HTML,
            Tailwind and CSS.
          </p>
        </div>
      </div>
<br /> <hr /> <br />
      <h6 className="text-3xl text-[#a8dadc] font-bold text-center">
        Web Apps
      </h6>
      {/* project 6 */}
      <div
        className="p-10 bg-[#a8dadc] hover:bg-[#1d3557] flex flex-col justify-center items-center gap-5 lg:flex-row 
				max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full"
      >
        {/* image */}
        <div className="w-80 rounded">
          <a
            href="https://tribute-page-two-red.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={tribute}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        {/* text */}
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://tribute-page-two-red.vercel.app/"
            >
              Tribute Page
            </a>
          </h2>
          <p>This is a tribute built using html and css</p>
        </div>
      </div>

      {/* project 7 products/ music intrument landing page */}
      <div
        className="p-10 bg-[#a8dadc] hover:bg-[#1d3557] flex flex-col justify-center items-center gap-5 lg:flex-row 
				max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full"
      >
        {/* image */}
        <div className="w-80 rounded">
          <a
            href="https://products-landing-page-six.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={trombone}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        {/* text */}
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://products-landing-page-six.vercel.app/"
            >
              Products Landing Page
            </a>
          </h2>
          <p>This is a products landing page built using html and css</p>
        </div>
      </div>

      {/* project 2 */}
      {/* <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 lg:flex-row-reverse 
				max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full"> */}
      {/* image */}
      {/* <div className="w-80 rounded">
					<a href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
					className="w-full h-full">
						<img src="https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
							alt="Project 2"
							className="w-full h-full bg-cover rounded" />
					</a>
				</div> */}
      {/* text */}
      {/* <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1"> 
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline" href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/">
							15 Puzzle Game
						</a>
					</h2>
					<p>
						15 puzzle game is basically a tile-based game in which there are 16 tiles
						out of which 1 tile is left empty and the remaining tiles are filled with
						numbers from 1 to 15 in random order. The user has to arrange all the tiles 
						in numerical order with the rule that they can only move the tile that is 
						a direct neighbor of the empty tile.
					</p>
				</div> */}
      {/* </div> */}
    </section>
  );
}

export default Projects;
