import { styles } from "@/styles/common";
import clsx from "clsx";
import ComputersCanvas from "./canvas/Computers";
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
          "flex items-start gap-5"
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
            항상 열린 마음으로 다양한 기술을 학습하고, 문제 해결에 있어 최적의
            기술을 사용하려 노력합니다.
            <br className="sm:block hidden" />
            저의 최종 목표는 사람들의 일상에 작고도 큰 즐거운 변화를 주는
            개발자가 되는 것입니다. <br className="sm:block hidden" /> 이를 위해
            항상 사용자의 필요를 고민하고 기여하는 자세를 유지하고,
            <br className="sm:block hidden" /> 기술력과 창의성을 발휘하여 최상의
            결과물을 제공하고자 합니다.
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
        <Link href="#about">
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
