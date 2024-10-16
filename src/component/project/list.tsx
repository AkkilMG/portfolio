
import { project } from "@/lib/project";

export default function ProjectList() {
    return (
        <section className="bg-white pt-20 pb-[120px]">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 aos-init aos-animate" data-aos="flip-down" data-aos-delay="400">
                        <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                            <span className="text-orange text-xl">Portfolio</span>
                            <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                                My recent <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">w</span>ork
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {/* last but one none, last 300 */}
                    {project.map((proj, index) => (
                        <div
                            key={proj.id} data-aos="flip-down" data-aos-delay={800 + index * 200}
                            className={`col-span-12 md:col-span-6 lg:col-span-${index===0 || index===1 ? 6 : 4} aos-init aos-animate`}>
                            <div className="overflow-hidden relative rounded-[20px] group before:absolute before:left-0 before:right-0 before:contents before:bg-black-600 before:w-full before:h-full before:opacity-0 hover:before:opacity-80 before:transition-opacity before:duration-300 h-full">
                                <img draggable="false"  className="w-full h-full" src={proj.img} alt={proj.name} />
                                <div className="absolute bottom-[-150px] left-6 right-6 transition-all duration-300 group-hover:bottom-6">
                                    <div className="flex flex-wrap items-center justify-between text-white hover:text-orange">
                                        <h4 className="font-bold font-Syne text-center leading-10 text-[17px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] capitalize peer">
                                            <a className="transition-all" href={`/projects/${proj.id}`}>{proj.name}</a>
                                        </h4>
                                        <a href={`/projects/${proj.id}`} className="peer-hover:animate-arrow-move-up">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fillOpacity="0.9"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fillOpacity="0.9"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}