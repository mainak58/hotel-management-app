import { Suspense } from "react";
import HotelsList from "@/components/HotelsList";

export default function VisitHotels() {
    return (
        <div className="max-w-7xl mx-auto">
            <Suspense
                fallback={
                    <div className="w-full flex justify-center items-center h-40 text-xl font-semibold">
                        Loading hotels...
                    </div>
                }
            >
                <HotelsList />
            </Suspense>
        </div>
    );
}
