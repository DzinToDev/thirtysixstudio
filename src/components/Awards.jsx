import React, { useEffect } from "react";

const awardsData = [
  { name: "Project Managers", project: "Project Managers" },
  { name: "Digital Producerse", project: "Digital Producerse" },
  { name: "Designers", project: "Designers" },
  { name: "Illustrators", project: "Illustrators" },
  { name: "Animators", project: "Animators" },
  { name: "Motion Designers", project: "Motion Designers" },
  { name: "Developers and Coders", project: "Developers and Coders" },
  { name: "Creative Technologists", project: "Creative Technologists" },
  { name: "Sound Engineerss", project: "Sound Engineerss" },
];

const Awards = ({awardText}) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-base ">
      <div className="w-4/5">
      <p className="mb-4 px-4 py-2 text-base font-semibold uppercase ml-53">
        Role Open
      </p>
      </div>
      <div className="w-4/5  border-black capitalize">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="h-17 overflow-hidden cursor-pointer group"
          >
            <div className="relative h-40 transform -translate-y-20 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
              {/* First Row */}
              <div  className="bg-black p-[1.77rem] flex items-center justify-center pl-12">
                <h1 ref={awardText} className=" w-2/3  bg-gradient-to-r from-[#fd2c2a] to-[#f5940c] bg-clip-text text-transparent">{award.name}</h1>
                {/* <h1 className="text-lg">{award.type}</h1> */}
              </div>
              {/* Second Row */}
              <div className=" bg-transparent text-black p-[1.67rem] flex items-center justify-center pl-12">
                <h1 className="w-2/3">{award.project}</h1>
                {/* <h1 className="text-lg">{award.label}</h1> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
