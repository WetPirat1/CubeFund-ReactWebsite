import React from "react";
import FloatingSquares from "../ui/FloatingSquares";

export default function SloganSection() {
  return (
    <section className="relative">
      <div className="max-section-screen mx-auto flex justify-between gap-20 mb-60 max-sm:flex-col max-sm:gap-7 ">
        <div className="w-[50%] max-sm:order-2 max-sm:mx-auto max-sm:w-[90%]">
          <img
            className="max-w-lg max-sm:max-w-xs mx-auto"
            src="./src/assets/sections/SloganSection.png"
            alt=""
          />
        </div>

        <div className="w-[50%] max-sm:mx-auto max-sm:w-[90%] max-sm:text-center">
          <h2 className="text-5xl mb-5 mt-7 max-sm:text-4xl">
            Trust. Invest. <span className="bg-[#3AC1FF]">Grow.</span>
          </h2>
          <p className="text-3xl max-w-[80%] leading-[50px] max-sm:leading-[70px] max-sm:mx-auto max-sm:text-xl max-sm:max-w-[90%]">
            Trust your assets to professionals
            <br></br>
            Invest in crypto and value your time
            <br></br>
            Grow with CUBE
          </p>
        </div>
      </div>
      <FloatingSquares />
    </section>
  );
}
