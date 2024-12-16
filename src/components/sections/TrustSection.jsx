import React from "react";
import FloatingSquares from "../ui/FloatingSquares";
export default function TrustSection() {
  return (
    <section className="relative">
      <div className="max-section-screen mx-auto flex justify-between gap-20 mb-60">
        <div className="w-[50%]">
          <img className="max-w-lg" src="./src/assets/Trust_img.png" alt="" />
        </div>
        <div className="w-[50%]">
          <h2 className="text-5xl mb-5 mt-7">
            Trust. Invest. <span className="bg-[#3AC1FF]">Grow.</span>
          </h2>
          <p className="text-3xl max-w-[80%] leading-[50px]">
            Trust your assets to professionals Invest in crypto and value your
            time Grow with CUBE
          </p>
        </div>
      </div>
      <FloatingSquares />
    </section>
  );
}
