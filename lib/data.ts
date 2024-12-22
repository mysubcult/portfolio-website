import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaCar, FaTools } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineSpeakerNotes } from "react-icons/md";
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
    name: "Цены",
    hash: "#prices",
  },
  {
    name: "Услуги",
    hash: "#services",
  },
  {
    name: "Квалификация",
    hash: "#experience",
  },
  {
    name: "Обратная связь",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Окончание ТГУ Тольятти",
    location: "Тольятти, Россия",
    description: "Окончил Тольяттинский Государственный Университет по специальности 'Ремонт и обслуживание автомобилей'. Сразу после окончания начал работать в автосервисе.",
    icon: React.createElement(LuGraduationCap),
    date: "2014",
  },
  {
    title: "Механик в автосервисе",
    location: "Тольятти, Россия",
    description: "Работал механиком в автосервисе, специализируясь на ремонте ТНВД для автомобилей марки Peugeot, Citroen, BMW и Mini. Повысил квалификацию до уровня мастера.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2020",
  },
  {
    title: "Участие в автомобильной выставке 'МоторШоу'",
    location: "Москва, Россия",
    description: "Принял участие в автомобильной выставке 'МоторШоу', где демонстрировал свои навыки и знания в области ремонта ТНВД. Получил признание среди коллег и клиентов.",
    icon: React.createElement(FaCar),
    date: "2016",
  },
  {
    title: "Сертификация и тренинги",
    location: "Санкт-Петербург, Россия",
    description: "Прошел несколько сертификационных курсов и тренингов по ремонту ТНВД от ведущих производителей, таких как Bosch и Delphi. Повысил свою квалификацию и расширил знания.",
    icon: React.createElement(GiTeacher),
    date: "2018",
  },
  {
    title: "Участие в международной конференции 'АвтоТех'",
    location: "Казань, Россия",
    description: "Принял участие в международной конференции 'АвтоТех', где обменивался опытом с коллегами из разных стран и узнавал о новейших технологиях в области ремонта автомобилей.",
    icon: React.createElement(MdOutlineSpeakerNotes),
    date: "2019",
  },
  {
    title: "Мастер по ремонту ТНВД",
    location: "Тольятти, Россия",
    description: "Теперь я мастер по ремонту ТНВД, работающий на себя. Мои услуги включают капитальный ремонт ТНВД, диагностику двигателя, замену и ремонт насосов, а также гарантийное обслуживание. Открыт для сотрудничества с автосервисами.",
    icon: React.createElement(FaTools),
    date: "2020 - настоящее время",
  }
] as const;

export const priceData = [
  {
    title: "Капитальный ремонт ТНВД",
    description:
      "Я специализируюсь на капитальном ремонте ТНВД для автомобилей марки Peugeot, Citroen, BMW и Mini. Обеспечиваю надежную и качественную работу вашего ТНВД.",
    tags: ["Ремонт ТНВД", "Диагностика", "Гарантия", "Фотоотчет", "Доставка"],
    price: "6999р",
    imageUrl: corpcommentImg,
  },
  {
    title: "Диагностика ТНВД",
    description:
      "Провожу полную диагностику ТНВД, чтобы выявить и устранить все неисправности. Обеспечиваю послеремонтную обратную связь и гарантии.",
    tags: ["Диагностика", "Ремонт", "Гарантия", "Обслуживание", "Фотоотчет"],
    price: "1000р",
    imageUrl: rmtdevImg,
  },
  {
    title: "Замена и ремонт насосов",
    description:
      "Осуществляю замену и ремонт насосов для автомобилей различных марок. Предлагаю возможность продажи готового насоса или обмена на ваш.",
    tags: ["Ремонт насосов", "Замена", "Обмен", "Гарантия", "Доставка"],
    price: "3999р",
    imageUrl: wordanalyticsImg,
  },
] as const;

export const servicesData = [
  "Капитальный ремонт ТНВД",
  "Замена и ремонт насосов",
  "Обслуживание автомобилей Peugeot, Citroen, BMW, Mini",
  "Гарантийное обслуживание",
  "Фото и видео отчеты",
  "Доставка по всем регионам",
  "Сотрудничество с автосервисами",
] as const;
