"use client";
import React, { useState } from "react";
import { jobs } from "@/data/jobs/jobs";
import Link from "next/link";

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <div
        className="h-52 relative flex flex-col justify-center text-white text-left bg-cover bg-center before:absolute before:inset-0 before:bg-black/50"
        style={{ backgroundImage: "url('/bg-head.jpg')" }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-10">
          <h1 className="text-lg md:text-lg relative">
            <Link href={"/"}>
              <span className="font-light">ГЛАВНАЯ</span>{" "}
            </Link>
            <span className="text-white">•</span>{" "}
            <span className="font-bold">ГАЛЕРЕЯ</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mt-6 relative">
            Галерея
          </h2>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center py-10 ">
        <h2 className="text-green-800 font-semibold text-3xl text-center pt-10 pb-20">
          Наши работы
        </h2>
        <div className="w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {jobs.map((src, index) => (
              <div
                key={index}
                className="w-full aspect-[4/3] overflow-hidden"
                onClick={() => openModal(src)}
              >
                <img
                  src={src}
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-black/50"
          onClick={closeModal}
        >
          <div
            className="relative w-auto max-w-4xl bg-transparent rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto transform transition-all duration-500 ease-in-out scale-110"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white text-black px-2 text-xl cursor-pointer rounded-full hover:bg-gray-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
