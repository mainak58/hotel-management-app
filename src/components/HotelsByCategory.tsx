import Hotels from "@/components/Hotels";
import prisma from "@/lib/prisma";

interface HotelsByCategoryProps {
    category: string;
}

export default async function HotelsByCategory({
    category,
}: HotelsByCategoryProps) {
    const hotels = await prisma.hotel.findMany({
        where: {
            catagory: category,
        },
    });

    if (hotels.length === 0) {
        return (
            <div className="text-center py-10 text-xl">
                No hotels found for this category.
            </div>
        );
    }

    return (
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
    );
}
