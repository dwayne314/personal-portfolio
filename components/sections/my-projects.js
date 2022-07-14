import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function MyProjects({ recentProjectsRef, allProjects, isVisible }) {
  return (
    <section id="my-projects">
      <div
        ref={recentProjectsRef}
        className={`max-w-4xl p-3 mx-auto space-y-2 duration-300 delay-200${
          isVisible ? " opacity-100" : " opacity-0"
        }`}
      >
        <h3 className="mb-4 text-3xl sm:text-4xl text-header">
          Recent Projects
        </h3>
        <div className="flex flex-row flex-wrap space-y-4">
          {allProjects.map((project, index) => (
            <div
              key={`project ${index}`}
              className="flex flex-col justify-between p-8 bg-blue-grey-800 border rounded-lg border-[#1a2021] w-full"
            >
              <>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between w-full mb-4">
                    <h4 className="text-lg font-bold sm:text-2xl">
                      {project.metadata.name}
                    </h4>
                    <div className="flex space-x-2">
                      <Link href={project.metadata.githubLink}>
                        <a target="_blank" rel="noopener noreferrer">
                          <FiGithub className="w-5 h-5 stroke-white hover:stroke-header" />
                        </a>
                      </Link>
                      <Link href={project.metadata.siteLink}>
                        <a target="_blank" rel="noopener noreferrer">
                          <FiExternalLink className="w-5 h-5 stroke-white hover:stroke-header" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="mr-4 text-justify"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                  />
                </div>
                <div>
                  <div className="flex flex-wrap mt-4 font-mono text-sm font-light gap-x-2 text-secondary">
                    {project.metadata.tech.map((techName, techIndex) => (
                      <span key={`technology ${techName}`}>
                        {techName}
                        {techIndex >= project.metadata.tech.length - 1 ? (
                          ""
                        ) : (
                          <> &middot;</>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
