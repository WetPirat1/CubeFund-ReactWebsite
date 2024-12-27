import React from "react";
import TelegramLink from "./TelegramLink";

export default function TelegramBotBanner() {
  return (
    <div className="bg-[#222222] p-3  fixed bottom-7 right-10 rounded-3xl z-50 max-sm:right-6">
      <ul className="flex items-center gap-2">
        <li>
          <img
            className="max-w-12 rounded-none max-sm:max-w-8"
            src="./src/assets/icons/BannerIcon.png"
            alt=""
          />
        </li>
        <li className="text-white mr-4 ">
          <h4 className="text-md font-medium max-sm:text-xl">Cube Fund</h4>
          <p className="sm:text-xs">Trust. Invest. Grow.</p>
        </li>
        <li className="text-sm w-[170px]">
          <TelegramLink showIcon={false} />
        </li>
      </ul>
    </div>
  );
}
