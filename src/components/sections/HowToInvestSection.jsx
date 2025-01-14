import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TelegramLink from "../ui/TelegramLink";
import FloatingSquares from "../ui/FloatingSquares";

// Импорты путей изображений
import RuConfirmActionImg from "../../../public/assets/sections/InvestSectionConfirmActionImg.png";
import EnConfirmActionImg from "../../../public/assets/sections/InvestSectionConfirmActionImg.png";

import RuConWalletImg from "../../../public/assets/sections/InvestSectionConWalletImg.png";
import EnConWalletImg from "../../../public/assets/sections/InvestSectionConWalletImgEng.png";

import RuInvestBtnImg from "../../../public/assets/sections/InvestSectionInvestBtnImg.png";
import EnInvestBtnImg from "../../../public/assets/sections/InvestSectionInvestBtnImgEng.png";

import RuSelectCoinImg from "../../../public/assets/sections/InvestSectionSelectCoinImg.png";
import EnSelectCoinImgEng from "../../../public/assets/sections/InvestSectionSelectCoinImgEng.png";

import RuSelectPeriodImg from "../../../public/assets/sections/InvestSectionSelectPeriodImg.png";
import EnSelectPeriodImgEng from "../../../public/assets/sections/InvestSectionSelectPeriodImgEng.png";

export default function HowToInvest() {
  const { t, i18n } = useTranslation();
  const steps = t("howToInvest.steps", { returnObjects: true });

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const [fade, setFade] = useState(false);

  // Handle fade transition when the language changes
  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => {
      setFade(false);
    }, 500); // Duration of fade effect
    return () => clearTimeout(timer);
  }, [i18n.language]);

  // Массив шагов с изображениями для каждого языка
  const stepImages = [
    {
      ru: RuConfirmActionImg,
      en: RuConfirmActionImg,
    },
    {
      ru: RuConWalletImg,
      en: EnConWalletImg, 
    },
    {
      ru: RuSelectCoinImg,
      en: EnSelectCoinImgEng,
    },
    {
      ru: RuSelectPeriodImg,
      en: EnSelectPeriodImgEng,
    },
    {
      ru: RuInvestBtnImg,
      en: EnInvestBtnImg,
    },
    {
      ru: RuConfirmActionImg,
      en: RuConfirmActionImg,
    },
  ];

  return (
    <div className="relative">
      <FloatingSquares />
      <div className="max-section-screen mx-auto relative sectionSpacing px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Заголовок с анимацией фейда */}
        <motion.h2
          className="text-center font-bold text-4xl sm:text-5xl mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: fade ? 0 : 1 }} // Fade out and in on language change
          transition={{ duration: 2 }}
        >
          {t("howToInvest.title")}
        </motion.h2>

        <div className="relative z-0 space-y-16 sm:space-y-22">
          {/* Центральная линия (видна на мобильных) */}
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gray-200 transform -translate-x-1/2 block" />

          {/* Список шагов */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col items-center text-center ${
                index % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"
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

              {/* Заголовок шага с анимацией фейда */}
              <motion.span
                className="text-gray-400 mb-4 text-lg sm:text-xl lg:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: fade ? 0 : 1 }} // Fade out and in on language change
                transition={{ duration: 0.8 }}
              >
                {step.title}
              </motion.span>

              {/* Описание шага с анимацией фейда */}
              <motion.p
                className="font-medium mb-4 text-lg sm:text-xl lg:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: fade ? 0 : 1 }} // Fade out and in on language change
                transition={{ duration: 0.8 }}
              >
                {step.description}
              </motion.p>

              {/* Контент шага */}
              {index === 0 ? (
                <TelegramLink marginX="mx-0" maxW="w-[180px] sm:w-[200px]" />
              ) : (
                <img
                  src={i18n.language === "en" ? stepImages[index].en : stepImages[index].ru} // Используем изображение на основе языка
                  alt={step.description}
                  className="rounded-md z-40 max-w-[70%] md:max-w-[50%] lg:max-w-[60%] xl:max-w-[35%]"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
