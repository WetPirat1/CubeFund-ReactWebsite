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
    <div className="max-section-screen mx-auto relative bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl font-extrabold text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        {t("howToInvest.title")}
      </motion.h2>

      <div className="relative z-0">
        <FloatingSquares />
        <div className="absolute top-0 left-1/2 w-1 bg-gray-200 h-full transform -translate-x-1/2 hidden md:block" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 items-center relative">
          {steps.map((step, index) => {
            const fadeIn = index % 2 === 0 ? fadeInFromLeft : fadeInFromRight;

            return (
              <React.Fragment key={index}>
                {/* Left-aligned step */}
                {index % 2 === 0 && (
                  <motion.div
                    className="flex flex-col items-center md:items-start text-center md:text-left relative"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-400 mb-4 text-sm sm:text-base">
                      {step.title}
                    </span>
                    <p className="font-medium mb-4 text-sm sm:text-base">
                      {step.description}
                    </p>
                    {index === 0 && (
                      <TelegramLink marginX="mx-0" maxW="w-[200px]" />
                    )}
                    {index !== 0 && (
                      <img
                        src={step.image}
                        alt={step.description}
                        className="rounded-md z-40 w-[80%] sm:w-[60%] md:w-auto"
                      />
                    )}
                  </motion.div>
                )}

                {/* Right-aligned step */}
                {index % 2 === 1 && (
                  <>
                    <div />
                    <motion.div
                      className="flex flex-col items-center md:items-end text-center md:text-right relative"
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <span className="text-gray-400 mb-4 text-sm sm:text-base">
                        {step.title}
                      </span>
                      <p className="font-medium mb-4 text-sm sm:text-base">
                        {step.description}
                      </p>
                      <img
                        src={step.image}
                        alt={step.description}
                        className="rounded-md z-40 w-[80%] sm:w-[60%] md:w-auto"
                      />
                    </motion.div>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
