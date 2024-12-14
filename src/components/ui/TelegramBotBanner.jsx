import React from "react";
import TelegramLink from "./TelegramLink";

export default function TelegramBotBanner() {
  return (
    <div className="bg-[#222222] p-5 fixed bottom-7 right-10 rounded-3xl">
      <ul className="flex items-center gap-4">
        <li>
          <img src="./src/assets/Banner_img.png" alt="" />
        </li>
        <li className="text-white">
          <h4 className="text-2xl font-medium">Cube Fund</h4>
          <p>Trust. Invest. Grow.</p>
        </li>
        <li className="text-sm w-[200px]">
          <TelegramLink showIcon={false} />
        </li>
      </ul>
    </div>
  );
}
