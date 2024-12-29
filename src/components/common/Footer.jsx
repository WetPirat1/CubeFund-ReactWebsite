import React from "react";
import { useTranslation } from "react-i18next";
import Logo_footer from "../../assets/icons/LogoFooterIcon";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center max-md:flex-col gap-10 my-10">
        <div>
          <a
            className="flex items-center gap-2 text-center max-lg:flex-col animate"
            href="/"
          >
            <Logo_footer />
            <h3 className="text-2xl text-gray-400 font-semibold">
              Cube Fund Invest
            </h3>
          </a>
        </div>

        <div className="flex gap-7 items-center justify-between max-md:flex max-md:flex-col max-md:gap-5">
          <div className="flex max-lg:order-2">
            <a
              className="text-xl mb-1 block text-center text-gray-400 animate"
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {/* mb-1 for align ite */}
              {t("navFooter.Blog")}
            </a>
          </div>

          <div className="flex gap-7 max-lg:order-1 items-center">
            <a
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
              className="animate"
            >
              <img
                className="w-6 h-6 object-contain animate"
                src="../src/assets/icons/telegramGrayIcon.png"
                alt="telegram icon"
              />
            </a>
            <a
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
              className="animate"
            >
              <img
                className="w-6 h-6 object-contain animate"
                src="../src/assets/icons/supportGrayIcon.png"
                alt="support icon"
              />
            </a>
            <a
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
              className="animate"
            >
              <img
                className="w-6 h-6 object-contain animate"
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
