import * as React from "react";
import { useTranslation } from "react-i18next";

export default function CustomizedAccordions() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = React.useState(null);
  const [fadeState, setFadeState] = React.useState(""); // Для фейда текста

  const handleChange = (panel) => () => {
    if (expanded === panel) {
      setExpanded(null);
    } else {
      // Сначала включаем фейд
      setFadeState(panel);
      setTimeout(() => {
        setExpanded(panel); // Меняем состояние после завершения фейда
      }, 300); // Время фейда
    }
  };

  const getPanelContentClass = (panel) => {
    if (expanded === panel) return "opacity-100 scale-100";
    if (fadeState === panel) return "opacity-0 scale-95";
    return "opacity-0 scale-95 pointer-events-none";
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        background: "rgba(255, 255, 255, 0.8)", // Полупрозрачный фон
        backdropFilter: "blur(8px)", // Размытие
        borderRadius: "15px", // Скруглённые углы
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Тень
      }}
    >
      {[1, 2, 3, 4].map((num) => (
        <div
          key={num}
          style={{
            borderBottom: "1px solid #ddd",
            overflow: "hidden",
          }}
        >
          {/* Заголовок панели */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "450",
              backgroundColor: expanded === `panel${num}` ? "#f0f8ff" : "transparent", // Цвет заголовка при открытии
              transition: "background-color 0.3s ease",
            }}
            onClick={handleChange(`panel${num}`)}
            className="hover:bg-blue-100" // Эффект при наведении
          >
            <span>{t(`accordion.panel${num}.title`)}</span>
            <span
              style={{
                fontSize: "24px",
                transition: "transform 0.3s ease",
                transform: expanded === `panel${num}` ? "rotate(45deg)" : "rotate(0deg)", // Анимация вращения
              }}
            >
              +
            </span>
          </div>

          {/* Контент панели */}
          <div
            className={`transition-all duration-500 transform ${getPanelContentClass(
              `panel${num}`
            )}`}
            style={{
              maxHeight: expanded === `panel${num}` ? "150px" : "0", // Анимация высоты
              padding: expanded === `panel${num}` ? "10px 15px" : "0 15px", // Анимация отступов
              overflow: "hidden",
              color: "#666",
              fontSize: "16px",
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: t(`accordion.panel${num}.content`),
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
