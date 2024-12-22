"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaVk, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  const { ref } = useSectionInView("Обратная связь");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 flex flex-col sm:flex-row w-full text-center sm:text-left"
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
      <div className="w-full sm:w-1/2 p-4">
        <SectionHeading>📞 Контакты</SectionHeading>
        <h3 className="text-lg font-semibold">🌐 Мы в социальных сетях:</h3>
        <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center"
          >
            <a href="https://vk.com/your_vk_page" className="mb-2 flex items-center mt-4">
              <FaVk className="mr-2 text-blue-500" /> ВКонтакте
            </a>
            <Image
              src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://vk.com/your_vk_page"
              alt="VK QR Code"
              width={128}
              height={128}
              className="rounded-lg shadow-lg w-32 h-32"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center"
          >
            <a href="https://wa.me/your_whatsapp_number" className="mb-2 flex items-center mt-4">
              <FaWhatsapp className="mr-2 text-green-500" /> WhatsApp
            </a>
            <Image
              src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://wa.me/your_whatsapp_number"
              alt="WhatsApp QR Code"
              width={128}
              height={128}
              className="rounded-lg shadow-lg w-32 h-32"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center"
          >
            <a href="https://t.me/your_telegram_username" className="mb-2 flex items-center mt-4">
              <FaTelegram className="mr-2 text-blue-400" /> Telegram
            </a>
            <Image
              src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://t.me/your_telegram_username"
              alt="Telegram QR Code"
              width={128}
              height={128}
              className="rounded-lg shadow-lg w-32 h-32"
            />
          </motion.div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold">🕒 График работы:</h3>
          <p className="text-gray-700 dark:text-white/80">
            Будни: 9:00 - 18:00<br />
            Выходные: 10:00 - 16:00
          </p>
          <h3 className="text-lg font-semibold mt-4">📞 Контактный телефон:</h3>
          <p className="text-gray-700 dark:text-white/80">
            +123 456 7890
          </p>
          <h3 className="text-lg font-semibold mt-4">📍 Адрес:</h3>
          <p className="text-gray-700 dark:text-white/80">
            1234 Улица, Город, Страна
          </p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434501749!2d30.52333331546757!3d50.4501009794921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4f4571bf51%3A0x764931d2170146fe!2z0JrQuNC90YLQtdC90LjRjw!5e0!3m2!1sru!2sua!4v1633024167757!5m2!1sru!2sua"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <SectionHeading>📨 Обратная связь</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Пожалуйста, свяжитесь с нами напрямую по адресу{" "}
          <a className="underline" href="mailto:example@gmail.com">
            example@gmail.com
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

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Ваш email"
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Ваше сообщение"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
