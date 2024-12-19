import React from "react";
import Logo_footer from "../../assets/Logo_footer";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center max-md:flex-col gap-10 my-10">
        <div className="flex items-center gap-2 text-center max-lg:flex-col ">
          <Logo_footer />
          <h3 className="text-2xl font-semibold">Cube Fund Invest</h3>
        </div>

        <div className="flex gap-10 items-center justify-center max-md:flex max-md:flex-col max-md:gap-5">
          <div className="flex max-lg:order-2">
            <a
              className="text-2xl block mb-4 max-md:mx-auto"
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>

          <div className="flex gap-7 max-lg:order-1">
  <a
    href="https://t.me/cube_fund"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className="w-8 h-8 object-contain"
      src="../src/assets/telegram_black.png"
      srcSet="
        ../src/assets/telegram-gray.png 1024w,
        ../src/assets/telegram_black.png 1025w
      "
      sizes="(max-width: 1024px) 32px, 32px"
      alt="telegram icon"
    />
  </a>
  <a
    href="https://t.me/cube_fund"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className="w-8 h-8 object-contain"
      src="../src/assets/support_img.png"
      srcSet="
        ../src/assets/support-gray.png 1024w,
        ../src/assets/support_img.png 1025w
      "
      sizes="(max-width: 1024px) 32px, 32px"
      alt="support icon"
    />
  </a>
  <a
    href="https://t.me/cube_fund"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className="w-8 h-8 object-contain"
      src="../src/assets/x_logo_img.png"
      srcSet="
        ../src/assets/x-gray.png 1024w,
        ../src/assets/x_logo_img.png 1025w
      "
      sizes="(max-width: 1024px) 32px, 32px"
      alt="X icon"
    />
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}
