import { createContext, useCallback, useContext, useState } from "react";

const MenuContext = createContext({});

export function MenuProvider({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export default function useMenu() {
  return useContext(MenuContext);
}
