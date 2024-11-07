import Image from "next/image"
import introPIC from "@/../public/Dp02.png"
export default function Home(){
    return (
        <div className="h-full w-full py-[50px] px-[50px] flex flex-col  justify-between gap-4">
            <div className="text">
                <span className="text-[28px]">Hello, it's Me</span>
                <div className="text-[40px]">Farman Khan</div>
                <span className="text-[24px]">I'm a <span className="text-[#FF8C00]">Frontend Developer</span></span>
                <p className="w-[90%] text-justify">I'm a frontend developer who loves creating websites and web apps. I use technologies like HTML, CSS, JavaScript, React, and Next.js to build clean, fast, and easy-to-use sites. I’m always looking to improve my skills and make websites that people enjoy using."</p>
            </div>
            <div className="picture">
                <Image src={introPIC} alt="Introduvtion Picture" className="h-[90%] w-[90%] text-6xl" />
            </div>
        </div>
    )
}