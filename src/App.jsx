import React, { useEffect } from "react";
import Canvas from "./components/Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen relative ">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets}  />
        ))}

        <div className="w-full h-screen text-black ">
          <nav className="w-full sm:py-3 sm:px-4 fixed top-0 left-0 z-50 flex justify-between font-['PPN-Reg'] border-b-[0.001px]">
            <h1 className="text-base">Thirtysixstudio</h1>
            <div className="links sm:flex gap-10 items-center ">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((elem, index) => {
                return (
                  <a
                    key={index}
                    href={`#${elem.toLowerCase()}`}
                    className="text-sm hidden sm:block"
                  >
                    {elem}
                  </a>
                );
              })}
              <div>
                <TfiLayoutMenuSeparated className="text-2xl ml-14" />
              </div>
            </div>
          </nav>
          <div className="center-text w-full h-2/3  flex items-center  justify-center sm:pl-16 py-12">
            <div className=" sm:w-[53vw] h-full flex justify-between items-start relative py-12">
            <div className="left-text sm:w-[45%] flex flex-col gap-8 ">
              <h1 className="text-[2.3vw] leading-none ">At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.</h1>
              <p className="text-sm">We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.</p>
              <span>Scroll</span>
            </div>
            <div className="h-full w-1/2  flex items-center justify-end">

              <img className="w-2/3" src="./public/img/circleText.png" alt="" />
            </div>
            </div>
          </div>
          <div className="brand-heading px-4 mt-6 ">
            <h1 className="text-[15.7vw] font-['PPN-Reg']">Thirtysixstudio</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
