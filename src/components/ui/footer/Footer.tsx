import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-800 py-8">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-white text-sm text-center md:text-left max-w-[30%] md:max-w-none mb-2 md:mb-0">
          © 2025, Rabotyaga1155F |{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Rabotyaga1155F"
          >
            Разработка мобильных приложений и сайтов
          </a>
        </p>

        <nav className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm">
          <Link href="/" className="text-white hover:underline">
            Главная
          </Link>
          <Link href="/services" className="text-white hover:underline">
            Услуги
          </Link>
          <Link href="/colors" className="text-white hover:underline">
            Каталог цветов
          </Link>
          <Link href="/gallery" className="text-white hover:underline">
            Галерея
          </Link>
          <Link href="/reviews" className="text-white hover:underline">
            Отзывы
          </Link>
          <Link href="/contacts" className="text-white hover:underline">
            Контакты
          </Link>
        </nav>
      </div>
    </footer>
  );
}
