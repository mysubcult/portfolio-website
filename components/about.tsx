"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Обо мне</SectionHeading>
      <p className="mb-3">
        Приветствую! Я специализируюсь на <span className="font-medium text-blue-500">ремонте ТНВД</span> для автомобилей марки <span className="font-medium text-blue-500">Peugeot, Citroen, BMW и Mini</span>. Моя основная задача — обеспечить надежную и качественную работу вашего двигателя. Если ваш двигатель <span className="italic text-red-500">троит, глохнет, теряет мощность и динамику разгона</span>, или выдает ошибки <span className="font-medium text-blue-500">Check Engine</span> (например, <span className="font-medium text-blue-500">P0087, P0088, P1336, P2880</span> и другие), то, к сожалению, ваш ТНВД выходит из строя.
      </p>
      <p>
        Я предлагаю свои услуги по <span className="font-medium text-blue-500">капитальному ремонту ТНВД</span> с гарантией надежности и честности. Включая полную диагностику, модернизированный ремонт и послеремонтную обратную связь. Стоимость услуг составляет <span className="font-medium text-green-500">6999 рублей</span>, включая все расходные и уплотнительные материалы. Дополнительно предоставляю <span className="font-medium text-blue-500">фото и видео материалы</span> стадий ремонта и неисправности ТНВД, а также возможность продажи готового насоса или обмена на ваш. Предлагаю сотрудничество с автосервисами на самых выгодных условиях. Доставка осуществляется по всем регионам транспортной компанией или почтой (оплачивается отдельно).
      </p>
    </motion.section>
  );
}
