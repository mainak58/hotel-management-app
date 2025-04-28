import { Suspense } from "react";
import HotelsByCategory from "@/components/HotelsByCategory";

interface PageProps {
    params: { category: string };
}

export default function Page({ params }: PageProps) {
    return (
        <div className="max-w-7xl mx-auto">
            <Suspense
                fallback={
                    <div className="w-full flex justify-center items-center h-40 text-xl font-semibold">
                        Loading hotels information...
                    </div>
                }
            >
                <HotelsByCategory category={params.category} />
            </Suspense>
        </div>
    );
}
