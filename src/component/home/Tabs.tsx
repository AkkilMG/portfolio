"use client";

import { useState } from "react";

export default function Tabs() {
    const [tabs, setTabs] = useState(0);
    const [more, setMore] = useState(false);
    return (
        <section className="featured-properties pr-[40px] py-[80px] lg:py-[100px]">
            <div className="container">
                <div className="grid grid-cols-12  lg:gap-[60px] xl:gap-[100px] 2xl:gap-[130px]">
                    <div className="col-span-12 lg:col-span-5 2xl:col-span-4 aos-init aos-animate" data-aos="fade-up">
                        <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-4">
                            <span className="text-orange text-xl">Resume</span>
                            <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                                All over my details find here...
                            </h3>
                        </div>
                        <div className="tabs flex flex-wrap lg:flex-col gap-2 my-8 lg:my-0">
                            <button onClick={(e)=>setTabs(0)} className={`tab-btn justify-between items-center inline-flex group ${(tabs == 0)?'active': ''}`}>
                                About me
                                <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </button>
                            <button onClick={(e)=>setTabs(1)} className={`tab-btn justify-between items-center inline-flex group ${(tabs == 1)?'active': ''}`}>
                                Experience
                                <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </button>
                            <button onClick={(e)=>setTabs(2)} className={`tab-btn justify-between items-center inline-flex group ${(tabs == 2)?'active': ''}`}>
                                Education
                                <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </button>
                            <button onClick={(e)=>setTabs(3)} className={`tab-btn justify-between items-center inline-flex group ${(tabs == 3)?'active': ''}`}>
                                Skills
                                <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </button>
                            <button onClick={(e)=>setTabs(4)} className={`tab-btn justify-between items-center inline-flex group ${(tabs == 4)?'active': ''}`}>
                                Achievement
                                <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-7 2xl:col-span-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                        {/* About Me Section */}
                        <div className={`tab-content ${(tabs==0)?'active': ''} relative`}>
                            <div className="grid grid-cols-1">
                                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Based in Mangaluru, India</h4>
                                <div className="mt-10 mr-[70px] mb-7">
                                    <p className="paragraph">Akkil M G, <span className="text-black-800">Developer</span>,
                                        based in Mangaluru, India. When not coding, I am probably debugging my coffee machine.
                                        I have a passion for creating intuitive and dynamic user experiences. My journey in development started with a curiosity for how application are built and has grown into a full-fledged career.
                                    </p>
                                </div>
                                <ul className="flex-col gap-3 inline-flex">
                                    <li className="gap-10 inline-flex items-center">
                                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                    Name</span>
                                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                                    Akkil M G</span>
                                    </li>
                                    <li className="gap-10 inline-flex items-center">
                                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                    Nationality</span>
                                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                                    Indian</span>
                                    </li>
                                    <li className="gap-10 inline-flex items-center">
                                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                    Email</span>
                                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                                    akkilcharanmg@gmail.com</span>
                                    </li>
                                    <li className="gap-10 inline-flex items-center">
                                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                    Experience</span>
                                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                                    1+ years</span>
                                    </li>
                                    <li className="gap-10 inline-flex items-center">
                                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                    Freelance</span>
                                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                                    Available</span>
                                    </li>
                                    <li className="gap-10 inline-flex items-center">
                                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                    Github</span>
                                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                                    AkkilMG</span>
                                    </li>
                                    <li className="gap-10 inline-flex items-center">
                                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                    Language</span>
                                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                                        Kannada, English, Hindi, Tulu, Malayalam</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className={`tab-content ${(tabs==1)?'active': ''} relative`}>
                            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Experience</h4>
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                
                            <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                                    <span className="text-sm font-normal leading-tight text-black-800">12/2023 – 02/2024</span>
                                    <div>
                                        <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                            Effinity</p>
                                        <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                                            Software Engineering Intern
                                        </h4>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                                    <span className="text-sm font-normal leading-tight text-black-800">07/2022 – 09/2022</span>
                                    <div>
                                        <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                            ExpoSys Datalabs</p>
                                        <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                                            App Developer Intern
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className={`tab-content ${(tabs==2)?'active': ''} relative`}>
                            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Education</h4>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                                    <span className="text-sm font-normal leading-tight text-black-800">12/2021 – Present</span>
                                    <div className="flex-1">
                                        <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                            Sahyadri College of Engineering & Management</p>
                                        <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                                            Bachelors of Engineering
                                        </h4>
                                    </div>
                                </div>

                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                                    <span className="text-sm font-normal leading-tight text-black-800">06/2019 – 05/2021</span>
                                    <div className="flex-1">
                                        <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                            St. Aloysius PU College</p>
                                        <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                                            PCMB
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skill Section */}
                        <div className={`tab-content ${(tabs==3)?'active': ''} relative`}>
                            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Skills</h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5 max-h-[600px] overflow-y-auto">
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/python.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Python</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(90%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/js.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Javascript</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(80%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/ts.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Typescript</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(80%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/kotlin.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Kotlin</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(52%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/golang.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Go Language</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(48%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/java.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Java</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>

                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/dart.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Dart</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/mongodb.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">MongoDB</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(80%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/redis.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Redis</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(80%)</p>
                                    </div>
                                </div>
                            </div>
                                {!more && (
                                    <div className="relative col-span-12 mt-12 aos-init aos-animate" data-aos="fade-up">
                                        <div className="flex group">
                                            <p onClick={(e) => setMore(true)} className="flex items-center justify-center flex-wrap btn-primary grow">
                                                View All Skills
                                                <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                )}

                            <div className={`pt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5 ${more?'': 'hidden'}`}>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/mysql.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">MySQL</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/fastapi.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">FastAPI</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>

                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/react.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">ReactJS</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/nextjs.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">NextJS</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/flask.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Flask</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/android.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Android</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>

                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/flutter.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Flutter</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/docker.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Docker</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/ubuntu.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Ubuntu</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>

                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/vscode.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">VS Code</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/vstudio.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Visual Studio</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>
                                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <img draggable="false"  className="items-start" src="/assets/skills/android_studio.png" width={38} height={38} alt="icons" />
                                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Android Studio</h4>
                                        <p className="text-sm font-normal leading-none text-black-800">(60%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Achievement Section */}
                        <div className={`tab-content ${(tabs==4)?'active': ''} relative`}>
                            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Hackathon</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                                    <div className="flex items-start justify-between">
                                        <img draggable="false"  src="/assets/hackathon/devhack.png" width="150px" alt="icons" />
                                        <span className="font-normal text-sm text-black-text-800">2024</span>
                                    </div>
                                    <div>
                                        <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                            Winner (Blockchain Track)</p>
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">{/*01X*/}
                                            IIT Dharwad - DevHack
                                        </h4>
                                    </div>
                                </div>

                                <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                                    <div className="flex items-start justify-between">
                                        <img draggable="false"  src="/assets/hackathon/rooloo.png" width="150px" alt="icons" />
                                        <span className="font-normal text-sm text-black-text-800">2023</span>
                                    </div>

                                    <div>
                                        <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                            Winner (Company Based)</p>
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">{/*01X*/}
                                            Roolathon
                                        </h4>
                                    </div>
                                </div>

                                <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                                    <div className="flex items-start justify-between">
                                        <img draggable="false"  src="/assets/hackathon/devhost22.png" width="150px" alt="icons" />
                                        <span className="font-normal text-sm text-black-text-800">2022</span>
                                    </div>
                                    <div>
                                        <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                            Winner (Company Based)</p>
                                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">{/*01X*/}
                                            DevHost:22
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className="flex justify-end mt-14 -mr-3">
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5625 0C27.5625 23.1273 9.1875 28.5455 0 27.8182C16.875 31.0909 25.3125 34.3636 27 54C27 40.3636 34.875 30.5455 54 27.8182C46.125 28.3636 29.8125 24 27.5625 0Z" fill="#FFB646"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}