"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaVk, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Главная", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/photo.jpg"
              alt="Фотография Владимира Евдокимова"
              width="256"
              height="256"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl md:text-3xl lg:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          Двигатель троит? Плохой запуск?
        </span>{" "}
        Меня зовут{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
          Владимир Евдокимов
        </span>
        , и я помогу вам решить проблемы с ТНВД! Я специализируюсь на ремонте ТНВД для автомобилей{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Peugeot, Citroen, BMW и Mini
        </span>
        .{" "}
        <span className="font-bold">
          Обращайтесь, и ваш двигатель будет работать как новый!
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:shadow-lg active:scale-105 transition"
          onClick={() => {
            setActiveSection("Обратная связь");
            setTimeOfLastClick(Date.now());
          }}
        >
          Получить бесплатную консультацию{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          href="#prices"
          className="group bg-white px-8 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          onClick={() => {
            setActiveSection("Цены");
            setTimeOfLastClick(Date.now());
          }}
        >
          Посмотреть цены{" "}
        </Link>

        <div className="flex flex-row sm:flex-row gap-2">
          <a
            className="bg-white p-5 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://vk.com/evdokimovrus"
            target="_blank"
          >
            <FaVk size={24} />
          </a>

          <a
            className="bg-white p-5 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://t.me/VladimirYE1"
            target="_blank"
          >
            <FaTelegramPlane size={24} />
          </a>

          <a
            className="bg-white p-5 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://wa.me/79879317210"
            target="_blank"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
