"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { sendMessageToEmail } from "@/utils/send-message/serverActions";

type FormValues = {
  works: string;
  name: string;
  phone?: string;
  email?: string;
  consent: boolean;
};

export default function PriceForm() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSubmittedText, setShowSubmittedText] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const consentChecked = watch("consent");
  const phoneValue = watch("phone");
  const emailValue = watch("email");

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      await sendMessageToEmail({
        name: data.name,
        phone: data.phone || "",
        email: data.email || "",
        works: data.works,
      });

      setSuccessMessage(true);
      setShowSubmittedText(true);
      reset();

      setTimeout(() => {
        setSuccessMessage(false);
        setShowSubmittedText(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="w-full max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Расчет стоимости
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Узнайте стоимость работ в течение 10 минут
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
          {/* Какие работы */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Какие работы необходимы
            </label>
            <textarea
              {...register("works", { required: "Опишите необходимые работы" })}
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
              placeholder="Опишите необходимые работы..."
            />
            {errors.works && (
              <p className="text-red-500 text-sm mt-1">
                {errors.works.message}
              </p>
            )}
          </div>

          {/* Имя */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Ваше имя
            </label>
            <input
              {...register("name", { required: "Введите имя" })}
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
              placeholder="Введите имя"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Телефон */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Телефон
            </label>
            <input
              {...register("phone", {
                validate: (value) => {
                  if (!value && !emailValue) {
                    return "Укажите телефон или email";
                  }
                  if (
                    value &&
                    !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(
                      value,
                    )
                  ) {
                    return "Введите корректный номер";
                  }
                  return true;
                },
              })}
              type="tel"
              placeholder="+7 (999) 999-99-99"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              {...register("email", {
                validate: (value) => {
                  if (!value && !phoneValue) {
                    return "Укажите телефон или email";
                  }
                  if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return "Введите корректный email";
                  }
                  return true;
                },
              })}
              type="email"
              placeholder="example@mail.ru"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Чекбокс */}
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register("consent", { required: true })}
              className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label className="ml-2 text-sm text-gray-600">
              Нажимая на кнопку, я даю согласие на обработку персональных данных
              на основании{" "}
              <Link
                href="/privacy"
                className="text-green-700 underline hover:text-green-900"
              >
                политики конфиденциальности
              </Link>
              .
            </label>
          </div>

          {/* Кнопка */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!consentChecked || isLoading}
              className={`px-6 py-3 rounded-lg shadow-md transition ${
                consentChecked && !isLoading
                  ? "bg-green-700 text-white hover:bg-green-800 cursor-pointer"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              {isLoading
                ? "Отправка..."
                : showSubmittedText
                  ? "Заявка отправлена"
                  : "Запросить расчет"}
            </button>
          </div>

          {/* Уведомление */}
          {successMessage && (
            <p className="text-green-700 text-center mt-4 font-semibold">
              Форма успешно отправлена!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
