import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaTools } from "react-icons/fa"; // Добавьте импорт для FaTools
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Главная",
    hash: "#home",
  },
  {
    name: "Обо мне",
    hash: "#about",
  },
  {
    name: "Услуги",
    hash: "#projects",
  },
  {
    name: "Навыки",
    hash: "#skills",
  },
  {
    name: "Образование",
    hash: "#experience",
  },
  {
    name: "Обратная связь",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Окончание технического колледжа",
    location: "Самара, Россия",
    description:
      "Окончил технический колледж по специальности 'Ремонт и обслуживание автомобилей'. Сразу после окончания начал работать в автосервисе.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "Механик в автосервисе",
    location: "Тольятти, Россия",
    description:
      "Работал механиком в автосервисе, специализируясь на ремонте ТНВД для автомобилей марки Peugeot, Citroen, BMW и Mini. Повысил квалификацию до уровня мастера.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2020",
  },
  {
    title: "Мастер по ремонту ТНВД",
    location: "Тольятти, Россия",
    description:
      "Теперь я мастер по ремонту ТНВД, работающий на себя. Мои услуги включают капитальный ремонт ТНВД, диагностику двигателя, замену и ремонт насосов, а также гарантийное обслуживание. Открыт для сотрудничества с автосервисами.",
    icon: React.createElement(FaTools),
    date: "2020 - настоящее время",
  },
] as const;

export const projectsData = [
  {
    title: "Капитальный ремонт ТНВД",
    description:
      "Я специализируюсь на капитальном ремонте ТНВД для автомобилей марки Peugeot, Citroen, BMW и Mini. Обеспечиваю надежную и качественную работу вашего двигателя.",
    tags: ["Ремонт ТНВД", "Диагностика", "Гарантия", "Фотоотчет", "Доставка"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Диагностика двигателя",
    description:
      "Провожу полную диагностику двигателя, чтобы выявить и устранить все неисправности. Обеспечиваю послеремонтную обратную связь и гарантии.",
    tags: ["Диагностика", "Ремонт", "Гарантия", "Обслуживание", "Фотоотчет"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Замена и ремонт насосов",
    description:
      "Осуществляю замену и ремонт насосов для автомобилей различных марок. Предлагаю возможность продажи готового насоса или обмена на ваш.",
    tags: ["Ремонт насосов", "Замена", "Обмен", "Гарантия", "Доставка"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Капитальный ремонт ТНВД",
  "Диагностика двигателя",
  "Замена и ремонт насосов",
  "Обслуживание автомобилей Peugeot, Citroen, BMW, Mini",
  "Гарантийное обслуживание",
  "Фото и видео отчеты",
  "Доставка по всем регионам",
  "Сотрудничество с автосервисами",
] as const;
