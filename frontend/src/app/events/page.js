import { EventCardMain } from "@/components/EventCardMain";

const page = () => {

    const events = [
        {
          id: 1,
          name: 'Concert of Legends',
          description: 'A night to remember with legendary performances.',
          date: 'December 12, 2024',
          time: '8:00 PM',
          price: '$120',
          imageSrc: '/Images/st-img1.jpg'
        },
        {
          id: 2,
          name: 'Football Championship',
          description: 'Witness the biggest football game of the year.',
          date: 'January 5, 2025',
          time: '6:30 PM',
          price: '$75',
          imageSrc: '/Images/st-img2.jpg'
        },
        {
          id: 3,
          name: 'Broadway Musical Extravaganza',
          description: 'Experience the magic of Broadway live on stage.',
          date: 'February 18, 2025',
          time: '7:00 PM',
          price: '$95',
          imageSrc: '/Images/st-img3.jpg'
        },
        {
          id: 4,
          name: 'Art & Culture Festival',
          description: 'A celebration of local and international arts and culture.',
          date: 'March 10, 2025',
          time: '5:00 PM',
          price: '$50',
          imageSrc: '/Images/st-img4.jpg'
        }
      ];      

  return (
    <main className="min-h-screen px-12 py-12">
      <h1 className="text-2xl md:text-3xl font-bold mt-8 text-[#003060] z-10">View All Events:</h1>

      {/* Mapping the events to render EventCard components */}
      <div className="flex flex-wrap gap-x-8 gap-y-8 my-12">
        {events.map((event, index) => (
          <EventCardMain key={index} event={event} />
        ))}
      </div>
    </main>
  );
};

export default page;
