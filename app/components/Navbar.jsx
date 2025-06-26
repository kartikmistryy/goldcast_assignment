'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full h-[9vh] px-6 lg:px-10 bg-black text-white flex items-center justify-between relative z-50">
      <div className="w-fit h-fit lg:min-w-[300px]">
        <Image
          src="/logo.png"
          width={200}
          height={100}
          alt="logo"
          className="w-full h-fit max-w-[100px]"
        />
      </div>

      <ul className="hidden lg:flex gap-[28px] text-[#ffffffb4]">
        <li className="hover:text-white transition-all duration-300"><Link href="#">Platform</Link></li>
        <li className="hover:text-white transition-all duration-300"><Link href="#">Solutions</Link></li>
        <li className="hover:text-white transition-all duration-300"><Link href="#">Pricing</Link></li>
        <li className="hover:text-white transition-all duration-300"><Link href="#">Customers</Link></li>
        <li className="hover:text-white transition-all duration-300"><Link href="#">Events</Link></li>
      </ul>

      <div className="hidden lg:flex gap-5 min-w-[300px] items-center justify-end">
        <button className="w-[110px] h-10 rounded-full border-2 border-gray-400 text-sm font-medium hover:bg-white hover:text-black transition">Login</button>
        <button className="w-[110px] h-10 rounded-full text-sm font-medium bg-[#FF4200] text-white">Get a Demo</button>
      </div>

      <button
        className="lg:hidden z-50"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Menu"
      >
        {mobileOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </button>

      <div className={`absolute top-[9vh] left-0 w-full bg-black flex flex-col items-center gap-6 py-6 text-white transition-all duration-500 lg:hidden ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'} `}>
        <Link href="#" onClick={() => setMobileOpen(false)}>Platform</Link>
        <Link href="#" onClick={() => setMobileOpen(false)}>Solutions</Link>
        <Link href="#" onClick={() => setMobileOpen(false)}>Pricing</Link>
        <Link href="#" onClick={() => setMobileOpen(false)}>Customers</Link>
        <Link href="#" onClick={() => setMobileOpen(false)}>Events</Link>
        <button className="w-[80%] h-10 rounded-full border border-gray-400 text-sm font-medium hover:bg-white hover:text-black transition">Login</button>
        <button className="w-[80%] h-10 rounded-full text-sm font-medium bg-[#FF4200] text-white">Get a Demo</button>
      </div>
    </nav>
  );
};
