import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <header className="px-2 sticky top-4 z-50">
      {/* Десктоп-навигация */}
      <nav
        className={`hidden md:flex justify-between items-center max-w-5xl mx-auto p-4 bg-transparent backdrop-blur-xl ${
          menuOpen ? "rounded-b-none" : "rounded-3xl"
        }`}
      >
        <a className="h-14 animate" href="/">
          <img
            src="./src/assets/icons/LogoIcon.png"
            alt="Logo"
            className="h-full te-blue-600"
          />
        </a>
        <div className="flex gap-10 items-center md:justify-start justify-center">
          <a
            className="text-xl md:block block mb-4 md:mb-0 animate"
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("navFooter.Blog")}
          </a>
          {/* Социальные сети */}
          <a
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-Networks-Links animate"
              src="../src/assets/icons/telegramBlackIcon.png"
              alt="telegram icon"
            />
          </a>
          <a
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-Networks-Links animate"
              src="../src/assets/icons/xLogoIcon.png"
              alt="X icon"
            />
          </a>
          <a
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-Networks-Links animate"
              src="../src/assets/icons/supportIcon.png"
              alt="support icon"
            />
          </a>

          {/* Смена языка (десктоп) */}
          <div className="flex items-center gap-2">
            <button
              className={`text-sm animate ${
                currentLanguage === "en" ? "font-semibold text-black" : "text-gray-500"
              }`}
              onClick={() => changeLanguage("en")}
            >
              ENG
            </button>
            <span className="text-sm">/</span>
            <button
              className={`text-sm animate ${
                currentLanguage === "ru" ? "font-semibold text-black" : "text-gray-500"
              }`}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
