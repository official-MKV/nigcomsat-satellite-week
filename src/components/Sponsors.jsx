import React from "react";
import Marquee from "./magicui/marquee";
import { SponsorData } from "../data";

const Sponsors = () => {
  const sponsors = [];
  return (
    <div className="relative w-full h-fit bg-transparent">
      <Marquee pauseOnHover className="[--duration:30s]">
        {SponsorData.map((sponsor) => (
          <div className="size-[100px] flex relative md:mx-[50px] mx-[20px]">
            <img
              src={sponsor.logoUrl}
              className="relative w-full h-full"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Sponsors;
