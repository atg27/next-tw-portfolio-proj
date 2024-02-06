"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    PreviewUrl: "/",
  },
  {
    id: 2,
    title: "Full Stack Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    PreviewUrl: "/",
  },
  {
    id: 3,
    title: "Photography Portfolio Website",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    PreviewUrl: "/",
  },
  {
    id: 4,
    title: "E-commerce App",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    PreviewUrl: "/",
  },
  {
    id: 5,
    title: "Food Ordering App",
    description: "Project 5 description",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    PreviewUrl: "/",
  },
  {
    id: 6,
    title: "React Firebase Template",
    description: "Project 6 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    PreviewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tages={project.tag}
            gitUrl={project.gitUrl}
            PreviewUrl={project.PreviewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
