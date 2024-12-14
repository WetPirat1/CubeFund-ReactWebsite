import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HowWorks from "./components/sections/HowWorks";
import TrustSection from "./components/sections/TrustSection";
import FloatingSquares from "./components/ui/FloatingSquares";
import TelegramBotBanner from "./components/ui/TelegramBotBanner";
import PageNotFound from "./components/PageNotFound";
import "./tailwind.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница с полноценной структурой */}
        <Route
          path="/"
          element={
            <div className="relative">
              <FloatingSquares />
              <TelegramBotBanner />
              <Header />

              <div className="relative">
                <TrustSection />
                <FloatingSquares overflowEnabled={true} />
                <HowWorks />
                <FloatingSquares overflowEnabled={true} />
              </div>

              <Footer />
            </div>
          }
        />

        {/* Страница 404 (без Header, Footer и других компонентов) */}
        <Route path="*" element={<PageNotFound />} />
        

      </Routes>
    </Router>
  );
}

export default App;
