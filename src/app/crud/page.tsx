"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface Form {
    name: string;
    description: string;
}

function Page() {
    const [formData, setFormData] = useState<Form>({
        name: "",
        description: "",
    });
    const [card, setCard] = useState<Form[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editData, setEditData] = useState<Form>({
        name: "",
        description: "",
    });

    function submitButton(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (formData.name.trim() === "" || formData.description.trim() === "")
            return;
        setCard((prev) => [...prev, formData]);
        setFormData({ name: "", description: "" });
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    }

    function onEdit(index: number) {
        setEditIndex(index);
        setEditData(card[index]);
    }

    function onEditChange(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setEditData((prev) => ({ ...prev, [id]: value }));
    }

    function onSave(index: number) {
        setCard((prev) =>
            prev.map((item, i) => (i === index ? editData : item))
        );
        setEditIndex(null);
    }

    function onDelete(indexToDelete: number) {
        setCard((prev) => prev.filter((_, i) => i !== indexToDelete));
    }

    return (
        <>
            <form
                onSubmit={submitButton}
                className="flex flex-col justify-center items-center w-[300px] p-4 rounded mb-4 bg-violet-700"
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={onChange}
                    className="block w-full mb-2 p-2 rounded"
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={formData.description}
                    onChange={onChange}
                    className="block w-full mb-2 p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </form>

            <div>
                {card.map((c, i) => (
                    <div key={i} className="bg-white p-4 m-2 rounded shadow">
                        {editIndex === i ? (
                            <>
                                <input
                                    type="text"
                                    id="name"
                                    value={editData.name}
                                    onChange={onEditChange}
                                    className="block w-full mb-2 p-2 rounded border"
                                />
                                <input
                                    type="text"
                                    id="description"
                                    value={editData.description}
                                    onChange={onEditChange}
                                    className="block w-full mb-2 p-2 rounded border"
                                />
                                <button
                                    onClick={() => onSave(i)}
                                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="font-bold">{c.name}</p>
                                <p>{c.description}</p>
                                <div className="flex gap-2 mt-2">
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                        onClick={() => onDelete(i)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                                        onClick={() => onEdit(i)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Page;
