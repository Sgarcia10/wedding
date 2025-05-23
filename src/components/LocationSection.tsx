"use client";
import { useDevice } from "@/hooks/useDevice";

export default function LocationSection() {
  const { isMobile } = useDevice();

  const CATHEDRAL_COORDS = "5.2008,-74.7403";
  const CATHEDRAL_NAME = "Catedral Nuestra Señora del Rosario Honda";
  const CATHEDRAL_PLACE_ID = "ChIJJXfI_364QI4Rm3h3XfqIU-E";
  
  const links = {
    maps: {
      mobile: `https://maps.google.com/?q=${CATHEDRAL_COORDS}&query=${encodeURIComponent(CATHEDRAL_NAME)}`,
      desktop: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CATHEDRAL_NAME)}&query_place_id=${CATHEDRAL_PLACE_ID}`
    },
    waze: {
      mobile: `https://waze.com/ul?ll=${CATHEDRAL_COORDS}&navigate=yes&zoom=17`,
      desktop: "https://ul.waze.com/es/live-map/directions/co/tolima/honda/catedral-nuestra-senora-del-rosario-honda?navigate=yes&to=place.ChIJJXfI_364QI4Rm3h3XfqIU-E"
    }
  };

  return (
    <section className="relative w-full h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/honda-I3Pw0ez3aKs8gKhw52Su2rdlYEp8rQ.jpeg"
          alt="Wedding Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="save-date">
          <span className="block text-6xl md:text-8xl mb-4">Honda</span>
          <span className="block text-2xl md:text-4xl tracking-wider">Tolima, Colombia</span>
        </h2>
        
        <div className="decorative-line w-48 mx-auto my-12"></div>
        
        {/* Location Buttons */}
        <div className="flex gap-6 mt-8">
          <a
            href={isMobile ? links.maps.mobile : links.maps.desktop}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <img
              src="/maps.png"
              alt="Google Maps"
              className="w-12 h-12 md:w-14 md:h-14"
            />
          </a>
          
          <a
            href={isMobile ? links.waze.mobile : links.waze.desktop}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <img
              src="/waze.png"
              alt="Waze"
              className="w-12 h-12 md:w-14 md:h-14"
            />
          </a>
        </div>
      </div>
    </section>
  );
} 