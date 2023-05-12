import { styles } from "@/styles/common";
import clsx from "clsx";
import ComputersCanvas from "../canvas/Computers";
import Link from "next/link";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section
      className={clsx(
        "relative w-full h-screen",
        "bg-main-pattern bg-cover bg-no-repeat bg-center"
      )}
    >
      <div
        className={clsx(
          styles.paddingX,
          "absolute inset-0 top-[120px]",
          "max-w-7xl",
          "flex items-start gap-5",
          "xl:left-1/2 xl:-translate-x-1/2 xl:w-full"
        )}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 bg-[#915EFF] rounded-full" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={clsx(styles.mainHeadText, "text-white")}>
            안녕하세요, <span className="text-[#915EFF]">허세라</span>입니다.
          </h1>
          <p className={clsx(styles.mainSubText, "mt-2", "text-white-100")}>
            저는 React, Next.js, Typescript를 사용하여 웹 프론트엔드를 개발하고
            있습니다.
            <br className="sm:block hidden" /> 다양한 프로젝트를 수행하며 웹
            프론트엔드에 대한 깊은 이해와 기술 습득 능력을 쌓아 오고 있습니다.
            <br className="sm:block hidden" /> 이를 바탕으로 팀원들과의 원활한
            협업을 위해 끊임없이 소통하고,
            <br className="sm:block hidden" /> 서로의 의견을 존중하며, 문제
            해결에 적극적으로 참여하여 함께 일하며 좋은 협업자가 되겠습니다.
          </p>
        </div>
      </div>

      {/* 컨버스 */}
      <ComputersCanvas />

      <div
        className={clsx(
          "absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        )}
      >
        <Link href="#about" scroll={false}>
          <div
            className={clsx(
              "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justifyl-center items-start p-2"
            )}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Main;
