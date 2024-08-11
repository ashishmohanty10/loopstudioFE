import Footer from "@/components/Footer";
import HeroImage, { HeroTxt } from "@/components/Hero";
import Leader from "@/components/Leader";
import OurCreations from "@/components/OurCreations";
import React from "react";

function page() {
  return (
    <div className="">
      <HeroImage />

      <section className="flex flex-col space-y-5 px-10 xl:px-32 -z-50">
        <HeroTxt />
        <Leader />
        <OurCreations />
      </section>

      <Footer />
    </div>
  );
}

export default page;
