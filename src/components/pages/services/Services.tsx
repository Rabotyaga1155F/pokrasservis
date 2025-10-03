import React from "react";
import ObjectCard from "@/components/elements/object-card/ObjectCard";
import { IService, services } from "@/data/services/services";
import Link from "next/link";
import PriceForm from "@/components/elements/price-form/PriceForm";

const groupServicesByCategory = (services: IService[]) => {
  return services.reduce(
    (acc, service) => {
      const category = service.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    },
    {} as Record<string, IService[]>,
  );
};

export default function Services() {
  const groupedServices = groupServicesByCategory(services);

  return (
    <div className="min-h-screen">
      {/* Заголовок */}
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
            <span className="font-bold">УСЛУГИ</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mt-6 relative">
            Услуги
          </h2>
        </div>
      </div>

      {/* Услуги */}
      <div className="p-10">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-10">
          <h2 className="text-green-800 font-semibold text-3xl text-center pt-10 pb-5">
            Наши услуги – качество и надежность.
          </h2>
        </div>
        {Object.keys(groupedServices).map((category) => (
          <div
            key={category}
            className="w-full max-w-[1200px] mx-auto px-4 sm:px-10 mt-10"
          >
            <h3 className="text-center font-semibold text-xl pb-6">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 justify-center">
              {groupedServices[category].map((service) => (
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
        ))}
      </div>

      <div id="services-form"/>
        <PriceForm />
    </div>
  );
}
