import Head from "next/head";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AboutMe from "../components/sections/about-me";
import MyExperience from "../components/sections/my-experience";
import MyProjects from "../components/sections/my-projects";
import ContactMe from "../components/sections/contact-me";
import Footer from "../components/sections/footer";
import useError from "../hooks/useError";
import useCurrentSection from "../hooks/useCurrentSection";
import { getAllJobs } from "../lib/jobs";
import { getAllProjects } from "../lib/projects";

export default function Home({ allJobs, allProjects }) {
  const { setError } = useError();
  const useInViewOptions = { threshold: 0 };
  const { updateCurrentSection } = useCurrentSection();
  const { ref: experienceRef, inView: experienceVisible } =
    useInView(useInViewOptions);
  const { ref: recentProjectsRef, inView: recentProjectsVisible } =
    useInView(useInViewOptions);
  const { ref: contactMeRef, inView: contactMeVisible } =
    useInView(useInViewOptions);

  useEffect(() => {
    const aboutMePageCurrent = !(
      experienceVisible ||
      contactMeVisible ||
      recentProjectsVisible
    );
    const myExperienceCurrent = experienceVisible;
    const myProjectsCurrent = recentProjectsVisible && !contactMeVisible;

    if (aboutMePageCurrent) {
      updateCurrentSection("about-me");
    } else if (myExperienceCurrent) {
      updateCurrentSection("my-experience");
    } else if (myProjectsCurrent) {
      updateCurrentSection("my-projects");
    } else {
      updateCurrentSection("contact-me");
    }
  }, [
    contactMeVisible,
    experienceVisible,
    recentProjectsVisible,
    updateCurrentSection,
  ]);

  useEffect(() => {
    setError(false);
  }, [setError]);

  return (
    <>
      <Head>
        <title>Dwayne Manlove</title>
        <meta name="description" content="Portfolio By Dwayne Manlove" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl px-6 mx-auto">
        <AboutMe />
        <div className="space-y-24">
          <MyExperience
            expRef={experienceRef}
            isVisible={experienceRef}
            allJobs={allJobs}
          />
          <MyProjects
            recentProjectsRef={recentProjectsRef}
            allProjects={allProjects}
            isVisible={recentProjectsVisible}
          />
          <ContactMe contactMeRef={contactMeRef} isVisible={contactMeVisible} />
          <Footer />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allJobs = await getAllJobs();
  const allProjects = await getAllProjects();
  return {
    props: {
      allJobs,
      allProjects,
    },
  };
}
