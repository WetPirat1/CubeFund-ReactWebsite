import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

// Create the LanguageTransitionContext
export const LanguageTransitionContext = createContext({
  fade: false,
  setFadeState: () => {}, // Function to set fade state from child components
});

export function LanguageTransitionProvider({ children }) {
  const [fade, setFade] = useState(false); // State to handle the fade effect
  const { i18n } = useTranslation();

  // Language change handler
  const handleLanguageChange = (nextLanguage) => {
    setFade(true); // Trigger fade-out

    // Wait for the fade-out animation to finish before changing the language
    setTimeout(() => {
      i18n.changeLanguage(nextLanguage); // Change language
      setFade(false); // Trigger fade-in after language change
    }, 500); // 500ms corresponds to the fade duration
  };

  return (
    <LanguageTransitionContext.Provider value={{ fade, setFadeState: handleLanguageChange }}>
      {children}
    </LanguageTransitionContext.Provider>
  );
}

// Custom hook to easily access the context value
export const useLanguageTransition = () => {
  return useContext(LanguageTransitionContext);
};
