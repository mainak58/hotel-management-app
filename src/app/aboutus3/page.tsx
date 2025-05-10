import React from "react";
import { User } from "../../..";

async function page() {
    const body = await fetch(
        "https://67eb83f3aa794fb3222a8348.mockapi.io/user"
    );
    const res: User[] = await body.json();
    return (
        <>
            <h1>Hello World (simple)</h1>
            {res.map((i) => (
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
