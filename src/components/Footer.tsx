import Image from "next/image";
import React from "react";
import Logo from "/public/logo.svg";
import { navLink, socials } from "@/constants/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-black py-8 xl:px-32 space-y-4">
      <div className="flex items-center xl:justify-between justify-center">
        <Image src={Logo} alt="Footer Logo" />

        <div className="hidden xl:flex items-center space-x-4 cursor-pointer">
          {socials.map((data, idx) => (
            <Image src={data.image} alt="Social IDs" key={idx} />
          ))}
        </div>
      </div>

      <div className="hidden xl:flex items-center justify-between ">
        <div className="flex items-center space-x-4 ">
          {navLink.map((data, idx) => (
            <Link
              key={idx}
              href={data.url}
              className="text-slate-300 text-lg  group h-4 transition-all"
            >
              {data.name}

              <div className="group-hover:block hidden w-1/2 h-0.5 mx-auto  bg-slate-300"></div>
            </Link>
          ))}
        </div>

        <p className="text-slate-300">
          <span>&#9400;</span>
          <span>2025. All rights reserved.</span>
        </p>
      </div>

      {/* mobile footer */}
      <div className="block xl:hidden space-y-8">
        <div className="flex justify-center items-center flex-col space-y-5">
          {navLink.map((data, idx) => (
            <Link
              key={idx}
              href={data.url}
              className="text-slate-300 text-lg  group h-4 transition-all"
            >
              {data.name}

              <div className="group-hover:block hidden w-1/2 h-0.5 mx-auto  bg-slate-300"></div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 cursor-pointer">
          {socials.map((data, idx) => (
            <Image src={data.image} alt="Social Id's" key={idx} />
          ))}
        </div>

        <p className="text-center text-slate-300">
          <span>&#9400;</span>
          <span>2025. All rights reserved.</span>
        </p>
      </div>
    </div>
  );
}
