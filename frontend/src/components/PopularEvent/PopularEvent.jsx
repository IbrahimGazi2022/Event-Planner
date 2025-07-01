import React from 'react';

const PopularEvent = () => {
  const events = [
    {
      id: 1,
      title: "Music Festival",
      date: "15 June 2024",
      location: "Dhaka, Bangladesh",
      price: "৳1500",
      image: "/images/events/events-1.jpg"
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "22 July 2024",
      location: "Chittagong, Bangladesh",
      price: "৳2500",
      image: "/images/events/events-2.jpg"
    },
    {
      id: 3,
      title: "Food Expo",
      date: "5 August 2024",
      location: "Sylhet, Bangladesh",
      price: "৳500",
      image: "/images/events/events-3.jpg"
    },
    {
      id: 4,
      title: "Art Exhibition",
      date: "12 September 2024",
      location: "Khulna, Bangladesh",
      price: "৳300",
      image: "/images/events/events-4.jpg"
    },
    {
      id: 5,
      title: "Sports Tournament",
      date: "28 October 2024",
      location: "Rajshahi, Bangladesh",
      price: "৳800",
      image: "/images/events/events-5.jpg"
    },
    {
      id: 6,
      title: "Business Summit",
      date: "8 November 2024",
      location: "Barisal, Bangladesh",
      price: "৳3500",
      image: "/images/events/events-6.jpg"
    }
  ];

  return (
    <section className="py-16 bg-[#F9F5FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#4A1B6B] sm:text-4xl uppercase"> 
            Popular Events
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-[#6B46A1]"> 
            Discover the most exciting events happening near you
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  src={event.image} 
                  alt={event.title}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <span className="inline-block bg-[#494AFD]/10 text-[#494AFD] text-sm px-3 py-1 rounded-full font-semibold">
                    {event.price}
                  </span>
                </div>
                <div className="mt-4 flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-[#494AFD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-2">{event.date}</span>
                </div>
                <div className="mt-2 flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-[#494AFD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="ml-2">{event.location}</span>
                </div>
                <button className="mt-6 w-full bg-[#494AFD] hover:bg-[#7A1F7A] text-white py-2.5 px-4 rounded-lg transition duration-300 font-medium shadow-md hover:shadow-[#494AFD]/30">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-3.5 border border-transparent text-lg font-bold rounded-xl shadow-sm text-white bg-[#494AFD] hover:bg-[#7A1F7A] transition duration-300 hover:shadow-lg hover:shadow-[#494AFD]/40">
            View All Events
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularEvent;