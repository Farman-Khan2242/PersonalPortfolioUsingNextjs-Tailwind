import Link from "next/link"
export default function Contact(){
    return (
        <div className="pt-[100px] flex flex-col justify-center items-center gap-10">
                 <h1 className="text-[40px] md:text-[45px] font-bold tracking-[2px]">Contact <span className="text-[#FF8C00]">Me!</span></h1>
                <div className="flex gap-[50px] w-full flex-col  md:flex-row justify-center md:gap-[10px]">
                    <section className=" p-[20px] flex flex-col gap-[30px]">
                        
                            <div className="flex gap-2">
                                <i className="fa-solid fa-phone  text-[20px]"></i>
                                <span className="tracking-[0.3px]">0317-0218621</span>
                            </div>

                            <div className="flex gap-2">
                                <i className="fa-brands fa-whatsapp text-[25px]"></i>
                                <span className="tracking-[0.3px]">0342-9366991</span>
                            </div>
                            
                            <div className="flex gap-2">
                                <i className="fa-regular fa-envelope text-[20px]"></i>
                                <span className="tracking-[0.3px]">farman03170218621@gmail.com</span>
                            </div>
                            <div className="flex gap-2">
                                <i className="fa-solid fa-location-dot text-[20px]"></i>
                                <span className="">Metroville, Orangi Town
                                Karachi, Sindh, Pakistan</span>
                            </div>
                            <div className="flex gap-6 mt-4">
                                <Link href='https://web.facebook.com/farmanProfileFacebook' target="_blank">
                                    <i className="fa-brands fa-facebook text-[30px]"></i>
                                </Link>
                                <Link href='https://www.linkedin.com/in/farman-khan-b879b72b4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BRZHPZIutRqyPDtQIVnlD6Q%3D%3D' target="_blank">
                                    <i className="fa-brands fa-linkedin text-[30px]"></i>
                                </Link>
                                <Link href='https://github.com/Farman-Khan2242' target="_blank">
                                <i className="fa-brands fa-github text-[30px]" ></i>
                                </Link>
                            </div>
                    </section>
                        
                    <section className="flex flex-col justify-center items-center gap-[30px] p-[20px] text-black">
                        <input type="text" placeholder="Your Name" className="p-[20px] h-[30px] w-full md:w-[400px] focus:outline-none"  />
                        
                        <input type="email" placeholder="Your Email" className="p-[20px] h-[30px] w-full md:w-[400px] focus:outline-none"  />

                        <textarea name="feedback" placeholder="Send Message" className="p-[20px] h-[200px] w-full md:w-[400px] focus:outline-none"></textarea>

                        <button className="bg-white text-[#FF8C00] p-[10px] font-semibold w-[100px] tracking-[1px] self-end focus:outline-none focus:border-none active:text-[#FF8C00] active:bg-[white] hover:bg-[#FF8C00] hover:text-[white]">Submit</button>
                    </section>
                </div>            
        </div>
    )
}