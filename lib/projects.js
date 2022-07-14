import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export async function getAllProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);

  async function getContentFromGrayMatter(grayMatter) {
    const processedContent = await remark()
      .use(html)
      .process(grayMatter.content);
    return processedContent.toString();
  }
  function getMetadataFromGrayMatter(grayMatter) {
    return grayMatter.data;
  }

  function combineProjectData() {
    const projectMetadata = Promise.all(
      fileNames.map(async (fileName) => {
        // Construct the id by removing ".md" from file name
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName);
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
    return projectMetadata;
  }

  const projectData = combineProjectData().then((data) =>
    data.sort(
      (projectA, projectB) =>
        projectA.metadata.projectId - projectB.metadata.projectId
    )
  );

  return projectData;
}
