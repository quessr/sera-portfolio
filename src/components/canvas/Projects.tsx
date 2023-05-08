import { FC } from "react";
import Section from "../layouts/Section";
import { motion } from "framer-motion";
import { styles } from "@/styles/common";
import { fadeIn, textVariant } from "@/utils/motion";
import { projects } from "@/constants";
import Image from "next/image";
import clsx from "clsx";
import Tilt from "react-parallax-tilt";

interface ProjectCardProps {
  index: number;
  image: string;
  source_code_link?: string;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
}
const ProjectCard: FC<ProjectCardProps> = ({
  index,
  image,
  source_code_link,
  name,
  description,
  tags,
}) => {
  return (
    <Tilt scale={1}>
      <motion.div
        className="flex flex-col sm:w-[360px] bg-tertiary p-5 rounded-2xl h-full"
        variants={fadeIn("up", "spring", index * 0.5, 0.7)}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="relative w-full h-[230px] ">
          <Image fill src={image} alt="" className="rounded-2xl object-cover" />
          {source_code_link && (
            <a
              href={source_code_link}
              className={clsx(
                "absolute black-gradient top-3 right-3",
                "w-10 h-10 rounded-full",
                "flex justify-center items-center"
              )}
            >
              <Image
                width={20}
                height={20}
                src="/assets/github.png"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          )}
        </div>
        <div className="mt-5 flex flex-col gap-4 flex-grow justify-between">
          <div>
            <h3 className="font-bold text-2xl">{name}</h3>
            <p className="mt-2 text-secondary text-sm">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map(({ name, color }) => {
              return (
                <p key={name} className={clsx(color, "text-sm")}>
                  #{name}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};
const Projects: FC = () => {
  return (
    <Section id="projects">
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>MY PROJECTS</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="mt-20 flex felx-wrap gap-7">
        {projects.map((project, index) => {
          return <ProjectCard key={project.name} index={index} {...project} />;
        })}
      </div>
    </Section>
  );
};

export default Projects;
