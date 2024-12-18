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
        <SectionHeading>Контакты</SectionHeading>
        <p className="text-gray-700 dark:text-white/80">
          Свяжитесь с нами через социальные сети:
        </p>
        <div className="flex flex-col items-center sm:items-start mt-4">
          <a href="https://vk.com/your_vk_page" className="mb-4 flex items-center">
            <FaVk className="mr-2" /> ВКонтакте
          </a>
          <Image
            src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://vk.com/your_vk_page"
            alt="VK QR Code"
            width={128}
            height={128}
          />
          <a href="https://wa.me/your_whatsapp_number" className="mb-4 flex items-center mt-4">
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <Image
            src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://wa.me/your_whatsapp_number"
            alt="WhatsApp QR Code"
            width={128}
            height={128}
          />
          <a href="https://t.me/your_telegram_username" className="mb-4 flex items-center mt-4">
            <FaTelegram className="mr-2" /> Telegram
          </a>
          <Image
            src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://t.me/your_telegram_username"
            alt="Telegram QR Code"
            width={128}
            height={128}
          />
        </div>
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <SectionHeading>Обратная связь</SectionHeading>
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
