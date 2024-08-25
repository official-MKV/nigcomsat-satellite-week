import React from "react";
import OrbitingCircles from "./magicui/orbiting-circles";

export function OrbitingLabelsDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Features
      </span>

      {/* Inner Labels */}
      <OrbitingCircles
        className="size-[100px] border-none bg-[green]"
        duration={20}
        delay={20}
        radius={100}
      >
        <Label color="#FF6B6B">Interactive</Label>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[100px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={100}
      >
        <Label color="#4ECDC4">Engaging</Label>
      </OrbitingCircles>

      {/* Outer Labels (reverse) */}
      <OrbitingCircles
        className="size-[120px] border-none bg-transparent"
        radius={210}
        duration={20}
        reverse
      >
        <Label color="#45B7D1">Educational</Label>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[120px] border-none bg-transparent"
        radius={210}
        duration={20}
        delay={20}
        reverse
      >
        <Label color="#F7B731">Innovative</Label>
      </OrbitingCircles>
    </div>
  );
}

const Label = ({ children, color }) => (
  <div
    className="flex items-center justify-center rounded-full text-white font-bold text-sm"
    style={{
      backgroundColor: color,
      width: "100%",
      height: "100%",
    }}
  >
    {children}
  </div>
);

export default OrbitingLabelsDemo;
