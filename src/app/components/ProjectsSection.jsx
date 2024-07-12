"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TypeScript E-Commerce Website",
    description:
      "E commerce website built with TypeScript, Prisma, Next.js, and Tailwind CSS",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/atg27/ecommerce-store",
    PreviewUrl: "/",
  },
  {
    id: 2,
    title: "Full Stack Website",
    description:
      "Hosted on DigitalOcean with NGINX, NODE.js, Next.js, SQL, CI/CD,",
    image: "/images/projects/fsfewebsite.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/atg27/garrisonfullstack.com",
    PreviewUrl: "https://garrisonfullstack.com",
  },
  // {
  //   id: 3,
  //   title: "Photography Portfolio Website",
  //   description: "Project 3 description",
  //   image: "/images/projects/3.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   PreviewUrl: "/",
  // },
  // {
  //   id: 4,
  //   title: "E-commerce App",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   PreviewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "Food Ordering App",
  //   description: "Project 5 description",
  //   image: "/images/projects/1.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   PreviewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "React Firebase Template",
  //   description: "Project 6 description",
  //   image: "/images/projects/1.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   PreviewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tages={project.tag}
              gitUrl={project.gitUrl}
              PreviewUrl={project.PreviewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
