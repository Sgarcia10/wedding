export default function LocationSection() {
  return (
    <section className="relative w-full h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="/honda.jpeg"
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
            href="https://www.google.com/maps/place/Catedral+Nuestra+Señora+del+Rosario+-+Honda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <img
              src="/maps.png"
              alt="Google Maps"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </a>
          
          <a
            href="https://ul.waze.com/es/live-map/directions/co/tolima/honda/catedral-nuestra-senora-del-rosario-honda?navigate=yes&to=place.ChIJJXfI_364QI4Rm3h3XfqIU-E"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <img
              src="/waze.png"
              alt="Waze"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </a>
        </div>
      </div>
    </section>
  );
} 