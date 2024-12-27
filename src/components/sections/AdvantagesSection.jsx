import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FloatingSquares from "../ui/FloatingSquares";
import { useTranslation } from "react-i18next"; // Импортируем i18next

const sectionsData = [
  {
    title: "advantagesSections.easyToUse.title", // Ключи для перевода
    description: "advantagesSections.easyToUse.description",
    image: "./src/assets/sections/AdvantSectionWorksImg.png",
  },
  {
    title: "advantagesSections.blockchainBased.title",
    description: "advantagesSections.blockchainBased.description",
    image: "./src/assets/sections/BlockchainImg.png",
  },
  {
    title: "advantagesSections.telegramIntegration.title",
    description: "advantagesSections.telegramIntegration.description",
    image: "./src/assets/sections/TelegramImg.png",
  },
];

export default function AdvantagesSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const { t } = useTranslation(); // Хук для перевода

  const onScroll = (entry, index) => {
    if (entry.isIntersecting) {
      setCurrentSection(index);
    }
  };

  return (
    <section className="relative flex flex-col items-center gap-10">
      {/* Floating Squares */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <FloatingSquares />
      </div>

      {/* Sections */}
      {sectionsData.map((section, index) => {
        const { ref } = useInView({
          threshold: 0.7,
          triggerOnce: false,
          onChange: (inView, entry) => onScroll(entry, index),
        });
        return (
          <div
            ref={ref}
            key={index}
            className="w-full h-screen flex justify-center items-center"
          >
            {currentSection === index && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <img
                  className="mb-10 max-w-52"
                  src={section.image}
                  alt={t(section.title)} // Перевод заголовка
                />
                <h2 className="text-4xl font-bold mb-4">
                  {t(section.title)} {/* Перевод заголовка */}
                </h2>
                <p className="text-2xl max-w-lg">
                  {t(section.description)} {/* Перевод описания */}
                </p>
              </motion.div>
            )}
          </div>
        );
      })}
    </section>
  );
}
