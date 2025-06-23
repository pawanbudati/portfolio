import { skillsData } from "../../utils/skills";
import { skillsImage } from "../../utils/skill-image";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30" />
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            SKILLS
          </span>
          {/* <span className="w-full h-[2px] bg-[#1a1443]"></span> */}
        </div>
      </div>

      <div className="w-full my-12">
          <div className="flex flex-wrap">
            {skillsData.map((skill, id) => (
              <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}>
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <img
                        src={skillsImage(skill)}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;