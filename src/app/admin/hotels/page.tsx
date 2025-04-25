"use client";

import React, { ChangeEvent, useState } from "react";

function Page() {
    const [image, setImages] = useState("");
    const [catagory, setCatagory] = useState("beachfront");
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        rating: "",
        location: "",
        have_spa: false,
        have_pool: false,
        price: "",
        userId: null,
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    const handleImg = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 204800) {
                alert("Image size should not exceed 200 KB");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    async function submitButton(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const res = await fetch("/api/hotels", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    description: formData.description,
                    rating: Number(formData.rating),
                    location: formData.location,
                    image_url: image,
                    have_spa: formData.have_spa,
                    have_pool: formData.have_pool,
                    price: Number(formData.price),
                    catagory: catagory,
                    userId: formData.userId,
                }),
            });

            if (res.ok) {
                console.log(formData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <form
                onSubmit={submitButton}
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
                    { id: "price", label: "price", type: "number" },
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
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                ))}

                <label htmlFor="catagory">Choose catagory</label>
                <select
                    name="catagory"
                    id="catagory"
                    value={catagory}
                    onChange={(e) => setCatagory(e.target.value)}
                >
                    <option value="beachfront">Beachfront</option>
                    <option value="mountainview">Mountainview</option>
                    <option value="citycenter">City Center</option>
                    <option value="wellnessretreat">Wellness Retreat</option>
                </select>

                <div>
                    <label
                        htmlFor="img"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Picture
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleImg}
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                        <input
                            type="checkbox"
                            name="have_spa"
                            checked={formData.have_spa}
                            onChange={handleChange}
                            className="accent-blue-500"
                        />
                        Spa Available
                    </label>

                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                        <input
                            type="checkbox"
                            name="have_pool"
                            checked={formData.have_pool}
                            onChange={handleChange}
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
