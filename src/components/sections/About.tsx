import { styles } from "@/styles/common";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";
import clsx from "clsx";
import { roles } from "@/constants";
import Tilt from "react-parallax-tilt";

interface RoleCardProps {
  index: number;
  title: string;
  icon: string;
}

const RoleCard: FC<RoleCardProps> = ({ title, icon, index }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className=" xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className={clsx(
            "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          )}
        >
          <Image
            src={icon}
            width={64}
            height={64}
            alt="development"
            className="object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: FC = () => {
  return (
    <motion.section
      id="about"
      className={(clsx(styles.padding), "max-w-7xl mx-auto relative z-0")}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        항상 열린 마음으로 다양한 기술을 학습하고, 문제 해결에 있어 최적의
        기술을 사용하려 노력합니다. 저의 최종 목표는 사람들의 일상에 작고도 큰
        즐거운 변화를 주는 개발자가 되는 것입니다. 이를 위해 항상 사용자의
        필요를 고민하고 기여하는 자세를 유지하고, 기술력과 창의성을 발휘하여
        최상의 결과물을 제공하고자 합니다.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {roles.map((role, index) => {
          return <RoleCard key={role.title} index={index} {...role} />;
        })}
      </div>
    </motion.section>
  );
};

export default About;
