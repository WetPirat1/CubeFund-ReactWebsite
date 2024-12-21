export default function TelegramLink({
  href = "https://t.me/CUBE_Fund_bot",
  showIcon = true,
  text = "Launch on Telegram",
  marginX = "mx-auto",
  maxW = "max-w-[250px]"
}) {
  return (
    <a
      className={`flex items-center justify-center ${maxW} py-3 
                  bg-[#1AB1F6] text-white hover:bg-[#1389c9] ${marginX} 
                  rounded-3xl`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
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
