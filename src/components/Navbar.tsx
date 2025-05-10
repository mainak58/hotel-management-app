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
import { Menu, X, Sun, Moon } from "lucide-react";

function Navbar() {
    const { user } = useUser();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved dark mode preference
        const savedDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(savedDarkMode);

        // Apply dark mode class to html element
        if (savedDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("darkMode", newDarkMode.toString());

        if (newDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? darkMode
                        ? "bg-gray-900 shadow-lg shadow-gray-800/20 py-2"
                        : "bg-white shadow-md py-2"
                    : darkMode
                    ? "bg-gray-900 py-4"
                    : "bg-white py-4"
            } ${darkMode ? "text-white" : "text-black"}`}
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
                            className={`hover:text-gray-400 transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-px after:left-0 after:bottom-0 after:transition-all hover:after:w-full ${
                                darkMode ? "after:bg-white" : "after:bg-black"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/hotels"
                            className={`hover:text-gray-400 transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-px after:left-0 after:bottom-0 after:transition-all hover:after:w-full ${
                                darkMode ? "after:bg-white" : "after:bg-black"
                            }`}
                        >
                            Hotels
                        </Link>

                        {/* Auth Buttons */}
                        <SignedOut>
                            <div className="flex items-center gap-2 lg:gap-4">
                                <SignInButton>
                                    <button
                                        className={`px-3 py-1 lg:px-6 lg:py-2 transition-colors duration-300 text-sm lg:text-base ${
                                            darkMode
                                                ? "bg-white text-black hover:bg-gray-200"
                                                : "bg-black text-white hover:bg-gray-900"
                                        }`}
                                    >
                                        Login
                                    </button>
                                </SignInButton>
                                <SignUpButton>
                                    <button
                                        className={`px-3 py-1 lg:px-6 lg:py-2 transition-all duration-300 text-sm lg:text-base ${
                                            darkMode
                                                ? "border border-white hover:bg-white hover:text-black"
                                                : "border border-black hover:bg-black hover:text-white"
                                        }`}
                                    >
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
                                    className={`hover:text-gray-400 transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-px after:left-0 after:bottom-0 after:transition-all hover:after:w-full ${
                                        darkMode
                                            ? "after:bg-white"
                                            : "after:bg-black"
                                    }`}
                                >
                                    Bookings
                                </button>
                                <UserButton
                                    appearance={{
                                        elements: {
                                            userButtonAvatarBox: darkMode
                                                ? "border border-white hover:border-gray-300 transition-all duration-300"
                                                : "border border-black hover:border-gray-700 transition-all duration-300",
                                        },
                                    }}
                                />
                            </div>
                        </SignedIn>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="ml-2 p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
                            aria-label={
                                darkMode
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                        >
                            {darkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                    </div>

                    <div className="flex md:hidden items-center">
                        {/* Mobile Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="mr-2 p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
                            aria-label={
                                darkMode
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                        >
                            {darkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md hover:bg-opacity-10 hover:bg-gray-500 transition-colors duration-300 ${
                                darkMode ? "text-white" : "text-black"
                            }`}
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

            {isMenuOpen && (
                <div
                    className={`md:hidden ${
                        darkMode ? "bg-gray-900" : "bg-white"
                    }`}
                >
                    <div className="px-4 pt-2 pb-4 space-y-4">
                        <Link
                            href="/"
                            className={`block px-3 py-2 rounded-md ${
                                darkMode
                                    ? "hover:bg-gray-800"
                                    : "hover:bg-gray-100"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/hotels"
                            className={`block px-3 py-2 rounded-md ${
                                darkMode
                                    ? "hover:bg-gray-800"
                                    : "hover:bg-gray-100"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Hotels
                        </Link>

                        <div
                            className={`pt-2 border-t ${
                                darkMode ? "border-gray-700" : "border-gray-200"
                            }`}
                        >
                            <SignedOut>
                                <div className="flex flex-col gap-2">
                                    <SignInButton>
                                        <button
                                            className={`w-full px-4 py-2 transition-colors duration-300 ${
                                                darkMode
                                                    ? "bg-white text-black hover:bg-gray-200"
                                                    : "bg-black text-white hover:bg-gray-900"
                                            }`}
                                        >
                                            Login
                                        </button>
                                    </SignInButton>
                                    <SignUpButton>
                                        <button
                                            className={`w-full px-4 py-2 transition-all duration-300 ${
                                                darkMode
                                                    ? "border border-white hover:bg-white hover:text-black"
                                                    : "border border-black hover:bg-black hover:text-white"
                                            }`}
                                        >
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
                                        className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ${
                                            darkMode
                                                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
                                                : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
                                        }`}
                                    >
                                        Bookings
                                    </button>
                                    <div className="flex justify-start py-2">
                                        <UserButton
                                            appearance={{
                                                elements: {
                                                    userButtonAvatarBox:
                                                        darkMode
                                                            ? "border border-white hover:border-gray-300 transition-all duration-300"
                                                            : "border border-black hover:border-gray-700 transition-all duration-300",
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
