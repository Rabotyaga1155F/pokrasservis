import service1 from "@/assets/images/services/pokraska-metall.jpg";
import service2 from "@/assets/images/services/20200715_172909-scaled.jpg";
import service3 from "@/assets/images/services/img_2376.jpg";
import service4 from "@/assets/images/services/21.jpg";
import service5 from "@/assets/images/services/peskostruy.jpg";
import service6 from "@/assets/images/services/image-01-04-20-10-31.jpeg";
import service7 from "@/assets/images/services/951049e73872e6fc8ca8ac6abc03fe77.jpg";

export interface IService {
  image: any;
  title: string;
  description: string;
  category: string;
}
export const services: IService[] = [
  {
    title: "Покраска металлических конструкций",
    description: "Долговечное покрытие для металлоконструкций.",
    image: service1,
    category: "Порошковая покраска изделий из металла",
  },
  {
    title: "Покраска конструкций из листового металла",
    description: "Защита и стиль металлических поверхностей.",
    image: service2,
    category: "Порошковая покраска изделий из металла",
  },
  {
    title: "Порошковая покраска автомобильных деталей",
    description: "Износостойкое покрытие для автодеталей.",
    image: service3,
    category: "Порошковая покраска изделий из металла",
  },
  {
    title: "Покраска мото деталей",
    description: "Яркое и прочное покрытие мотоциклов.",
    image: service4,
    category: "Порошковая покраска изделий из металла",
  },

  {
    title: "Пескоструйная обработка авто",
    description: "Очистка и подготовка к покраске.",
    image: service5,
    category: "Пескоструйная обработка",
  },

  {
    title: "Пескоструйная обработка мото деталей",
    description: "Удаление старого покрытия и ржавчины.",
    image: service6,
    category: "Пескоструйная обработка",
  },

  {
    title: "Пескоструйная обработка металлических конструкций",
    description: "Глубокая очистка для долговечности металла.",
    image: service7,
    category: "Пескоструйная обработка",
  },
  
  
];
