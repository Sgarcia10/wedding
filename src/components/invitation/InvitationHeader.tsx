"use client";
import Image from "next/image";

interface InvitationHeaderProps {
    inviteName: string;
}

export default function InvitationHeader({ inviteName }: InvitationHeaderProps) {
    // Determine if it's multiple guests (contains "y", "," or "e")
    const isMultipleGuests = inviteName.includes(' y ') || inviteName.includes(',') || inviteName.includes(' e ');
    const greeting = isMultipleGuests ? 'los' : 'te';

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black md:bg-white">
            {/* Mobile Background Image */}
            <div className="absolute inset-0 md:hidden">
                <Image
                    src="/iglesia.jpg"
                    alt="Catedral Nuestra Señora del Rosario - Honda, Tolima"
                    className="object-cover"
                    fill
                    priority
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Desktop Background Image - Centered with padding */}
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16">
                <div className="w-full h-full relative max-w-6xl">
                    <Image
                        src="/invitation.jpeg"
                        alt="Catedral Nuestra Señora del Rosario - Honda, Tolima"
                        className="hidden md:block object-cover rounded-2xl shadow-2xl"
                        fill
                        priority
                    />
                    {/* Light overlay for readability */}
                    <div className="absolute inset-0 bg-black/10 rounded-2xl hidden md:block"></div>
                    <div className="w-full h-full flex items-center justify-center md:w-2/5 lg:w-1/3 md:absolute md:top-0 md:right-0 transform transition-all duration-300 md:pr-6">
                        {/* Letter Paper */}
                        <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-8 md:p-12 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            {/* Letter decorative header */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-light"></div>

                            {/* Decorative corner elements */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/30 rounded-tl-2xl"></div>
                            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent/30 rounded-tr-2xl"></div>
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent/30 rounded-bl-2xl"></div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/30 rounded-br-2xl"></div>

                            {/* Letter Content */}
                            <div className="space-y-6 text-center relative z-10">
                                {/* Names in cursive */}
                                <div className="mb-8">
                                    <h1 className="font-dancing text-4xl md:text-5xl text-black leading-tight">
                                        {inviteName}
                                    </h1>
                                    <div className="w-24 h-px bg-black/40 mx-auto mt-4"></div>
                                </div>

                                {/* Invitation text */}
                                <div className="space-y-4">
                                    <p className="text-lg md:text-xl text-black leading-relaxed font-light">
                                        Con mucha alegría {greeting} invitamos cordialmente a celebrar nuestra boda
                                    </p>

                                    {/* Wedding details */}
                                    <div className="my-8 space-y-3">
                                        <div className="text-2xl md:text-3xl font-playfair text-black tracking-wider">
                                            06 · 12 · 2025
                                        </div>
                                        <div className="text-lg md:text-xl text-black font-light">
                                            Honda, Tolima
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Letter texture/watermark */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none">
                                <div className="w-full h-full bg-repeat"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-13.807-11.193-25-25-25S0 36.193 0 50s11.193 25 25 25 25-11.193 25-25zm0-50c0-13.807-11.193-25-25-25S0-13.807 0 0s11.193 25 25 25 25-11.193 25-25zm50 50c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25z'/%3E%3C/g%3E%3C/svg%3E")`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Letter-style Invitation */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex items-center justify-end">

            </div>
        </section>
    );
}
