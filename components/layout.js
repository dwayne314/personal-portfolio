import { useState, useEffect } from "react";
import useMenu from "../hooks/useMenu";
import useWindowResize from "../hooks/useWindowResize";
import Logo from "./logo";
import Header from "./header";
import MobileNav from "./mobileNav";

export default function Layout({ children }) {
  const { isMenuOpen, toggleMenu } = useMenu();
  const { windowWidth } = useWindowResize();
  const [isStartAnimationPlaying, setStartAnimationPlaying] = useState(true);
  const [oldWindowWidth, setOldWindowWidth] = useState(windowWidth);

  useEffect(() => {
    if (windowWidth !== oldWindowWidth) {
      setOldWindowWidth(windowWidth);

      if (isMenuOpen) toggleMenu();
    }
  }, [isMenuOpen, windowWidth, toggleMenu, oldWindowWidth]);

  useEffect(() => {
    function runStartAnimation() {
      setStartAnimationPlaying(false);
    }
    const timeout = window.setTimeout(runStartAnimation, 2300);
    return () => window.clearTimeout(timeout);
  }, [isStartAnimationPlaying]);

  return (
    <div className="text-white bg-background">
      {isStartAnimationPlaying ? (
        <Logo isAnimated={true} />
      ) : (
        <>
          <Header />
          {isMenuOpen ? <MobileNav /> : ""}
          <div>{children}</div>
        </>
      )}
    </div>
  );
}
