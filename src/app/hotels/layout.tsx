"use client";

import Navbar from "@/components/Navbar";
import PremiumHotelFooter from "@/components/Footer";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Layout({ children }: { children: React.ReactNode }) {
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
        <>
            <Navbar />

            <div
                className={`${
                    darkMode
                        ? "bg-gradient-to-r from-amber-800 to-amber-900"
                        : "bg-gradient-to-r from-amber-600 to-amber-800"
                } text-white py-4 transition-colors duration-300`}
            >
                <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
                    <span className="text-sm font-medium mr-2">✨</span>
                    <p className="text-sm font-medium">
                        Exclusive Summer Offer: Enjoy 20% off selected luxury
                        accommodations
                    </p>
                    <button
                        className={`ml-4 text-xs uppercase tracking-wider border rounded-full px-3 py-1 transition-colors ${
                            darkMode
                                ? "border-white/30 hover:bg-white/10"
                                : "border-white/30 hover:bg-white/20"
                        }`}
                    >
                        Learn More
                    </button>
                </div>
            </div>

            <div
                className={`min-h-screen py-24 px-4 sm:px-8 transition-colors duration-300 ${
                    darkMode ? "bg-gray-900" : "bg-white"
                }`}
            >
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="text-center relative">
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-1"></div>
                        <h1
                            className={`text-4xl md:text-7xl font-bold mb-6 tracking-tight ${
                                darkMode ? "text-gray-100" : "text-gray-900"
                            }`}
                        >
                            Extraordinary{" "}
                            <span
                                className={`italic font-serif ${
                                    darkMode
                                        ? "text-amber-500"
                                        : "text-amber-600"
                                }`}
                            >
                                Escapes
                            </span>
                        </h1>
                        <p
                            className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${
                                darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            Curated collection of world-class accommodations for
                            the discerning traveler
                        </p>
                        <div className="inline-flex items-center justify-center w-full">
                            <div
                                className={`h-px w-16 ${
                                    darkMode ? "bg-gray-700" : "bg-gray-200"
                                }`}
                            ></div>
                            <span
                                className={`mx-4 ${
                                    darkMode ? "text-gray-500" : "text-gray-400"
                                }`}
                            >
                                ★
                            </span>
                            <div
                                className={`h-px w-16 ${
                                    darkMode ? "bg-gray-700" : "bg-gray-200"
                                }`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mb-12">
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                darkMode
                                    ? "bg-amber-900/40 text-amber-300 border border-amber-800/60 hover:bg-amber-900/60"
                                    : "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
                            }`}
                        >
                            <Link href={"/hotels"}>All Properties</Link>
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                darkMode
                                    ? "bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                            }`}
                        >
                            <Link href={"/hotels/beachfront"}>Beachfront</Link>
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                darkMode
                                    ? "bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                            }`}
                        >
                            <Link href={"/hotels/mountainview"}>
                                Mountain View
                            </Link>
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                darkMode
                                    ? "bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                            }`}
                        >
                            <Link href={"/hotels/citycenter"}>City Center</Link>
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                darkMode
                                    ? "bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                            }`}
                        >
                            <Link href={"/hotels/wellnessretreat"}>
                                Wellness Retreats
                            </Link>
                        </button>
                    </div>
                </div>

                {/* children */}

                <main>{children}</main>

                <div
                    className={`max-w-5xl mx-auto mt-24 rounded-2xl p-12 shadow-sm transition-colors duration-300 ${
                        darkMode
                            ? "bg-gradient-to-r from-gray-800 to-gray-900 shadow-gray-800/30"
                            : "bg-gradient-to-r from-amber-50 to-orange-50"
                    }`}
                >
                    <div className="text-center">
                        <h3
                            className={`text-2xl font-bold mb-4 ${
                                darkMode ? "text-gray-100" : "text-gray-800"
                            }`}
                        >
                            Get Exclusive Offers
                        </h3>
                        <p
                            className={`mb-6 max-w-2xl mx-auto ${
                                darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            Subscribe to receive personalized luxury deals and
                            vacation inspiration
                        </p>
                        <div className="flex max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className={`flex-grow py-3 px-4 rounded-l-lg focus:outline-none focus:ring-2 ${
                                    darkMode
                                        ? "bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:ring-amber-500/50"
                                        : "border border-gray-300 focus:ring-amber-500 focus:border-transparent"
                                }`}
                            />
                            <button
                                className={`text-white py-3 px-6 rounded-r-lg transition-colors font-medium ${
                                    darkMode
                                        ? "bg-amber-700 hover:bg-amber-800"
                                        : "bg-amber-600 hover:bg-amber-700"
                                }`}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <PremiumHotelFooter />
        </>
    );
}

export default Layout;
