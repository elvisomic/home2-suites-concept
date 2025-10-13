import { useEffect } from "react";
import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {

    useEffect(() => {
        console.log("Setting document.title to:", title);
        document.title = title;
    }, [title]);

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual"; // prevent browser restoring scroll
        }

        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Tab") {
                e.preventDefault(); // stop Tab from moving focus
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);



return (
    <>
        <Navbar />

        <main className="">
            {children}
        </main>

        <Footer />
    </>
)
}
