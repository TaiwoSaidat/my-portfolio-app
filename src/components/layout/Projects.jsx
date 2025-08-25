import React from "react";
import { sites, apps } from "../../constants";

function Projects() {
  return (
    <section
      id="projects"
      className=" w-full flex flex-col gap-12 align-center max-w-5xl mx-auto"
    >
      {/* heading title */}
      <h2 className="text-5xl text-secondary font-bold text-center">
        My Projects
      </h2>
      {/* <hr />
      <h6 className="text-3xl text-secondary font-bold text-center">
        Websites
      </h6> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sites.map((site) => (
          <div
            className="p-6 bg-secondary hover:bg-primary text-primary hover:text-secondary flex flex-col justify-center items-center gap-5 
				max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full rounded-lg"
            key={site.id}
          >
            {/* image */}
            <div className="w-80 rounded">
              <a href={site.href} className="w-full h-full">
                <img
                  src={site.image}
                  alt={site.alt}
                  className="w-full h-full bg-cover rounded"
                />
              </a>
            </div>
            {/* text */}
            <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1 ">
              <h2 className="font-bold text-3xl text-center ">
                <a className="hover:underline" href={site.href}>
                  {site.title}
                </a>
              </h2>
              <p>{site.content}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <br /> <hr /> <br />
      <h6 className="text-3xl text-secondary font-bold text-center">
        Web Apps
      </h6>
      {apps.map((app) => (
        <div
          className="p-10 bg-secondary hover:bg-primary text-primary hover:text-secondary flex flex-col justify-center items-center gap-5 lg:flex-row 
				max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full "
          key={app.id}
        >
          <div className="w-80 rounded">
            <a href={app.href} className="w-full h-full">
              <img
                src={app.image}
                alt={app.alt}
                className="w-full h-full bg-cover rounded"
              />
            </a>
          </div>
          <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
            <h2 className="font-bold text-3xl text-center">
              <a className="hover:underline" href={app.href}>
                {app.title}
              </a>
            </h2>
            <p>{app.content}</p>
          </div>
        </div>
      ))} */}
    </section>
  );
}

export default Projects;
