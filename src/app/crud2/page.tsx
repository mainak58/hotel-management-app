"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormInterface {
    name: string;
    desc: string;
}

function page() {
    const [formData, setFormData] = useState({
        name: "",
        desc: "",
    });
    const [editIndex, setEditIndex] = useState<Number | null>(null);
    const [editData, setEditData] = useState({
        name: "",
        desc: "",
    });

    const [card, setCard] = useState<FormInterface[]>([]);

    class FormClass {
        submitForm(e: FormEvent<HTMLFormElement>) {
            e.preventDefault();
            setCard((prev) => [...prev, formData]);
            setFormData({ name: "", desc: "" });
        }

        onChange(e: ChangeEvent<HTMLInputElement>) {
            const { id, value } = e.target;
            setFormData((prev) => ({
                ...prev,
                [id]: value,
            }));
        }

        deleteCard(index: number) {
            setCard((prev) => prev.filter((_, i) => i != index));
        }

        onEdit(index: number) {
            setEditIndex(index);
            setEditData(card[index]);
        }

        onEditChange(e: ChangeEvent<HTMLInputElement>) {
            const { id, value } = e.target;
            setEditData((prev) => ({ ...prev, [id]: value }));
        }

        onSave(index: number) {
            setCard((prev) =>
                prev.map((item, i) => (i === index ? editData : item))
            );
            setEditIndex(null);
        }
    }
    const formClass = new FormClass();
    return (
        <>
            <form onSubmit={formClass.submitForm}>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={formClass.onChange}
                    className="border-2"
                />
                <label htmlFor="">Description</label>
                <input
                    type="text"
                    id="desc"
                    value={formData.desc}
                    onChange={formClass.onChange}
                    className="border-2"
                />
                <button type="submit">Submit</button>
            </form>

            <div>
                {card.map((c, i) => (
                    <div key={i}>
                        {editIndex === i ? (
                            <>
                                <input
                                    type="text"
                                    id="name"
                                    value={editData.name}
                                    onChange={formClass.onEditChange}
                                    className="border-2"
                                />
                                <label htmlFor="">Description</label>
                                <input
                                    type="text"
                                    id="desc"
                                    value={editData.desc}
                                    onChange={formClass.onEditChange}
                                    className="border-2"
                                />
                                <button
                                    onClick={() => formClass.onSave(i)}
                                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <p> {c.name} </p>
                                <p> {c.desc} </p>
                                <button onClick={() => formClass.deleteCard(i)}>
                                    Delete
                                </button>
                                <button onClick={() => formClass.onEdit(i)}>
                                    Edit
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default page;
