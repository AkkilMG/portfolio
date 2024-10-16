
export default function Header() {
    return (
        <>
            <header id="sticky-header" className="xl:pl-12 absolute left-0 top-0 w-full z-10 is-sticky">
                <div className="flex pl-4 xl:pl-0">

                    <div className="flex-1 flex items-center justify-between border-b border-black-800 border-opacity-40">

                        <a href="/">
                            <img draggable="false"  src="/logo/letter-dark.png" width={164} height={32} alt="logo" />
                        </a>

                        {/* <!-- Link Start --> */}
                        <a href="/contact" className="flex items-center flex-wrap text-[15px] font-bold text-active leading-none mr-2 transition-all duration-300 hover:text-orange md:hover:text-white group py-7 px-[38px]">Let’s
                            Talk
                            <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                        </a>
                        {/* <!-- Link End --> */}
                    </div>
                </div>
            </header>
        </>
    );
}
