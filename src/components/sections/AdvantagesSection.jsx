import React from "react";
import FloatingSquares from "../ui/FloatingSquares";

export default function AdvantagesSection() {
  return (
    <section className="relative">
      <FloatingSquares />

      <div className="flex justify-between items-center max-section-screen mx-auto max-sm:flex-col">
        <div className="w-[50%] max-sm:w-[90%] mx-auto">
          <ul>
            <li className="flex items-center mb-16 gap-7">
              <img className="max-h-28 max-sm:hidden" src="./src/assets/diamond.png" alt="" />
              <p className="text-4xl max-sm:mx-auto max-sm:bg-[#1AB1F6] max-sm:p-2 max-sm:rounded-3xl max-sm:text-white max-sm:font-thin">Easy to use</p>
            </li>
            <li className="flex items-center mb-16 gap-7">
              <img className="max-h-28 max-sm:hidden" src="./src/assets/diamond.png" alt="" />
              <p className="text-4xl max-sm:mx-auto max-sm:bg-[#1AB1F6] max-sm:p-2 max-sm:rounded-3xl max-sm:text-white max-sm:font-thin">Blockchain Based</p>
            </li>
            <li className="flex items-center gap-7">
              <img className="max-h-28 max-sm:hidden" src="./src/assets/diamond.png" alt="" />
              <p className="text-4xl max-sm:mx-auto max-sm:bg-[#1AB1F6] max-sm:p-2 max-sm:rounded-3xl max-sm:text-white max-sm:font-thin">Telegram integration</p>
            </li>
          </ul>
        </div>

        <div className="mx-auto flex flex-col items-center">
          <img
            className="mb-10 max-w-52 max-sm:hidden"
            src="./src/assets/howWorks_check_img.png"
            alt=""
          />
          <p className="max-w-96 text-2xl max-sm:hidden">
            Easy to use app that helps you to invest right from your smartphone
            anywhere and anytime.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
