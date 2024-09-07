import React from 'react';
import { motion } from 'framer-motion';

export const EventCard = ({ event }) => {
  return (
    <motion.div
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col justify-between relative z-10 border border-[#003060]"
      style={{ backgroundImage: `url(${event.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      whileHover={{ scale: 1.05 }} // Scale the card on hover
      transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Smooth spring animation
    >
      <div className="p-4 bg-black/60 w-full">
        {/* Event Name */}
        <h3 className="text-lg md:text-2xl font-semibold text-white">
          {event.name}
        </h3>
        {/* Event Description */}
        <p className="text-sm md:text-base text-gray-300 mt-2">
          {event.description}
        </p>
      </div>
      {/* Date and Price */}
      <div className="flex justify-between items-center p-4 bg-white dark:bg-neutral-900 w-full">
        <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
          {event.date}
        </p>
        <p className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400">
          {event.price}
        </p>
      </div>
    </motion.div>
  );
};
