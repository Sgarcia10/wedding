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
            href="https://www.airbnb.com.co/s/Honda--Tolima/homes?flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2025-06-01&monthly_length=3&monthly_end_date=2025-09-01&place_id=ChIJG8t4u3m4QI4RdTJ7YgecDbo&refinement_paths%5B%5D=%2Fhomes&location_bb=QKosHcKVbZ9AoUncwpXFzQ%3D%3D&acp_id=f0996ea6-f8a1-415b-a933-1394eea47e19&date_picker_type=calendar&checkin=2025-12-06&checkout=2025-12-08&adults=2&source=structured_search_input_header&search_type=autocomplete_click"
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
            href="https://www.booking.com/searchresults.html?ss=Honda%2C+Tolima%2C+Colombia&checkin=2025-12-06&checkout=2025-12-08&group_adults=2&no_rooms=1&group_children=0"
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