import FloatingSquares from "../ui/FloatingSquares";
import Accordion from '../ui/AccordionFAQ.jsx';

export default function FAQSection() {
  return (
    <div className="relative justify-center p-64">
      <FloatingSquares overflowEnabled={true} />
      <h2 className="text-center font-light text-5xl mb-10">FAQ</h2>

      {/* Контейнер с размытым фоном для аккордеона */}
      <div className="shadow-s"
        style={{
          background: 'rgba(255, 255, 255, 0.0)', // Прозрачный фон
          backdropFilter: 'blur(8px)', // Эффект размытия
          borderRadius: '1px'
        }}
      >
        <Accordion />
      </div>
    </div>
  );
}
