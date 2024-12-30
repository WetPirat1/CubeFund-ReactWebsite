import React, { useState, useEffect, useRef } from "react";
import TelegramLink from "./TelegramLink";

export default function TelegramBotBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={footerRef}
        style={{ height: "1px" }}
        id="footer-tracker"
      ></div>
      <div
        className={`bg-[#222222] p-3 fixed bottom-7 right-3 rounded-3xl z-50 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } max-sm:left-1/2 max-sm:bottom-4 max-sm:w-[85%] max-sm:-translate-x-1/2`}
      >
        <ul className="flex justify-around items-center gap-3">
          <li>
            <img
              className="max-w-12 rounded-none max-sm:max-w-8"
              src="./src/assets/icons/BannerIcon.png"
              alt="footer logo"
            />
          </li>
          <li className="text-white">
            <h4 className="text-md font-medium max-sm:text-xl">Cube Fund</h4>
            <p className="sm:text-xs max-sm:text-sm">Trust. Invest. Grow.</p>
          </li>
          <li className="text-xs w-40">
            <TelegramLink showIcon={false} />
          </li>
        </ul>
      </div>
    </>
  );
}
