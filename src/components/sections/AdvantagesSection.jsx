import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FloatingSquares from "../ui/FloatingSquares";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons";

const sectionsData = [
  {
    title: "advantagesSections.easyToUse.title",
    description: "advantagesSections.easyToUse.description",
    image: faThumbsUp, // Иконка из FontAwesome (solid)
    color: "text-blue-500", // Цвет для иконки
  },
  {
    title: "advantagesSections.blockchainBased.title",
    description: "advantagesSections.blockchainBased.description",
    image: faHexagonNodes, // Иконка из FontAwesome (brands)
    color: "text-green-500", // Цвет для иконки
  },
  {
    title: "advantagesSections.telegramIntegration.title",
    description: "advantagesSections.telegramIntegration.description",
    image: faTelegram, // Иконка из FontAwesome (brands)
    color: "text-blue-400", // Цвет для иконки
  },
];

export default function AdvantagesSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const { t } = useTranslation();

  // Функция обработки события при попадании секции в область видимости
  const onInViewChange = (inView, index) => {
    if (inView) {
      setCurrentSection(index); // Обновляем текущую секцию при попадании в область видимости
    }
  };

  return (
    <section className="relative flex flex-col items-center gap-10 sectionSpacing">
      {sectionsData.map((section, index) => {
        const { ref } = useInView({
          threshold: 0.7, // Срабатывает, когда 70% секции в области видимости
          triggerOnce: false, // Срабатывает многократно, если нужно
          onChange: (inView) => onInViewChange(inView, index), // Обрабатываем изменение видимости
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
                {/* Применяем цвет с помощью CSS-класса */}
                <FontAwesomeIcon
                  icon={section.image}
                  className={`mb-10 h-[200px] w-[200px] max-sm:h-[100px] ${section.color}`} // Добавляем цвет
                />
                <h2 className="text-4xl font-bold mb-4 max-sm:text-3xl max-sm:w-[90%]">
                  {t(section.title)} {/* Текст перевода для заголовка */}
                </h2>
                <p className="text-2xl font-light max-sm:w-[95%] text-center">
                  {t(section.description)} {/* Текст перевода для описания */}
                </p>
              </motion.div>
            )}
          </div>
        );
      })}
    </section>
  );
}
