import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import React from "react";

type MainLayoutProps = {
    children: React.ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );

};