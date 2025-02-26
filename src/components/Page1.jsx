import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/all';
import React, { useRef } from 'react'
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

const Page1 = ({headingref}) => {
  const circleImgRef = useRef(null)

  useGSAP(()=> {
    gsap.from(circleImgRef.current, {
      
      rotate: -360,
      duration: 22,
      repeat: -1,
      ease: "linear",
    })
  })
  return (
    <div className="w-full min-h-screen border-b-[0.1px]  relative ">
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
    <div className="center-text w-full h-2/3  flex items-center  justify-center sm:pl-16 py-12 ">
      <div className=" sm:w-[53vw] h-full flex justify-between items-center relative py-12 ">
      <div className="left-text sm:w-[45%] flex flex-col gap-8 ">
        <h1 className="text-[2.3vw] leading-none ">At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.</h1>
        <p className="text-sm">We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.</p>
        <span>Scroll</span>
      </div>
      <div className="h-full w-1/2  flex  justify-end ">
        <img ref={circleImgRef} className="w-2/3" src="/img/circleText.png" alt="" />
      </div>
      </div>
    </div>
    <div className="brand-heading px-4 mt-18 " ref={headingref}>
      <h1 className="text-[15.7vw] font-['PPN-Reg']">Thirtysixstudio</h1>
    </div>
  </div>
  )
}

export default Page1