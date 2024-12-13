import React from "react";
import SocialLinks from "../ui/SocialLinks";
import TelegramLink from "../ui/TelegramLink";


export default function Header() {
  return (
    <header className=" max-w-5xl mx-auto">
      <nav className="flex justify-between">
        <a href="#">
          <img src="#" alt="logo" />
        </a>
        <SocialLinks />
      </nav>

      <div className="text-center">
        <h1 className="text-5xl mb-5">Cube Fund Invest</h1>
        <TelegramLink />
      </div>
    </header>
  );
}
