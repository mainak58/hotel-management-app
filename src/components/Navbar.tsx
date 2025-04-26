import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <>
            <div className="bg-white text-black flex justify-between items-center px-80 py-4 shadow-sm">
                <div className="text-2xl font-light tracking-wide">
                    <span className="font-medium">Wander</span>Nest
                </div>

                <div className="flex items-center gap-8 text-lg">
                    <Link
                        href="/"
                        className="hover:text-gray-500 transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
                    >
                        Home
                    </Link>
                    <Link
                        href="/hotels"
                        className="hover:text-gray-500 transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
                    >
                        Hotels
                    </Link>
                    <button className="bg-black text-white px-6 py-2 hover:bg-gray-900 transition-colors duration-300">
                        Login
                    </button>
                    <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition-all duration-300">
                        Profile
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
