import React, { useState } from "react";
import Logo_nav from "../../assets/Logo_nav";
import BurgerMenu from "../../assets/BurgerMenu";
import CrossNav from "../../assets/CrossNav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white z-50">
      {/* Десктоп-навигация */}
      <nav className="hidden md:flex justify-between items-center max-w-5xl mx-auto p-4">
        <a href="/">
          <Logo_nav />
        </a>

        <div className="flex gap-10 items-center md:justify-start justify-center">
          <a
            className="text-xl md:block block mb-4 md:mb-0"
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-Networks-Links"
              src="../src/assets/telegram_black.png"
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
              src="../src/assets/support_img.png"
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
              src="../src/assets/x_logo_img.png"
              alt="X icon"
            />
          </a>
        </div>
      </nav>

      {/* Мобильная навигация */}
      <nav className="flex md:hidden justify-between items-center p-4 fixed top-0 left-[13%] w-[70%] bg-white z-50 shadow-xl rounded-3xl mt-6">
        <a href="/">
          <Logo_nav />
        </a>
        <button
          className="text-3xl text-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CrossNav /> : <BurgerMenu />}
        </button>
      </nav>

      {/* Мобильное выпадающее меню */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 p-4 bg-white shadow-xl rounded-b-3xl md:hidden fixed top-16 left-[13%] w-[70%] z-50">
          <a
            className="text-xl md:block block mb-4 md:mb-0"
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            href="https://t.me/cube_fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-Networks-Links"
              src="../src/assets/telegram_black.png"
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
              src="../src/assets/support_img.png"
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
              src="../src/assets/x_logo_img.png"
              alt="X icon"
            />
          </a>
        </div>
      )}
    </header>
  );
}
