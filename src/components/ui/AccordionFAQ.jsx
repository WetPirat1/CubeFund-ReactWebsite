import * as React from "react";

export default function CustomizedAccordions() {
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
    fontSize: "18px", // Увеличено с 16px
    fontWeight: "350",
  };

  const contentStyle = {
    overflow: "hidden",
    transition: "max-height 0.3s ease",
  };

  const iconStyle = (isExpanded) => ({
    transition: "transform 0.5s ease",
    transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
    fontSize: "24px", // Увеличено с дефолтного размера
  });

  const panelContent = (isExpanded) => ({
    maxHeight: isExpanded ? "150px" : "0",
    padding: isExpanded ? "10px 15px" : "0 15px",
    color: "#666",
    fontSize: "16px", // Увеличено с 14px
    transition: "max-height 0.3s ease, padding 0.3s ease",
  });

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      {/* Panel 1 */}
      <div style={accordionStyle}>
        <div style={headerStyle} onClick={handleChange("panel1")}>
          <span>Who are we?</span>
          <span style={iconStyle(expanded === "panel1")}>+</span>
        </div>
        <div
          style={{ ...contentStyle, ...panelContent(expanded === "panel1") }}
        >
          We are an investment platform specializing in managing crypto assets.
          Stable income is ensured by our strategies based on mathematical
          trading models, whose efficiency has been proven over time.
        </div>
      </div>

      {/* Panel 2 */}
      <div style={accordionStyle}>
        <div style={headerStyle} onClick={handleChange("panel2")}>
          <span>How do the payments work?</span>
          <span style={iconStyle(expanded === "panel2")}>+</span>
        </div>
        <div
          style={{ ...contentStyle, ...panelContent(expanded === "panel2") }}
        >
          You can withdraw your funds upon the completion of the investment term
          through the "History" section by clicking the "Withdraw" button.
        </div>
      </div>

      {/* Panel 3 */}
      <div style={accordionStyle}>
        <div style={headerStyle} onClick={handleChange("panel3")}>
          <span>What happens to the money?</span>
          <span style={iconStyle(expanded === "panel3")}>+</span>
        </div>
        <div
          style={{ ...contentStyle, ...panelContent(expanded === "panel3") }}
        >
          Your investments are diversified across portfolios through smart
          contracts. Fund returns are automatically processed upon the
          expiration of the investment period.
        </div>
      </div>

      {/* Panel 4 */}
      <div style={accordionStyle}>
        <div style={headerStyle} onClick={handleChange("panel4")}>
          <span>How can I contact support?</span>
          <span style={iconStyle(expanded === "panel4")}>+</span>
        </div>
        <div
          style={{ ...contentStyle, ...panelContent(expanded === "panel4") }}
        >
          Customer support is available 24/7 via the Telegram chat{" "}
          <a
            href="https://t.me/CUBE_Fund_Support"
            className="underline hover:text-gray-700 transition-colors"
          >
            here
          </a>
          .
        </div>
      </div>
    </div>
  );
}
