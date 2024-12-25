import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HeroSection from "./components/sections/HeroSection";
import AdvantagesSection from "./components/sections/AdvantagesSection";
import SloganSection from "./components/sections/SloganSection";
import TelegramBotBanner from "./components/ui/TelegramBotBanner";
import PageNotFound from "./components/PageNotFound";
import "./tailwind.css";
import InvestmentSteps from "./components/sections/HowToInvestSection";
import FAQSection from "./components/sections/FAQSection";
import ProfitabilitySection from "./components/sections/ProfitabilitySection";

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница с полноценной структурой */}
        <Route
          path="/"
          element={
            <>
              {/* <TelegramBotBanner /> */}
              <Header />
              <HeroSection />
              <SloganSection />
              <ProfitabilitySection />
              <AdvantagesSection />
              <InvestmentSteps />
              <FAQSection />
              <Footer />
            </>
          }
        />

        {/* Страница 404 (без Header, Footer и других компонентов) */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
