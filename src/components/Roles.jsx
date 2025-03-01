import React, { useRef } from "react";
import Awards from "./Awards"; // 🏆 Importing Awards Component
import { gsap } from "gsap/all";

const Roles = ({awardText}) => {
  gsap
  // const awardText = useRef(null)
  return (
    <div className="border-b-[0.1px]">
      <h1 className="text-center text-3xl font-bold mt-6"></h1>
      <Awards awardText={awardText}/> {/* 🏆 Awards Component Render */}
    </div>
  );
};

export default Roles;
