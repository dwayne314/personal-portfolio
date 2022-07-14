import { useState, useEffect } from "react";
import useWindowResize from "../hooks/useWindowResize";
import useWindowScroll from "../hooks/useWindowScroll";

export default function Logo({ isAnimated = false }) {
  const { windowHeight } = useWindowResize();
  const { isScrolling } = useWindowScroll();
  const [offset, setOffset] = useState(360);
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    if (!isAnimated) {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      setOffset(52 + 308 * scrollPercent);
    }
  }, [windowHeight, isScrolling, isAnimated]);

  useEffect(() => {
    function shrinkLogo() {
      setIsShrinking(true);
    }
    const timeoutId = window.setTimeout(shrinkLogo, 1400);

    return () => window.clearTimeout(timeoutId);
  });

  return (
    <div className={`${isAnimated ? "p-3 h-screen" : ""}`}>
      <svg
        width={isAnimated ? "100" : "45"}
        height={isAnimated ? "100" : "45"}
        viewBox="0 0 110 110"
        fill="none"
        className={`${
          isAnimated
            ? "absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            : ""
        } ${isAnimated && isShrinking ? " scale-0 duration-1000" : ""}`}
      >
        <circle
          fill="none"
          stroke="#607d8b"
          strokeWidth="7"
          stroke-mitterlimit="0"
          cx="50%"
          cy="50%"
          r="50"
          strokeDashoffset={offset}
          strokeDasharray="360"
          strokeLinecap="round"
        >
          {isAnimated ? (
            <animate
              attributeName="stroke-dashoffset"
              values="360;0"
              dur="1.5s"
              repeatCount="1"
            ></animate>
          ) : (
            ""
          )}
        </circle>
        <path
          d="M72.0077 100H53.9608V49.0909H72.1569C77.2776 49.0909 81.6858 50.1101 85.3813 52.1484C89.0769 54.1702 91.9189 57.0786 93.9076 60.8736C95.9128 64.6686 96.9154 69.2093 96.9154 74.4957C96.9154 79.7988 95.9128 84.3561 93.9076 88.1676C91.9189 91.9792 89.0603 94.9041 85.3316 96.9425C81.6195 98.9808 77.1782 100 72.0077 100ZM64.7243 90.7777H71.5603C74.7421 90.7777 77.4185 90.2143 79.5894 89.0874C81.7769 87.9439 83.4175 86.179 84.5113 83.7926C85.6216 81.3897 86.1768 78.2907 86.1768 74.4957C86.1768 70.7339 85.6216 67.6598 84.5113 65.2734C83.4175 62.8871 81.7852 61.1304 79.6143 60.0035C77.4433 58.8767 74.767 58.3132 71.5851 58.3132H64.7243V90.7777Z"
          fill="#607d8b"
          transform="translate(-15 -18)"
        />
      </svg>
    </div>
  );
}
