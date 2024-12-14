import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HowWorks from "./components/sections/HowWorks";
import TrustSection from "./components/sections/TrustSection";
import FloatingSquares from "./components/ui/FloatingSquares";
import TelegramBotBanner from "./components/ui/TelegramBotBanner";
import "./tailwind.css";

function App() {
  return (
    <div className="relative">
      <FloatingSquares />

      <TelegramBotBanner />

      <Header />
      <div className="relative">
        <TrustSection />
        <FloatingSquares overflowEnabled={true} />
      </div>

      <div className="relative">
        <HowWorks />
        <FloatingSquares overflowEnabled={true} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
