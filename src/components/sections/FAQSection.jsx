import FloatingSquares from "../ui/FloatingSquares";
import Accordion from "../ui/AccordionFAQ.jsx";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer hook

export default function FAQSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 }); // Observe the component visibility

  return (
    <div className="relative justify-center sectionSpacing">
      {/* FloatingSquares remains unaffected */}
      <FloatingSquares overflowEnabled={true} />
      
      <h2 className="text-center font-light text-5xl mb-10">FAQ</h2>

      {/* Accordion container with fade-in effect */}
      <div
        ref={ref}
        className={`shadow-s transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}
      >
        <Accordion />
      </div>
    </div>
  );
}
