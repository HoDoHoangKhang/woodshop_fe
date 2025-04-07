import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useEffect, useState } from "react";

const MainLayout = ({ children }) => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        // Đo chiều cao của header để thiết lập padding-top cho main
        const header = document.querySelector("header");
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }

        // Update header height on resize
        const handleResize = () => {
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main
                className="flex-grow"
                style={{ paddingTop: `${headerHeight}px` }}
            >
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
