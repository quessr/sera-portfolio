import { FC, useRef, useState } from "react";
import Section from "../layouts/Section";
import { styles } from "@/styles/common";
import clsx from "clsx";
import EarthCanvas from "../canvas/EarthCanvas";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import emailjs from "@emailjs/browser";

const schema = yup.object({
  name: yup
    .string()
    .min(2)
    .required("Please enter a name of at least two characters"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  message: yup.string().required("Please enter a message"),
});
type Schema = yup.InferType<typeof schema>;

const Contact: FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    reset,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Schema) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: getValues("name"),
          from_email: getValues("email"),
          message: getValues("message"),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("감사합니다. 확인 후, 가능한 빨리 답변 드리도록 하겠습니다.");
        reset();
      });
  };
  return (
    <Section id="contact">
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-black-100 p-8 rounded-2xl flex-[0.75]"
        >
          <p className={styles.sectionSubText}>Please contact me</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            className="mt-12 flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Name</span>
              <input
                type="text"
                className={clsx(
                  "bg-tertiary py-4 px-6",
                  "placeholder:text-secondary text-white font-medium",
                  "rounded-lg outline-none border-none",
                  "disabled:cursor-not-allowed"
                )}
                placeholder="What's your name?"
                autoComplete="off"
                {...register("name")}
              />
            </label>
            {errors.name && (
              <span className="text-sm text-red-300">
                {errors.name?.message}
              </span>
            )}

            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Email</span>
              <input
                type="email"
                className={clsx(
                  "bg-tertiary py-4 px-6",
                  "placeholder:text-secondary text-white font-medium",
                  "rounded-lg outline-none border-none",
                  "disabled:cursor-not-allowed"
                )}
                placeholder="What's your email?"
                autoComplete="off"
                {...register("email")}
              />
            </label>
            <span className="text-sm text-red-300">
              {errors.email?.message}
            </span>

            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                className={clsx(
                  "bg-tertiary py-4 px-6",
                  "placeholder:text-secondary text-white font-medium",
                  "rounded-lg outline-none border-none resize-none",
                  "disabled:cursor-not-allowed"
                )}
                placeholder="Please leave a message."
                {...register("message")}
              />
            </label>
            <span className="text-sm text-red-300">
              {errors.message?.message}
            </span>

            <button
              type="submit"
              className={clsx(
                "bg-tertiary text-white shadow-md shadow-primary",
                "py-3 px-8 w-fit",
                "rounded-xl outline-none font-bold"
              )}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
