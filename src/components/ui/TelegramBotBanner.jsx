import { useState, useEffect, useRef } from "react";
import TelegramLink from "./TelegramLink";

export default function TelegramBotBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) { // Показываем баннер после прокрутки на 100px
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          isVisible && hasScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        } max-sm:left-1/2 max-sm:bottom-4 max-sm:w-[85%] max-sm:-translate-x-1/2`}
      >
        <ul className="flex justify-between items-center ">
          <li className="text-white flex items-center md:mr-10">
            <img
              className="max-w-12 rounded-none max-sm:max-w-12 mr-3" // Увеличили иконку на мобильных устройствах
              src="./src/assets/icons/BannerIcon.png"
              alt="footer logo"
            />
        
            <div>
              <h4 className="text-md font-medium max-sm:text-md">Cube Fund Invest</h4>
              <p className="max-sm:text-[10px] lg:text-sm text-gray-400">Trust. Invest. Grow.</p>
            </div>
          </li>

          <li className="text-xs w-40">
            <TelegramLink showIcon={false} />
          </li>
        </ul>
      </div>
    </>
  );
}
