"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>SQL</li>
        <li>Node.Js</li>
        <li>Next.Js</li>
        <li>Tailwind.css</li>
        <li>Kafka</li>
        <li>Github</li>
        <li>Jira</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Washington</li>
        <li>Flatiron School</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Engineer, SS&C</li>
        <li>OR, ICU and Emergency Department</li>
        <li>
          High-volume, high-stakes environments, working with multidisciplanary
          teams
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about">
      <div className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
          {/* <Image src="/images/easypass.png" width={500} height={500}></Image>
          <Image src="/images/eldorado.png" width={500} height={500}></Image> */}
          <Image
            src="/images/doradodescent.png"
            width={500}
            height={500}
            alt="Description of image"
          ></Image>
          {/* <Image src="/images/libertygroup.png" width={500} height={500} /> */}
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a passionate and detail-oriented Full Stack Software Engineer
              with experience in Frontend, Backend, and DevOps technologies.
              Skilled in agile methodologies and experienced in collaborating
              with cross-functional teams to deliver robust and high-quality
              software solutions. I have professional experience working on a
              data platform team, where I developed UIs to manage microservices,
              enhancing operational efficiency and usability while also helping
              manage data infrastructure. Additionally, I have over 5 years of
              experience in healthcare, working in high-volume, high-stakes
              environments. My passion for helping others drives me to learn and
              develop new technology. I am dedicated to leveraging my technical
              expertise and interpersonal skills to create innovative and
              effective solutions.
              <br></br>I enjoy working on personal projects outside of work as
              well as recreating outdoors in the Pacific Northwest, studying
              Japanese and playing chess. I am an avid fly fisherman,
              backpacker, runner, swimmer and climber. I am always seeking new
              adventures and challenges that foster personal growth.
            </p>
            <div className="flex flex-row mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                Experience
              </TabButton>
            </div>
            {/* display respective content of active tab */}
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
