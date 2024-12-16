import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import HowWorks from "./components/sections/HowWorks";
import TrustSection from "./components/sections/TrustSection";
import FloatingSquares from "./components/ui/FloatingSquares";
import TelegramBotBanner from "./components/ui/TelegramBotBanner";
import "./tailwind.css";

function App() {
  return (
    <>
      <TelegramBotBanner />

      <Header />

      <Hero />

      <TrustSection />

      <HowWorks />

      <Footer />
    </>
  );
}

export default App;
