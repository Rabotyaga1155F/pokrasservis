import Link from "next/link";
import GreenButton from "@/components/ui/buttons/GreenButton";
import React from "react";

export default function Contacts() {
  return (
    <div className="mt-10 bg-gray-100 py-10 ">
      <h3 className="text-center text-xl">Наши сервисы</h3>
      <h1 className="text-center text-4xl font-semibold mt-3">На карте</h1>
      <div className="border border-black border-3 border-green-800 w-20 mt-5 mb-3 mx-auto"></div>

      <div className="max-w-[1200px] mx-auto px-4">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d47da3dd1a215bd95d301d9cd5eba6bd723b8906edb2d54300bef2496baf215&amp;source=constructor"
          className="w-full max-w-[1200px] h-[400px] mx-auto"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/contacts">
          <GreenButton className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition duration-300">
            Перейти на страницу контактов
          </GreenButton>
        </Link>
      </div>
    </div>
  );
}
