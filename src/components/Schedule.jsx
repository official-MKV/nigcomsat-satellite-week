import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react";

const ScheduleItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="w-full lg:w-[80%] cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-[#3b82f6_10px_10px_0px_0px] border border-neutral-700 p-4 lg:p-6 mb-4 bg-neutral-950 text-white"
      onClick={toggleExpand}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="w-full lg:w-1/5 flex items-center lg:items-start gap-4 lg:border-r lg:border-neutral-700 lg:pr-4">
          {item.events[0].presenter.name ? (
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {item.events[0].presenter.name.charAt(0)}
            </div>
          ) : (
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full" />
          )}
          <div className="lg:hidden flex flex-col">
            <span className="text-sm font-bold">
              {item.events[0].presenter.name}
            </span>
            <span className="text-xs text-gray-300 italic">
              {item.events[0].presenter.position}
            </span>
          </div>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col gap-2 lg:gap-4 lg:px-6 lg:border-r lg:border-neutral-700">
          <h3 className="text-xl lg:text-2xl font-medium text-blue-400">
            {item.events[0].title}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="text-blue-400" size={16} />
              <span>{item.events[0].time}</span>
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="text-blue-400" size={16} />
              <span>{item.events[0].location}</span>
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/5 flex items-center justify-between lg:justify-start lg:flex-col lg:items-start mt-4 lg:mt-0">
          <div className="font-bold text-2xl lg:text-3xl text-blue-400">
            {item.date.split("-")[2]}
          </div>
          <div className="text-gray-300">October, 2024</div>
        </div>
        <div className="lg:ml-4">
          {isExpanded ? (
            <ChevronUp className="text-blue-400" size={24} />
          ) : (
            <ChevronDown className="text-blue-400" size={24} />
          )}
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-4"
          >
            {item.events.slice(1).map((event, index) => (
              <div key={index} className="border-t border-neutral-700 pt-4">
                <h4 className="text-lg font-medium text-blue-400">
                  {event.title}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm mt-2">
                  <span className="flex items-center gap-2">
                    <Clock className="text-blue-400" size={16} />
                    <span>{event.time}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="text-blue-400" size={16} />
                    <span>{event.location}</span>
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-sm font-bold">
                    {event.presenter.name}
                  </span>
                  <span className="text-xs text-gray-300 italic ml-2">
                    {event.presenter.position}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ScheduleSection = ({ schedule }) => {
  return (
    <div className="container mx-auto px-4 py-8 bg-neutral-950 text-white">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
        Conference Schedule
      </h2>
      <div className="space-y-6">
        {schedule.map((item, index) => (
          <ScheduleItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ScheduleSection;
