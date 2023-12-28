import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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