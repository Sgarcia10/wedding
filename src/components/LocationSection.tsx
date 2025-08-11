"use client";
import { useDevice } from "@/hooks/useDevice";
import Image from "next/image";

export default function LocationSection() {
  const { isMobile } = useDevice();


  const links = {
    maps: {
      mobile: `https://maps.app.goo.gl/mRyLnSmZFcz7EmiKA`,
      desktop: `https://maps.app.goo.gl/mRyLnSmZFcz7EmiKA`
    },
    waze: {
      mobile: `https://waze.com/ul/hd2fve6cx2`,
      desktop: "https://waze.com/ul/hd2fve6cx2"
    }
  };

  return (
    <section className="relative w-full h-[80vh]">
      <div className="absolute inset-0">
        <Image
          src="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/honda-I3Pw0ez3aKs8gKhw52Su2rdlYEp8rQ.jpeg"
          alt="Wedding Location"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="save-date">
          <span className="block text-6xl md:text-8xl mb-4">Honda</span>
          <span className="block text-2xl md:text-4xl tracking-wider">Tolima, Colombia</span>
        </h2>

        <div className="decorative-line w-48 mx-auto my-8"></div>

        {/* <p className="text-xl md:text-2xl font-light tracking-wide mb-12">
          Catedral Nuestra Señora del Rosario
        </p> */}

        {/* Location Buttons */}
        <div className="flex gap-6">
          <a
            href={isMobile ? links.maps.mobile : links.maps.desktop}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <Image
              src="/maps.png"
              alt="Google Maps"
              width={56}
              height={56}
              className="w-12 h-12 md:w-14 md:h-14"
            />
          </a>

          <a
            href={isMobile ? links.waze.mobile : links.waze.desktop}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <Image
              src="/waze.png"
              alt="Waze"
              width={56}
              height={56}
              className="w-12 h-12 md:w-14 md:h-14"
            />
          </a>
        </div>
      </div>
    </section>
  );
} 