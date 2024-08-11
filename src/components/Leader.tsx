import React from "react";
import DesktopInterative from "/public/desktop/image-interactive.jpg";
import MobileInteractive from "/public/mobile/image-interative.jpg";
import Image from "next/image";

export default function Leader() {
  return (
    <section className="xl:grid grid-cols-2 items-end py-10 space-y-6 xl:space-y-0">
      <div className="col-span-1">
        <Image src={DesktopInterative} alt="Desktop Interactive image" />
      </div>

      <div className="col-span-1 space-y-4 xl:p-10 bg-white xl:-translate-x-36">
        <h2 className="text-4xl font-nomal text-center xl:text-left">
          THE LEADER IN <br />
          INTERACTIVE VR
        </h2>
        <p className="text-center xl:text-left text-slate-400">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
