import React from "react";
import { useTranslation } from "react-i18next";
import Logo_footer from "../../assets/icons/LogoFooterIcon";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center max-md:flex-col gap-10 my-10">
        <div className="flex items-center gap-2 text-center max-lg:flex-col">
          <Logo_footer />
          <h3 className="cursor-default text-2xl text-gray-400 font-semibold transform transition-transform duration-300 hover:scale-105">
            Cube Fund Invest
          </h3>
        </div>

        <div className="flex gap-10 items-center justify-center max-md:flex max-md:flex-col max-md:gap-5">
          <div className="flex text-center max-lg:order-2">
            <a
              className="text-2xl block mb-4 text-center text-gray-400 max-md:mx-auto transform transition-transform duration-300 hover:scale-105"
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("navFooter.Blog")}
            </a>
          </div>

          <div className="flex gap-7 max-lg:order-1">
            <a
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img
                className="w-6 h-6 object-contain transform transition-transform duration-300 hover:scale-125"
                src="../src/assets/icons/telegramGrayIcon.png"
                alt="telegram icon"
              />
            </a>
            <a
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img
                className="w-6 h-6 object-contain transform transition-transform duration-300 hover:scale-125"
                src="../src/assets/icons/supportGrayIcon.png"
                alt="support icon"
              />
            </a>
            <a
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img
                className="w-6 h-6 object-contain transform transition-transform duration-300 hover:scale-125"
                src="../src/assets/icons/xGrayIcon.png"
                alt="X icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
