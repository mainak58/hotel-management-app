import { Suspense } from "react";
import Hotels from "@/components/Hotels";
import prisma from "@/lib/prisma";

export default async function VisitHotels() {
    const hotels = await prisma.hotel.findMany();

    return (
        <div className="max-w-7xl mx-auto">
            <Suspense
                fallback={
                    <div className="w-full flex justify-center items-center">
                        Loading hotels...
                    </div>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {hotels.map((hotel) => (
                        <div
                            key={hotel.id}
                            className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full border border-gray-100"
                        >
                            <Hotels
                                id={hotel.id}
                                url={hotel.image_url}
                                name={hotel.name}
                                pool={hotel.have_pool}
                                spa={hotel.have_spa}
                                rating={hotel.rating}
                                location={hotel.location}
                                description={hotel.description}
                                price={hotel.price}
                            />
                        </div>
                    ))}
                </div>
            </Suspense>
        </div>
    );
}
