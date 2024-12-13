import React from "react";

export default function SocialLinks() {
  return (
    <div className="flex gap-10 items-center">
      <a className="text-xl" href="#">
        Blog
      </a>
      <a href="#">
        <img
          className="max-w-11"
          src="./assets/telegram_black.png"
          alt="telegram_icon"
        />
      </a>
      <a href="#">
        <img className="max-w-11" src="#" alt="networc_icon" />
      </a>
      <a href="#">
        <img className="max-w-11" src="#" alt="networc_icon" />
      </a>
    </div>
  );
}
