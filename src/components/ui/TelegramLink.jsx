import { useTranslation } from "react-i18next";

export default function TelegramLink({
  href = "https://t.me/CUBE_Fund_bot",
  showIcon = true,
  textKey = "telegram.linkText", // Use a key to reference translation
  marginX = "mx-auto",
  maxW = "max-w-[250px]"
}) {
  const { t } = useTranslation();

  return (
    <a
      className={`flex items-center justify-center ${maxW} py-3 
                  bg-[#1AB1F6] text-white hover:bg-[#1389c9] ${marginX} 
                  rounded-3xl`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t(textKey, "Launch on Telegram")} {/* Translate using key */}
      {showIcon && (
        <img
          className="ml-1 max-w-5"
          src="../src/assets/icons/telegramLightIcon.png"
          alt="telegram icon"
        />
      )}
    </a>
  );
}
