import React from "react";
import { contacts, links } from "../../constants";
import resumeIcon from "../../assets/resume.jpeg";
import resume from "../../assets/Taiwo_Oyewale_Resume_Frontend_Engineer.pdf";

function Contact() {
  return (
    <section
      id="contact"
      className=" align-center max-w-5xl mx-auto space-y-8 "
    >
      {/* heading text */}
      <h2 className="text-5xl font-bold text-secondary text-center ">
        Links, Contacts and Resume
      </h2>
      {/* github, linkedin, mail, whatsapp */}
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-secondary text-center">
          Check me out...
        </h4>
        <div className="flex gap-5 justify-center my-6">
          {links.map((link, index) => (
            <div className=" p-2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center bg-secondary hover:bg-primary shadow transition hover:shadow-xl hover:scale-[102%] border border-none rounded-full  ">
              <a
                rel="noreferrer"
                target="_blank"
                className=" "
                href={link.href}
              >
                <img
                  src={link.image}
                  alt="links"
                  className="w-10 h-6 md:h-10 "
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* resume */}
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-secondary text-center">
          Download my Resume
        </h4>
        <div className="flex gap-5 justify-center my-6">
          <div className="  p-2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center bg-secondary hover:bg-primary  shadow transition hover:shadow-xl hover:scale-[102%] border border-none rounded-full  ">
            <a rel="noreferrer" target="_blank" className="" href={resume}>
              <img
                src={resumeIcon}
                alt="Download Resume"
                className="w-10 h-6 md:h-10 "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
