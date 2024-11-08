import Image from "next/image"
import introPIC from "@/../public/Dp02.png"
import Link from "next/link"
export default function Home(){
    return (
        <div className="h-full w-full py-[50px] px-[50px] md:w-full md:h-fit  md:py-[100px] md:px-[40px] flex flex-col  justify-between gap-4 items-center md:flex md:flex-row xl:px-[100px] xl:py-[80px]">
            <div className="text w-[100%] md:w-[100%] " >
                <span className="text-[28px] sm:text-[30px] md:text-[40px] xl:text-[46px]">Hello, it's Me</span>
                <div className="text-[40px] sm:text-[42px] md:text-[60px] xl:text-[72px]">Farman Khan</div>
                <span className="text-[24px] sm:text-[26px] md:text-[38px] xl:text-[44px]">I'm a <span className="text-[#FF8C00]">Frontend Developer</span></span>
                <p className="w-[90%] text-justify md:w-[100%]">Who loves creating websites and web apps. I use technologies like HTML, CSS, JavaScript, React, and Next.js to build clean, fast, and easy-to-use sites. I’m always looking to improve my skills and make websites that people enjoy using.</p>

                <div className="mt-5 flex gap-5">
                    <div className="button h-[40px] w-[40px] rounded-[50%] border-[#FF8C00] border-[2.5px] flex justify-center items-center cursor-pointer p-[20px] lg:h-[50px] lg:w-[50px]">
                        <Link href='https://web.facebook.com/farmanProfileFacebook' target="_blank"><i className="fa-brands fa-facebook-f text-white text-[20px] md:text-[25px] lg:text-[30px]" ></i></Link>      
                    </div>

                    <div className="button h-[40px] w-[40px] rounded-[50%] border-[#FF8C00] border-[2.5px] flex justify-center items-center cursor-pointer p-[20px] md:h-[50px] md:w-[50px] lg:h-[50px] lg:w-[50px]">
                        <Link href='https://www.linkedin.com/in/farman-khan-b879b72b4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BRZHPZIutRqyPDtQIVnlD6Q%3D%3D' target="_blank"><i className="fa-brands fa-linkedin-in text-white text-[20px] md:text-[25px] lg:text-[30px]" ></i></Link>      
                    </div>

                    <div className="button h-[40px] w-[40px] md:h-[50px] md:w-[50px]  lg:h-[50px] lg:w-[50px] rounded-[50%] border-[#FF8C00] border-[2.5px] flex justify-center items-center cursor-pointer p-[20px]">
                        <Link href='https://github.com/Farman-Khan2242' target="_blank"><i className="fa-brands fa-github text-white text-[20px] md:text-[25px] lg:text-[30px] "></i></Link>      
                    </div> 
                </div>  
                
                
            </div>
            <div className="picture">
                <Image src={introPIC} alt="Introduvtion Picture" className="h-[90%] w-[90%] md:w-[100%] " />
            </div>
        </div>
    )
}