"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { OrbitingLabelsDemo } from "../components/OrbitDemot";
import Sponsors from "../components/Sponsors";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import { AppleCardsCarouselDemo } from "../components/DemoDay";
import ScheduleSection from "../components/Schedule";
import { schedule, scheduleData } from "../data";
import PopupRegisterForm from "../components/Popup";
import AutoPlayVideo from "../components/Autoplayvideo";
function HeroSection({ openReg }) {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex justify-center text-center relative z-10 ">
          <div className=" px-5 py-2 border-emerald-500 border-[3px] bg-emerald-400/10 text-emerald-300 rounded-full">
            <span> 🚀10th Oct,2024 - 15th Oct, 2024🚀</span>
          </div>
        </div>

        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Nigerian Satellite Week 2024
        </h1>
        <h2 className="text-xl md:text-3xl  items-center flex justify-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center">
          Harnessing Satellite Communications for Sustainable Development
        </h2>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 md:text-xl text-sm text-center relative z-10">
          Join us for a week-long journey into the stars, where industry
          leaders, innovators, and enthusiasts come together to shape the future
          of satellite technology and space exploration.
        </p>
        <div className="w-full h-fit flex flex-col md:flex-row items-center justify-center mt-[40px] gap-4 md:gap-10 relative z-20">
          <div
            onClick={openReg}
            className="text-white cursor-pointer p-3 px-8 md:px-10 text-[13px] md:text-[15px] border-[#327ac8] border-[3px] bg-blue-600 rounded-full w-full md:w-auto text-center hover:bg-blue-700"
          >
            Register Now
          </div>
          <button className="text-white cursor-pointer p-3 px-8 md:px-10 text-[13px] md:text-[15px] border-[white] border-[3px] hover:bg-[white] hover:text-black rounded-full w-full md:w-auto text-center">
            Learn More
          </button>
        </div>
      </div>

      <BackgroundBeams />
      <div className="absolute w-[90vw] h-fit bottom-0 ">
        <div className="absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-neutral-950  to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-neutral-950  to-transparent z-10" />
        <Sponsors />
      </div>
    </div>
  );
}
function IntroSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const videoOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: isInView ? 1 : 0,
      mute: 1, // Most browsers require muted autoplay
    },
  };

  return (
    <div
      ref={sectionRef}
      className="md:h-[90vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-12"
    >
      <div className="max-w-5xl w-full mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-11">
        {/* Video Box */}
        <div className="w-full md:w-1/2 h-64 bg-neutral-800 rounded-md overflow-hidden">
          <YouTube
            videoId="LZPW4qrEHeM"
            opts={videoOptions}
            className="w-full h-full"
          />
        </div>

        {/* Intro Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:pl-8">
          <h2 className="relative z-10 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center md:text-left font-sans font-bold">
            Welcome to the Nigerian Satellite Week
          </h2>
          <p className="text-neutral-500  max-w-lg my-2 text-xl text-center md:text-left relative z-10">
            Discover the latest advancements in satellite technology and explore
            the possibilities of space exploration. Watch the video to learn
            more about what you can expect at this year's Nigerian Satellite
            Week 2024.
          </p>
          <p className="text-neutral-500 max-w-lg my-2 text-xl text-center md:text-left relative z-10">
            Our event brings together industry leaders, innovators, and
            enthusiasts to shape the future of satellite technology and space
            exploration. Don't miss this opportunity to be part of the next
            giant leap in space technology!
          </p>
        </div>
      </div>
    </div>
  );
}

function MeetOurSpeakers() {
  const [showMore, setShowMore] = useState(false);

  const speakers = [
    {
      name: "Jane Doe",
      title: "Aerospace Engineer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
      name: "John Smith",
      title: "Space Scientist",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Emily Clarke",
      title: "Astronomy Professor",
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=934&q=80",
    },
    {
      name: "Michael Johnson",
      title: "Satellite Technician",
      image:
        "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Sophia Williams",
      title: "Research Analyst",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
      name: "David Brown",
      title: "Space Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];
  const speakersToShow = showMore ? speakers : speakers.slice(0, 3);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="items-center  justify-center w-full mx-auto p-4 flex flex-col"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
        Meet Our Speakers & Guests
      </h2>
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {speakersToShow.map((speaker, index) => (
          <motion.div
            key={index}
            className="md:w-[300px] w-[180px] h-auto cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="md:w-[300px] w-[180px] h-[200px] md:h-[350px] relative group">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full relative grayscale-[100] hover:grayscale-0 transition-all duration-500 ease-in-out"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 ease-in-out flex items-center justify-center">
                <p className="text-white text-center opacity-0 group-hover:opacity-100 text-sm md:text-lg">
                  {speaker.title}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-[15px] font-bold text-neutral-600">
                {speaker.name}
              </span>
              <p className="text-[12px] text-gray-400">{speaker.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {!showMore && (
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={() => setShowMore(true)}
            className="text-white cursor-pointer p-3 px-10 text-[13px] border-[#327ac8] border-[3px] hover:bg-[#085bb1] rounded-full"
          >
            Show More
          </button>
        </div>
      )}
    </motion.div>
  );
}

const page = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-neutral-950">
      <button onClick={() => setIsRegisterOpen(true)}>Register Now</button>

      <PopupRegisterForm
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
      <HeroSection
        openReg={() => {
          setIsRegisterOpen(true);
        }}
      />
      <IntroSection />
      <section>
        <MeetOurSpeakers />
      </section>
      <section>
        <AppleCardsCarouselDemo />
      </section>
      <section>
        <ScheduleSection schedule={scheduleData} />
      </section>
    </div>
  );
};

export default page;
