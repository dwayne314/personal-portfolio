import { useState } from "react";

function MyExperience({ expRef, isVisible, allJobs }) {
  const [selectedJob, setSelectedJob] = useState(allJobs[0].metadata.name);

  function handleJobClick(jobName) {
    setSelectedJob(jobName);
  }

  return (
    <section id="my-experience">
      <div
        ref={expRef}
        className={`max-w-4xl mx-auto space-y-2 transition-opacity duration-300 delay-200${
          isVisible ? " opacity-100" : " opacity-0"
        }`}
      >
        <h3 className="mb-4 text-3xl md:text-4xl text-header">My Experience</h3>
        <div className="flex flex-col md:space-x-12 md:flex-row">
          <ul className="flex flex-shrink-0 w-full p-0 pb-1 overflow-x-auto md:w-max md:flex-col">
            {allJobs
              .filter(
                (job) =>
                  job.metadata.jobGroupRank === undefined ||
                  job.metadata.jobGroupRank === 1
              )
              .map((job, index) => (
                <li
                  key={`job ${index}`}
                  onClick={() => handleJobClick(job.metadata.name)}
                  className={`list-none font-light text-lg md:text-xl flex-shrink-0 px-2 pb-1 md:py-2 md:pl-4 cursor-pointer border-b-2 md:border-l-2 md:border-b-0 hover:bg-cta${
                    job.metadata.name === selectedJob
                      ? " border-header bg-cta"
                      : ""
                  }`}
                >
                  {job.metadata.name}
                </li>
              ))}
          </ul>
          <div className="space-y-8">
            {allJobs
              .filter((job) => job.metadata.name === selectedJob)
              .sort(
                (positionA, positionB) =>
                  positionA.metadata.jobGroupRank -
                  positionB.metadata.jobGroupRank
              )
              .map((position) => (
                <div
                  key={`position ${position.metadata.name}-${position.metadata.jobGroupRank}`}
                >
                  <div className="mb-4">
                    <h4 className="my-2 text-2xl font-bold">
                      {position.metadata.title}
                    </h4>
                    <div className="font-mono">
                      {position.metadata.duration}
                    </div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: position.content }}
                    className="font-light text-md"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyExperience;
