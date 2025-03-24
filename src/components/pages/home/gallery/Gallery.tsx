import { jobs } from "@/data/jobs/jobs";
import Link from "next/link";
import GreenButton from "@/components/ui/buttons/GreenButton";
import React, { useState } from "react";

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
    <>
      <div className="py-10 bg-gray-100">
        <h3 className="text-center text-xl">Некоторые</h3>
        <h1 className="text-center text-4xl font-semibold mt-3">Наши работы</h1>
        <div className="border border-black border-3 border-green-800 w-20 mt-5 mb-3 mx-auto"></div>

        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {jobs.slice(0, 6).map((src, index) => (
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

        <div className="flex justify-center mt-9">
          <Link href="/gallery">
            <GreenButton className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition duration-300">
              Перейти в галерею
            </GreenButton>
          </Link>
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
              alt="Увеличенное изображение"
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
    </>
  );
}
