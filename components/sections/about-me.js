import useWindowResize from "../../hooks/useWindowResize";

function AboutMe() {
  const { windowHeight } = useWindowResize();

  return (
    <section
      id="about-me"
      className={`flex flex-col items-center justify-center${
        windowHeight < 500 ? " h-[500px]" : " h-[calc(100vh_-_80px)]"
      }`}
    >
      <div className="-mt-40 space-y-4">
        <h1 className="text-xl font-light sm:text-3xl">Hello my name is</h1>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold underline underline-offset-8 text-header xs:text-5xl sm:text-6xl md:text-7xl">
            Dwayne Manlove
          </h1>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl">
            and I build things online.
          </h2>
        </div>

        <div>
          <div className="max-w-2xl font-light text-secondary sm:text-lg">
            I am a fullstack developer specializing in Python and Javascript.
            I&apos;ve also worked in marketing analytics, IT, and product
            support. Welcome to my portfolio.
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
