import React, { useEffect, useRef, useState } from "react";
import Canvas from "./components/Canvas";
import floatingPosition from "./components/data/floatingPosition";
import LocomotiveScroll from "locomotive-scroll";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { Circ, gsap } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Roles from "./components/Roles";
import Clients from "./components/Clients";

const App = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => locomotiveScroll.destroy();
  }, []);

  useGSAP(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
            scale: 0, 
          });
          gsap.to("body", {
            color: "#000",
            // backgroundColor: "#fd2c2a",
            backgroundColor: "#f5940c",
            duration: 1.2,
            ease: "power2.inOut",
          });
          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: Circ.easeInOut,
            overwrite: true,
          });
        } else {
          gsap.to(growingSpan.current, {
            scale: 0,
            duration: 1,
            top: e.clientY,  // Move back to where the click happened
            left: e.clientX, // Move back to where the click happened
            ease: "circ.inOut",
            overwrite: true,
           
            
          });
          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
            delay: 0.3,
          });
        }
        return !prevShowCanvas;
      });
    };
  
    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);
  
    // Cleanup function to remove event listener
    return () => {
      headingElement.removeEventListener("click", handleClick);
    };
  }, []);
  

  return (
    <>
      <span
        ref={growingSpan}
        className="growing fixed -top-10 -left-10 w-3 h-3 block bg-[#f5940c]  rounded-full"
      ></span>
      <div className="w-full min-h-screen relative text-black ">
        {showCanvas &&
          floatingPosition[0].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))}

        <Page1 headingref={headingref} />
        {showCanvas &&
        floatingPosition[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}

        <Page2 />
        {showCanvas &&
        floatingPosition[2].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}

        <Page3 />
        {showCanvas &&
        floatingPosition[3].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}

        <Page4 />
        {showCanvas &&
        floatingPosition[4].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}

        <Page5 />
        {showCanvas &&
        floatingPosition[5].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}

        <Page6 />
        {showCanvas &&
        floatingPosition[6].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}

        <Page7 />
        {showCanvas &&
        floatingPosition[7].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
        
        <Roles />
        {showCanvas &&
        floatingPosition[8].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}

        <Clients />
        {showCanvas &&
        floatingPosition[9].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
    </>
  );
};

export default App;
