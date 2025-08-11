"use client";

interface InvitationBannerProps {
    inviteName: string;
}

export default function InvitationBanner({ inviteName }: InvitationBannerProps) {
    return (
        <div className="relative bg-gradient-to-r from-accent/90 to-accent-light/90 text-white py-8 px-4 text-center">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm0-20c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm20 20c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM0 20c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="mb-4">
                    <svg
                        className="w-8 h-8 mx-auto mb-3 text-white/80"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>

                <h2 className="font-playfair text-2xl md:text-3xl font-light mb-3">
                    ¡Hola, {inviteName}!
                </h2>

                <p className="text-lg md:text-xl font-light tracking-wide leading-relaxed">
                    Con mucha alegría queremos invitarte a celebrar nuestra boda
                </p>

                <div className="flex items-center justify-center mt-4 space-x-2">
                    <div className="w-8 h-px bg-white/60"></div>
                    <svg
                        className="w-4 h-4 text-white/80"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <div className="w-8 h-px bg-white/60"></div>
                </div>
            </div>
        </div>
    );
}
