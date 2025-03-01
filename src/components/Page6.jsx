import React from "react";
import { motion } from "motion/react";

const Page6 = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-12 border-b-[0.1px] relative ">
      <div className="w-full pl-20 py-12 flex justify-center border-b-[0.1px]  ">
        <div className="p3-text w-[62%] h-full py-12  pt-14 pl-6">
          <h1 className='text-lg font-["PPN-Med"]'>03 - HOW WE GIVE BACK</h1>
          <div className="py-4 w-full overflow-hidden leading-none">
            {[
              " At Thirtysix studio, we recognize that our industry can ",
              " perpetuate harm. We believe we have to try and reverse ",
              "some of these imbalances. That’s why we’re launching ",
              "   SS36, our local social sustainability hub. ",
            ].map((elem, index) => {
              return (
                <p
                  key={index}
                  className="text-[2.3vw] mt-2 origin-left overflow-hidden "
                >
                  <motion.span
                    initial={{ rotate: 12, y: "90%" }}
                    whileInView={{ rotate: 0, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1.5,
                      delay: index * 0.2,
                    }}
                    className="origin-left inline-block"
                  >
                    {elem}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="py-4 w-full overflow-hidden leading-none">
            {[
              "  Through SS36, we reinvest some of our revenue and ",
              "  expertise into the communities that shape the culture and ",
              " trends our field so heavily relies on. Our main focus is on ",
              " bridging gaps for those affected by systemic obstacles ",
              "  related to race, sexuality, wealth, and gender identity.",
            ].map((elem, index) => {
              return (
                <p
                  key={index}
                  className="text-[2.3vw] mt-2 origin-left overflow-hidden "
                >
                  <motion.span
                    initial={{ rotate: 12, y: "90%" }}
                    whileInView={{ rotate: 0, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1.5,
                      delay: index * 0.2,
                    }}
                    className="origin-left inline-block"
                  >
                    {elem}
                  </motion.span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          delay: 0.4,
        }}
        className="constact w-[53%] flex justify-start py-10 pl-6 "
      >
        <div className="left-text sm:w-[41%] flex flex-col items-start gap-8 ">
          <p className="text-sm mt-40">
            Our SS36 work includes community-centric projects for local
            marginalized groups, as well as career initiatives for marginalized
            industry talent.
          </p>
          <p className="text-sm">
            As a client, the most impactful way you can assist us in reaching
            our social sustainability goals is by collaborating with our team on
            a project. We warmly welcome partner- and sponsorships from
            like-minded individuals and organizations.
          </p>
          <button className="relative px-4 py-1 border-[0.1px] rounded-full overflow-hidden transition-all duration-500 ease-in-out group">
            {/* Text with Background Gradient on Hover */}
            <span className="relative z-10 text-black text-xs font-['PPN-Med'] transition-all duration-500 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#fd2c2a] to-[#f5940c] uppercase">
              Get in touch
            </span>

            {/* Expanding Circle Animation */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 bg-black rounded-full transition-all duration-500 ease-in-out group-hover:w-64 group-hover:h-64"></div>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Page6;
