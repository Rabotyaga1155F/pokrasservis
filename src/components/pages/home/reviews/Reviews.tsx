import Link from "next/link";
import GreenButton from "@/components/ui/buttons/GreenButton";
import React, { useEffect } from "react";

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
    <div className="py-10 px-4">
      <h3 className="text-center text-xl">Только хорошие</h3>
      <h1 className="text-center text-4xl font-semibold mt-3">Отзывы</h1>
      <div className="border border-black border-3 border-green-800 w-20 mt-5 mb-3 mx-auto"></div>

      <div className="max-w-[1200px] mx-auto px-4">
        <div
          className="sw-app "
          data-app="6ce1d05632bb8061c3f9a80c2fbe5e48"
        ></div>
      </div>

      <div className="flex justify-center mt-6">
        <Link href="/reviews">
          <GreenButton className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition duration-300">
            Перейти в отзывы
          </GreenButton>
        </Link>
      </div>
    </div>
  );
}
