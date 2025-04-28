import Navbar from "@/components/Navbar";
import PremiumHotelFooter from "@/components/Footer";
import React from "react";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <Navbar />
            {children}
            <PremiumHotelFooter />
        </main>
    );
}

export default Layout;
