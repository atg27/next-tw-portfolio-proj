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
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind.css</li>
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
        <li>AWS Cloud Practitioner</li>
        <li>AWS Certified Dev Ops Engineer</li>
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
    <section>
      <div className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
          {/* <Image src="/images/easypass.png" width={500} height={500}></Image>
          <Image src="/images/eldorado.png" width={500} height={500}></Image> */}
          <Image
            src="/images/doradodescent.png"
            width={500}
            height={500}
          ></Image>
          {/* <Image src="/images/libertygroup.png" width={500} height={500} /> */}
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am an experienced Full Stack Developer with expertise in both
              frontend and backend technologies. My skill set includes
              proficiency in Java, Node.js, SQL, HTML, CSS, JavaScript, React,
              Redux, Next.js, and Tailwind. Previously, I was a valuable member
              of a Database Platform team, where I contributed to building and
              developing user interfaces for my team and the company as a whole.
              My professional background also includes 5 years of experience in
              the healthcare industry, where I excelled in high-volume,
              high-stakes environments. My motivation stems from a deep passion
              for helping others, which drives me to continuously learn and
              explore new technologies. I am dedicated to developing innovative
              projects and solving complex problems, with a strong desire to
              push the boundaries of what can be accomplished in the field of
              technology.
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
