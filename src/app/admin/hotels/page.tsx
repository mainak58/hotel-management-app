import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

async function createPost(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const rating = Number(formData.get("rating"));
    const location = formData.get("location") as string;
    const have_spa = formData.get("have_spa") === "on";
    const have_pool = formData.get("have_pool") === "on";
    const image_url = formData.get("image_url") as string;

    const data = {
        name,
        description,
        rating,
        location,
        have_spa,
        have_pool,
        image_url,
    };

    await prisma.hotel.create({ data: data });

    redirect("/");
}
function Page() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <form
                action={createPost}
                className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Add a New Hotel
                </h2>

                {[
                    { id: "name", label: "Hotel Name", type: "text" },
                    { id: "description", label: "Description", type: "text" },
                    { id: "rating", label: "Rating", type: "number" },
                    { id: "location", label: "Location", type: "text" },
                    { id: "image_url", label: "Image URL", type: "file" },
                ].map(({ id, label, type }) => (
                    <div key={id} className="space-y-1">
                        <label
                            htmlFor={id}
                            className="block text-gray-700 font-medium"
                        >
                            {label}
                        </label>
                        <input
                            type={type}
                            id={id}
                            name={id}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                ))}

                <div className="flex items-center space-x-4">
                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                        <input
                            type="checkbox"
                            id="have_spa"
                            name="have_spa"
                            className="accent-blue-500"
                        />
                        Spa Available
                    </label>

                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                        <input
                            type="checkbox"
                            id="have_pool"
                            name="have_pool"
                            className="accent-blue-500"
                        />
                        Pool Available
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all font-semibold"
                >
                    Create Hotel
                </button>
            </form>
        </div>
    );
}

export default Page;
