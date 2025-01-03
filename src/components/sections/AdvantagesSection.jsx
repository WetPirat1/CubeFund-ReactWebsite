import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    image: faThumbsUp,
    color: "text-blue-500",
  },
  {
    title: "advantagesSections.blockchainBased.title",
    description: "advantagesSections.blockchainBased.description",
    image: faHexagonNodes,
    color: "text-green-500",
  },
  {
    title: "advantagesSections.telegramIntegration.title",
    description: "advantagesSections.telegramIntegration.description",
    image: faTelegram,
    color: "text-blue-400",
  },
];

export default function AdvantagesSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const { t } = useTranslation();

  const onInViewChange = (inView, index) => {
    if (inView) {
      setCurrentSection(index);
    }
  };

  return (
    <section className="relative flex flex-col items-center gap-10 sectionSpacing my-28">
      <FloatingSquares />
      {sectionsData.map((section, index) => {
        const { ref } = useInView({
          threshold: 0.7,
          triggerOnce: false,
          onChange: (inView) => onInViewChange(inView, index),
        });

        return (
          <div
            ref={ref}
            key={index}
            className="w-full h-[450px] flex justify-center items-center"
          >
            <AnimatePresence mode="wait">
              {currentSection === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <FontAwesomeIcon
                    icon={section.image}
                    className={`mb-10 h-[200px] w-[200px] max-sm:h-[100px] ${section.color}`}
                  />
                  <h2 className="text-4xl font-bold mb-4 max-sm:text-3xl max-sm:w-[90%]">
                    {t(section.title)}
                  </h2>
                  <p className="text-2xl font-light max-sm:w-[95%] text-center">
                    {t(section.description)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
}
