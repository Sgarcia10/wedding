"use client";

import { useDevice } from "@/hooks/useDevice";
import Image from "next/image";

export default function LocationsSection() {
    const { isMobile } = useDevice();

    const locations = {
        ceremony: {
            name: "Catedral Nuestra Señora del Rosario",
            description: "Lugar donde sellaremos nuestro amor",
            time: "4:00 PM",
            address: "Calle 12 #9-01, Honda, Tolima",
            maps: {
                mobile: "https://maps.app.goo.gl/mRyLnSmZFcz7EmiKA",
                desktop: "https://maps.app.goo.gl/mRyLnSmZFcz7EmiKA"
            },
            waze: {
                mobile: "https://waze.com/ul/hd2fve6cx2",
                desktop: "https://waze.com/ul/hd2fve6cx2"
            },
            image: "/catedral.jpg"
        },
        reception: {
            name: "Casa de los Virreyes",
            description: "Donde celebraremos hasta el amanecer",
            time: "5:00 PM - 2:00 AM",
            address: "Calle 10 #10-14, Honda, Tolima",
            maps: {
                mobile: "https://maps.google.com/?q=Casa+de+los+Virreyes+Honda+Tolima",
                desktop: "https://www.google.com/maps/search/Casa+de+los+Virreyes+Honda+Tolima"
            },
            waze: {
                mobile: "https://waze.com/ul?q=Casa+de+los+Virreyes+Honda",
                desktop: "https://waze.com/ul?q=Casa+de+los+Virreyes+Honda"
            },
            image: "/virreyes.jpeg"
        }
    };

    interface Location {
        name: string;
        description: string;
        time: string;
        address: string;
        maps: {
            mobile: string;
            desktop: string;
        };
        waze: {
            mobile: string;
            desktop: string;
        };
        image: string;
    }

    interface LocationCardProps {
        location: Location;
        isReversed?: boolean;
    }

    const LocationCard = ({ location }: LocationCardProps) => (
        <div className="relative">
            {/* Mobile: Image Background with Overlay */}
            <div className="md:hidden relative h-[500px] w-full">
                <Image
                    src={location.image}
                    alt={location.name}
                    className="object-cover"
                    fill
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Desktop: Side by Side Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="order-1">
                    <div className="bg-white/10 backdrop-blur-md md:bg-white/95 rounded-2xl p-6 md:p-8 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="px-4 py-2 bg-white/20 md:bg-black/5 rounded-full flex items-center justify-center">
                                <span className="text-white md:text-black font-medium text-lg">{location.time}</span>
                            </div>
                        </div>

                        <h3 className="font-playfair text-2xl md:text-3xl text-white md:text-black mb-3">
                            {location.name}
                        </h3>

                        <p className="text-lg text-white/90 md:text-black mb-4 italic">
                            {location.description}
                        </p>

                        <p className="text-white/80 md:text-black mb-6">
                            {location.address}
                        </p>

                        <div className="flex gap-4">
                            <a
                                href={isMobile ? location.maps.mobile : location.maps.desktop}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white/20 md:bg-black/5 text-white md:text-black px-6 py-3 rounded-xl hover:bg-white/30 md:hover:bg-black/10 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <span className="text-sm font-medium">Google Maps</span>
                            </a>

                            <a
                                href={isMobile ? location.waze.mobile : location.waze.desktop}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white/20 md:bg-black/5 text-white md:text-black px-6 py-3 rounded-xl hover:bg-white/30 md:hover:bg-black/10 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                                <span className="text-sm font-medium">Waze</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="order-2 relative aspect-[4/3]">
                    <Image
                        src={location.image}
                        alt={location.name}
                        className="object-cover rounded-2xl shadow-xl"
                        fill
                        priority
                    />
                </div>
            </div>

            {/* Mobile Content - Absolute Position */}
            <div className={`md:hidden ${isMobile ? 'absolute bottom-0 left-0 right-0 p-6' : ''}`}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="px-4 py-2 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white font-medium text-lg">{location.time}</span>
                        </div>
                    </div>

                    <h3 className="font-playfair text-2xl text-white mb-3">
                        {location.name}
                    </h3>

                    <p className="text-lg text-white/90 mb-4 italic">
                        {location.description}
                    </p>

                    <p className="text-white/80 mb-6">
                        {location.address}
                    </p>

                    <div className="flex gap-4">
                        <a
                            href={isMobile ? location.maps.mobile : location.maps.desktop}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span className="text-sm font-medium">Google Maps</span>
                        </a>

                        <a
                            href={isMobile ? location.waze.mobile : location.waze.desktop}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                            <span className="text-sm font-medium">Waze</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="relative py-20 bg-black md:bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl text-white md:text-black mb-6">
                        Ubicaciones
                    </h2>
                    <div className="decorative-line w-32 mx-auto mb-6 bg-white/30 md:bg-black/20"></div>
                    <p className="text-lg md:text-xl text-white/90 md:text-black font-light">
                        Los lugares donde viviremos momentos únicos
                    </p>
                </div>

                <div className="space-y-12 md:space-y-24">
                    {/* Ceremony Location */}
                    <LocationCard location={locations.ceremony} />

                    {/* Reception Location */}
                    <LocationCard location={locations.reception} isReversed />
                </div>

                {/* Transportation Note */}
                <div className="mt-16 text-center p-8 bg-white/10 md:bg-black/5 backdrop-blur-md rounded-2xl">
                    <svg className="w-8 h-8 text-white/90 md:text-black mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                    <p className="text-lg text-white/90 md:text-black font-light">
                        <strong className="text-white md:text-black">Importante:</strong> Los dos lugares están muy cerca uno del otro,
                        perfectos para caminar entre la ceremonia y la recepción.
                    </p>
                </div>
            </div>
        </section>
    );
}
