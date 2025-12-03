const skills = [
  { name: "HTML", img: "/skills/html.png" },
  { name: "CSS", img: "/skills/css.png" },
  { name: "JavaScript", img: "/skills/javascript.png" },
  { name: "React.js", img: "/skills/react.png" },
  { name: "React Native", img: "/skills/reactnative.png" },
  { name: "Tailwind CSS", img: "/skills/tailwind.png" },
  { name: "Next Js", img: "/skills/nextjs.png" },
  { name: "Redux", img: "/skills/redux.png" },
  { name: "Git", img: "/skills/git.png" },
  { name: "GitHub", img: "/skills/github.png" },
  { name: "Flutter", img: "/skills/flutter.png" },
  { name: "Dart", img: "/skills/dart.png" },
  { name: "GetX", img: "/skills/getx.png" },
  { name: "Android", img: "/skills/android.png" },
  { name: "iOS", img: "/skills/ios.png" },
];

const Skill = () => {
  return (
    <section className="w-full overflow-hidden py-20" data-aos="fade-right">
      {/* TITLE */}
      <div
        className="flex items-center gap-4 mb-10 justify-end"
        data-aos="fade-down"
      >
        <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent to-[#D1A14A]"></div>

        <h1 className="text-5xl font-bold text-gradient whitespace-nowrap text-right">
          Skills
        </h1>

        <div className="flex-1 h-[3px] bg-gradient-to-r from-[#D1A14A] to-transparent"></div>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10"
        data-aos="zoom-in"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl 
                       hover:scale-105 transition-all duration-300 flex flex-col 
                       items-center justify-center
                       hover:rotate-1
                       "
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
