import Image from "next/image"
import AboutPicture from '@/../public/writing.webp'  
export default function About(){
    return ( 
        <div className="pt-[100px] pl-[30px] pb-[30px] pr-[30px] sm:px-[60px] flex gap-[20px] md:flex md:flex-row-reverse md:pt-[150px] md:pl-[90px] justify-center flex-col-reverse ">
            <div className="flex justify-center items-center md:flex-1 xl:flex-1">
                <Image src={AboutPicture} alt="About" width={400} height={400} className="sm:h-[100%] sm:w-[100%] md:h-[100%]  md:w-[100%] lg:h-[100%] lg:w-[100%]  xl:h-[90%] xl:w-[90%]"  />
            </div>

            <div className="w-full md:w-[60%] text-justify xl:w-[50%]">
                <div className="text-[34px] font-bold text-[#FF8C00] md:text-[44px] tracking-[2px]">About Me </div>
                <div className="text-[26px] md:text-[32px] tracking-[2px]">Frontend Developer</div>
                <p className="md:tracking-[0.1px]">Hi there! I’m a frontend developer who loves building websites that are easy to use and look great. My journey into web development started with a simple curiosity about how websites work, and now I’m lucky to create my own. I work mainly with HTML, CSS, and JavaScript, and I enjoy using tools like React and Next.js to make websites interactive and responsive.</p>
                <br />

                <p className="md:tracking-[0.1px]">When I create websites, I always aim to keep them clean, well-organized, and user-friendly. I believe that good design and simple, clear code are key to making a website enjoyable for everyone. I pay close attention to details, like making sure pages load quickly, animations run smoothly, and the site looks good on any device.</p>
                <br />
                <p className="md:tracking-[0.1px]"> I’m excited to work on new projects that challenge me and help me grow as a developer. Let’s connect and bring fresh ideas to life together!</p>
            </div>
        </div>
    )
}
