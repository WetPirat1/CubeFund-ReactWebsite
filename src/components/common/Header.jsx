import React from "react";
import SocialLinks from "../ui/SocialLinks";
import TelegramLink from "../ui/TelegramLink";
import Logo_nav from "../../assets/Logo_nav";

export default function Header() {
  return (
    <header className=" max-w-5xl mx-auto mt-8">
      <nav className="flex justify-between mb-8">
        <a href="#">
          <Logo_nav />
        </a>
        <SocialLinks />
      </nav>
    </header>
  );
}
