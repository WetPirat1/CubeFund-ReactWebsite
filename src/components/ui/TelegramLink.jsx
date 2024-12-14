

export default function TelegramLink({ href = "https://t.me/CUBE_Fund_bot", showIcon = true, text = "Launch on Telegram" }) {
  return (
    <a
      className="flex items-center justify-center max-w-[250px] py-3 
                bg-[#1AB1F6] text-white hover:bg-[#1389c9] mx-auto 
                rounded-3xl"
      href={href}
      target="_blank"
    >
      {text}
      {showIcon && (
        <img
          className="ml-1 max-w-5"
          src="../src/assets/telegram_light_link.png"
          alt="telegram icon"
        />
      )}
    </a>
  );
}
