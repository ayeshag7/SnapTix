import Link from "next/link";
const page = ({params}) => {

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

      // Find the member by matching the id
    const event = events.find(m => m.id === parseInt(params.event, 10));

    if (!event) {
    return <p className="min-h-screen p-24">Event not found</p>;
    }

  return (
    <main className="min-h-screen px-12 py-20 flex flex-col md:flex-row gap-12">
      {/* Left: Image Div */}
      <div className="w-full md:w-1/2 h-96 relative">
        <img
          src={event.imageSrc}
          alt={event.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right: Text Div */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6 mt-12">
        {/* Title */}
        <h1 className="text-3xl font-bold text-[#003060]">{event.name}</h1>

        {/* Description */}
        <p className="text-lg text-gray-700">{event.description}</p>

        {/* Date and Time */}
        <div className="flex items-center space-x-4">
          <div className="text-gray-700">
            <strong>Date:</strong> {event.date}
          </div>
          <div className="text-gray-700">
            <strong>Time:</strong> {event.time}
          </div>
        </div>

        {/* Price */}
        <div className="text-xl font-semibold text-[#003060]">
          {event.price}
        </div>

        {/* Purchase Ticket Button */}
        <Link href="/checkout">
        <button className="bg-[#fe542b] text-white py-3 px-6 w-full rounded-lg hover:bg-[#e44a26] transition">
          Purchase Ticket
        </button>
        </Link>
      </div>
    </main>
  )
};

export default page;