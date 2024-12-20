import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingSquares from "../ui/FloatingSquares";

export default function AdvantagesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Easy to use",
      description:
        "Easy to use app that helps you to invest right from your smartphone anywhere and anytime.",
      image: "/images/easy-to-use.png",
    },
    {
      title: "Blockchain Based",
      description:
        "All popular tokens on the TON blockchain are available for selection and investment.",
      image: "/images/blockchain-based.png",
    },
    {
      title: "Telegram integration",
      description:
        "CUBE works as a Telegram Mini Application integrated directly in innovative messenger Telegram.",
      image: "/images/telegram-integration.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionHeight = window.innerHeight;

      // Проверка активного индекса с учетом текущей прокрутки
      const index = Math.max(
        Math.floor(scrollPosition / sectionHeight),
        0 // Не допускаем индекс -1
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);

    // Инициализация, чтобы при загрузке скролл был на первом элементе
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative">
      <FloatingSquares />

      <div className="flex justify-between items-center max-section-screen mx-auto max-sm:flex-col">
        {/* Список заголовков */}
        <div className="w-[50%] max-sm:w-[90%] mx-auto">
          <ul>
            {sections.map((section, index) => (
              <motion.li
                key={index}
                className={`flex items-center mb-16 gap-7 ${
                  activeIndex === index
                    ? "text-black font-bold"
                    : "text-gray-400 font-thin"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  activeIndex === index
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0.5, x: 0 }
                }
                transition={{ duration: 0.5 }}
              >
                <img
                  className="max-h-28 max-sm:hidden"
                  src="/images/diamond-icon.png"
                  alt="Diamond icon"
                />
                <p className="text-4xl max-sm:mx-auto max-sm:bg-[#1AB1F6] max-sm:p-2 max-sm:rounded-3xl max-sm:text-white">
                  {section.title}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Описание и изображение */}
        <div className="mx-auto flex flex-col items-center">
          <AnimatePresence mode="wait">
            {sections[activeIndex].image && (
              <motion.img
                key={sections[activeIndex].image}
                src={sections[activeIndex].image}
                alt="Section illustration"
                className="mb-10 max-w-52 max-sm:hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {sections[activeIndex].description && (
              <motion.p
                key={sections[activeIndex].description}
                className="max-w-96 text-2xl max-sm:hidden text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {sections[activeIndex].description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
