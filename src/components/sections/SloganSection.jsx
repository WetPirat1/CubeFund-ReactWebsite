import { useTranslation } from "react-i18next";
import FloatingSquares from "../ui/FloatingSquares";
import { useLanguageTransition } from "../contexts/LanguageTransitionContext"; // Use context to get fade effect
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function SloganSection() {
  const { t, i18n } = useTranslation(); // Initialize the translation function and i18n
  const currentLanguage = i18n.language; // Get the current language

  const { fade } = useLanguageTransition(); // Get fade state from context

  const controls = useAnimation();

  // Handle animation for additional text
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight / 1.2;
      const section = document.querySelector("#additionalText");
      const rect = section.getBoundingClientRect();

      if (rect.top < triggerHeight) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Set image source based on language
  const imageSrc =
    currentLanguage === "ru"
      ? "./src/assets/sections/SloganSection.png" // Russian image
      : "./src/assets/sections/SloganSectionEng.png"; // Default (English) image

  return (
    <section className="relative sectionSpacing">
      <FloatingSquares />
      <div className="max-section-screen mx-auto flex justify-between gap-20 max-lg:gap-10 max-md:flex-col max-md:gap-7">
        {/* Image Section */}
        <div
          className={`relative w-[50%] max-md:order-2 max-md:mx-auto max-md:w-[80%] max-sm:w-[90%] transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            className="max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-[80%] mx-auto"
            src={imageSrc}
            alt="Slogan"
          />
          {/* Stronger Gradient for Smooth Fade */}
          <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white via-white/90 via-white/60 to-transparent pointer-events-none"></div>
        </div>

        {/* Text Section */}
        <div
          className={`w-[50%] max-md:mx-auto max-md:w-[80%] max-sm:w-[90%] max-md:text-center transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <h2 className="text-5xl mb-5 mt-7 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            {t("sloganSection.title", "Trust. Invest. Grow.")}
          </h2>
          <p className="text-3xl max-w-[80%] leading-[50px] max-lg:text-2xl font-light max-lg:leading-[40px] max-md:leading-[35px] max-sm:text-xl max-sm:max-w-full max-sm:leading-[30px] max-sm:mx-auto">
            {t(
              "sloganSection.description",
              "Trust your assets to professionals Invest in crypto and value your time Grow with CUBE"
            )}
          </p>
        </div>
      </div>

      {/* Additional Text */}
      <motion.div
        id="additionalText"
        className="mt-32 text-center max-w-5xl mx-auto text-gray-400"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, color: "#000000" },
        }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-3xl font-semibold leading-8  max-sm:px-12">
          {t(
            "sloganSection.additionalText1",
            "Cube Fund - консервативный инвестор на рынке криптовалют"
          )}
        </p>
        <p className="text-xl font-light leading-8 mt-4 max-sm:px-4">
          {t(
            "sloganSection.additionalText2",
            "Фонд, использует более осторожный и традиционный подход к инвестированию, акцентированный на сохранении стоимости активов и минимизации рисков, а не на агрессивном росте и спекуляциях"
          )}
        </p>
      </motion.div>
    </section>
  );
}
