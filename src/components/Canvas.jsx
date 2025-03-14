import React, { useEffect, useRef, useState } from "react";
import canvasImages from "./data/canvasImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Canvas = ({ details }) => {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });

    gsap.from(canvasRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.in",
    });
  });
  

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = canvasImages[index.value];

    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  }, [index]);
  return (
    <canvas
      data-scroll
      dats-scroll-speed={
        // random value between 0 to 1
        Math.random().toFixed(1)
      }
      ref={canvasRef}
      className="absolute"
      style={{
        width: `${size * 1.3}px`,
        height: `${size * 1.3}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
      }}
      id="canvas"
    ></canvas>
  );
};

export default Canvas;
