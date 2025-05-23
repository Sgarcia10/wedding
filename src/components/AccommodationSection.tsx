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

  const recommendedHotels = [
    {
      name: "Hotel Boutique Casa Belle Epoque",
      description: "Hotel histórico en el centro de Honda",
      bookingUrl: "https://www.booking.com/hotel/co/boutique-casa-belle-epoque.html"
    },
    {
      name: "Hotel America Honda",
      description: "Ubicación céntrica, cerca de la Catedral",
      bookingUrl: "https://www.booking.com/hotel/co/america-honda.html"
    },
    {
      name: "Hotel El Palermo Honda",
      description: "Vistas al río Magdalena",
      bookingUrl: "https://www.booking.com/hotel/co/el-palermo-honda.html"
    },
    {
      name: "Hotel Casa Rojas Honda",
      description: "Estilo colonial con piscina",
      bookingUrl: "https://www.booking.com/hotel/co/casa-rojas-honda.html"
    },
    {
      name: "Hotel Posada Las Trampas",
      description: "Encanto histórico en el centro",
      bookingUrl: "https://www.booking.com/hotel/co/posada-las-trampas.html"
    }
  ];

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

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-medium mb-6 drop-shadow-lg">Hoteles Recomendados</h3>
          <div className="grid gap-6">
            {recommendedHotels.map((hotel, index) => (
              <a
                key={index}
                href={hotel.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 p-4 rounded-lg text-left"
              >
                <h4 className="text-lg md:text-xl font-medium mb-1">{hotel.name}</h4>
                <p className="text-sm md:text-base text-white/90">{hotel.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 