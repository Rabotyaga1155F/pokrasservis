import { services } from "@/data/services/services";
import ObjectCard from "@/components/elements/object-card/ObjectCard";
import Link from "next/link";
import GreenButton from "@/components/ui/buttons/GreenButton";
import PriceForm from "@/components/elements/price-form/PriceForm";

export default function Services() {
  return (
    <div className="mt-10 bg-gray-100 py-10 ">
      <h3 className="text-center text-xl">Наши</h3>
      <h1 className="text-center text-4xl font-semibold mt-3">Услуги</h1>
      <div className="border border-black border-3 border-green-800 w-20 mt-5 mb-3 mx-auto"></div>

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <div key={service.title} className="flex justify-center">
              <ObjectCard
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/services">
          <GreenButton className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition duration-300">
            Перейти на страницу услуг
          </GreenButton>
        </Link>
      </div>
      <PriceForm />
    </div>
  );
}
