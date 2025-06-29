import React from 'react'
import { educations } from "../../utils/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from "../../assets/lottie/education_new.json"
import GlowCard from "../../helper/glow-card";
import { section, blur } from "../../utils/images";


function Education() {
    return (
        <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <img
                src={section}
                alt="section"
                width={1572}
                height={795}
                className="absolute top-0 -z-10"
            />
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="sticky top-10">
                <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30" />
                <div className="flex items-center justify-start relative">
                    <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
                        EDUCATION
                    </span>
                    {/* <span className="w-full h-[2px] bg-[#1a1443]"></span> */}
                </div>
            </div>

            <div className="py-8">
                <div className="flex">
                    <div className="flex flex-wrap flex-row">
                        {
                            educations.map(education => (
                                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                                    <div className="p-3 relative text-white">
                                        <img
                                            src={blur}
                                            alt="blur"
                                            width={1080}
                                            height={200}
                                            className="absolute bottom-0 opacity-80"
                                        />
                                        <div className="flex justify-center">
                                            <p className="text-xs sm:text-sm text-[#16f2b3]">
                                                {education.duration}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-x-8 px-3 py-5">
                                            <div>
                                                <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                                    {education.title}
                                                </p>
                                                <p className="text-sm sm:text-base">{education.institution}</p>
                                            </div>
                                        </div>
                                    </div>
                                </GlowCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;