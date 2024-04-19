import { getData } from "@/utils/GetData";
import { DataProps } from "@/types";
import Title from "@/components/Title";
import Information from "@/components/Information";
import WorkExperience from "@/components/WorkExperience";
import Project from "@/components/Project";
import Activity from "@/components/Activity";
import Education from "@/components/Education";
import Certificate from "@/components/Certificate";
import Award from "@/components/Award";
import Footer from "@/components/Footer";



export default async function Home() {
    const {props: {
        resumeTitle,
        information,
        workExperience,
        project,
        activity,
        education,
        certificate,
        award,
    }} = await getData();

    return (
        <>
            <Title resumeTitle={resumeTitle} />
            <div className="max-w-4xl mx-auto p-8 flex flex-col gap-28 md:gap-32 md:my-20 my-4 mb-20">
                <Information information={information} />
                <WorkExperience workExperience={workExperience} />
                <Project project={project} />
                <Activity activity={activity} />
                <Education education={education} />
                <Certificate certificate={certificate} />
                <Award award={award} />
            </div>
            <Footer contact={information.contact} name={information.name} />
        </>
    );
}



