import React from "react";

export default function SocialLinks() {
  return (
    <div className="flex gap-10 items-center">
      <a className="text-xl" href="#">
        Blog
      </a>
      <a href="#">
        <img
          className="social-Networks-Links"
          src="../src/assets/telegram_black.png"
          alt="telegram icon"
        />
      </a>
      <a href="#">
        <img className="social-Networks-Links" src="../src/assets/support_img.png" alt="support icon" />
      </a>
      <a href="#">
        <img className="social-Networks-Links" src="../src/assets/x_logo_img.png" alt="X icon" />
      </a>
    </div>
  );
}
