import FloatingSquares from "../ui/FloatingSquares";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faArrowUpRightDots, faPercent, faMoneyBills, faSeedling, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Диверсификация портфеля",
    description: "Распределение инвестиций между различными криптовалютами и активами для снижения рисков",
    icon: faCoins,
  },
  {
    title: "Выборка качественных активов",
    description: "Инвестирование в криптовалюты с сильной фундаментальной базой и перспективой роста",
    icon: faArrowUpRightDots,
  },
  {
    title: "Управление рисками",
    description: "Использование инструментов управления рисками, таких как хеджирование, стоп-лосс и другие стратегии для минимизации потерь",
    icon: faPercent,
  },
  {
    title: "Низкий входной барьер",
    description: "Фонд имеет более низкие входные барьеры, чем прямые инвестиции в отдельные активы",
    icon: faMoneyBills,
  },
  {
    title: "Долгосрочный горизонт",
    description: "Сосредоточение внимания на долгосрочных инвестициях, а не на краткосрочных спекуляциях",
    icon: faSeedling,
  },
  {
    title: "Прозрачность и отчетность",
    description: "Предоставление регулярных отчетов об инвестиционных результатах и управлении рисками",
    icon: faCircleCheck,
  },
];

export default function BenefitsSection() {
  return (
    <div className="relative py-16">
      <FloatingSquares overflowEnabled={true} />
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Наши преимущества
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
            <h3 className="text-xl font-mono mb-2">{benefit.title}</h3>
            <p className="text-gray-600 font-light  px-2">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
