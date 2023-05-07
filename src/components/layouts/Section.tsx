import { styles } from "@/styles/common";
import { staggerContainer } from "@/utils/motion";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  id: string;
}
const Section: FC<SectionProps> = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      className={(clsx(styles.padding), "max-w-7xl mx-auto relative z-0")}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
