import React from "react";
import { User } from "../../..";

async function page() {
    const response = await fetch(
        "https://67eb83f3aa794fb3222a8348.mockapi.io/user"
    );
    const users: User[] = await response.json();
    return (
        <>
            <h1>Hello World (simple)</h1>
            {users.map((i) => (
                <div key={i.id}>
                    <p>{i.name}</p>
                    <p>{i.fullname}</p>
                    <p>{i.job}</p>
                </div>
            ))}
        </>
    );
}

export default page;
