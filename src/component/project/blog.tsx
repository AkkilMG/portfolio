"use client";

import { project } from "@/lib/project";
import { useEffect } from "react";

export default function ProjectBlog({ id }: { id: Number }) {
    // find the project by id
    const info = project.find((information) => information.id === id);
    useEffect(() => {
        if (!info) {
            window.location.href = "/projects";
        }
    });
    return (
        <>
        <section className="bg-secondary pt-20">
            <div className="pt-20 max-w-[1075px] mx-auto px-4 xl:px-0 aos-init aos-animate" data-aos="flip-down" data-aos-delay="300">
                <div className="grid grid-cols-1 lg:grid-cols-2 pb-12">
                    <div className="mb-10">
                        <ul className="flex flex-wrap text-sm font-normal leading-tight">
                            <li className="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px]">
                                <a className="text-black-text-800" href="#">{info?.category}</a>
                            </li>
                            <li className="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px] ml-[10px]">
                                <a className="text-orange" href="#">{info?.date}</a>
                            </li>

                        </ul>

                        <h4 className="text-black-800 font-bold font-Syne leading-snug text-[32px] lg:text-[44px]">
                            {info?.name}
                        </h4>
                    </div>
                    <ul className="flex flex-wrap gap-y-6 lg:gap-y-0">
                        <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                            <span className="text-black-text-800 text-sm font-normal leading-tight">Client</span>
                            <h2 className="text-black-800 text-[15px] font-bold font-sans leading-none">{info?.client}</h2>
                        </li>
                        <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                            <span className="text-black-text-800 text-sm font-normal leading-tight">Category</span>
                            <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{info?.category}</h4>
                        </li>
                        <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                            <span className="text-black-text-800 text-sm font-normal leading-tight">Tools</span>
                            <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{info?.tools}</h4>
                        </li>
                        <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                            <span className="text-black-text-800 text-sm font-normal leading-tight">Start date</span>
                            <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{info?.duration[0]}</h4>
                        </li>
                        <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                            <span className="text-black-text-800 text-sm font-normal leading-tight">End date</span>
                            <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{info?.duration[1]}</h4>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 mb-12">
                    <img draggable="false"  className="w-full rounded-[20px]" src={info?.img} alt="banner" />
                </div>
            </div>
        </section>

        <section className="bg-white pb-[120px] mt-[-130px] pt-[130px] md:mt-[-280px] md:pt-[280px]">
            <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
                <div className="grid grid-cols-1">

                    <h3 className="text-[32px] font-bold font-Syne leading-10 mb-4">Overview</h3>
                    {info?.overview.map((proj, index) => (
                        <p key={index} className="paragraph mb-12">
                            {proj}
                        </p>
                    ))}
                    {/* <ul className="text-black-800 text-xl font-bold font-Syne mb-12">
                        <li className="relative z-[1] before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-4 before:-z-[1] before:w-[6px] before:h-[6px] pl-10">
                            Points go here</li>
                    </ul> */}

                </div>
                <div className="flex justify-center gap-4 mb-8">
                    <a href={info?.link[0]} className="px-3 btn btn-primary">Source</a>
                    <a href={info?.link[1]} className="px-3 btn btn-primary">Demo</a>
                </div>

                <div className="grid grid-cols-1">
                    <h3 className="text-[32px] font-bold font-Syne leading-10 mb-4">Conclusion</h3>
                </div>

                <div className="grid grid-cols-1">
                    {info?.conclusion.map((proj, index) => (
                        <p key={index} className="paragraph mb-12">
                            {proj}
                        </p>
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-white pb-[120px]">
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 aos-init aos-animate" data-aos="flip-down">
                        <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                            <span className="text-orange text-xl">Portfolio</span>
                            <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                                Related <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[32px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">wo</span>rk
                            </h3>
                        </div>
                    </div>
                    
                    {project.slice(0, 2).map((proj, index) => (
                    <div key={index} className="col-span-12 md:col-span-6 aos-init aos-animate" data-aos="flip-down" data-aos-delay={index === 1 ? "300" : "0"}>
                        <div className="rounded-[20px] overflow-hidden mb-6">
                            <img draggable="false"  src={proj.img} alt="project1" height="380px" width="636px" />
                        </div>
                        <div className="flex flex-wrap flex-col gap-3">
                            <div className="flex flex-wrap gap-2">
                                {proj.tags.map((tag, index) => (
                                    <a key={index} className="text-xs text-black-text-800 uppercase font-medium leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="/projects">{tag}</a>
                                ))}
                            </div>
                            <div className="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                                <h4 className="font-bold font-Syne text-center leading-10 text-[17px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] capitalize">
                                    <a className="transition-all" href={`/projects/${proj.id}`}>{proj.name}</a>
                                </h4>
                                <a href={`/projects/${proj.id}`} className="group-hover:animate-arrow-move-up">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fillOpacity="0.9"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fillOpacity="0.9"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}