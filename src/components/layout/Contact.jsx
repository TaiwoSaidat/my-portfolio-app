import React from "react";
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import email from '../../assets/email.svg'
import whatsapp from '../../assets/whatsapp.svg'

function Contact() {
	return (
		<section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
				
			{/* heading text */}
			<h2 className="text-5xl font-bold text-[#a8dadc] text-center my-5">Contact</h2>

			<h4 className="text-2xl font-bold text-[#a8dadc] text-center">Check me out</h4>

			{/* contacts */}
			<div className="flex gap-5 justify-center my-10">

				{/* github */}
				<div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#457b9d] border border-none rounded-lg  ">
					<a rel="noreferrer"
						target="_blank"
						className=" "
						href="https://github.com/TaiwoSaidat">
						<img src={github} alt="github link"  />
					</a>
				</div>

				{/* linkedin */}
				<div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#457b9d] border border-none rounded-lg " >
					<a rel="noreferrer"
						target="_blank"
						className=" "
						href="https://www.linkedin.com/in/taiwo-oyewale-5554791a6/">
						<img src={linkedin} alt="linkedin link"  />
					</a>
				</div>

				{/* email */}
				<div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#457b9d] border border-none rounded-lg  ">
					<a rel="noreferrer"
						target="_blank"
						className=" "
						href=" ">
						<img src={email} alt="linkedin link"  />
					</a>
				</div>

				{/* Whatsapp */}
				<div className="  w-24 h-24 flex items-center justify-center bg-[#a8dadc] hover:bg-[#457b9d] border border-none rounded-lg ">
					<a rel="noreferrer"
						target="_blank"
						className=" "
						href="">
						<img src={whatsapp} alt="whatsapp link"  />
					</a>
				</div>

			
			</div>

		</section>
	);
}

export default Contact;
