"use client";

import Image from "next/image";
import bedroom from "../../assets/bedroom-8242523_640.jpg";
import greec from "../../assets/greece-844269_640.jpg";
import hotel from "../../assets/hotel-1831072_640.jpg";
import swimming from "../../assets/swimming-pool-2128578_640.jpg";
import { useEffect, useState } from "react";

export default function PremiumHotelShowcase() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved dark mode preference
        const savedDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(savedDarkMode);

        // Listen for dark mode changes from other components
        const handleDarkModeChange = () => {
            setDarkMode(document.documentElement.classList.contains("dark"));
        };

        // Use MutationObserver to detect class changes on html element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.attributeName === "class" &&
                    mutation.target === document.documentElement
                ) {
                    handleDarkModeChange();
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`flex flex-col items-center justify-center py-24 transition-colors duration-300 ${
                darkMode
                    ? "bg-gradient-to-b from-gray-900 to-gray-950 text-white"
                    : "bg-gradient-to-b from-white to-gray-50 text-black"
            }`}
        >
            <div className="w-full max-w-6xl px-6">
                <h2 className="text-4xl font-light mb-3 text-center tracking-wide">
                    <span className="font-medium">Extraordinary</span>{" "}
                    Destinations
                </h2>
                <p
                    className={`text-lg mb-16 max-w-2xl mx-auto text-center ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    Discover our curated collection of premium accommodations
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        className={`aspect-[4/5] overflow-hidden rounded-2xl group relative cursor-pointer ${
                            darkMode
                                ? "shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20"
                                : "shadow-lg hover:shadow-xl"
                        }`}
                    >
                        <Image
                            src={bedroom}
                            alt="Luxury Bedroom"
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <p className="text-lg font-medium mb-1">
                                    Royal Suite
                                </p>
                                <p className="text-sm font-light opacity-80">
                                    Experience ultimate luxury
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`aspect-[4/5] overflow-hidden rounded-2xl group relative cursor-pointer ${
                            darkMode
                                ? "shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20"
                                : "shadow-lg hover:shadow-xl"
                        }`}
                    >
                        <Image
                            src={greec}
                            alt="Greece"
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <p className="text-lg font-medium mb-1">
                                    Santorini Villas
                                </p>
                                <p className="text-sm font-light opacity-80">
                                    Breathtaking Mediterranean views
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`aspect-[4/5] overflow-hidden rounded-2xl group relative cursor-pointer ${
                            darkMode
                                ? "shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20"
                                : "shadow-lg hover:shadow-xl"
                        }`}
                    >
                        <Image
                            src={hotel}
                            alt="Hotel"
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <p className="text-lg font-medium mb-1">
                                    Boutique Retreats
                                </p>
                                <p className="text-sm font-light opacity-80">
                                    Exclusive and intimate settings
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`aspect-[4/5] overflow-hidden rounded-2xl group relative cursor-pointer ${
                            darkMode
                                ? "shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20"
                                : "shadow-lg hover:shadow-xl"
                        }`}
                    >
                        <Image
                            src={swimming}
                            alt="Swimming Pool"
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <p className="text-lg font-medium mb-1">
                                    Infinity Pools
                                </p>
                                <p className="text-sm font-light opacity-80">
                                    Where luxury meets relaxation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <button
                        className={`px-8 py-3 text-lg font-light tracking-wide transition-all duration-300 ${
                            darkMode
                                ? "border border-white hover:bg-white hover:text-gray-900"
                                : "border border-black hover:bg-black hover:text-white"
                        }`}
                    >
                        Explore All Destinations
                    </button>
                </div>
            </div>
        </section>
    );
}
