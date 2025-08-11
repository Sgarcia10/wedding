"use client";

import { useDevice } from "@/hooks/useDevice";

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

                <div className="grid gap-12 lg:gap-16">
                    {/* Ceremony Location */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <div className="bg-white/20 md:bg-black/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 md:border-black/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-accent md:bg-black/10 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white md:text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-accent md:text-black font-medium text-lg">{locations.ceremony.time}</span>
                                        <div className="text-sm text-white/70 md:text-black uppercase tracking-wider">Ceremonia</div>
                                    </div>
                                </div>

                                <h3 className="font-playfair text-2xl md:text-3xl text-white md:text-black mb-3">
                                    {locations.ceremony.name}
                                </h3>

                                <p className="text-lg text-white/90 md:text-black mb-4 italic">
                                    {locations.ceremony.description}
                                </p>

                                <p className="text-white/80 md:text-black mb-6">
                                    {locations.ceremony.address}
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href={isMobile ? locations.ceremony.maps.mobile : locations.ceremony.maps.desktop}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors shadow-md"
                                    >
                                        <svg className="w-5 h-5 md:text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        <span className="text-sm font-medium text-white md:text-black">Google Maps</span>
                                    </a>

                                    <a
                                        href={isMobile ? locations.ceremony.waze.mobile : locations.ceremony.waze.desktop}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-[#33CCFF] text-white px-6 py-3 rounded-xl hover:bg-[#33CCFF]/90 transition-colors shadow-md"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                        </svg>
                                        <span className="text-sm font-medium">Waze</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={locations.ceremony.image}
                                    alt={locations.ceremony.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Reception Location */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-1">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={locations.reception.image}
                                    alt={locations.reception.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="order-2">
                            <div className="bg-white/20 md:bg-black/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 md:border-black/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-accent-light md:bg-black/10 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white md:text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-accent-light md:text-black font-medium text-lg">{locations.reception.time}</span>
                                        <div className="text-sm text-white/70 md:text-black uppercase tracking-wider">Recepción</div>
                                    </div>
                                </div>

                                <h3 className="font-playfair text-2xl md:text-3xl text-white md:text-black mb-3">
                                    {locations.reception.name}
                                </h3>

                                <p className="text-lg text-white/90 md:text-black mb-4 italic">
                                    {locations.reception.description}
                                </p>

                                <p className="text-white/80 md:text-black mb-6">
                                    {locations.reception.address}
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href={isMobile ? locations.reception.maps.mobile : locations.reception.maps.desktop}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-accent-light text-white px-6 py-3 rounded-xl hover:bg-accent-light/90 transition-colors shadow-md"
                                    >
                                        <svg className="w-5 h-5 md:text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        <span className="text-sm font-medium md:text-black">Google Maps</span>
                                    </a>

                                    <a
                                        href={isMobile ? locations.reception.waze.mobile : locations.reception.waze.desktop}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-[#33CCFF] text-white px-6 py-3 rounded-xl hover:bg-[#33CCFF]/90 transition-colors shadow-md"
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
                </div>

                {/* Transportation Note */}
                <div className="mt-16 text-center p-8 bg-white/10 md:bg-black/5 rounded-2xl border border-white/20 md:border-black/10">
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
