"use client";

import Link from "next/link";
import { routes } from "@/navigation/routes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg">
      <div className="bg-gray-200 flex flex-row items-center justify-between px-5">
        <div className="flex flex-row py-5 items-center gap-5">
          <Image
            width={200}
            height={100}
            src={"/poliymer_logo.png"}
            alt={"logo"}
          />
          <div className="hidden lg:block">
            <h3 className="my-2">
              Свердловская область, г.Берёзовский, ул.Кирова 61
            </h3>
            <h3 className="my-2">
              Свердловская область, г.Екатеринбург, ул.Начдива Онуфриева 55 бокс
              747
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-5 pl-5">
          <Link target="_blank" href="https://telegram.org/">
            <Image
              width={50}
              height={50}
              src="/telegram-icon.png"
              alt="telegram-icon"
            />
          </Link>
          <Link target="_blank" href="https://api.whatsapp.com/">
            <Image
              width={50}
              height={50}
              src="/whatsapp-icon.png"
              alt="whatsapp-icon"
            />
          </Link>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              width={30}
              height={30}
              src="/burger-bar.svg"
              alt="menu-icon"
            />
          </button>
        </div>
      </div>

      <div
        className={`bg-gray-600 lg:flex flex-row justify-around items-center px-10 transition-all duration-500 ease-in-out transform ${
          isMenuOpen
            ? "max-h-[500px] opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        } lg:max-h-none lg:opacity-100 lg:scale-100 lg:block`}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            className={`relative block lg:inline-block text-xl px-4 py-2 transition-colors duration-300 text-center ${
              pathname === route.href
                ? "text-white after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[1px] after:h-[3px] after:bg-white after:w-full after:rounded"
                : "text-white hover:text-gray-400"
            }`}
            href={route.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
