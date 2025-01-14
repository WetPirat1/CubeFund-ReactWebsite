import { useTranslation } from "react-i18next";
import Logo_footer from "../../../public/assets/icons/LogoFooterIcon";
import TelegramIcon from "../../../public/assets/icons/telegramGrayIcon.png";
import SupportIcon from "../../../public/assets/icons/supportGrayIcon.png";
import XIcon from "../../../public/assets/icons/xGrayIcon.png"; 

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="bg-white z-50">
      <div className="max-w-6xl mx-auto px-4 py-10 flex justify-between items-center max-md:flex-col gap-10 z-50">
        <div>
          <a
            className="flex items-center gap-2 text-center max-lg:flex-col"
            href="/"
          >
            <Logo_footer />
            <h3 className="text-xl text-gray-400 font-semibold">
              Cube Fund Invest
            </h3>
          </a>
        </div>

        <div className="flex gap-7 items-center justify-between max-md:flex max-md:flex-col max-md:gap-5">
          <div className="flex max-lg:order-2">
            <a
              className="text-xl mb-1 block text-center text-gray-400 animate"
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {/* mb-1 for align ite */}
              {t("navFooter.Blog")}
            </a>
          </div>

          <div className="flex gap-7 max-lg:order-1 items-center">
            <a
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
              className="animate"
            >
              <img
                className="w-6 h-6 object-contain animate"
                src={TelegramIcon}
                alt="telegram icon"
              />
            </a>
            <a
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
              className="animate"
            >
              <img
                className="w-6 h-6 object-contain animate"
                src={SupportIcon}
                alt="support icon"
              />
            </a>
            <a
              href="https://t.me/cube_fund"
              target="_blank"
              rel="noopener noreferrer"
              className="animate"
            >
              <img
                className="w-6 h-6 object-contain animate"
                src={XIcon}
                alt="X icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
