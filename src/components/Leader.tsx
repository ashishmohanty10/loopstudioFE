import React from "react";
import DesktopInterative from "/public/desktop/image-interactive.jpg";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function Leader() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      className="xl:grid grid-cols-2 items-end py-10 space-y-6 xl:space-y-0"
    >
      <div className="col-span-1">
        <Image src={DesktopInterative} alt="Desktop Interactive image" />
      </div>

      <div className="col-span-1 space-y-4 xl:p-10 bg-white xl:-translate-x-36">
        <motion.h2 className="text-4xl font-nomal text-center xl:text-left">
          THE LEADER IN <br />
          INTERACTIVE VR
        </motion.h2>
        <p className="text-center xl:text-left text-slate-400">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </motion.section>
  );
}
