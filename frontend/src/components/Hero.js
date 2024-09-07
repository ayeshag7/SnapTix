"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const Hero = () => {
  const images = [
    "/Images/cta-img-1.png",
    "/Images/cta-img-2.png",
    "/Images/cta-img-3.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row justify-between pt-12">
      {/* text div */}
      <div className="flex flex-col mt-8 md:mt-32 px-4 md:px-8">
        <h1 className="text-2xl md:text-5xl font-bold text-[#003060] mb-4">
          Discover Events. Create <br />
          Memories.
        </h1>
        <p className="text-lg text-black w-48 md:w-[480px]">
        SnapTix brings you closer to the experiences you love. Whether you're a fan of thrilling concerts, exciting sports events, captivating arts and theatre, or family-friendly gatherings, we have something for everyone. Explore and book your next adventure with ease, and join millions of event-goers who trust SnapTix to create unforgettable memories. Discover the best events, secure your tickets, and get ready for experiences that last a lifetime.
        </p>
        <button className="bg-[#fe542b] text-white py-2 px-4 rounded-lg mt-8 w-48">
          Get started
        </button>
      </div>
      {/* image div */}
      <div className="w-64 h-[576px] md:w-[480px] md:h-[584px] rounded-lg mt-8 mb-12 overflow-hidden relative">
        <Image
          src={images[currentImageIndex]}
          alt="event"
          fill
          style={{ objectFit: "contain" }}
          className="absolute inset-0 block w-64 h-[576px] md:w-[480px] md:h-[584px]"
        />
      </div>
    </div>
  );
};
