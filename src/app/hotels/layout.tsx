import Navbar from "@/components/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen  bg-fixed bg-white py-24 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="text-center relative">
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-70"></div>
                        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                            Extraordinary{" "}
                            <span className="italic font-serif text-amber-600">
                                Escapes
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Curated collection of world-class accommodations for
                            the discerning traveler
                        </p>
                        <div className="inline-flex items-center justify-center w-full">
                            <div className="h-px w-16 bg-gray-200"></div>
                            <span className="mx-4 text-gray-400">★</span>
                            <div className="h-px w-16 bg-gray-200"></div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mb-12">
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button className="px-6 py-2 rounded-full text-sm font-medium bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-all">
                            All Properties
                        </button>
                        <button className="px-6 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-300 transition-all">
                            Beachfront
                        </button>
                        <button className="px-6 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-300 transition-all">
                            Mountain View
                        </button>
                        <button className="px-6 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-300 transition-all">
                            City Center
                        </button>
                        <button className="px-6 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-300 transition-all">
                            Wellness Retreats
                        </button>
                    </div>
                </div>

                {/* children */}

                <main>{children}</main>

                <div className="max-w-5xl mx-auto mt-24 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 shadow-sm">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Get Exclusive Offers
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Subscribe to receive personalized luxury deals and
                            vacation inspiration
                        </p>
                        <div className="flex max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow py-3 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            />
                            <button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-r-lg transition-colors font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default layout;
