function Skills() {
  const skills = [
    "Next",
    "React",
    "Javascript",
    "Typescript",
    "REST API",
    "Tailwind",
    "HTML",
    "CSS",
  ];
  return (
    <section id="skills" className="px-10 w-full my-40 max-w-5xl mx-auto">
      {/* heading */}
      <h2 className="text-center text-6xl text-[#a8dadc] font-bold">
        My Skills...
      </h2>
      {/* skills */}
      <div className="mt-10 flex gap-5 justify-center flex-wrap mx-auto max-w-xl">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer px-12 py-10 rounded bg-[#457b9d] text-lg text-[#f1faee] flex items-center justify-center font-bold hover:shadow-xl"
            >
              {/* hover:text-black */}
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
