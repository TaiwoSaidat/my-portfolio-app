import React from "react";
import { contacts, links } from "../../constants";

function Contact() {
  return (
    <section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
      {/* heading text */}
      <h2 className="text-5xl font-bold text-[#a8dadc] text-center my-5">
        Contact
		  </h2>
		  <br />
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

      <h4 className="text-xl font-bold text-[#a8dadc] text-center">
        Link with me
      </h4>

      {/* contacts */}
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

        {/* github */}
        {/* <div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#457b9d] border border-none rounded-lg  ">
          <a
            rel="noreferrer"
            target="_blank"
            className=" "
            href="https://github.com/TaiwoSaidat"
          >
            <img src={github} alt="github link" />
          </a>
        </div> */}

        {/* linkedin */}
        {/* <div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#457b9d] border border-none rounded-lg ">
          <a
            rel="noreferrer"
            target="_blank"
            className=" "
            href="https://www.linkedin.com/in/taiwo-oyewale-5554791a6/"
          >
            <img src={linkedin} alt="linkedin link" />
          </a>
        </div> */}

        {/* vercel */}
        {/* <div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#457b9d] border border-none rounded-lg " >
					<a rel="noreferrer"
						target="_blank"
						className=" "
						href="https://vercel.com/taiwosaidats-projects">
						<img src={vercel} alt="vercel link"  />
					</a>
				</div> */}

        {/* email */}
        {/* <div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#457b9d] border border-none rounded-lg  ">
          <a
            rel="noreferrer"
            target="_blank"
            className=" "
            href="mailto:youremail@example.com "
          >
            <img src={email} alt="email link" />
          </a>
        </div> */}

        {/* Whatsapp */}
        {/* <div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#457b9d] border border-none rounded-lg ">
          <a
            rel="noreferrer"
            target="_blank"
            className=" "
            href="https://wa.me/+2348145701901"
          >
            <img src={whatsapp} alt="whatsapp link" />
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
