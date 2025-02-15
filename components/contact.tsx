"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaVk, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  const { ref } = useSectionInView("Обратная связь", 0.3);
  const [showPhone, setShowPhone] = useState(false);

  const togglePhoneVisibility = () => {
    setShowPhone(true);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 max-w-[70rem] scroll-mt-28 text-center sm:mb-40 mx-auto"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>✉️ Обратная связь</SectionHeading>
      <div className="flex flex-col sm:flex-row w-full gap-8">
        <div className="w-full sm:w-1/2 p-4">
          <h2 className="text-lg font-semibold mb-4">📞 Контакты</h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center mb-4 sm:mb-0"
            >
              <a href="https://vk.com/evdokimovrus" className="mb-2 flex items-center mt-4">
                <FaVk className="mr-2 text-blue-500" /> ВКонтакте
              </a>
              <a href="https://vk.com/evdokimovrus">
                <Image
                  src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://vk.com/evdokimovrus" // Замените на путь к вашему кастомному QR-коду
                  alt="VK QR Code"
                  width={128}
                  height={128}
                  className="rounded-lg shadow-lg w-32 h-32"
                />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center mb-4 sm:mb-0"
            >
              <a href="https://wa.me/+79879317210" className="mb-2 flex items-center mt-4">
                <FaWhatsapp className="mr-2 text-green-500" /> WhatsApp
              </a>
              <a href="https://wa.me/+79879317210">
                <Image
                  src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://wa.me/+79879317210" // Замените на путь к вашему кастомному QR-коду
                  alt="WhatsApp QR Code"
                  width={128}
                  height={128}
                  className="rounded-lg shadow-lg w-32 h-32"
                />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center mb-4 sm:mb-0"
            >
              <a href="https://t.me/+79879317210" className="mb-2 flex items-center mt-4">
                <FaTelegram className="mr-2 text-blue-400" /> Telegram
              </a>
              <a href="https://t.me/VladimirYE1">
                <Image
                  src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://t.me/+79879317210" // Замените на путь к вашему кастомному QR-коду
                  alt="Telegram QR Code"
                  width={128}
                  height={128}
                  className="rounded-lg shadow-lg w-32 h-32"
                />
              </a>
            </motion.div>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold mb-2">🕒 График работы:</h3>
            <p className="text-gray-700 dark:text-white/80 mb-4">
              Будни: 9:00 - 18:00<br />
              Выходные: 10:00 - 16:00
            </p>
            <h3 className="text-base font-semibold mb-2">📞 Контактный телефон:</h3>
            <button onClick={togglePhoneVisibility} className="text-gray-700 dark:text-white/80 underline mb-4">
              <motion.span
                initial={{ filter: "blur(5px)" }}
                animate={{ filter: showPhone ? "blur(0px)" : "blur(5px)" }}
                transition={{ duration: 0.5 }}
              >
                {showPhone ? (
                  <a href="tel:+79879317210" className="text-gray-700 dark:text-white/80 underline">
                    +7 (987) 931-72-10
                  </a>
                ) : (
                  "+7 (987) 931-72-10"
                )}
              </motion.span>
            </button>
            <h3 className="text-base font-semibold mb-2">📍 Адрес:</h3>
            <p className="text-gray-700 dark:text-white/80">
              ул. Мира, 133А (ТЦ "Крым"), Тольятти, Самарская обл., 445045
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <h2 className="text-lg font-semibold mb-4">📨 Форма обратной связи</h2>
          <p className="text-gray-700 dark:text-white/80 mb-6">
            Пожалуйста, свяжитесь с нами напрямую по адресу{" "}
            <a className="underline" href="mailto:vladimir@тнвд-ремонт.рф">
              vladimir@тнвд-ремонт.рф
            </a>{" "}
            или через эту форму.
          </p>
          <form
            className="mt-10 flex flex-col dark:text-black"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email отправлен успешно!");
            }}
          >
            <input
              className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-4"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Ваш email"
            />
            <textarea
              className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-4"
              name="message"
              placeholder="Ваше сообщение"
              required
              maxLength={5000}
            />
            <SubmitBtn />
          </form>
        </div>
      </div>
      <div className="w-full mt-8 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <h2 className="text-lg font-semibold mb-4">🌍 Мы на карте (ТЦ "Крым")</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.592114486343!2d49.44545337729958!3d53.51152857241178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41687f4809a3a191%3A0x4e22b48f05e8d462!2z0YPQuy4g0JzQuNGA0LAsIDEzM0El2K_Ydg!5e0!3m2!1sru!2sru!4v1706794404801!5m2!1sru!2sru"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full sm:w-1/2">
          <h2 className="text-lg font-semibold mb-4">🚌 Как добраться на общественном транспорте:</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-white/80">
            <li>
              **Автобусы:** Маршруты № 2, 12, 13, 21 (остановка "ТЦ Крым" или "Улица Мира").
            </li>
            <li>
              **Маршрутки:**  Маршруты № 91, 93, 96, 126 (остановка "ТЦ Крым" или "Улица Мира").
            </li>
            <li>
              **Троллейбусы:** Маршрут № 3 (остановка "Улица Мира").
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">
            *Пожалуйста, уточняйте актуальное расписание и маршруты на сайтах транспортных компаний Тольятти.*
          </p>
        </div>
      </div>
    </motion.section>
  );
}
