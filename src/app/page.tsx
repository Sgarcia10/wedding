import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Video Background */}
      <h1 className="names fixed top-0 left-0 right-0 text-4xl lg:h-20 md:text-5xl font-light tracking-wide text-center text-black z-20 py-4 drop-shadow-2xl shadow-black">
        JUANIS & SANTI
      </h1>

      {/* Main Content */}
      <div className="relative inset-0 z-0 md:w-lvw md:h-[70vh] lg:mt-20 lg:px-10 lg:py-10 lg:h-[70-vh] " >
        <VideoPlayer
          mobileSrc="/save_date.mp4"
          desktopSrc="/save_date_desk.mp4"
          alt="Wedding Video"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 bottom-100 lg:bottom-10 lg:top-auto left-0 right-0 m-auto z-10">
          {/* Save the Date at the Center */}
          <h2 className="save-date text-2xl md:text-3xl font-bold mb-8 text-center text-white drop-shadow-lg">
            save the date
            <br />
            <span className="text-4xl md:text-6xl">06 12 2025</span>
          </h2>
        </div>
      </div>

      {/* Location Section */}
      <div className="relative z-0 w-full h-[100vh] text-center">
        <h2 className="absolute text-white font-bold p-4" style={{ top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <span className="text-6xl md:text-9xl drop-shadow-lg">HONDA</span>
          <br />
          <span className="text-4xl md:text-6xl">TOLIMA</span>
          <div className="mt-7 flex justify-center gap-4">
            {/* Google Maps Button */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg drop-shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <img
              src="/maps.png"
              alt="Google Maps Icon"
              className="w-15 h-15 md:w-19 md:h-19"
              />
            </a>
            {/* Waze Button */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg drop-shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <img
              src="/waze.png"
              alt="Google Maps Icon"
              className="w-15 h-15 md:w-20 md:h-20"
              />
            </a>
          </div>
        </h2>
        <img
          src="/honda.jpeg"
          alt="Wedding Location"
          className="w-full h-[100vh] object-cover mx-auto rounded-lg shadow-lg mb-4"
        />
      </div>
    </div>
  );
}