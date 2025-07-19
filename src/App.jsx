// App.jsx
import React, { useState, useRef, useEffect } from "react";
import logo from "./assets/logo.png";
import HomeSection from "./HomeSection";
import ServicesGrid from "./ServicesGrid";
import PriceListBotuno from "./PriceListBotuno.jsx";

const menuItems = [
    { id: "home", label: "Главная" },
    { id: "about", label: "О нас" },
    {
        id: "services",
        label: "Услуги",
        sub: [
            { id: "botox", label: "Ботулинотерапия" },
            { id: "hyperhidrosis", label: "Гипергидроз" },
            { id: "contour", label: "Контурная пластика" },
            { id: "hardware", label: "Аппаратная косметология" },
            { id: "exosomes", label: "Эксосомальная терапия" },
            { id: "collagen", label: "Коллагенотерапия" },
            { id: "lipolytics", label: "Липолитики" },
            { id: "peelings", label: "Пилинги" },
            { id: "ivdrips", label: "Капельница" },
            { id: "threads", label: "Омоложение нитями" },
            { id: "facecare", label: "Уход и чистка лица" },
        ],
    },
    { id: "price", label: "Прайс" },
    { id: "contacts", label: "Контакты" },
];

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("home");
    const [scrollToId, setScrollToId] = useState(null);
    const menuRef = useRef(null);

    const pageContent = {
        home: <HomeSection onServiceClick={handleMenuClick} />,
        services: <ServicesGrid onServiceClick={handleMenuClick} />,
        about: (
            <div className="w-full h-full flex flex-col items-center justify-center text-[#181818]">
                <h1 className="text-4xl font-bold mb-6 text-center text-[#B69E7B]">Обо мне</h1>
                <p className="text-xl text-center max-w-2xl">Меня зовут Анна, я дипломированный косметолог...</p>
            </div>
        ),
        price: <PriceListBotuno />,
    };

    function handleMenuClick(id, scrollTarget = null) {
        setCurrentPage(id);
        setMenuOpen(false);
        setServicesOpen(false);

        if (scrollTarget) {
            setScrollToId(scrollTarget);
        }

        if (id === "contacts") {
            setTimeout(() => {
                const footer = document.querySelector("footer");
                if (footer) footer.scrollIntoView({ behavior: "smooth" });
            }, 200);
            setCurrentPage("home");
        }

        if (id === "about") {
            setTimeout(() => {
                const gallery = document.getElementById("about-gallery");
                if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
            }, 300);
            setCurrentPage("home");
        }
    }

    useEffect(() => {
        if (currentPage === "price" && scrollToId) {
            setTimeout(() => {
                const el = document.getElementById(scrollToId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setScrollToId(null);
            }, 300);
        }
    }, [currentPage, scrollToId]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
                setServicesOpen(false);
            }
        }
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    return (
        <div className="min-h-screen flex flex-col w-full bg-[#F8F5F2]">
            <header className="w-full flex items-center justify-between px-3 sm:px-6 md:px-12 py-5 sm:py-8 bg-[#EDE2CF] fixed top-0 z-20">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="h-10" />
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handleMenuClick("home")}
                        className="inline-block px-4 py-2 bg-white border border-[#B69E7B] text-[#B69E7B] rounded-xl shadow"
                    >
                        Главная
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setMenuOpen((open) => !open)}
                            className="w-10 h-10 bg-[#B69E7B] rounded-full flex flex-col items-center justify-center"
                        >
                            <span className="w-6 h-1 bg-white mb-1 rounded"></span>
                            <span className="w-6 h-1 bg-white mb-1 rounded"></span>
                            <span className="w-6 h-1 bg-white rounded"></span>
                        </button>
                        {menuOpen && (
                            <div
                                ref={menuRef}
                                className="absolute right-0 mt-3 w-56 bg-[#EDE2CF] border border-[#B69E7B] rounded-xl shadow-2xl py-3 z-50"
                            >
                                {menuItems.map((item) =>
                                    item.sub ? (
                                        <div key={item.id}>
                                            <button
                                                onClick={() => setServicesOpen(!servicesOpen)}
                                                className="px-6 py-3 w-full text-left text-[#B69E7B] hover:bg-[#F8F5F2]"
                                            >
                                                {item.label}
                                            </button>
                                            {servicesOpen && (
                                                <div className="pl-4">
                                                    {item.sub.map((subItem) => (
                                                        <button
                                                            key={subItem.id}
                                                            onClick={() => handleMenuClick("price", subItem.id)}
                                                            className="block px-6 py-2 w-full text-left text-[#B69E7B] hover:bg-[#F8F5F2]"
                                                        >
                                                            {subItem.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <button
                                            key={item.id}
                                            onClick={() => handleMenuClick(item.id)}
                                            className="px-6 py-3 w-full text-left text-[#B69E7B] hover:bg-[#F8F5F2]"
                                        >
                                            {item.label}
                                        </button>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="flex-1 pt-[90px]">
                {pageContent[currentPage]}
            </main>
        </div>
    );
}
