import { useTranslation } from "react-i18next";

export default function TelegramLink({
  href = "https://t.me/CUBE_Fund_bot",
  showIcon = true,
  textKey = "telegram.linkText", 
  marginX = "mx-auto",
  maxW = "max-w-[250px]",
  iconSize = "w-5 h-4",
  animateOnHover = false, 
}) {
  const { t } = useTranslation();

  return (
    <a
      className={`flex items-center justify-center ${maxW} py-3 
                  bg-[#1AB1F6] text-white hover:bg-[#1389c9] ${marginX} 
                  rounded-3xl transition-all duration-300 ease-in-out ${animateOnHover ? "transform hover:scale-105" : ""}`} // Special animation for mobile
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t(textKey, "Launch on Telegram")} // Adding accessibility for the link
    >
      {t(textKey, "Launch on Telegram")} {/* Translate using key, with fallback */}
      {showIcon && (
        <img
          className={`ml-1 ${iconSize} ${animateOnHover ? "transition-transform duration-300 ease-in-out transform hover:scale-110" : ""}`} // Conditional icon animation
          src="../src/assets/icons/telegramLightIcon.png"
          alt="telegram icon"
        />
      )}
    </a>
  );
}
