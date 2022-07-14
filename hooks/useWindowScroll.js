import { useEffect, useState } from "react";

function useWindowScroll() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function onWindowScroll(evt) {
      setIsScrolling(true);
    }

    document.addEventListener("scroll", onWindowScroll);
    setIsScrolling(false);

    return () => document.removeEventListener("scroll", onWindowScroll);
  }, [isScrolling]);

  return { isScrolling };
}

export default useWindowScroll;
