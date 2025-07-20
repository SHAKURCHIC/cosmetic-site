// App.jsx
import React, { useState, useRef, useEffect } from "react";
import logo from "./assets/logo.png";
import HomeSection from "./HomeSection";
import ServicesGrid from "./ServicesGrid";
import PriceListBotuno from "./PriceListBotuno.jsx";
import insta from "./assets/bi--instagram.svg";
import wa from "./assets/bi--whatsapp.svg";

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
            <footer className="w-full max-w-5xl mx-auto mt-20 pt-10 border-t border-[#B69E7B] text-[#181818] flex flex-col md:flex-row justify-between gap-6 text-sm sm:text-base px-4 sm:px-6 text-center md:text-left">
                <div>
                    <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                        <img src={logo} alt="logo" className="h-8 w-8 rounded-full bg-white" />
                        <span className="font-bold text-[#B69E7B] text-lg">TSEKH BEAUTY</span>
                    </div>
                    <div className="mb-2">Бишкек, Аалы Токомбаева улица, 21/3д</div>
                    <div>Ежедневно: 09:00–21:00</div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                    <a
                        href="https://instagram.com/tsekh.kg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#D6B274] text-[#181818] font-semibold transition justify-center md:justify-start"
                    >
                        <img src={insta} alt="insta" className="h-6 w-auto shrink-0" /> @tsekh.kg
                    </a>
                    <a
                        href="http://wa.me/996227999555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#B69E7B] text-[#181818] font-semibold transition justify-center md:justify-start"
                    >
                        <img src={wa} alt="wa" className="h-6 w-auto shrink-0" /> WhatsApp
                    </a>
                </div>
                <div
                    className="w-full md:w-[320px] h-[180px] sm:h-[200px] rounded-2xl overflow-hidden shadow-lg mt-8 md:mt-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.491438283025!2d74.61871011187921!3d42.820231871033606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb5dea402bd99%3A0xecdb6d5b523eca72!2zMjEsIDPQsSDRg9C7LiDQkNCw0LvRiyDQotC-0LrQvtC80LHQsNC10LLQsCwg0JHQuNGI0LrQtdC6LCDQmtGL0YDQs9GL0LfRgdGC0LDQvQ!5e0!3m2!1sru!2spl!4v1752867066728!5m2!1sru!2spl"
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Карта TSEKH BEAUTY"
                    ></iframe>

                </div>
            </footer>

        </div>
    );
}
