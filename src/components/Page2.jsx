import React from "react";
import { motion } from "motion/react";

const Page2 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center pl-20 py-12 border-b-[0.1px] text-black relative ">
      <div className="h-full w-[60vw] flex justify-between py-10 pl-10">
        <h1 className="text-lg">01 - WHAT WE DO</h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
          className="left-text sm:w-[41%] flex flex-col gap-8 "
        >
          <h1 className="text-[2.3vw] leading-none ">
            We aim to elevate digital production in the advertising space,
            bringing your ideas to life.
          </h1>
          <p className="text-sm mt-40">
            As a contemporary studio, we use cutting-edge design practices and
            the latest technologies to deliver current digital work.
          </p>
          <p className="text-sm">
            Our commitment to innovation and simplicity, paired with our agile
            approach, ensures your journey with us is smooth and enjoyable from
            start to finish.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Page2;
