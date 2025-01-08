import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FloatingSquares from "../ui/FloatingSquares";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons";
import { useLanguageTransition } from "../contexts/LanguageTransitionContext"; // Import context for fade effect

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
  const [scrollDirection, setScrollDirection] = useState("down"); // Track scroll direction
  const [hasScrolled, setHasScrolled] = useState(false); // Track if the user has scrolled
  const lastScrollY = useRef(0); // Store the last scroll position
  const { t } = useTranslation();
  const { fade } = useLanguageTransition(); // Get fade state from context

  // Update scroll direction and detect the first scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");

      if (currentScrollY > 0 && !hasScrolled) {
        setHasScrolled(true); // Trigger fade-in effect on first scroll
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const onInViewChange = (inView, index) => {
    if (inView) {
      if (scrollDirection === "down" && index > currentSection) {
        setCurrentSection(index);
      } else if (scrollDirection === "up" && index < currentSection) {
        setCurrentSection(index);
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center gap-5 sectionSpacing my-2">
      <FloatingSquares />
      {sectionsData.map((section, index) => {
        const { ref } = useInView({
          threshold: 0.5, // 50% of the element must be visible
          triggerOnce: false,
          onChange: (inView) => onInViewChange(inView, index),
        });

        return (
          <div
            ref={ref}
            key={index}
            className={`w-full h-[450px] flex justify-center items-center ${
              index === currentSection
                ? "opacity-100 scale-100"
                : "opacity-50 scale-95 grayscale"
            } transition-all duration-500`}
          >
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: hasScrolled ? 1 : 0, // Fade-in effect when the user scrolls
                y: hasScrolled ? 0 : 50,
              }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center text-center"
            >
              <FontAwesomeIcon
                icon={section.image}
                className={`mb-10 h-[200px] w-[200px] max-sm:h-[100px] ${section.color}`}
              />

              {/* Title Section */}
              <h2
                className={`text-4xl font-bold font-mono mb-4 max-sm:text-3xl max-sm:w-[90%]`}
              >
                {t(section.title)}
              </h2>

              {/* Description Section */}
              <p
                className={`text-lg font-light max-sm:w-[70%] text-center`}
              >
                {t(section.description)}
              </p>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
