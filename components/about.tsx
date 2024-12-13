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
        Приветствую! Я специализируюсь на <span className="font-medium">ремонте ТНВД</span> для автомобилей марки <span className="font-medium">Peugeot, Citroen, BMW и Mini</span>. Моя основная задача — обеспечить надежную и качественную работу вашего двигателя.
      </p>
      <p className="mb-3">
        Если ваш двигатель <span className="italic">троит, глохнет, теряет мощность и динамику разгона</span>, или выдает ошибки <span className="font-medium">Check Engine</span> (например, <span className="font-medium">P0087, P0088, P1336, P2880</span> и другие), то, к сожалению, ваш ТНВД выходит из строя.
      </p>
      <p className="mb-3">
        Я предлагаю свои услуги по <span className="font-medium">капитальному ремонту ТНВД</span> с гарантией надежности и честности. Включая полную диагностику, модернизированный ремонт и послеремонтную обратную связь. Стоимость услуг составляет <span className="font-medium">6999 рублей</span>, включая все расходные и уплотнительные материалы.
      </p>
      <p className="mb-3">
        Дополнительно предоставляю <span className="font-medium">фото и видео материалы</span> стадий ремонта и неисправности ТНВД, а также возможность продажи готового насоса или обмена на ваш.
      </p>
      <p>
        Предлагаю сотрудничество с автосервисами на самых выгодных условиях. Доставка осуществляется по всем регионам транспортной компанией или почтой (оплачивается отдельно).
      </p>
    </motion.section>
  );
}
