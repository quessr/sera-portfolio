import { FC } from "react";
import Section from "../layouts/Section";
import { skills } from "@/constants";
import BallCanvas from "../canvas/BallCanvas";

const Skills: FC = () => {
  return (
    <Section id="skills">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {skills.map((skill) => {
          return (
            <div key={skill.name} className="w-28 h-28">
              <BallCanvas icon={skill.icon} />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
