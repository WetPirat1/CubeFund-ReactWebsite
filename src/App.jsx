import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HowWorks from "./components/sections/HowWorks";
import TrustSection from "./components/sections/TrustSection";
import "./tailwind.css";

function App() {
  return (
    <>
      <Header />
      <TrustSection />
      <HowWorks />
      <Footer />
    </>
  );
}

export default App;
