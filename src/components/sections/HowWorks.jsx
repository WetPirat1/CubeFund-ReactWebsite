import React from "react";
import FloatingSquares from "../ui/FloatingSquares";

export default function HowWorks() {
  return (
    <section className="relative">
      <FloatingSquares />
      <div className="flex justify-between items-center max-section-screen mx-auto">
        <div className="w-[50%]">
          <ul>
            <li className="flex items-center mb-16 gap-7">
              <img className="max-h-28" src="./src/assets/diamond.png" alt="" />
              <p className="text-4xl">Easy to use</p>
            </li>
            <li className="flex items-center mb-16 gap-7">
              <img className="max-h-28" src="./src/assets/diamond.png" alt="" />
              <p className="text-4xl">Blockchain Based</p>
            </li>
            <li className="flex items-center gap-7">
              <img className="max-h-28" src="./src/assets/diamond.png" alt="" />
              <p className="text-4xl">Telegram integration</p>
            </li>
          </ul>
        </div>
        <div className="mx-auto flex flex-col items-center">
          <img
            className="mb-10 max-w-52"
            src="./src/assets/howWorks_check_img.png"
            alt=""
          />
          <p className="max-w-96 text-2xl">
            Easy to use app that helps you to invest right from your smartphone
            anywhere and anytime.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
