import React from "react";
import { contacts, links } from "../../constants";
import resumeIcon from "../../assets/resume.jpeg";
import resume from "../../assets/Oyewale_Taiwo_Resume.pdf";

function Contact() {
  return (
    <section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
      {/* heading text */}
      <h2 className="text-5xl font-bold text-[#a8dadc] text-center my-5">
        Contact
      </h2>
      <br />
      {/* github, linkedin */}
      <h4 className="text-xl font-bold text-[#a8dadc] text-center">
        Check me out...
      </h4>
      <div className="flex gap-5 justify-center my-10">
        {links.map((link, index) => (
          <div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#1d3557] shadow transition hover:shadow-xl hover:scale-[102%] border border-none rounded-lg  ">
            <a rel="noreferrer" target="_blank" className=" " href={link.href}>
              <img src={link.image} alt="github link" />
            </a>
          </div>
        ))}
      </div>
      {/* whatsapp, gmail */}
      <h4 className="text-xl font-bold text-[#a8dadc] text-center">
        Link with me
      </h4>
      <div className="flex gap-5 justify-center my-10">
        {contacts.map((contact, index) => (
          <div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#1d3557] shadow transition hover:shadow-xl hover:scale-[102%] border border-none rounded-lg  ">
            <a
              rel="noreferrer"
              target="_blank"
              className=" "
              href={contact.href}
            >
              <img src={contact.image} alt="github link" />
            </a>
          </div>
        ))}
      </div>

      {/* resume */}
      <h4 className="text-xl font-bold text-[#a8dadc] text-center">
        Download my Resume
      </h4>
      <div className="flex gap-5 justify-center my-10">
        <div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#1d3557]  shadow transition hover:shadow-xl hover:scale-[102%] p-4 border border-none rounded-lg  ">
          <a rel="noreferrer" target="_blank" className="" href={resume}>
            <img src={resumeIcon} alt="Download Resume" />
            {/* <img src="#" alt="Download Resume" /> */}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
