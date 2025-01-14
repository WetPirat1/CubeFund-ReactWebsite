import FloatingSquares from "../ui/FloatingSquares";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faArrowUpRightDots, faPercent, faMoneyBills, faSeedling, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const benefits = [
  {
    title: "benefits.diversification.title",
    description: "benefits.diversification.description",
    icon: faCoins,
  },
  {
    title: "benefits.qualityAssets.title",
    description: "benefits.qualityAssets.description",
    icon: faArrowUpRightDots,
  },
  {
    title: "benefits.riskManagement.title",
    description: "benefits.riskManagement.description",
    icon: faPercent,
  },
  {
    title: "benefits.lowEntryBarrier.title",
    description: "benefits.lowEntryBarrier.description",
    icon: faMoneyBills,
  },
  {
    title: "benefits.longTermFocus.title",
    description: "benefits.longTermFocus.description",
    icon: faSeedling,
  },
  {
    title: "benefits.transparency.title",
    description: "benefits.transparency.description",
    icon: faCircleCheck,
  },
];

export default function BenefitsSection() {
  const { t } = useTranslation();

  return (
    <div className="relative py-16">
      <FloatingSquares overflowEnabled={true} />
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("benefitsSection.title")}
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 max-sm:w-2/3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-30 h-30 mb-4 flex items-center justify-center text-3xl text-blue-500">
              <FontAwesomeIcon icon={benefit.icon} className="text-5xl mt-5" />
            </div>
            <h3 className="text-xl font-mono mb-2">{t(benefit.title)}</h3>
            <p className="text-gray-600 font-light px-2">{t(benefit.description)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
