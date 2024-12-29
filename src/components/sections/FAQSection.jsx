import FloatingSquares from "../ui/FloatingSquares";
import Accordion from "../ui/AccordionFAQ.jsx";

export default function FAQSection() {
  return (
    <div className="relative justify-center sectionSpacing">
      <FloatingSquares overflowEnabled={true} />
      <h2 className="text-center font-light text-5xl mb-10">FAQ</h2>

      {/* Контейнер с размытым фоном для аккордеона */}
      <div
        className="shadow-s"
      >
        <Accordion />
      </div>
    </div>
  );
}
