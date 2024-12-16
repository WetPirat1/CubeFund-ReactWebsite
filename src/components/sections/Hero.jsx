import React from "react";
import TelegramLink from "../ui/TelegramLink";
import FloatingSquares from "../ui/FloatingSquares";

export default function Hero() {
  return (
    <div className="text-center pt-64 pb-64 relative">
      <FloatingSquares overflowEnabled={true} />
      <h1 className="text-7xl mb-5">Cube Fund Invest</h1>
      <TelegramLink />
    </div>
  );
}
