import { FC } from "react";
import Section from "../layouts/Section";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { styles } from "@/styles/common";
import clsx from "clsx";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "@/constants";

import "react-vertical-timeline-component/style.min.css";

interface ExperienceCardProps {
  title: string;
  name: string;
  date: string;
  points: string[];
}
const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  name,
  date,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
      date={date}
      iconStyle={{ background: "#1d1836" }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: FC = () => {
  return (
    <Section id="experience">
      <motion.div variants={textVariant(0)}>
        <p className={clsx(styles.sectionSubText, "text-center")}>
          WHAT I HAVE DONE SO FAR
        </p>
        <h2 className={clsx(styles.sectionHeadText, "text-center")}>
          Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => {
            return <ExperienceCard key={experience.title} {...experience} />;
          })}
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export default Experience;
