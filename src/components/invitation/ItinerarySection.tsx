"use client";

export default function ItinerarySection() {
    return (
        <section className="relative py-20 bg-black md:bg-white">
            <div className="container mx-auto px-4 max-w-4xl ">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl text-white md:text-black mb-6">
                        Itinerario
                    </h2>
                    <div className="decorative-line w-32 mx-auto mb-6 bg-white/30 md:bg-black/20"></div>
                    <p className="text-lg md:text-xl text-white/90 md:text-black/80 font-light">
                        Un fin de semana lleno de celebración
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Friday Event */}
                    <div className="relative">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                            {/* Date Card */}
                            <div className="flex-shrink-0 w-full flex justify-center md:w-auto">
                                <div className="bg-accent text-white rounded-2xl p-4 md:p-5 text-center shadow-lg w-40 md:w-auto md:text-black">
                                    <div className="text-2xl md:text-3xl font-light mb-1">05</div>
                                    <div className="text-sm uppercase tracking-wider opacity-90">Diciembre</div>
                                    <div className="text-xs uppercase tracking-wider opacity-75">Viernes</div>
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="flex-1 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/10 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <svg className="w-6 h-6 text-accent md:text-black" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span className="text-xl md:text-2xl font-light text-accent md:text-black">8:00 PM</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-playfair text-white md:text-black mb-4">
                                    Cóctel de Bienvenida
                                </h3>
                                <p className="text-lg text-white/90 md:text-black/80 leading-relaxed">
                                    Empezamos a calentar motores con una deliciosa comida de bienvenida.
                                    ¡Será el momento perfecto para saludar y compartir antes del gran día!
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-sm text-white/70 md:text-black/60">
                                    <svg className="w-4 h-4 text-inherit md:text-black" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                    </svg>
                                    <span className="italic">Cada persona paga su cuenta</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Saturday Ceremony */}
                    <div className="relative">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                            {/* Date Card */}
                            <div className="flex-shrink-0 w-full flex justify-center md:w-auto">
                                <div className="bg-accent-light text-white md:text-black rounded-2xl p-4 md:p-5 text-center shadow-lg w-40 md:w-auto">
                                    <div className="text-2xl md:text-3xl font-light mb-1">06</div>
                                    <div className="text-sm uppercase tracking-wider opacity-90">Diciembre</div>
                                    <div className="text-xs uppercase tracking-wider opacity-75">Sábado</div>
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="flex-1 bg-gradient-to-r from-accent/5 to-accent-light/5 rounded-2xl p-8 border border-accent/20 shadow-md">
                                <div className="flex items-center gap-3 mb-4">
                                    <svg className="w-6 h-6 text-accent-light md:text-black" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <span className="text-xl md:text-2xl font-light text-accent-light md:text-black">4:00 PM</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-playfair text-white md:text-black mb-4">
                                    Ceremonia de Matrimonio
                                </h3>
                                <p className="text-lg text-white/90 md:text-black/80 leading-relaxed mb-4">
                                    El instante más mágico de nuestra historia, en la hermosa Catedral Nuestra Señora del Rosario.
                                    Ven a ser testigo de nuestro amor y de la promesa de unir nuestras vidas para siempre en este lugar tan especial.
                                </p>
                                <div className="flex items-center gap-2 text-white/70 md:text-black/60">
                                    <svg className="w-5 h-5 text-inherit md:text-black" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    <span>Catedral Nuestra Señora del Rosario</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Saturday Reception */}
                    <div className="relative">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                            {/* Time Connector */}
                            <div className="flex-shrink-0 w-full flex justify-center md:w-auto">
                                <div className="bg-accent-light text-white rounded-2xl p-4 md:p-5 text-center shadow-lg w-40 md:w-auto md:text-black">
                                    <div className="text-2xl md:text-3xl font-light mb-1">06</div>
                                    <div className="text-sm uppercase tracking-wider opacity-90">Diciembre</div>
                                    <div className="text-xs uppercase tracking-wider opacity-75">Sábado</div>
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="flex-1 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-2xl p-8 border border-foreground/15 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <svg className="w-6 h-6 text-accent-light md:text-black" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <span className="text-xl md:text-2xl font-light text-accent-light md:text-black">5:00 PM a 2:00 AM</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-playfair text-white md:text-black mb-4">
                                    ¡A Celebrar!
                                </h3>
                                <p className="text-lg text-white/90 md:text-black/80 leading-relaxed mb-4">
                                    Después de la ceremonia, nos trasladamos a celebrar en grande.
                                    Música, baile, comida deliciosa y muchas risas nos esperan.
                                </p>
                                <div className="flex items-center gap-2 text-white/70 md:text-black/60">
                                    <svg className="w-5 h-5 text-inherit md:text-black" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    <span>Casa de los Virreyes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Message */}
                <div className="text-center mt-16 p-8 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-lg md:text-xl text-white/90 md:text-black/80 font-light italic">
                        "¡Prepárense para un fin de semana inolvidable lleno de amor, alegría y celebración!"
                    </p>
                </div>
            </div>
        </section>
    );
}
