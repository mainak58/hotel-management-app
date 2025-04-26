"use client";

import PremiumBookingSection from "@/components/PremiumBookingSection";

export default function Home() {
    return (
        <>
            <div className="font-inter">
                <section className="h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0c0c0c] text-white flex flex-col justify-center items-center text-center px-4">
                    <div className="max-w-4xl">
                        <p className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
                            Experience{" "}
                            <span className="font-medium">Luxury</span>{" "}
                            Redefined
                        </p>
                        <p className="text-xl md:text-2xl    font-light tracking-wide mb-12 opacity-90">
                            Discover handpicked destinations that elevate your
                            travel experience
                        </p>
                        <div className="inline-block border border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                            Explore Destinations
                        </div>
                    </div>
                </section>
            </div>

            <PremiumBookingSection />
        </>
    );
}
