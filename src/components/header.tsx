'use client'
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    // State to track the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="h-[40px] fixed w-full p-[10px] items-center flex justify-between sm:h-[50px] sm:w-full sm:flex sm:justify-between md:justify-between bg-[#1e3852] z-100 ">
            <div id="logo" className="text-[20px] relative left-2 sm:text-[25px] font-[500] font-sans md:text-[30px]">
                Personal Portfolio
            </div>

            {/* Hamburger icon */}
            <div onClick={toggleMenu} className="text-[35px] md:hidden mr-2 cursor-pointer hamburger-icon mt-2">
                ☰
            </div>

            {/* Navbar Links for large screens */}
            <div className="w-[45%] hidden sm:hidden md:flex md:justify-evenly text-white">
                <Link href='/' className="hover:text-[#FF8C00]">Home</Link>
                <Link href='/About' className="hover:text-[#FF8C00]">About</Link>
                <Link href='/Projects' className="hover:text-[#FF8C00]">Projects</Link>
                <Link href='/Contact' className="hover:text-[#FF8C00]">Contact</Link>
            </div>

            {/* Mobile Menu (positioned on the right, width 30%, with md navbar color and hover effect) */}
            {isMenuOpen && (
                <div className="absolute top-[50px] right-0 w-[20%] bg-[#1e3852] text-white z-50 flex flex-col items-center space-y-1 py-2 md:hidden">
                    <Link href='/' className="py-4 hover:text-[#FF8C00]" onClick={toggleMenu}>Home</Link>
                    <Link href='/About' className="py-4 hover:text-[#FF8C00]" onClick={toggleMenu}>About</Link>
                    <Link href='/Projects' className="py-4 hover:text-[#FF8C00]" onClick={toggleMenu}>Projects</Link>
                    <Link href='/Contact' className="py-4 hover:text-[#FF8C00]" onClick={toggleMenu}>Contact</Link>
                </div>
            )}
        </header>
    );
}
