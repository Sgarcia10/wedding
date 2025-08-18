"use client";
import Image from "next/image";

export default function DressCodeSection() {
    return (
        <section className="relative py-20 bg-black md:bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl text-white md:text-black mb-6">
                        Código de Vestimenta
                    </h2>
                    <div className="decorative-line w-32 mx-auto mb-6 bg-white/30 md:bg-black/20"></div>
                    <p className="text-lg md:text-xl text-white/90 md:text-black/80 font-light">
                        Ayúdanos a crear un ambiente elegante y armonioso
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Men's Dress Code */}
                    <div className="bg-white/20 md:bg-black/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 md:border-black/10">
                        <div className="rounded-xl overflow-hidden mb-8">
                            <Image
                                src="/dressCodeMen.png"
                                alt="Vestimenta para Hombres"
                                width={500}
                                height={500}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-playfair text-2xl md:text-3xl text-white md:text-black mb-4">Para Ellos</h3>
                            <p className="text-lg text-white/90 md:text-black/80 leading-relaxed">
                                Camisa blanca de manga larga (guayabera o lino) y pantalón beige.
                            </p>
                        </div>
                    </div>

                    {/* Women's Dress Code */}
                    <div className="bg-white/20 md:bg-black/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 md:border-black/10">
                        <div className="rounded-xl overflow-hidden mb-8">
                            <Image
                                src="/dressCodeWomen.png"
                                alt="Vestimenta para Mujeres"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-playfair text-2xl md:text-3xl text-white md:text-black mb-4">Para Ellas</h3>
                            <p className="text-lg text-white/90 md:text-black/80 leading-relaxed">
                                Vestido largo. Los tonos blanco, beige o similares están reservados exclusivamente para la novia.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Notes */}
                <div className="mt-16">
                    <div className="bg-white/20 md:bg-black/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 md:border-black/10 text-center">
                        <svg className="w-12 h-12 text-white/90 md:text-black/80 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <h4 className="text-xl font-medium text-white md:text-black mb-3">Clima Tropical</h4>
                        <p className="text-white/90 md:text-black/80">
                            Honda tiene un clima cálido (36°C), así que elige telas frescas y cómodas para disfrutar al máximo
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
