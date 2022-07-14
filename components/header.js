import useError from "../hooks/useError";
import useMenu from "../hooks/useMenu";
import useNavigation from "../hooks/useNavigation";
import Logo from "./logo";
import MobileNavBtn from "./mobileNavBtn";

export default function Header() {
  const { toggleMenu } = useMenu();
  const { navOptions, navigateTo } = useNavigation();
  const { isError } = useError();

  return (
    <div
      className={`sticky top-0 left-0 z-50 flex items-center justify-between p-5 bg-background text-blue-grey-500${
        isError ? " hidden" : " block"
      }`}
    >
      <span className="cursor-pointer" onClick={() => navigateTo("about-me")}>
        <Logo />
      </span>
      <div className="block sm:hidden">
        <span className="flex" onClick={toggleMenu}>
          <MobileNavBtn />
        </span>
      </div>
      <div className="hidden sm:block">
        <div className="flex space-x-4 text-blue-grey-500">{navOptions}</div>
      </div>
    </div>
  );
}
