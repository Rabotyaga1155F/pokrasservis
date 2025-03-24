import React from "react";
import colors from "@/data/colors/colors";
import Link from "next/link";

export default function Colors() {
  return (
    <div className="min-h-screen">
      <div
        className="h-52 relative flex flex-col justify-center text-white text-left bg-cover bg-center before:absolute before:inset-0 before:bg-black/50"
        style={{ backgroundImage: "url('/bg-head.jpg')" }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-10">
          <h1 className="text-lg md:text-lg relative">
            <Link href={"/"}>
              <span className="font-light">ГЛАВНАЯ</span>
            </Link>{" "}
            <span className="text-white">•</span>{" "}
            <span className="font-bold">КАТАЛОГ ЦВЕТОВ</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mt-6 relative">
            Каталог цветов
          </h2>
        </div>
      </div>

      <div className="p-10">
        <div className="w-full max-w-[1200px] mx-auto px-0 sm:px-10">
          <h2 className="text-green-800 font-semibold text-3xl text-center pt-10 pb-20">
            Список цветов для ознакомления
          </h2>
          <p className="text-red-500 text-base text-center pt-5">
            Внимание! Цвета на экране монитора ЗНАЧИТЕЛЬНО отличаются от
            печатных оригиналов из-за особенностей цветопередачи. Данная таблица
            не может служить онлайн-каталогом и предоставляется только в
            ознакомительных целях. Цвета RAL не имеют соответствий в системах:
            CMYK, Pantone, NCS, HTML или в RGB.
          </p>

          <div className="overflow-x-auto mt-10">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-green-800 text-white">
                  <th className="w-1/2 p-3 border border-gray-300 md:text-sm sm:text-xs">
                    Цвет
                  </th>
                  <th className="w-1/4 p-3 border border-gray-300 md:text-sm sm:text-xs">
                    Цвет RAL
                  </th>
                  <th className="w-1/4 p-3 border border-gray-300 md:text-sm sm:text-xs">
                    Название
                  </th>
                </tr>
              </thead>
              <tbody>
                {colors.map((color, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-3 border border-gray-300">
                      <div
                        className="color-box mx-auto w-full h-20 transform transition-transform duration-300 hover:scale-105"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                    </td>
                    <td className="border border-gray-300 p-3">{color.code}</td>
                    <td className="border border-gray-300 p-3">{color.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
