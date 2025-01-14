"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { siPeugeot, siCitroen, siBmw, siMini } from "simple-icons";

export default function About() {
  const { ref } = useSectionInView("Обо мне");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>👋 Обо мне</SectionHeading>
      <p className="mb-3">
        Добро пожаловать! Я специализируюсь на <span className="font-medium text-blue-500"><strong>ремонте ТНВД</strong></span> для автомобилей марки{" "}
        <span className="font-medium text-blue-500">
          <strong>Peugeot, Citroen, BMW и Mini</strong>
        </span>. Моя цель — обеспечить надежную и качественную работу вашего двигателя.
      </p>
      <div className="flex justify-center space-x-4 mb-3">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-2xl text-blue-500 hover:text-blue-700 transition-colors duration-200"
          fill="currentColor"
        >
          <path d={siPeugeot.path} />
        </svg>
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-2xl text-red-500 hover:text-red-700 transition-colors duration-200"
          fill="currentColor"
        >
          <path d={siCitroen.path} />
        </svg>
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-2xl text-blue-900 hover:text-blue-950 transition-colors duration-200"
          fill="currentColor"
        >
          <path d={siBmw.path} />
        </svg>
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-2xl text-black hover:text-gray-700 transition-colors duration-200"
          fill="currentColor"
        >
          <path d={siMini.path} />
        </svg>
      </div>
      <p className="mb-3">
        Если ваш двигатель <span className="italic text-red-500"><strong>троит, глохнет, теряет мощность и динамику разгона</strong></span>, или выдает ошибки <span className="font-medium text-blue-500"><strong>Check Engine</strong></span> (например, <span className="font-medium text-blue-500"><strong>P0087, P0088, P1336, P2880</strong></span> и другие), это может указывать на неисправность ТНВД. 🛠️
      </p>
      <p>
        Я предлагаю услуги по <span className="font-medium text-blue-500"><strong>капитальному ремонту ТНВД</strong></span> с гарантией надежности и качества. Включая полную диагностику, модернизированный ремонт и послеремонтную обратную связь. Стоимость услуг составляет <span className="font-medium text-green-500"><strong>6999 рублей</strong></span>, включая все расходные и уплотнительные материалы. 💰
      </p>
      <p>
        Дополнительно предоставляю <span className="font-medium text-blue-500"><strong>фото и видео материалы</strong></span> стадий ремонта и неисправности ТНВД, а также возможность продажи готового насоса или обмена на ваш. Предлагаю сотрудничество с автосервисами на выгодных условиях. Доставка осуществляется по всем регионам транспортной компанией или почтой (оплачивается отдельно). 📦
      </p>
    </motion.section>
  );
}
