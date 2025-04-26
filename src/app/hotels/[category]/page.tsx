"use client";
import { useParams } from "next/navigation";

export default function Page() {
    const params = useParams();
    const category = params.category;

    return (
        <div className="text-black">
            <h1>Category: {category}</h1>
        </div>
    );
}
