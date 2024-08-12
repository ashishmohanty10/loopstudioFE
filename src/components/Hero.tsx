import Image from "next/image";
import React from "react";
import DesktopHeroImage from "/public/desktop/image-hero.jpg";
import MobileHeroImage from "/public/mobile/image-hero.jpg";

export default function HeroImage() {
  return (
    <section className="absolute top-0  w-full -z-50">
      <div className="">
        <Image
          src={DesktopHeroImage}
          alt="Desktop view of hero section"
          className="hidden xl:block w-full h-screen object-cover"
        />
        <Image
          src={MobileHeroImage}
          alt="Mobile view of hero section"
          className="block xl:hidden h-screen w-full object-cover"
        />
      </div>
    </section>
  );
}

export function HeroTxt() {
  return (
    <>
      <div className="h-[88vh] flex items-center -z-40 leading-6">
        <p className="border-2 border-slate-200 w-full xl:w-2/3 p-12 md:text-6xl z-50 text-white font-light text-4xl leading-relaxed">
          <span>IMMERSIVE </span> <br />
          <span>EXPERIANCE</span> <br />
          <span>THAT DELIVER</span>
        </p>
      </div>
    </>
  );
}
