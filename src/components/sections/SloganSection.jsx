import React from "react";
import { useTranslation } from "react-i18next";
import FloatingSquares from "../ui/FloatingSquares";

export default function SloganSection() {
  const { t, i18n } = useTranslation(); // Initialize the translation function and i18n
  const currentLanguage = i18n.language; // Get the current language

  // Set image source based on language
  const imageSrc =
    currentLanguage === "ru"
      ? "./src/assets/sections/SloganSection-ru.png" // Russian image
      : "./src/assets/sections/SloganSection.png"; // Default (English) image

  return (
    <section className="relative">
      <div className="max-section-screen mx-auto flex justify-between gap-20 mb-60 max-lg:gap-10 max-md:flex-col max-md:gap-7">
        {/* Image Section */}
        <div className="w-[50%] max-md:order-2 max-md:mx-auto max-md:w-[80%] max-sm:w-[90%]">
          <img
            className="max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-[80%] mx-auto"
            src={imageSrc}
            alt="Slogan"
          />
        </div>

        {/* Text Section */}
        <div className="w-[50%] max-md:mx-auto max-md:w-[80%] max-sm:w-[90%] max-md:text-center">
          <h2 className="text-5xl mb-5 mt-7 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            {t("sloganSection.title", "Trust. Invest. Grow.")}
          </h2>
          <p className="text-3xl max-w-[80%] leading-[50px] max-lg:text-2xl max-lg:leading-[40px] max-md:leading-[35px] max-sm:text-xl max-sm:max-w-full max-sm:leading-[30px] max-sm:mx-auto">
            {t(
              "sloganSection.description",
              "Trust your assets to professionals Invest in crypto and value your time Grow with CUBE"
            )}
          </p>
        </div>
      </div>
      <FloatingSquares />
    </section>
  );
}
