import { useState, useEffect } from "react";
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
  const { t, i18n } = useTranslation();
  const [isFading, setIsFading] = useState(false);
  const [text, setText] = useState(t(textKey, "Launch on Telegram"));

  // Track language change and trigger fade animation
  useEffect(() => {
    // Start fade out animation before changing text
    setIsFading(true);

    // After fade out ends, update the text
    const timer = setTimeout(() => {
      setText(t(textKey, "Launch on Telegram")); // Update text after fade out
    }, 200); // Delay to match the duration of the fade

    // After updating text, start fade in animation
    const timer2 = setTimeout(() => {
      setIsFading(false); // End the fade effect, text is now updated
    }, 300); // Wait until the text is updated before starting the fade in

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    }; // Cleanup timers on component unmount
  }, [i18n.language, t, textKey]);

  return (
    <a
      className={`flex items-center justify-center ${maxW} py-3 
                  bg-[#1AB1F6] text-white hover:bg-[#1389c9] ${marginX} 
                  rounded-3xl transition-all duration-300 ease-in-out ${animateOnHover ? "transform hover:scale-105" : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text} // Adding accessibility for the link
    >
      {/* Animated text with fade effect */}
      <span
        className={`transition-all duration-500 
          ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
      >
        {text} {/* Display the text after translation */}
      </span>
      
      {/* Animated icon with fade effect */}
      {showIcon && (
        <img
          className={`ml-1 ${iconSize} transition-all duration-500
            ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          src="../src/assets/icons/telegramLightIcon.png"
          alt="telegram icon"
        />
      )}
    </a>
  );
}
