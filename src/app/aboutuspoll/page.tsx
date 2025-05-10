"use client";
import { useEffect, useState } from "react";

export default function Page() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "https://67eb83f3aa794fb3222a8348.mockapi.io/user"
            );
            const data = await res.json();
            setUsers(data);
        };

        fetchData();
        const interval = setInterval(fetchData, 5000); // Poll every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1>Hello World (Client Side)</h1>
            {users.map((i: any) => (
                <div key={i.id}>
                    <p>{i.name}</p>
                    <p>{i.fullname}</p>
                    <p>{i.job}</p>
                </div>
            ))}
        </>
    );
}
