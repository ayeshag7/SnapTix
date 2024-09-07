"use client"

import React from 'react';
import { Carousel } from './Carousel';

export const EventsDisplay = () => {
    const events = [
        {
          name: 'Concert of Legends',
          description: 'A night to remember with legendary performances.',
          date: 'December 12, 2024',
          price: '$120',
          imageSrc: "/Images/st-img1.jpg"
        },
        {
          name: 'Football Championship',
          description: 'Witness the biggest football game of the year.',
          date: 'January 5, 2025',
          price: '$75',
          imageSrc: "/Images/st-img2.jpg"
        },
        {
          name: 'Broadway Musical Extravaganza',
          description: 'Experience the magic of Broadway live on stage.',
          date: 'February 18, 2025',
          price: '$95',
          imageSrc: "/Images/st-img3.jpg"
        },
        {
          name: 'Art & Culture Festival',
          description: 'A celebration of local and international arts and culture.',
          date: 'March 10, 2025',
          price: '$50',
          imageSrc: "/Images/st-img4.jpg"
        }
      ];

  return (
    <>
    <h1 className="text-2xl md:text-3xl font-bold mt-8 text-[#003060] z-10 px-8">Browse Events</h1>
    <Carousel items={events}/>
    </>
  )
}
