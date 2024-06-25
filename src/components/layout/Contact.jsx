import React from "react";
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

function Contact() {
	return (
		<section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
				
			{/* heading text */}
			<h2 className="text-5xl font-bold text-emerald-500 text-center">Contact</h2>
			{/* contacts */}
			<div className="flex gap-5 justify-center my-10">

				{/* github */}
				{/* <a rel="noreferrer"
					target="_blank"
					className="text-center hover:underline"
					href="https://github.com/TaiwoSaidat">
						Github: 
						<span className="font-bold">
							 TaiwoSaidat
						</span>
				</a> */}

				<div>
					<a rel="noreferrer"
						target="_blank"
						className=" "
						href="https://github.com/TaiwoSaidat">
						<img src={github} alt="github link"  />
					</a>
				</div>
<br />
				{/* linkedin */}
				{/* <a rel="noreferrer"
					target="_blank"
					className="text-center hover:underline"
					href="https://www.linkedin.com/in/taiwo-oyewale-5554791a6/">
						LinkedIn:
						<span className="font-bold">
							Taiwo Oyewale
						</span>
				</a> */}
				<div>
					<a rel="noreferrer"
						target="_blank"
						className=" "
						href="https://www.linkedin.com/in/taiwo-oyewale-5554791a6/">
						<img src={linkedin} alt="linkedin link"  />
					</a>
				</div>
			</div>

		</section>
	);
}

export default Contact;
