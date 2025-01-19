import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageTransitionProvider } from "./components/contexts/LanguageTransitionContext"; // Import the context provider

import { Suspense, lazy, useState } from "react";
import Loader from "./components/ui/Loader"; 

// Ленивые компоненты
const Footer = lazy(() => import("./components/common/Footer"));
const Header = lazy(() => import("./components/common/Header"));
const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const AdvantagesSection = lazy(() => import("./components/sections/AdvantagesSection"));
const SloganSection = lazy(() => import("./components/sections/SloganSection"));
const TelegramBotBanner = lazy(() => import("./components/ui/TelegramBotBanner"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const InvestmentSteps = lazy(() => import("./components/sections/HowToInvestSection"));
const FAQSection = lazy(() => import("./components/sections/FAQSection"));
const ProfitabilitySection = lazy(() => import("./components/sections/ProfitabilitySection"));
const DepositCalculator = lazy(() => import("./components/sections/CalculatorSection"));
const AboutUsTablesSection = lazy(() => import("./components/sections/AboutUsTablesSection"));
const RewardedSection = lazy(() => import("./components/sections/rewardedSection"));

import "./tailwind.css";
import "./components/i18n"; // Import i18n configuration

function App() {
  const [isPageLoaded] = useState(false);

  return (
    <LanguageTransitionProvider>
      <Router>
        {/* Показываем Loader на первых этапах загрузки страницы */}
        {!isPageLoaded && <Loader />}
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Главная страница с полноценной структурой */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HeroSection />
                  <SloganSection />
                  <AboutUsTablesSection />
                  <ProfitabilitySection />
                  <RewardedSection />
                  <AdvantagesSection />
                  <DepositCalculator />
                  <InvestmentSteps />
                  <FAQSection />
                  <Footer />
                  <TelegramBotBanner /> {/* ВАЖНО! Иначе не будет скрывать при скроле на футер */}
                </>
              }
            />

            {/* Страница 404 (без Header, Footer и других компонентов) */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageTransitionProvider>
  );
}

export default App;
