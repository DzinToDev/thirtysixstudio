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
      <div className="services uppercase flex flex-col items-center justify-center  py-22 px-2 border-b-[0.1px]">
        {[
          "creative",
          "design",
          "animation",
          "technology",
          "project delivery",
          "example product",
        ].map((item, index) => {
          return (
            <div key={index} className="service w-full h-18  flex  items-center justify-center border-b-[1px]">
              <div className="w-[49vw] flex items-center justify-between origin-left pr-46">
                <h3 className="text-sm">{item}</h3>
                <FaPlus />
              </div>
            </div>
          );
        })}
      </div>
      <div className="constact h-[45vw] w-[59vw] flex justify-center py-10 ml-29 ">
        <div className="left-text sm:w-[41%] flex flex-col gap-8 ">
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
          <span className="uppercase text-sm border-[0.2px] w-fit px-3 py-1 rounded-full  ">talk to us</span>
        </div>
      </div>
    </div>
  );
};

export default Page3;
