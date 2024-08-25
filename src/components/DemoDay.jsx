"use client";
import React from "react";
import Image from "next/image";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

const data = [
  {
    name: "AI Innovations",
    position: "Artificial Intelligence",
    pictureUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    description: "Innovative solutions in AI transforming industries.",
  },
  {
    name: "Productivity Pro",
    position: "Productivity Tools",
    pictureUrl: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2",
    description: "Tools that enhance your productivity effortlessly.",
  },
  {
    name: "Cloud Computing Solutions",
    position: "Cloud Services",
    pictureUrl: "https://images.unsplash.com/photo-1560732488-6b0df240254a",
    description: "Scalable and secure cloud computing services for businesses.",
  },
  {
    name: "Cybersecurity Experts",
    position: "Information Security",
    pictureUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de",
    description:
      "Protecting your digital assets with cutting-edge security measures.",
  },
  {
    name: "Data Analytics Insights",
    position: "Data Science",
    pictureUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description: "Turning raw data into actionable business insights.",
  },
];

export function AppleCardsCarouselDemo() {
  const cards = data.map((item, key) => (
    <motion.div
      key={key}
      className="md:w-[300px] w-[180px] h-auto cursor-pointer rounded-xl overflow-hidden"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: key * 0.2 }}
    >
      <div className="relative md:w-[300px] w-[180px] h-[200px] md:h-[350px]">
        <Image
          src={item.pictureUrl}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="grayscale-[100] hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-xs md:text-sm opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <p>{item.description}</p>
        </div>
      </div>
      <div>
        <span className="text-[15px] font-bold text-neutral-700">
          {item.name}
        </span>
        <p className="text-[12px] text-[gray]">{item.position}</p>
      </div>
    </motion.div>
  ));

  return (
    <div className="w-full h-full py-20 px-[20px]">
      <header className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Welcome to the Nigcomsat Startup Accelerator
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base text-centers md:text-xl max-w-2xl mx-auto">
          Welcome to our inaugural startup accelerator program, a groundbreaking
          initiative dedicated to nurturing and accelerating innovation and
          growth within the technology sector. Our program is designed to
          support and propel early-stage startups that are poised to make
          significant impacts in the tech industry. Our Demo day is holding on
          the
          <span className="font-bold gap-2 text-blue-600 hover:underline flex items-center justify-center cursor-pointer">
            16th of October <Link />
          </span>
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all">
          Learn more about Demo Day
        </button>
      </header>

      <section className="max-w-7xl mx-auto mt-16">
        <h3 className="text-lg md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Meet Our Startups
        </h3>
        <p className="text-neutral-800">
          here are the startups that are to participate in the demo day
        </p>
        <Carousel items={cards} />
      </section>
    </div>
  );
}
