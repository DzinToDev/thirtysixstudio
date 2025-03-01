import { useGSAP } from "@gsap/react";
import { Power4, gsap } from "gsap/all";
import React, { useRef } from "react";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { motion } from "motion/react";

const Page1 = ({ headingref }) => {
  const circleImgRef = useRef(null);
  const heroText = "Thirtysixstudio";

  useGSAP(() => {
    gsap.from(circleImgRef.current, {
      rotate: -360,
      duration: 22,
      repeat: -1,
      ease: "linear",
    });
  });
  return (
    <div className="w-full min-h-screen border-b-[0.1px] pb-16 relative ">
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:py-3 sm:px-4 fixed top-0 left-0 z-50 flex justify-between font-['PPN-Reg'] border-b-[0.001px] bg-[#fd2c2a]"
      >
        <h1 className="text-base">Thirtysixstudio</h1>
        <div className="links sm:flex gap-10 items-center ">
          {["What we do", "Who we are", "How we give back", "Talk to us"].map(
            (elem, index) => {
              return (
                <a
                  key={index}
                  href={`#${elem.toLowerCase()}`}
                  className="text-sm hidden sm:block"
                >
                  {elem}
                </a>
              );
            }
          )}
          <div>
            <TfiLayoutMenuSeparated className="text-2xl ml-20" />
          </div>
        </div>
      </motion.nav>
      <div className="center-text w-full h-2/3  flex items-center  justify-center sm:pl-16 py-12 ">
        <div className=" sm:w-[53vw] h-full flex justify-between items-center relative py-12 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 0.7, delay: 0.3 }}
            className="left-text sm:w-[45%] flex flex-col gap-8 "
          >
            <h1 className="text-[2.3vw] leading-none ">
              At Thirtysixstudio, we build digital assets and immersive
              experiences for purposeful brands.
            </h1>
            <p className="text-sm">
              We're a boutique production studio focused on design, animation,
              and technology, constantly rethinking what digital craft can do
              for present-day ads and campaigns.
            </p>
            <span>Scroll</span>
          </motion.div>
          <div className="h-full w-1/2  flex  justify-end ">
            <img
              ref={circleImgRef}
              className="w-2/3"
              src="/img/circleText.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="brand-heading px-4 mt-26 cursor-pointer overflow-hidden"
        ref={headingref}
      >
        <h1 className="text-[15.7vw] font-['PPN-Reg'] leading-tight">
          {heroText.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: "120%", opacity: 0, rotate: 30 }}
              animate={{ y: "0", opacity: 1, rotate: 0 }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: index * 0.02,
              }}
              className="text-[15.7vw] font-['PPN-Reg'] leading-none inline-block origin-top-left"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Page1;
