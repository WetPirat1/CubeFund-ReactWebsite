import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../ui/LanguageSwitcher"; // Importing the LanguageSwitcher component
import { useLanguageTransition } from "../contexts/LanguageTransitionContext"; // Import context


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Use i18n object for changing language
  const { setFadeState, fade } = useLanguageTransition(); // Get fade state handler from context
  const [animating, setAnimating] = useState(false); // To track animation state

  // Use a ref to check if the click is inside the mobile menu
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const handleChangeLanguage = (lang) => {
    if (!animating) {
      setAnimating(true); // Start the animation
      setFadeState(lang); // Trigger fade before language change
      
      // Задержка для анимации
      setTimeout(() => {
        i18n.changeLanguage(lang); // Change language after animation
        setAnimating(false); // Reset animation state
      }, 800); // Задержка, которая соответствует длительности анимации
    }
    
    // Добавим задержку для того, чтобы сначала проигралась анимация смены языка, а потом закрылось меню
    setTimeout(() => {
      setMenuOpen(false); // Close the menu after the animation
    }, 800); // Задержка в 800ms
  };

  // Close the mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !headerRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu if click is outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bz-50 sticky z-30 top-0 bg-transparent backdrop-blur-lg" ref={headerRef}>
      {/* Desktop nav */}
      <nav
        className={`hidden md:flex justify-between items-center max-w-5xl mx-auto p-4 ${menuOpen ? "rounded-b-none" : "rounded-b-3xl"}`}
      >
        <a className="h-14" href="/">
          <img
            src="./src/assets/icons/LogoIcon.png"
            alt="Logo"
            className="h-full te-blue-600"
          />
        </a>
        <div className="flex gap-10 items-center md:justify-start justify-center">
          {/* Translatable text with animation */}
          <a
            className={`text-xl md:block block mb-4 md:mb-0 transition-all duration-500 ease-in-out ${
              fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
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
              className="social-Networks-Links size-7"
              src="../src/assets/icons/telegramBlackIcon.png"
              alt="telegram icon"
            />
          </a>
          <a
            href="https://t.me/CUBE_Fund_Support"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-Networks-Links size-7"
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
              className="social-Networks-Links size-6"
              src="../src/assets/icons/xLogoIcon.png"
              alt="X icon"
            />
          </a>

          {/* Language switcher (desktop) */}
          <LanguageSwitcher
            currentLanguage={i18n.language} // Pass the current language from i18n
            changeLanguage={handleChangeLanguage} // Pass the language change handler
          />
        </div>
      </nav>

      {/* Mobile nav */}
      <nav
        className={`flex md:hidden justify-between items-center p-4 fixed top-0 left-[5%] w-[90%] bg-white z-50 shadow-xl rounded-3xl mt-6 transition-all duration-300 transform ${menuOpen ? "rounded-b-none" : ""}`}
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
          {/* Top Bar (moves to the right when open) */}
          <span
            className={`block w-6 h-0.5 bg-black transform transition-all duration-300 ${menuOpen ? "translate-x-2" : ""}`}
          ></span>

          {/* Center Bar (disappears when open) */}
          <span
            className={`block w-6 h-0.5 bg-black transform transition-all duration-300 ${menuOpen ? "" : ""}`}
          ></span>

          {/* Bottom Bar (moves to the left when open) */}
          <span
            className={`block w-6 h-0.5 bg-black transform transition-all duration-300 ${menuOpen ? "-translate-x-2" : ""}`}
          ></span>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className={`flex flex-col items-center gap-4 p-4 bg-white shadow-xl rounded-b-3xl md:hidden fixed top-24 left-[5%] w-[90%] z-50 border-b-none transition-all duration-300 transform ${
          menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <a
          className={`text-xl md:block block mb-4 md:mb-0 transition-all duration-500 ease-in-out ${
            fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
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
            className="social-Networks-Links mb-8"
            src="../src/assets/icons/xLogoIcon.png"
            alt="X icon"
          />
        </a>

        {/* Language switcher (mobile) */}
        <LanguageSwitcher
          currentLanguage={i18n.language} // Pass the current language from i18n
          changeLanguage={handleChangeLanguage} // Pass the language change handler
        />
      </div>
    </header>
  );
}
