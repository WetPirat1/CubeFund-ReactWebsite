import * as React from "react";
import { useTranslation } from "react-i18next";

export default function CustomizedAccordions() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => () => {
    setExpanded(expanded === panel ? null : panel);
  };

  const accordionStyle = {
    borderBottom: "1px solid #ccc",
    overflow: "hidden",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "350",
  };

  const contentStyle = {
    overflow: "hidden",
    transition: "max-height 0.3s ease",
  };

  const iconStyle = (isExpanded) => ({
    transition: "transform 0.5s ease",
    transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
    fontSize: "24px",
  });

  const panelContent = (isExpanded) => ({
    maxHeight: isExpanded ? "150px" : "0",
    padding: isExpanded ? "10px 15px" : "0 15px",
    color: "#666",
    fontSize: "16px",
    transition: "max-height 0.3s ease, padding 0.3s ease",
  });

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      {[1, 2, 3, 4].map((num) => (
        <div key={num} style={accordionStyle}>
          <div style={headerStyle} onClick={handleChange(`panel${num}`)}>
            <span>{t(`accordion.panel${num}.title`)}</span>
            <span style={iconStyle(expanded === `panel${num}`)}>+</span>
          </div>
          <div
            style={{
              ...contentStyle,
              ...panelContent(expanded === `panel${num}`),
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
