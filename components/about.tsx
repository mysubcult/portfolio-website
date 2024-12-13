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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Приветствую! Я специализируюсь на ремонте ТНВД для автомобилей марки Peugeot, Citroen, BMW и Mini. Моя основная задача — обеспечить надежную и качественную работу вашего двигателя.
      </p>
      <p className="mb-3">
        Если ваш двигатель троит, глохнет, теряет мощность и динамику разгона, или выдает ошибки Check Engine (например, P0087, P0088, P1336, P2880 и другие), то, к сожалению, ваш ТНВД выходит из строя.
      </p>
      <p className="mb-3">
        Я предлагаю свои услуги по капитальному ремонту ТНВД с гарантией надежности и честности. Включая полную диагностику, модернизированный ремонт и послеремонтную обратную связь. Стоимость услуг составляет 6999 рублей, включая все расходные и уплотнительные материалы.
      </p>
      <p className="mb-3">
        Дополнительно предоставляю фото и видео материалы стадий ремонта и неисправности ТНВД, а также возможность продажи готового насоса или обмена на ваш.
      </p>
      <p>
        Предлагаю сотрудничество с автосервисами на самых выгодных условиях. Доставка осуществляется по всем регионам транспортной компанией или почтой (оплачивается отдельно).
      </p>
    </motion.section>
  );
}
