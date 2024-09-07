import React from 'react';
import Link from 'next/link';

export const EventCardMain = ({ event }) => {
  return (
    <Link href={`/events/${event.id}`} passHref>
      <div
        className="rounded-2xl bg-gray-100 dark:bg-neutral-900 h-72 w-48 md:h-[32rem] md:w-80 overflow-hidden flex flex-col justify-between relative z-10 border border-[#003060] cursor-pointer"
        style={{ backgroundImage: `url(${event.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Event Name and Description Section */}
        <div className="p-3 bg-black/60 w-full">
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {event.name}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            {event.description}
          </p>
        </div>

        {/* Date and Price Section */}
        <div className="flex justify-between items-center p-3 bg-white dark:bg-neutral-900 w-full">
          <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
            {event.date}
          </p>
          <p className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400">
            {event.price}
          </p>
        </div>
      </div>
    </Link>
  );
};
