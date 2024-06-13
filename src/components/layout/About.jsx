import React from 'react';
import taiwo from '../../assets/taiwo.png';


function About() {
	return (
		<section
			id="about"
			className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-emerald-200 max-w-5xl mx-auto">
			<div className="flex-1 mb-6 ">
				<img src={taiwo}
					alt="taiwo"
					className="w-full h-full bg-cover border-solid border-4 border-emerald-200 rounded-full"/>
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-emerald-500 
								text-5xl font-bold">
						About Me :
					</h2>
				</div>
				<p className=' font-semibold' >
					As I said, I am a front end developer...
				</p>
				<p> 
                    ... with a passion for creating clean,
                    efficient code that meets user needs. I thrive on turning design 
                    concepts into interactive, beautiful websites. I'm excited about 
                    the power of web technology to connect people and create meaningful 
                    experiences.  I'm constantly learning and looking for
                    new ways to push the boundaries of what's possible.
				</p>
			</div>
		</section>
	);
}

export default About;
