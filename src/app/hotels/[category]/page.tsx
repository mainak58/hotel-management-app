"use client";

import Hotels from "@/components/Hotels";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HotelForParams } from "../../../..";

export default function Page() {
    const params = useParams();
    const categoryFromParams = params.category as string;

    const [hotels, setHotels] = useState<HotelForParams[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `/api/hotels/${categoryFromParams}`
                );

                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch hotels: ${response.status}`
                    );
                }

                const data: HotelForParams[] = await response.json();
                setHotels(data);
                setError(null);
            } catch (err) {
                console.error("Error fetching hotels:", err);
                setError("Failed to load hotels information");
            } finally {
                setLoading(false);
            }
        };

        if (categoryFromParams) {
            fetchHotels();
        }
    }, [categoryFromParams]);

    if (loading) {
        return <div>Loading hotels information...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (hotels.length === 0) {
        return <div>No hotels found for this category.</div>;
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {hotels.map((hotel) => (
                    <Hotels
                        key={hotel.id}
                        id={hotel.id}
                        url={hotel.image_url ?? ""}
                        name={hotel.name}
                        pool={hotel.have_pool}
                        spa={hotel.have_spa}
                        rating={hotel.rating ?? 0}
                        location={hotel.location ?? ""}
                        description={hotel.description ?? ""}
                        price={hotel.price ?? 0}
                    />
                ))}
            </div>
        </div>
    );
}
