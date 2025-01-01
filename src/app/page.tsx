import Footer from "@/components/Footer";
import HeroImage, { HeroTxt } from "@/components/Hero";
import Leader from "@/components/Leader";
import OurCreations from "@/components/OurCreations";
import React from "react";

function page() {
  return (
    <div>
      <HeroImage />

      <section className="flex flex-col space-y-5 -z-50 justify-center max-w-[80rem] mx-auto">
        <HeroTxt />
        <Leader />
        <OurCreations />
      </section>

      <Footer />
    </div>
  );
}

export default page;
