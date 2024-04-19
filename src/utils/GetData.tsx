import path from "path";
import fsPromises from "fs/promises";
import {InformationProps, ProjectProps, WorkExperienceProps} from "@/types";
import fs from "fs/promises";

export async function getData() {
    const filePath = path.join(process.cwd(), "data.json");
    const jsonData = await fsPromises.readFile(filePath, "utf8");
    const objectData = JSON.parse(jsonData);

    const informationWithData = getImgSrc({
        section: "information",
        item: await getMd({ section: "information", item: { ...objectData.information } }),
    });

    const workExperienceWithData = objectData.workExperience.map(
        async (item: WorkExperienceProps) => {
            return getImgSrc({
                section: "workExperience",
                item: await getMd({ section: "workExperience", item }),
            });
        },
    );

    const projectWithData = objectData.project.map(async (item: ProjectProps) => {
        return getImgSrc({ section: "project", item: await getMd({ section: "project", item }) });
    });

    return {
        props: {
            ...objectData,
            information: await informationWithData,
            workExperience: await Promise.all(workExperienceWithData),
            project: await Promise.all(projectWithData),
        },
    };
}

async function getMd({ section, item }: { section: string; item: InformationProps | ProjectProps | WorkExperienceProps })
{
    try {
        const markdownModule = await import(
            `../../public/markdown/${section}/${"id" in item ? item.id : "introduce"}.md`);
        return { ...item, markdown: markdownModule.default as string };
    } catch {
        return item;
    }
}

async function getImgSrc({ section, item }: { section: string; item: InformationProps | ProjectProps | WorkExperienceProps })
{
    const imgSrc = `/images/${section}/${"id" in item ? item.id : "profile"}.png`;
    const filePath = path.join(process.cwd(), "public", imgSrc);

    try {
        await fs.stat(filePath);
        return { ...item, imgSrc: imgSrc };
    } catch {
        console.log("no img");
        return item;
    }
}

