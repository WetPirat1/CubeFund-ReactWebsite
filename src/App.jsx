import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HowWorks from "./components/sections/HowWorks";
import TrustSection from "./components/sections/TrustSection";
import TelegramBotBanner from "./components/ui/TelegramBotBanner";
import "./tailwind.css";

function App() {
  return (
    <>
      <TelegramBotBanner />
      <Header />
      <TrustSection />
      <HowWorks />
      <Footer />
    </>
  );
}

export default App;
