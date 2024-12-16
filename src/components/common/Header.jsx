// Header.jsx
import React, { useState } from "react";
import SocialLinks from "../ui/SocialLinks";
import Logo_nav from "../../assets/Logo_nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white z-50">
      {/* Хедер для устройств больше мобильного */}
      <nav className="hidden md:flex justify-between items-center max-w-5xl mx-auto p-4">
        <a href="/">
          <Logo_nav />
        </a>
        <SocialLinks />
      </nav>

      {/* Хедер для мобильных устройств */}
      <nav className="flex md:hidden justify-between items-center p-4 fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <a href="/">
          <Logo_nav />
        </a>
        <button
          className="text-3xl text-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"} {/* Иконка бургер-меню */}
        </button>
      </nav>

      {/* Ссылки для мобильного меню */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 p-4 bg-white shadow-lg rounded-md md:hidden fixed top-16 left-0 w-full z-50">
          <SocialLinks />
        </div>
      )}
    </header>
  );
}
