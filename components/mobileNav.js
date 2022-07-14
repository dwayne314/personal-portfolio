import { useEffect, useRef } from "react";
import useNavigation from "../hooks/useNavigation";

export default function MobileNav() {
  const { navOptions } = useNavigation();
  const ref = useRef();

  useEffect(() => {
    function handleWheel(evt) {
      evt.preventDefault();
    }

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () =>
      window.removeEventListener("wheel", handleWheel, { passive: false });
  }, []);

  useEffect(() => {
    const mobileNavRef = ref.current;
    function handleTouchMove(evt) {
      evt.preventDefault();
    }

    mobileNavRef.addEventListener("touchmove", handleTouchMove);

    return () => mobileNavRef.removeEventListener("touchmove", handleTouchMove);
  }, []);

  return (
    <div
      ref={ref}
      className="z-50 bg-blue-grey-900 fixed top-[calc(85px)] right-0 w-full h-full"
    >
      <div className="flex flex-col items-center space-y-8 mt-36">
        {navOptions}
      </div>
    </div>
  );
}
