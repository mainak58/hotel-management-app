import React from "react";

function page() {
    return (
        <>
            <nav className=" p-2 flex justify-between bg-red-300">
                <div>NavBar</div>
                <div className="w-[400px] p-1 hidden lg:flex justify-evenly items-center">
                    <p>Profile</p>
                    <p>Section</p>
                    <p>Contact Us</p>
                    <p>About Us</p>
                </div>
            </nav>

            <section className="p-10 bg-pink-300 flex flex-col justify-center items-center gap-2 md:flex-row lg:flex-row ">
                <div className="w-[400px] h-[300px] bg-green-300">1</div>
                <div className="w-[400px] h-[300px] bg-green-600">2</div>
                <div className="w-[400px] h-[300px] bg-green-800">3</div>
            </section>
        </>
    );
}

export default page;
