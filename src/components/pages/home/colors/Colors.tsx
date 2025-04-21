import { popularColors } from "@/data/colors/colors";
import Link from "next/link";
import GreenButton from "@/components/ui/buttons/GreenButton";

export default function Colors() {
  return (
    <div className=" py-10 px-4">
      <h1 className="text-center text-4xl font-semibold mt-3">
        Цвета покраски
      </h1>
      <div className="border border-black border-3 border-green-800 w-20 mt-5 mb-3 mx-auto"></div>

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularColors.slice(0, 3).map((color, index) => (
            <div key={index} className="text-center">
              <div
                className="w-full h-32 rounded-lg mx-auto transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: color.hex }}
              ></div>
              <p className="mt-2 text-lg">{color.name}</p>
              <p className="text-gray-600">{color.code}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/colors">
          <GreenButton className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition duration-300">
            Перейти в каталог цветов
          </GreenButton>
        </Link>
      </div>
    </div>
  );
}
