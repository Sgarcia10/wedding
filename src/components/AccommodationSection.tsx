export default function AccommodationSection() {
  return (
    <section className="relative w-full h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="/hotel.jpeg"
          alt="Accommodation Options"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="save-date">
          <span className="block text-4xl md:text-6xl mb-4">Hospedaje</span>
          <span className="block text-xl md:text-2xl tracking-wider">Encuentra el lugar perfecto para tu estadía</span>
        </h2>
        
        <div className="decorative-line w-48 mx-auto my-12"></div>
        
        <div className="flex gap-6 mt-8">
          <a
            href="https://www.airbnb.com/s/Honda--Tolima--Colombia/homes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <img
              src="/airbnb.png"
              alt="Airbnb"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </a>

          <a
            href="https://www.booking.com/searchresults.html?ss=Honda%2C+Tolima%2C+Colombia"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <img
              src="/booking.png"
              alt="Booking.com"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </a>
        </div>
      </div>
    </section>
  );
} 