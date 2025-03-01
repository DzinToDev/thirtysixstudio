import { ScrollTrigger, gsap } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Page4 = () => {
  const textRefs = useRef([]);

  const whoWeAreData = [
    {
      title: "Agile",
      description:
        "We live and breathe efficiency and are not limited by geography. Local to Amsterdam with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right team for each project and get moving swiftly.",
    },
    {
      title: "Innovative",
      description:
        "We use carefully crafted digital processes and new technology to ensure our initiatives run smoothly, allowing our lean and international team to focus on what matters and maximize momentum and opportunity.",
    },
    {
      title: "Cultured",
      description:
        "We are progressive and community-focused and don’t believe in maintaining the status quo or sticking to outdated ways. Our people reflect today’s realities and stay connected to culture.",
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    textRefs.current.forEach((el, index) => {
      if (el) {
        const letters = el.querySelectorAll("span");

        gsap.fromTo(
          letters,
          { x: "-10%", opacity: 0,  },
          {
            x: "0%",
            opacity: 1,
            duration: 1.5,
            
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center">
      <div className="w-full h-fit border-b-[0.1px] mt-12 pb-32 flex justify-evenly">
        <div className="w-[67%] flex justify-between py-10     ">

          <h1 className="text-lg font-['PPN-Med'] ml-32">02 - WHO WE ARE</h1>
          <h1 className="text-[2.3vw] w-[36%] leading-none font-['PPN-Reg'] ml-10 ">
            Our vision is to refine digital production while creating social
            impact and opportunity.
          </h1>
        </div>
      </div>
      <div className="text-anime-container p-2 mt-6">
        {whoWeAreData.map((item, index) => {
          return (
            <div
              key={index}
              className="text-left-right flex  items-center mt-6 border-b-[0.1px] pb-14"
            >
              <div className="w-1/2 overflow-hidden ">
                <h1
                  className="text-[10vw] leading-42 overflow-hidden "
                  ref={(el) => (textRefs.current[index] = el)}
                >
                  {item.title.split("").map((letter, i) => (
                    <span key={i} className="inline-block relative origin-top">
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
              <p className="text-sm w-[28%] ml-34">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page4;
