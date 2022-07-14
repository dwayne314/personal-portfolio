import { createContext, useCallback, useContext, useState } from "react";

const CurrentSectionContext = createContext({});

export function CurrentSectionProvider({ children }) {
  const [currentSection, setCurrentSection] = useState("about-me");

  const updateCurrentSection = useCallback((section) => {
    setCurrentSection(section);
  }, []);

  return (
    <CurrentSectionContext.Provider
      value={{ currentSection, updateCurrentSection }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
}

export default function useCurrentSection() {
  return useContext(CurrentSectionContext);
}
