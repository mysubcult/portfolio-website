"use client";

import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaBars } from "react-icons/fa";

const Header = memo(function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Варианты анимации для мобильного меню
  const mobileMenuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[5.2rem] w-full rounded-none border border-white border-opacity-40 
          bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
          sm:top-6 sm:h-[3.6rem] sm:w-[48rem] sm:rounded-full 
          dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.2rem] left-1/2 h-14 -translate-x-1/2 py-2 sm:top-[1.8rem] sm:h-[initial] sm:py-0">
        {isMobile ? (
          // Мобильная версия
          <div className="flex items-center justify-between w-full px-4">
            <button
              onClick={toggleMenu}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-100"
            >
              <FaBars size="1.5em" />
            </button>

            <motion.ul
              className={clsx(
                "fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 rounded-r-md shadow-md py-2 flex flex-col items-start text-lg font-semibold text-gray-500 dark:text-gray-400",
                {
                  hidden: !isMenuOpen,
                }
              )}
              variants={mobileMenuVariants}
              animate={isMenuOpen ? "open" : "closed"}
            >
              {links.map((link) => (
                <motion.li
                  className="w-full"
                  key={link.hash}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  <Link
                    className={clsx(
                      "block w-full text-left py-2 px-4 hover:text-gray-950 dark:hover:text-gray-100",
                      {
                        "text-gray-950 dark:text-gray-100":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    aria-current={activeSection === link.name ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ) : (
          // Десктопная версия
          <ul className="flex w-[24rem] flex-wrap items-center justify-center gap-y-1 text-[1.1rem] font-semibold text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-100 whitespace-nowrap",
                    {
                      "text-gray-950 dark:text-gray-100":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  aria-current={activeSection === link.name ? "page" : undefined}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
});

export default Header;
