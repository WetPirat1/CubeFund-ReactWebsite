import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TelegramLink from "../ui/TelegramLink";
import FloatingSquares from "../ui/FloatingSquares";

export default function HowToInvest() {
  const { t } = useTranslation();
  const steps = t("howToInvest.steps", { returnObjects: true });

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <div className="max-section-screen mx-auto relative sectionSpacing px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Фоновая анимация */}
      <FloatingSquares />

      {/* Заголовок */}
      <motion.h2
        className="text-center font-light text-5xl mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        {t("howToInvest.title")}
      </motion.h2>

      <div className="relative z-0 space-y-22">
        {/* Центральная линия (видна на мобильных) */}
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gray-200 transform -translate-x-1/2  block" />

        {/* Список шагов */}
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col items-center text-center ${
              index % 2 === 0
                ? "md:items-start md:text-left"
                : "md:items-end md:text-right"
            }`}
            variants={index % 2 === 0 ? fadeInFromLeft : fadeInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Полоска от блока к центральной линии (скрыта на мобильных) */}
            <div
              className={`absolute top-1/2 h-[1px] bg-gray-200 transform -translate-y-1/2 hidden md:block ${
                index % 2 === 0
                  ? "right-1/2 w-[calc(50%-2rem)]"
                  : "left-1/2 w-[calc(50%-2rem)]"
              }`}
            />

            <span className="text-gray-400 mb-4 text-lg sm:text-xl lg:text-2xl">
              {step.title}
            </span>
            <p className="font-medium mb-4 text-lg sm:text-xl lg:text-2xl">
              {step.description}
            </p>
            {index === 0 ? (
              <TelegramLink marginX="mx-0" maxW="w-[200px]" />
            ) : (
              <img
                src={step.image}
                alt={step.description}
                className="rounded-md z-40 max-w-[50%] md:w-auto"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
