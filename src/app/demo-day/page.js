import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Target, BarChart3, Leaf, Mic } from "lucide-react";

const DemoDayPage = () => {
  const judges = [
    {
      name: "Dr. Amina Bello",
      position: "Director, Nigerian Space Agency",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Prof. Chukwuma Eze",
      position: "Lead Scientist, AfriSpace",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Eng. Fatima Kwashi",
      position: "CEO, SatelliteTech Nigeria",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const startups = [
    {
      name: "SpaceTech",
      description: "Revolutionizing satellite communications",
      pictureUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "OrbitAI",
      description: "AI-powered space debris tracking",
      pictureUrl:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "LunarLink",
      description: "Connecting Earth and lunar bases",
      pictureUrl:
        "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <section className="py-16 px-4 h-full pt-[10vh] flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            About Demo Day
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-3xl">
            Demo Day is the culmination of the Nigerian Satellite Week, where
            innovative startups showcase their groundbreaking solutions in
            satellite technology and space exploration.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-emerald-400/10 border-2 border-emerald-500 p-4 text-emerald-300 rounded-full">
              <p className="font-semibold">🗓️ Date: October 15, 2024</p>
            </div>
            <div className="bg-emerald-400/10 border-2 border-emerald-500 rounded-full p-4 text-emerald-300">
              <p className="font-semibold">🏢 Venue: Lagos Space Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center">
            Our Esteemed Judges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12">
            {judges.map((judge, index) => (
              <div
                key={index}
                className="p-4 rounded-lg flex flex-col items-center"
              >
                <div className="w-full h-[350px] relative group">
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-full h-full relative grayscale-[100] hover:grayscale-0 transition-all duration-500 ease-in-out object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 ease-in-out flex items-center justify-center rounded-lg">
                    <p className="text-white text-center opacity-0 group-hover:opacity-100 text-sm md:text-lg">
                      {judge.position}
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xl font-bold text-neutral-300">
                    {judge.name}
                  </span>
                  <p className="text-sm text-gray-400">{judge.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judging Criteria Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center">
            Judging Criteria
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full">
            <li className="flex flex-col justify-center items-center">
              <Zap className="mb-4 text-blue-400 w-12 h-12" />
              <span className="text-xl">Innovation and Originality</span>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Target className="mb-4 text-blue-400 w-12 h-12" />
              <span className="text-xl">Technical Feasibility</span>
            </li>
            <li className="flex flex-col justify-center items-center">
              <BarChart3 className="mb-4 text-blue-400 w-12 h-12" />
              <span className="text-xl">Market Potential</span>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Leaf className="mb-4 text-blue-400 w-12 h-12" />
              <span className="text-xl">
                Sustainability and Environmental Impact
              </span>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Mic className="mb-4 text-blue-400 w-12 h-12" />
              <span className="text-xl">Presentation and Pitch Quality</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Startups Carousel */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center">
            Participating Startups
          </h2>
          <div className="flex overflow-x-auto space-x-6 pb-8 justify-center">
            {startups.map((startup, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-96 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={startup.pictureUrl}
                    alt={startup.name}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-black bg-opacity-70 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {startup.name}
                    </h3>
                    <p className="text-sm">{startup.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoDayPage;
