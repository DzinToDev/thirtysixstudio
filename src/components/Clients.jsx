import React from "react";

const Clients = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="center-text w-full h-1/2  flex items-center  justify-center pl-16 py-12 border-b-[0.1px]  ">
        <div className=" w-[53vw] h-full flex justify-between items-center relative py-12 ">
          <div className="left-text w-[46%] flex flex-col gap-8 ">
            <h1 className="text-base">CLIENTS</h1>
            <h1 className="text-[2.3vw] leading-none ">
              Ready to get your project off the ground?
            </h1>
            <p className="text-sm">
              We’re currently accepting new clients and are excited to hear from
              you. Get in touch by sending an email to hello@thirtysixstudio.com
              or fill out the form below to start your journey with us.
            </p>
          </div>
        </div>
      </div>
      <div className="div-form w-full h-screen  flex flex-col items-center justify-center py-20 pl-18">
        <form action="" className=" sm:w-[53vw] flex flex-col items-start text-black" >
            <input type="text" placeholder="Name*"  className="border-[0.1px] rounded-4xl w-full px-8 py-4 text-2xl my-12 appearance-none  focus:outline-none  placeholder-gray-900" />
            <input type="text" placeholder="Email*" className="border-[0.1px] rounded-4xl w-full px-8 py-4 text-2xl mb-34 appearance-none  focus:outline-none placeholder-gray-900"/>
            
            <textarea placeholder="Message" className="border-[0.1px] rounded-4xl w-full h-40 px-6 py-4 text-base mb-12 appearance-none  focus:outline-none" />
            <span className="uppercase text-xs border-[0.2px] w-fit px-6 py-2 rounded-full  ">Send</span>

  
        </form>
        </div>
    </div>
  );
};

export default Clients;
