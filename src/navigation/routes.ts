interface IRoute {
  name: string;
  href: string;
}

export const routes: IRoute[] = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Услуги",
    href: "/services",
  },
  {
    name: "Каталог цветов",
    href: "/colors",
  },
  {
    name: "Галерея",
    href: "/gallery",
  },
  {
    name: "Отзывы",
    href: "/reviews",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];
