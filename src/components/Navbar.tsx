"use client";

import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
    useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const { user } = useUser();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
            }`}
        >
            {/* Desktop Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-light tracking-wide">
                        <span className="font-medium">Wander</span>Nest
                    </div>

                    {/* Desktop Menu Items - hidden on mobile */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-8 text-lg">
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

                        {/* Auth Buttons */}
                        <SignedOut>
                            <div className="flex items-center gap-2 lg:gap-4">
                                <SignInButton>
                                    <button className="bg-black text-white px-3 py-1 lg:px-6 lg:py-2 hover:bg-gray-900 transition-colors duration-300 text-sm lg:text-base">
                                        Login
                                    </button>
                                </SignInButton>
                                <SignUpButton>
                                    <button className="border border-black px-3 py-1 lg:px-6 lg:py-2 hover:bg-black hover:text-white transition-all duration-300 text-sm lg:text-base">
                                        Sign Up
                                    </button>
                                </SignUpButton>
                            </div>
                        </SignedOut>
                        <SignedIn>
                            <div className="flex items-center gap-4 lg:gap-8">
                                <button
                                    onClick={() =>
                                        router.push(`booking?id=${user?.id}`)
                                    }
                                    className="hover:text-gray-500 transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
                                >
                                    Bookings
                                </button>
                                <UserButton
                                    appearance={{
                                        elements: {
                                            userButtonAvatarBox:
                                                "border border-black hover:border-gray-700 transition-all duration-300",
                                        },
                                    }}
                                />
                            </div>
                        </SignedIn>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 hover:bg-gray-100 transition-colors duration-300"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <div className="px-4 pt-2 pb-4 space-y-4">
                        <Link
                            href="/"
                            className="block hover:bg-gray-100 px-3 py-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/hotels"
                            className="block hover:bg-gray-100 px-3 py-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Hotels
                        </Link>

                        {/* Mobile Auth Buttons */}
                        <div className="pt-2 border-t border-gray-200">
                            <SignedOut>
                                <div className="flex flex-col gap-2">
                                    <SignInButton>
                                        <button className="w-full bg-black text-white px-4 py-2 hover:bg-gray-900 transition-colors duration-300">
                                            Login
                                        </button>
                                    </SignInButton>
                                    <SignUpButton>
                                        <button className="w-full border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300">
                                            Sign Up
                                        </button>
                                    </SignUpButton>
                                </div>
                            </SignedOut>
                            <SignedIn>
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => {
                                            router.push(
                                                `booking?id=${user?.id}`
                                            );
                                            setIsMenuOpen(false);
                                        }}
                                        className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                                    >
                                        Bookings
                                    </button>
                                    <div className="flex justify-start py-2">
                                        <UserButton
                                            appearance={{
                                                elements: {
                                                    userButtonAvatarBox:
                                                        "border border-black hover:border-gray-700 transition-all duration-300",
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                            </SignedIn>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
