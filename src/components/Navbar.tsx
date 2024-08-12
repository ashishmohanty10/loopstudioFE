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
    <nav className="h-[12vh] flex items-center justify-between px-10 xl:px-32">
      <Link href={"/"} className="z-50">
        <Image src={Logo} alt="Logo" />
      </Link>

      <div className="items-center space-x-5 hidden md:flex">
        {navLink.map((data, idx) => (
          <Link
            href={data.url}
            key={idx}
            className="text-white group h-4 transition-all"
          >
            {data.name}

            <div className="group-hover:block hidden w-1/2 h-0.5 mx-auto  bg-slate-300"></div>
          </Link>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden transition-all z-999" onClick={handleNavbar}>
        <div className="">
          {isNavOpen ? (
            <Image
              src={HamburgerClose}
              alt="Hamburger Open"
              className="z-999"
            />
          ) : (
            <Image
              src={HamburgerOpen}
              alt="Hamburder close"
              className="z-999"
            />
          )}
        </div>

        <div className="absolute w-full top-0 left-0 -z-10">
          {isNavOpen && (
            <div className="flex flex-col items-start justify-center gap-4 bg-black min-h-screen space-y-10">
              {navLink.map((data, idx) => (
                <Link
                  href={data.url}
                  key={idx}
                  className="text-white text-2xl pl-10   group h-4 transition-all"
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
