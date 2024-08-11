"use client";

import React, { useState } from "react";
import Logo from "/public/logo.svg";
import HamburgerOpen from "/public/icon-hamburger.svg";
import HamburgerClose from "/public/icon-close.svg";
import Image from "next/image";
import { navLink } from "@/constants/constants";
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="h-[10vh] flex items-center justify-between px-10">
      <Link href={"/"} className="z-10">
        <Image src={Logo} alt="Logo" />
      </Link>

      <div className="space-x-5 hidden md:block">
        {navLink.map((data, idx) => (
          <Link href={data.url} key={idx}>
            {data.name}
          </Link>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden  transition-all " onClick={handleNavbar}>
        <div className="z-10">
          {isNavOpen ? (
            <Image src={HamburgerClose} alt="Hamburger Open" />
          ) : (
            <Image src={HamburgerOpen} alt="Hamburder close" />
          )}
        </div>

        <div className="absolute w-full top-0 left-0">
          {isNavOpen && (
            <div className="flex flex-col items-start justify-center gap-4 bg-black  min-h-screen">
              {navLink.map((data, idx) => (
                <Link
                  href={data.url}
                  key={idx}
                  className="text-white text-2xl pl-10"
                >
                  {data.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
