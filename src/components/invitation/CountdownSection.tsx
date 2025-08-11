"use client";

import { useEffect, useState } from 'react';

export default function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const weddingDate = new Date('2025-12-06T16:00:00-05:00'); // 4:00 PM Colombia time

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = weddingDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        // Calculate immediately
        calculateTimeLeft();

        // Update every second
        const timer = setInterval(calculateTimeLeft, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-12 bg-black md:bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white/20 md:bg-black/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 md:border-black/10">
                        <div className="font-playfair text-4xl md:text-5xl text-white md:text-black mb-2">
                            {timeLeft.days}
                        </div>
                        <div className="text-white/90 md:text-black/80 text-sm uppercase tracking-wider">
                            Días
                        </div>
                    </div>

                    <div className="bg-white/20 md:bg-black/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 md:border-black/10">
                        <div className="font-playfair text-4xl md:text-5xl text-white md:text-black mb-2">
                            {timeLeft.hours}
                        </div>
                        <div className="text-white/90 md:text-black/80 text-sm uppercase tracking-wider">
                            Horas
                        </div>
                    </div>

                    <div className="bg-white/20 md:bg-black/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 md:border-black/10">
                        <div className="font-playfair text-4xl md:text-5xl text-white md:text-black mb-2">
                            {timeLeft.minutes}
                        </div>
                        <div className="text-white/90 md:text-black/80 text-sm uppercase tracking-wider">
                            Minutos
                        </div>
                    </div>

                    <div className="bg-white/20 md:bg-black/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 md:border-black/10">
                        <div className="font-playfair text-4xl md:text-5xl text-white md:text-black mb-2">
                            {timeLeft.seconds}
                        </div>
                        <div className="text-white/90 md:text-black/80 text-sm uppercase tracking-wider">
                            Segundos
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
