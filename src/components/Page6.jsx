import React from "react";

const Page6 = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-12 border-b-[0.1px] relative ">
      <div className="w-full pl-20 py-12 flex justify-center border-b-[0.1px]  ">
        <div className="p3-text w-[62%] h-full py-12  pt-14 pl-6">
          <h1 className='text-lg font-["PPN-Med"]'>03 - HOW WE GIVE BACK</h1>
          <p className="text-[2.3vw] mt-14 leading-10">
            At Thirtysix studio, we recognize that our industry can perpetuate
            harm. We believe we have to try and reverse some of these
            imbalances. That’s why we’re launching SS36, our local social
            sustainability hub.
          </p>
          <p className="text-[2.3vw] mt-6 leading-10">
            Through SS36, we reinvest some of our revenue and expertise into the
            communities that shape the culture and trends our field so heavily
            relies on. Our main focus is on bridging gaps for those affected by
            systemic obstacles related to race, sexuality, wealth, and gender
            identity.
          </p>
        </div>
      </div>
      <div className="constact w-[53%] flex justify-start py-10 pl-6 ">
        <div className="left-text sm:w-[41%] flex flex-col gap-8 ">
          <p className="text-sm mt-40">
            Our SS36 work includes community-centric projects for local
            marginalized groups, as well as career initiatives for marginalized
            industry talent.
          </p>
          <p className="text-sm">
            As a client, the most impactful way you can assist us in reaching
            our social sustainability goals is by collaborating with our team on
            a project. We warmly welcome partner- and sponsorships from
            like-minded individuals and organizations.
          </p>
          <span className="uppercase text-sm border-[0.2px] w-fit px-3 py-1 rounded-full  ">
            get in touch
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page6;
