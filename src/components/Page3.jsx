import React from "react";
import { FaPlus } from "react-icons/fa6";

const Page3 = () => {
  return (
    <div className='w-full min-h-screen font-["PPN-Reg"] border-b-[0.1px]'>
      <div className="w-full h-[59vh] flex items-center justify-center pl-20 py-12 border-b-[0.1px] ">
        <div className="p3-text w-[60vw] h-full pt-14 pl-10">
          <h1 className='text-sm font-["PPN-Med"]'>OUR SERVICES</h1>
          <p className="text-[2.3vw] mt-14 leading-10">
            We provide you with captivating design, interactive animations,
            reliable code, and immaculate project coordination. Whether you need
            a campaign built from scratch or assistance at a specific phase,
            we’ve got you covered.
          </p>
        </div>
      </div>
      <div className="services w-full  uppercase flex flex-col items-center justify-center  py-22 px-2 border-b-[0.1px]">
        {[
          "creative",
          "design",
          "animation",
          "technology",
          "project delivery",
          "example product",
        ].map((item, index) => (
          <div
            key={index}
            className="h-17 w-full overflow-hidden cursor-pointer group"
          >
            <div className="relative h-40 transform -translate-y-20 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
              {/* First Row */}
              <div className=" bg-black p-[1.77rem] flex items-center justify-center  pl-24 ">
                <h1 className=" w-[58%] bg-gradient-to-r from-[#fd2c2a] to-[#f5940c] bg-clip-text text-transparent">{item}</h1>
                {/* <h1 className="text-lg">{award.type}</h1> */}
                {/* <h1>+</h1> */}
              </div>
              {/* Second Row */}
              <div className=" bg-transparent text-black p-[1.67rem] flex items-center justify-center pl-24">
                <h1 className="w-[58%]">{item}</h1>
                {/* <h1 className="text-lg">{award.label}</h1> */}
                <h1>+</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="constact h-[45vw] w-[59vw] flex justify-center py-10 ml-29 ">
        <div className="left-text sm:w-[41%] flex flex-col items-start gap-8 ">
          <p className="text-sm mt-40">
            Got a project in mind? Drop us a line at hello@thirtysixstudio.com
            or use the form below.
          </p>
          <p className="text-sm">
            Not sure what you need? We’re here to help you define the undefined.
            Let’s explore all creative and technical possibilities together
            through one of our tailored labs, where we champion future-forward
            thinking within an ethical framework.
          </p>
          <button className="relative px-4 py-1 border-[0.1px] rounded-full overflow-hidden transition-all duration-500 ease-in-out group">
            {/* Text with Background Gradient on Hover */}
            <span className="relative z-10 text-black text-xs font-['PPN-Med'] transition-all duration-500 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#fd2c2a] to-[#f5940c] uppercase">
              Talk to us
            </span>

            {/* Expanding Circle Animation */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 bg-black rounded-full transition-all duration-500 ease-in-out group-hover:w-64 group-hover:h-64"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
