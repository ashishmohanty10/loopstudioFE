import { ourCreationDesktop, ourCreationMobile } from "@/constants/constants";
import Image from "next/image";
import React from "react";

export default function OurCreations() {
  return (
    <section className="py-16 space-y-6">
      <div className="xl:flex items-center justify-between">
        <p className="text-3xl font-normal text-center xl:text-left">
          OUR CREATIONS
        </p>

        <button className="border xl:block hidden border-slate-900 px-6 py-2 tracking-widest hover:bg-black hover:text-white transition-all text-center">
          SEE ALL
        </button>
      </div>

      <div className="hidden xl:block">
        <div className="xl:grid grid-cols-4 gap-6 ">
          {ourCreationDesktop.map((data, idx) => (
            <div
              className="flex items-center justify-center relative"
              key={idx}
            >
              <Image src={data.img} alt="our creation img" className="w-full" />

              <p className="absolute bottom-8 left-2 text-white font-light text-4xl"></p>
            </div>
          ))}
        </div>
      </div>

      <div className="block xl:hidden">
        <div className="space-y-5">
          {ourCreationMobile.map((data, idx) => (
            <div className="relative" key={idx}>
              <Image src={data.img} alt="our creation img" className="w-full" />

              <p className="absolute px-2 top-8 text-white font-light text-3xl"></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
