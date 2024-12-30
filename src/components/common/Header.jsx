import { useState } from "react";
import { useTranslation } from "react-i18next"; // Подключение i18next

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Инициализация перевода

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Смена языка
  };

  const currentLanguage = i18n.language; // Текущий язык

  return (
    <header className="bg-white z-50">
      {/* Десктоп-навигация */}
      <nav
        className={`hidden md:flex justify-between items-center max-w-5xl mx-auto p-4 ${
          menuOpen ? "rounded-b-none" : "rounded-b-3xl"
        }`}
      >
        <a className="h-14" href="/">
          <img
            src="./src/assets/icons/LogoIcon.png"
            alt="Logo"
            className="h-full te-blue-600"
          />
        </a>
        <div className="flex gap-10 items-center md:justify-start justify-center">
          {/* Переводимый текст */}
          <a
            className="text-xl md:block block mb-4 md:mb-0"
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("navFooter.Blog")}
          </a>
          <a
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-Networks-Links"
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
              className="social-Networks-Links"
              src="../src/assets/icons/supportIcon.png"
              alt="support icon"
            />
          </a>
          <a
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-Networks-Links"
              src="../src/assets/icons/xLogoIcon.png"
              alt="X icon"
            />
          </a>

          {/* Смена языка (десктоп) */}
          <div className="flex items-center gap-2">
            <button
              className={`text-sm text-gray-500 ${
                currentLanguage === "en" ? "font-semibold text-black" : ""
              }`}
              onClick={() => changeLanguage("en")}
            >
              ENG
            </button>

            <span>/</span>

            <button
              className={`text-sm text-gray-500 ${
                currentLanguage === "ru" ? "font-semibold text-black" : ""
              }`}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
          </div>
        </div>
      </nav>

      {/* Мобильная навигация */}
      <nav
        className={`flex md:hidden justify-between items-center p-4 fixed top-0 left-[5%] w-[90%] bg-white z-50 shadow-xl rounded-3xl mt-6 transition-all duration-300 transform ${
          menuOpen ? "rounded-b-none" : ""
        }`}
      >
        <a href="/">
          <img
            className="h-11"
            src="./src/assets/icons/LogoIcon.png"
            alt="Logo"
          />
        </a>
        <button
          className="relative w-8 h-4 flex flex-col justify-between items-center group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-black transform transition-all duration-300 ${
              menuOpen ? "-rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transform transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transform transition-all duration-300 ${
              menuOpen ? "rotate-45 -translate-y-2 " : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Мобильное выпадающее меню */}
      <div
        className={`flex flex-col items-center gap-4 p-4 bg-white shadow-xl rounded-b-3xl md:hidden fixed top-24 left-[5%] w-[90%] z-50 border-b-none transition-all duration-300 transform ${
          menuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <a
          className="text-xl md:block block mb-4 md:mb-0"
          href="https://t.me/cube_fund"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("navFooter.Blog")}
        </a>
        <a
          href="https://t.me/cube_fund"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-Networks-Links"
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
            className="social-Networks-Links"
            src="../src/assets/icons/supportIcon.png"
            alt="support icon"
          />
        </a>
        <a
          href="https://t.me/cube_fund"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-Networks-Links"
            src="../src/assets/icons/xLogoIcon.png"
            alt="X icon"
          />
        </a>

        {/* Смена языка (мобильная версия) */}
        <div className="flex items-center gap-2 mt-6">
          <button
            className={`text-sm text-gray-500 ${
              currentLanguage === "en" ? "font-semibold text-black" : ""
            }`}
            onClick={() => changeLanguage("en")}
          >
            ENG
          </button>

          <span>/</span>

          <button
            className={`text-sm text-gray-500 ${
              currentLanguage === "ru" ? "font-semibold text-black" : ""
            }`}
            onClick={() => changeLanguage("ru")}
          >
            RU
          </button>
        </div>
      </div>
    </header>
  );
}
