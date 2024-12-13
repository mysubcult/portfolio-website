import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {const articlesData = [
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
];

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
