import React, { useState, useRef, useEffect } from "react";
import logo from "./assets/logo.png";
import HomeSection from "./HomeSection";
import ServicesGrid from "./ServicesGrid";

const menuItems = [
    { id: "home", label: "Главная" },
    { id: "about", label: "О нас" },
    {
        id: "services",
        label: "Услуги",
        sub: [
            { id: "botulinotherapy", label: "Ботулинотерапия" },
            { id: "hyperhidrosis", label: "Гипергидроз" },
            { id: "contour", label: "Контурная пластика" },
            { id: "hardware", label: "Аппаратная косметология" },
            { id: "exosome", label: "Эксосомальная терапия" },
            { id: "collagen", label: "Кологенотерапия" },
            { id: "lipolytics", label: "Липолитики" },
            { id: "peelings", label: "Пилинги" },
            { id: "drip", label: "Капельница" },
            { id: "threads", label: "Омоложение нитями" },
            { id: "care", label: "Уход и чистка лица" },
        ],
    },
    { id: "price", label: "Прайс" },
    { id: "contacts", label: "Контакты" },
];

const pageContent = {
    home: null,
    services: null,
    about: (
        <div className="w-full h-full flex flex-col items-center justify-center text-[#181818]">
            <h1 className="text-4xl font-bold mb-6 text-center text-[#B69E7B]">Обо мне</h1>
            <p className="text-xl text-center max-w-2xl">
                Меня зовут Анна, я дипломированный косметолог с 5+ лет стажа...
            </p>
        </div>
    ),
    // остальные вкладки...
};

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("home");
    const menuRef = useRef(null);

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
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    const handleMenuClick = (id) => {
        setCurrentPage(id);
        setMenuOpen(false);
        setServicesOpen(false);
        // Прокрутка к footer для "Контакты"
        if (id === "contacts") {
            setTimeout(() => {
                const footer = document.querySelector("footer");
                if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                }
            }, 200);
            setCurrentPage("home"); // всегда на главной
        }
        if (id === "about") {
            setTimeout(() => {
                const gallery = document.getElementById("about-gallery");
                if (gallery) {
                    gallery.scrollIntoView({ behavior: "smooth" });
                }
            }, 300);
            setCurrentPage("home"); // всегда на главной, чтобы HomeSection был
        }
    };

    // Подключаем страницы
    pageContent.home = <HomeSection onServiceClick={handleMenuClick} />;
    pageContent.services = <ServicesGrid onServiceClick={handleMenuClick} />;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full" style={{ background: "#F8F5F2" }}>
            {/* Header */}
            <header className="w-full flex items-center justify-between px-6 md:px-12 py-8 bg-[#EDE2CF] bg-opacity-80 shadow-md text-[#181818] fixed top-0 left-0 z-20 backdrop-blur border-b border-[#B69E7B]">
                {/* Логотип слева */}
                <div className="text-3xl md:text-4xl font-bold text-[#B69E7B] tracking-tight select-none">
                    <img src={logo} alt="Логотип" className="h-10 md:h-12" />
                </div>

                {/* Блок справа: Главная + бургер-меню */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => {
                            setCurrentPage("home");
                            setMenuOpen(false);
                            setServicesOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-lg font-bold text-[#B69E7B] hover:text-[#181818] rounded-xl px-6 py-2 bg-[#FFF] border border-[#B69E7B] shadow transition-all mr-1"
                        style={{ minWidth: 110 }}
                    >
                        Главная
                    </button>
                    {/* Burger button */}
                    <div className="relative">
                        <button
                            className="flex flex-col justify-center items-center w-12 h-12 bg-[#B69E7B] rounded-full shadow transition hover:bg-[#D6B274]"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label="Открыть меню"
                        >
                            <span className="block h-1 w-8 bg-[#FFF] mb-1 rounded"></span>
                            <span className="block h-1 w-8 bg-[#FFF] mb-1 rounded"></span>
                            <span className="block h-1 w-8 bg-[#FFF] rounded"></span>
                        </button>
                        {menuOpen && (
                            <div
                                ref={menuRef}
                                className="absolute right-0 mt-3 w-64 bg-[#EDE2CF] border border-[#B69E7B] rounded-xl shadow-2xl py-3 z-50"
                            >
                                {menuItems.map((item) =>
                                    item.sub ? (
                                        <div key={item.id} className="mb-1">
                                            <button
                                                onClick={() => setServicesOpen((open) => !open)}
                                                className="text-lg px-6 py-3 w-full text-left text-[#B69E7B] hover:bg-[#F8F5F2] rounded flex justify-between items-center"
                                            >
                                                {item.label}
                                                <span className="ml-2">{servicesOpen ? "▲" : "▼"}</span>
                                            </button>
                                            {servicesOpen && (
                                                <div className="pl-4">
                                                    {item.sub.map((subItem) => (
                                                        <button
                                                            key={subItem.id}
                                                            onClick={() => handleMenuClick(subItem.id)}
                                                            className="block text-base px-6 py-2 text-left text-[#B69E7B] hover:bg-[#F8F5F2] rounded"
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
                                            className={`text-lg px-6 py-3 w-full text-left rounded transition ${
                                                currentPage === item.id
                                                    ? "bg-[#B69E7B] text-white font-semibold"
                                                    : "text-[#B69E7B] hover:bg-[#F8F5F2]"
                                            }`}
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

            {/* Main Content */}
            <main
                className="flex-1 pt-[104px] pb-8 flex flex-col"
                style={{ minHeight: "calc(100vh - 104px)" }}
            >
                <section className="w-full h-full flex-1 flex items-center justify-center">
                    <div className="w-full h-full px-0 md:px-8">{pageContent[currentPage]}</div>
                </section>
            </main>
        </div>
    );
}
