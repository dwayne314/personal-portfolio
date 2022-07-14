import useMenu from "../hooks/useMenu";

export default function MobileNavBtn() {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <div
      onClick={toggleMenu}
      className="relative inline-flex flex-col justify-around w-8 h-8 my-auto -mt-2 cursor-pointer"
    >
      <div
        className={`w-full h-0.5 bg-current duration-300 rounded${
          isMenuOpen ? " rotate-45 translate-y-[10.8px]" : ""
        }`}
      ></div>
      <div
        className={`w-full h-0.5 bg-current duration-300 rounded${
          isMenuOpen ? " opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-full h-0.5 bg-current duration-300 rounded${
          isMenuOpen ? " -rotate-45 -translate-y-[10.8px]" : ""
        }`}
      ></div>
    </div>
  );
}
