"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
    name: string;
    description: string;
}

function page() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });
    const [card, setCard] = useState<FormData[]>([]);
    const [editingForm, setEditingForm] = useState({
        name: "",
        description: "",
    });

    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    function createCard(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setCard((prev) => [...prev, formData]);
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    }

    function onEdit(index: number) {
        setEditingIndex(index);
        setEditingForm(card[index]);
    }

    function isEditing(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setEditingForm((prev) => ({
            ...prev,
            [id]: value,
        }));
    }

    function onSave(index: number) {
        setCard((prev) =>
            prev.map((item, i) => (i === index ? editingForm : item))
        );
        setEditingIndex(null);
    }

    function onDelete(index: number) {
        setCard((prev) => prev.filter((_, i) => i != index));
    }

    return (
        <>
            <form onSubmit={createCard}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={onChange}
                    className="border-2"
                />
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="description"
                    value={formData.description}
                    onChange={onChange}
                    className="border-2"
                />
                <button type="submit">Submit</button>
            </form>

            <div>
                {card.map((c, i) => (
                    <div key={i}>
                        {editingIndex === i ? (
                            <>
                                <input
                                    type="text"
                                    id="name"
                                    value={editingForm.name}
                                    onChange={isEditing}
                                    className="border-2"
                                />
                                <input
                                    type="text"
                                    id="description"
                                    value={editingForm.description}
                                    onChange={isEditing}
                                    className="border-2"
                                />
                                <button onClick={() => onSave(i)}>Save</button>
                            </>
                        ) : (
                            <>
                                <div>
                                    <p> {c.name} </p>
                                    <p> {c.description} </p>
                                    <button onClick={() => onEdit(i)}>
                                        Edit
                                    </button>
                                    <button onClick={() => onDelete(i)}>
                                        delete
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

export default page;
