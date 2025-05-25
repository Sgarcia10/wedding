"use client";
import { useDevice } from "@/hooks/useDevice";

export default function AccommodationSection() {
  const { isMobile } = useDevice();

  const DATES = {
    checkin: "2025-12-06",
    checkout: "2025-12-08"
  };

  const LOCATION = {
    name: "Honda, Tolima, Colombia",
    encoded: encodeURIComponent("Honda, Tolima, Colombia")
  };

  const links = {
    airbnb: {
      mobile: `https://www.airbnb.com/s/${LOCATION.encoded}/homes?check_in=${DATES.checkin}&check_out=${DATES.checkout}&adults=2`,
      desktop: `https://www.airbnb.com/s/${LOCATION.encoded}/homes?check_in=${DATES.checkin}&check_out=${DATES.checkout}&adults=2`
    },
    booking: {
      mobile: `https://www.booking.com/searchresults.html?ss=${LOCATION.encoded}&checkin=${DATES.checkin}&checkout=${DATES.checkout}&group_adults=2&no_rooms=1&from_sf=1`,
      desktop: `https://www.booking.com/searchresults.html?ss=${LOCATION.encoded}&checkin=${DATES.checkin}&checkout=${DATES.checkout}&group_adults=2&no_rooms=1`
    }
  };

  const recommendedHotels = {
    largeGroups: [
      {
        name: "Villa Carmelita",
        description: "Espaciosa villa con comodidades para grupos",
        bookingUrl: "https://www.airbnb.com/rooms/1018736142198230727?check_in=2025-12-06&check_out=2025-12-08&guests=1&adults=14&s=67&unique_share_id=90b570c9-7a15-4895-8615-eebd89a94f8d"
      },
      {
        name: "La Posada",
        description: "Casa amplia ideal para grupos grandes",
        bookingUrl: "https://www.airbnb.com/rooms/595473698803628634?check_in=2025-12-06&check_out=2025-12-08&guests=1&adults=16&s=67&unique_share_id=6c7a9087-f8d5-433a-9a3e-ddffbce69bd7"
      },
      {
        name: "Casa Xanadu",
        description: "Casa colonial perfecta para reuniones familiares",
        bookingUrl: "https://www.airbnb.com/rooms/23829356?check_in=2025-12-06&check_out=2025-12-08&guests=1&adults=14&s=67&unique_share_id=712e8e0f-f434-4a9e-8ec4-2bcd2d247bdc"
      }
    ],
    smallGroups: [
      {
        name: "Casa De Amigos Hotel Boutique",
        description: "Experiencia íntima y personalizada en el corazón de Honda",
        bookingUrl: "https://www.booking.com/Share-Nu0hA5"
      },
      {
        name: "Hotel Boutique Posada Las Trampas",
        description: "Hotel boutique con encanto colonial en el centro histórico",
        bookingUrl: "https://www.booking.com/Share-H6ZjZE"
      },
      {
        name: "Hotel El Virrey Boutique Honda",
        description: "Elegante hotel boutique con ambiente acogedor",
        bookingUrl: "https://www.booking.com/Share-UV9sFa"
      },
    ]
  };

  return (
    <section className="relative w-full min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/hotel-A0Pbrixa31z6kS9Df76Qq3waB89mkq.jpeg"
          alt="Accommodation Options"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 py-20">
        <h2 className="save-date">
          <span className="block text-4xl md:text-6xl mb-4 drop-shadow-lg">Hospedaje</span>
          <span className="block text-xl md:text-2xl tracking-wider font-medium drop-shadow-lg">Encuentra el lugar perfecto para tu estadía</span>
        </h2>
        
        <div className="decorative-line w-48 mx-auto my-8"></div>

        <p className="max-w-2xl text-lg md:text-xl text-white font-medium leading-relaxed mb-8 italic drop-shadow-lg">
          ¡Importante! Al ser puente festivo, te recomendamos reservar tu hospedaje con anticipación para encontrar las mejores opciones y precios.
        </p>
        
        <div className="flex gap-6 mt-4 justify-center mb-12">
          <a
            href={isMobile ? links.airbnb.mobile : links.airbnb.desktop}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <img
              src="/airbnb.png"
              alt="Airbnb"
              className="w-12 h-12 md:w-14 md:h-14"
            />
          </a>

          <a
            href={isMobile ? links.booking.mobile : links.booking.desktop}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <img
              src="/booking.png"
              alt="Booking.com"
              className="w-12 h-12 md:w-14 md:h-14"
            />
          </a>
        </div>

        <div className="max-w-4xl mx-auto w-full">
          {/* Large Groups Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-medium mb-6 drop-shadow-lg">Para Grupos Grandes</h3>
            <div className="grid gap-6">
              {recommendedHotels.largeGroups.map((hotel, index) => (
                <a
                  key={index}
                  href={hotel.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 p-6 rounded-lg text-left"
                >
                  <h4 className="text-lg md:text-xl font-medium mb-2">{hotel.name}</h4>
                  <p className="text-sm md:text-base text-white/90">{hotel.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Small Groups Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-medium mb-6 drop-shadow-lg">Para Parejas y Grupos Pequeños</h3>
            <div className="grid gap-6">
              {recommendedHotels.smallGroups.map((hotel, index) => (
                <a
                  key={index}
                  href={hotel.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 p-6 rounded-lg text-left"
                >
                  <h4 className="text-lg md:text-xl font-medium mb-2">{hotel.name}</h4>
                  <p className="text-sm md:text-base text-white/90">{hotel.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 