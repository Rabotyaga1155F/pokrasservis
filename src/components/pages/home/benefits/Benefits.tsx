import React from "react";

const benefits = [
  { icon: "/clock.svg", text: "Строгое соблюдение сроков" },
  { icon: "/users.svg", text: "Тысячи довольных клиентов" },
  { icon: "/shield.svg", text: "Гарантия качества" },
  { icon: "/medal.svg", text: "Высокие стандарты" },
];

export default function Benefits() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:justify-center items-center py-10 px-4 gap-8 md:gap-10">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center text-center px-6 md:px-4"
        >
          <img src={benefit.icon} alt="icon" className="w-16 h-16 mb-2" />
          <p className="text-lg">{benefit.text}</p>
        </div>
      ))}
    </div>
  );
}
