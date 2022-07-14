import { useEffect, useState } from "react";

function useWindowResize() {
  const [windowWidth, setWindowWidth] = useState();
  const [windowHeight, setWindowHeight] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { windowWidth, windowHeight };
}

export default useWindowResize;
