import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function VisitHotels() {
    const hotels = await prisma.hotel.findMany();

    return (
        <>
            {
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {hotels.map((hotel) => (
                            <div
                                key={hotel.id}
                                className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full border border-gray-100"
                            >
                                <div className="relative">
                                    <div className="absolute top-0 left-0 z-10 m-4">
                                        <div className="bg-amber-100 text-amber-800 py-1 px-3 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
                                            Premium
                                        </div>
                                    </div>

                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={
                                                hotel.image_url ||
                                                "https://i.sstatic.net/5ykYD.png"
                                            }
                                            alt={hotel.name}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    <div className="absolute bottom-5 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                        <div className="flex justify-between items-center">
                                            <div className="flex gap-4">
                                                {hotel.have_pool && (
                                                    <div className="flex items-center text-xl">
                                                        <svg
                                                            className="w-10 h-10 mr-1"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M22 16.5l-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5v2l2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5z"></path>
                                                            <path d="M22 12.5l-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5v2l2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5z"></path>
                                                        </svg>
                                                        Pool
                                                    </div>
                                                )}
                                                {hotel.have_spa && (
                                                    <div className="flex items-center text-xl">
                                                        <svg
                                                            className="w-10 h-10 mr-1"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 13c2.76 0 5-2.24 5-5h-10c0 2.76 2.24 5 5 5z"></path>
                                                        </svg>
                                                        Spa
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex items-center bg-amber-500 bg-opacity-90 rounded-full px-2 py-1">
                                                <svg
                                                    className="w-3 h-3 text-white mr-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                                </svg>
                                                <span className="text-xs font-medium">
                                                    {hotel.rating}/5
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <svg
                                            className="w-4 h-4 mr-1 text-amber-500"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                                        </svg>
                                        <span className="truncate">
                                            {hotel.location}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                                        {hotel.name}
                                    </h2>

                                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow leading-relaxed">
                                        {hotel.description}
                                    </p>

                                    <div className="pt-6 mt-auto border-t border-gray-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-sm text-gray-500">
                                                Starting from
                                            </div>
                                            <div className="text-xl font-bold text-gray-800">
                                                ₹{hotel.price}
                                                <span className="text-sm font-normal text-gray-500">
                                                    /night
                                                </span>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/book/${hotel.id}`}
                                            className="block"
                                        >
                                            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group">
                                                <span>Book Now</span>
                                                <svg
                                                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    );
}
