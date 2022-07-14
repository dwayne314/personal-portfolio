import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const jobsDirectory = path.join(process.cwd(), "content/jobs");

export async function getAllJobs() {
  const fileNames = fs.readdirSync(jobsDirectory);

  async function getContentFromGrayMatter(grayMatter) {
    const processedContent = await remark()
      .use(html)
      .process(grayMatter.content);
    return processedContent.toString();
  }
  function getMetadataFromGrayMatter(grayMatter) {
    return grayMatter.data;
  }

  function combineJobData() {
    const jobMetadata = Promise.all(
      fileNames.map(async (fileName) => {
        // Construct the id by removing ".md" from file name
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(jobsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        const metadata = getMetadataFromGrayMatter(matterResult);
        const content = await getContentFromGrayMatter(matterResult);

        // Combine the data with the id
        return {
          id,
          metadata,
          content,
        };
      })
    );
    return jobMetadata;
  }

  const jobData = combineJobData().then((data) =>
    data.sort((jobA, jobB) => jobA.metadata.jobId - jobB.metadata.jobId)
  );

  return jobData;
}
