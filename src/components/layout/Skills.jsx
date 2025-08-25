import { skills } from "../../constants";

function Skills() {
  return (
    <section id="skills" className="px-4 w-full max-w-5xl mx-auto">
      {/* heading */}
      <h2 className="text-center text-5xl text-secondary font-bold">
        My Skills...
      </h2>
      {/* skills */}
      <div className="m-10 flex gap-4 justify-center flex-wrap ">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer px-4 py-2 rounded bg-accent text-lg text-secondary hover:text-primary flex items-center justify-center font-bold hover:bg-secondary shadow transition hover:shadow-xl hover:scale-[102%]
"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
