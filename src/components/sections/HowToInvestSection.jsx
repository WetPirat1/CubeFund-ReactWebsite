import React from "react";
import { motion } from "framer-motion";
import TelegramLink from "../ui/TelegramLink";
import FloatingSquares from "../ui/FloatingSquares";

export default function HowToInvest() {
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
        How to invest?
      </motion.h2>

      <div className="relative z-0">
        <FloatingSquares />
        <div className="absolute top-0 left-1/2 w-1 bg-gray-200 h-full transform -translate-x-1/2 hidden md:block" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 items-center relative">
          {/* Step 1 */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left relative"
            variants={fadeInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-gray-400 mb-4 text-sm sm:text-base">
              Step 1
            </span>
            <p className="font-medium mb-4 text-sm sm:text-base">
              Open the bot in Telegram
            </p>
            <TelegramLink marginX="mx-0" maxW="w-[200px]" />
          </motion.div>
          <div />

          {/* Step 2 */}
          <div />
          <motion.div
            className="flex flex-col items-center md:items-end text-center md:text-right relative"
            variants={fadeInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-gray-400 mb-4 text-sm sm:text-base">
              Step 2
            </span>
            <p className="font-medium mb-4 text-sm sm:text-base">
              Connect wallet
            </p>
            <img
              src="./src/assets/sections/InvestSectionConWalletImg.png"
              alt="Connect wallet"
              className="rounded-md z-40 w-[80%] sm:w-[60%] md:w-auto"
            />
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left relative"
            variants={fadeInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-gray-400 mb-4 text-sm sm:text-base">
              Step 3
            </span>
            <p className="font-medium mb-4 text-sm sm:text-base">
              Select a coin and the amount you want to invest
            </p>
            <img
              src="./src/assets/sections/InvestSectionSelectCoinImg.png"
              alt="Select coin"
              className="rounded-md z-40 w-[80%] sm:w-[60%] md:w-auto"
            />
          </motion.div>
          <div />

          {/* Step 4 */}
          <div />
          <motion.div
            className="flex flex-col items-center md:items-end text-center md:text-right relative"
            variants={fadeInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-gray-400 mb-4 text-sm sm:text-base">
              Step 4
            </span>
            <p className="font-medium mb-4 text-sm sm:text-base">
              Select investment period
            </p>
            <img
              src="./src/assets/sections/InvestSectionSelectPeriodImg.png"
              alt="Select period"
              className="rounded-md z-40 w-[80%] sm:w-[60%] md:w-auto"
            />
          </motion.div>

          {/* Step 5 */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left relative"
            variants={fadeInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-gray-400 mb-4 text-sm sm:text-base">
              Step 5
            </span>
            <p className="font-medium mb-4 text-sm sm:text-base">
              Click the Invest button
            </p>
            <img
              src="./src/assets/sections/InvestSectionInvestBtnImg.png"
              alt="Invest button"
              className="rounded-md z-40 w-[80%] sm:w-[60%] md:w-auto"
            />
          </motion.div>
          <div />

          {/* Step 6 */}
          <div />
          <motion.div
            className="flex flex-col items-center md:items-end text-center md:text-right relative"
            variants={fadeInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-gray-400 mb-4 text-sm sm:text-base">
              Step 6
            </span>
            <p className="font-medium mb-4 text-sm sm:text-base">
              Confirm the action in the wallet
            </p>
            <img
              src="./src/assets/sections/InvestSectionConfirmActionImg.png"
              alt="Confirm action"
              className="rounded-md z-40 w-[80%] sm:w-[60%] md:w-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
