import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
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
            <span className="font-bold">КОНТАКТЫ</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mt-6 relative">
            Контакты
          </h2>
        </div>
      </div>

      <div className="p-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-around md:gap-16 mb-8">
          <div className="flex items-start">
            <Image
              className="mr-6"
              width={30}
              height={30}
              src="/map.svg"
              alt="map-icon"
            />
            <div>
              <h4 className="font-semibold text-xl">СЕРВИС:</h4>
              <p className="max-w-[350px] mb-1">
                Свердловская область, г.Берёзовский, ул.Кирова 61
              </p>
              <a href="tel:+79221499090" className="underline text-green-800">
                +7 (922) 149-90-90
              </a>
              <p>
                <a>
                  <a
                    href="mailto:pokrasservispolimer@gmail.com"
                    className="underline text-green-800"
                  >
                    pokrasservispolimer@gmail.com
                  </a>
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start mt-6 md:mt-0">
            <Image
              className="mr-6"
              width={30}
              height={30}
              src="/map.svg"
              alt="map-icon"
            />
            <div>
              <h4 className="font-semibold text-xl">СЕРВИС:</h4>
              <p className="max-w-[350px] mb-1">
                Свердловская область, г.Екатеринбург, ул.Начдива Онуфриева 55
                бокс 747
              </p>
              <a href="tel:+79221439090" className="underline text-green-800">
                +7 (922) 143-90-90
              </a>
              <p>
                <a>
                  <a
                    href="mailto:pokrasservispolimer@gmail.com"
                    className="underline text-green-800"
                  >
                    pokrasservispolimer@gmail.com
                  </a>
                </a>
              </p>
            </div>
          </div>
        </div>

        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d47da3dd1a215bd95d301d9cd5eba6bd723b8906edb2d54300bef2496baf215&amp;source=constructor"
          className="w-full max-w-[1200px] h-[400px] mx-auto"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}
