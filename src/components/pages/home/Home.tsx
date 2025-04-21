"use client";
import React from "react";
import Benefits from "@/components/pages/home/benefits/Benefits";
import Services from "@/components/pages/home/services/Services";
import Colors from "@/components/pages/home/colors/Colors";
import Gallery from "@/components/pages/home/gallery/Gallery";
import Reviews from "@/components/pages/home/reviews/Reviews";
import Contacts from "@/components/pages/home/contacts/Contacts";

export default function Home() {
  return (
    <>
      <div
        className="h-[450px] flex items-center justify-center text-white text-center relative bg-cover bg-center before:absolute before:inset-0 before:bg-black/50"
        style={{ backgroundImage: "url('/pokras-main.jpg')" }}
      >
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">PS-POLYMER</h1>
          <p className="mt-4 text-lg md:text-xl max-w-[600px] mx-auto">
            Профессиональное порошковое окрашивание с применением передовых
            технологий. Высокое качество, долговечность и эстетика в каждой
            детали.
          </p>
        </div>
      </div>

      <Benefits />

      <Services />

      <Colors />

      <Gallery />

      <Reviews />

      <Contacts />
    </>
  );
}
