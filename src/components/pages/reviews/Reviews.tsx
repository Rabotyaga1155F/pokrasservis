"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Reviews() {
  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://res.smartwidgets.ru/app.js"]',
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://res.smartwidgets.ru/app.js";
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

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
            <span className="font-bold">ОТЗЫВЫ</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mt-6 relative">
            Отзывы
          </h2>
        </div>
      </div>
      <div className={"p-10"}>
        <h2 className="text-green-800 font-semibold text-3xl text-center pt-10 pb-20">
          Посмотрите отзывы наших клиентов.
        </h2>
        <div
          className="sw-app "
          data-app="6ce1d05632bb8061c3f9a80c2fbe5e48"
        ></div>
      </div>
    </div>
  );
}
