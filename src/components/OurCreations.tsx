import { ourCreationDesktop, ourCreationMobile } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";

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
        <div className="xl:grid grid-cols-4 gap-6 cursor-pointer">
          {ourCreationDesktop.map((data, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="flex items-center justify-center relative"
              key={idx}
            >
              <Image src={data.img} alt="our creation img" className="w-full" />

              <p className="absolute bottom-10 left-10 text-white font-light text-3xl w-[170px]  tracking-wide ">
                {data.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="block xl:hidden space-y-10">
        <div className="space-y-5">
          {ourCreationMobile.map((data, idx) => (
            <div className="relative " key={idx}>
              <Image src={data.img} alt="our creation img" className="w-full" />

              <p className="absolute left-10 top-16 text-white font-light text-3xl w-[150px] tracking-tight">
                {data.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex space-y-5 items-center justify-center">
          <button className="block border xl:hidden border-slate-900 px-6 py-2 tracking-widest hover:bg-black hover:text-white transition-all text-center">
            SEE ALL
          </button>
        </div>
      </div>
    </section>
  );
}
