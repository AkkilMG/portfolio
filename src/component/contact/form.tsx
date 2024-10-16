


export default function ContactForm() {
    
    return (
        <section className="bg-white pt-20 pb-[120px]">
                <div className="container pt-20 mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-6 aos-init aos-animate" data-aos="fade-up">
                            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                                <span className="text-orange text-xl">Contact</span>
                                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                                    <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">Le</span>t’s
                                    <br className="hidden lg:block" />
                                    connect
                                </h3>
                            </div>

                            <div className="flex flex-wrap flex-col gap-7">
                                <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                                    <span>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.33366 5.33325H26.667C28.1337 5.33325 29.3337 6.53325 29.3337 7.99992V23.9999C29.3337 25.4666 28.1337 26.6666 26.667 26.6666H5.33366C3.86699 26.6666 2.66699 25.4666 2.66699 23.9999V7.99992C2.66699 6.53325 3.86699 5.33325 5.33366 5.33325Z" stroke="#080808" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M29.3337 8L16.0003 17.3333L2.66699 8" stroke="#080808" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>

                                    </span>
                                    <div className="flex flex-wrap flex-col flex-1">
                                        <span className="paragraph !leading-none">Email us</span>
                                        <h5 className="text-xl font-bold font-Syne text-black-800 leading-7">
                                        <a href="mailto:akkilcharanmg@gmail.com" target="_blank" className="text-orange">akkilcharanmg@gmail.com</a>
                                        </h5>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                                    <span>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 29C6 28.4477 6.44772 28 7 28H25C25.5523 28 26 28.4477 26 29C26 29.5523 25.5523 30 25 30H7C6.44772 30 6 29.5523 6 29Z" fill="#080808" fillOpacity="0.9"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16 10C14.3431 10 13 11.3431 13 13C13 14.6569 14.3431 16 16 16C17.6569 16 19 14.6569 19 13C19 11.3431 17.6569 10 16 10ZM11 13C11 10.2386 13.2386 8 16 8C18.7614 8 21 10.2386 21 13C21 15.7614 18.7614 18 16 18C13.2386 18 11 15.7614 11 13Z" fill="#080808" fillOpacity="0.9"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16 4C13.6131 4 11.3239 4.94821 9.63604 6.63604C7.94821 8.32387 7 10.6131 7 13C7 17.1399 9.31185 20.9096 11.7546 23.7188C12.9638 25.1094 14.1755 26.2305 15.0851 27.0037C15.4449 27.3095 15.7562 27.5599 16 27.75C16.2438 27.5599 16.5551 27.3095 16.9149 27.0037C17.8245 26.2305 19.0362 25.1094 20.2454 23.7188C22.6882 20.9096 25 17.1399 25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.3869 4 16 4ZM16 29C15.4265 29.8192 15.4263 29.819 15.4259 29.8188L15.4251 29.8182L15.4228 29.8166L15.4154 29.8114L15.39 29.7933C15.3683 29.7778 15.3375 29.7557 15.2981 29.7269C15.2192 29.6693 15.1059 29.5853 14.9631 29.4762C14.6775 29.2579 14.2732 28.9384 13.7899 28.5276C12.8245 27.707 11.5362 26.5156 10.2454 25.0312C7.68815 22.0904 5 17.8601 5 13C5 10.0826 6.15893 7.28473 8.22183 5.22183C10.2847 3.15893 13.0826 2 16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27 17.8601 24.3118 22.0904 21.7546 25.0312C20.4638 26.5156 19.1755 27.707 18.2101 28.5276C17.7268 28.9384 17.3225 29.2579 17.0369 29.4762C16.8941 29.5853 16.7808 29.6693 16.7019 29.7269C16.6625 29.7557 16.6317 29.7778 16.61 29.7933L16.5846 29.8114L16.5772 29.8166L16.5749 29.8182L16.5741 29.8188C16.5737 29.819 16.5735 29.8192 16 29ZM16 29L16.5735 29.8192C16.2291 30.0603 15.7709 30.0603 15.4265 29.8192L16 29Z" fill="#080808" fillOpacity="0.9"></path>
                                        </svg>
                                    </span>
                                    <div className="flex flex-wrap flex-col flex-1">
                                        <span className="paragraph !leading-none">Telegram</span>
                                        <h5 className="text-xl font-bold font-Syne text-black-800 leading-7">
                                            <a href="https://t.me/heimancreatiin" target="_blank" className="text-orange">t.me/HeimanCreatiin</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <form id="contact-form" action="mail.php" method="post" className="grid grid-cols-12 gap-[18px]">
                                <div className="col-span-12 md:col-span-6">
                                    <label className="text-sm font-normal leading-tight mb-3 block" htmlFor="name">Name</label>
                                    <input id="name" className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none " type="text" required={true} placeholder="Your name*" name="name" />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label className="text-sm font-normal leading-tight mb-3 block" htmlFor="Email">Email</label>
                                    <input id="Email" className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none " type="email" required={true} placeholder="Your email*" name="email" />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label className="text-sm font-normal leading-tight mb-3 block" htmlFor="Phone">Phone</label>
                                    <input id="Phone" className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none " type="text" required={true} placeholder="Your number" name="phone" />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label className="text-sm font-normal leading-tight mb-3 block" htmlFor="Subject">Subject*</label>
                                    <input id="Subject" className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none " type="text" required={true} placeholder="Your subject*" name="subject" />
                                </div>
                                <div className="col-span-12">
                                    <label className="text-sm font-normal leading-tight mb-3 block" htmlFor="Message">Message</label>
                                    <textarea className="h-[100px] font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none resize-none" name="message" id="Message" cols={30} rows={10} required={true} placeholder="Type your message"></textarea>
                                </div>

                                <div className="col-span-12">
                                    <button className="flex items-center flex-wrap btn-primary group" type="submit">Submit
                                        <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </button>
                                    <p className="form-message mt-3"></p>
                                </div>

                                <div className="col-span-12">
                                    <div className="justify-start sm:items-center gap-[23px] inline-flex mt-14 flex-col sm:flex-row">
                                        <svg width="110" height="2" viewBox="0 0 110 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 1H110" stroke="#080808" strokeOpacity="0.1"></path>
                                        </svg>

                                        <div className="flex flex-wrap gap-[23px]">
                                            <h4 className="text-black-800 text-xl font-bold font-Syne leading-7">Follow me</h4>
                                            <ul className="flex flex-wrap gap-x-4 items-center">
                                                <li><a href="https://www.linkedin.com/in/akkilmg/" className="text-black-800 transition-all duration-300 hover:text-orange">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z" fill="currentColor" fillOpacity="0.9"></path>
                                                    </svg>
                                                </a></li>
                                                <li><a href="https://github.com/AkkilMG/" className="text-black-800 transition-all duration-300 hover:text-orange">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z" fill="currentColor" fillOpacity="0.9"></path>
                                                    </svg>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
    );
}