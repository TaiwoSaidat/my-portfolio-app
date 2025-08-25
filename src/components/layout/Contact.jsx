import React from "react";
import { contacts, links } from "../../constants";
import resumeIcon from "../../assets/resume.jpeg";
import resume from "../../assets/Oyewale_Taiwo_Resume.pdf";

function Contact() {
  return (
    <section id="contact" className=" align-center max-w-5xl mx-auto space-y-8 ">
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
            <div className="  w-24 h-24 flex items-center justify-center bg-secondary hover:bg-primary shadow transition hover:shadow-xl hover:scale-[102%] border border-none rounded-lg  ">
              <a
                rel="noreferrer"
                target="_blank"
                className=" "
                href={link.href}
              >
                <img src={link.image} alt="github link" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* whatsapp, gmail */}
      {/* <h4 className="text-xl font-bold text-secondary text-center">
        Link with me
      </h4>
      <div className="flex gap-5 justify-center my-10">
        {contacts.map((contact, index) => (
          <div className="  w-24 h-24 flex items-center justify-center bg-secondary hover:bg-primary shadow transition hover:shadow-xl hover:scale-[102%] border border-none rounded-lg  ">
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
      </div> */}

      {/* resume */}
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-secondary text-center">
          Download my Resume
        </h4>
        <div className="flex gap-5 justify-center my-6">
          <div className="  w-24 h-24 flex items-center justify-center bg-secondary hover:bg-primary  shadow transition hover:shadow-xl hover:scale-[102%] p-4 border border-none rounded-lg  ">
            <a rel="noreferrer" target="_blank" className="" href={resume}>
              <img src={resumeIcon} alt="Download Resume" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
