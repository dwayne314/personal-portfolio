import useCurrentSection from "./useCurrentSection";
import useMenu from "./useMenu";
import useScroll from "./useScroll";

function useNavigation() {
  const { scrollTo } = useScroll();
  const { toggleMenu, isMenuOpen } = useMenu();
  const { currentSection } = useCurrentSection();

  function navigateTo(location) {
    if (isMenuOpen) toggleMenu();
    scrollTo(location);
  }

  const navOptions = (
    <>
      <span
        onClick={() => navigateTo("about-me")}
        className={`text-2xl cursor-pointer sm:text-base hover:text-header${
          currentSection === "about-me" ? " text-header" : ""
        }`}
      >
        About Me
      </span>
      <span
        onClick={() => navigateTo("my-experience")}
        className={`text-2xl cursor-pointer sm:text-base hover:text-header${
          currentSection === "my-experience" ? " text-header" : ""
        }`}
      >
        My Experience
      </span>
      <span
        onClick={() => navigateTo("my-projects")}
        className={`text-2xl cursor-pointer sm:text-base hover:text-header${
          currentSection === "my-projects" ? " text-header" : ""
        }`}
      >
        My Projects
      </span>
      <span
        onClick={() => navigateTo("contact-me")}
        className={`text-2xl cursor-pointer sm:text-base hover:text-header${
          currentSection === "contact-me" ? " text-header" : ""
        }`}
      >
        Contact Me
      </span>
    </>
  );

  return { navOptions, navigateTo };
}

export default useNavigation;
