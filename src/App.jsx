import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
import insta from "./assets/bi--instagram.svg";
import wa from "./assets/bi--whatsapp.svg";
import service1 from "./assets/service1.png";
import service2 from "./assets/aparatcosmetic.png";

const menuItems = [
    { id: "home", label: "Главная" },
    { id: "about", label: "Обо мне" },
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

const services = [
    {
        id: "contour",
        title: "Контурная пластика",
        img: service1,
        text: "Безоперационное моделирование скул, губ, подбородка, гармонизация черт лица.",
    },
    {
        id: "hardware",
        title: "Аппаратная косметология",
        img: service2,
        text: "RF-лифтинг, ультразвуковая чистка, пилинги, массаж, экспресс-уходы.",
    },
    {
        id: "botulinotherapy",
        title: "Ботулинотерапия",
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
        text: "Коррекция мимических морщин (ботокс/диспорт/ксеомин).",
    },
    {
        id: "hyperhidrosis",
        title: "Гипергидроз",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        text: "Лечение чрезмерной потливости (ботулинотерапия).",
    },
    {
        id: "exosome",
        title: "Эксосомальная терапия",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        text: "Продвинутая регенерация и омоложение кожи.",
    },
    {
        id: "collagen",
        title: "Кологенотерапия",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        text: "Укрепление и восстановление структуры кожи.",
    },
    {
        id: "lipolytics",
        title: "Липолитики",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        text: "Удаление локальных жировых отложений без операции.",
    },
    {
        id: "peelings",
        title: "Пилинги",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        text: "Омолаживающие, очищающие и отбеливающие процедуры.",
    },
    {
        id: "drip",
        title: "Капельницы",
        img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80",
        text: "Детокс, витамины, восстановление, антистресс.",
    },
    {
        id: "threads",
        title: "Омоложение нитями",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        text: "Лифтинг лица с помощью современных нитей.",
    },
    {
        id: "care",
        title: "Уход и чистка лица",
        img: "https://images.unsplash.com/photo-1517363898873-fafc2070293c?auto=format&fit=crop&w=400&q=80",
        text: "Глубокая чистка, экспресс-уход, индивидуальные программы.",
    },
];

// Главная секция — все тексты теперь чёрные!
function HomeSection({ onServiceClick }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full" style={{ backgroundColor: "#f6e9d7" }}>
            {/* HERO */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center justify-center mt-16 gap-10"
            >
                <img src={logo} alt="Tsekh" className="h-24 w-24 rounded-full bg-white shadow-xl" />
                <div className="text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow text-[#243665]">TSEKH BEAUTY</h1>
                    <div className="text-[#2c3e74] font-semibold text-2xl mb-2">Премиальная косметология в Бишкеке</div>
                    <div className="text-black mb-5 text-lg">
                        Безопасность, индивидуальный подход, самые эффективные процедуры!
                        <br />
                        <span className="block mt-2 text-[#243665]">
              Экспресс-услуги в 4–6 рук за 1,5 часа!
            </span>
                        <span className="block mt-1 text-yellow-700 font-bold">
              Скидки до 20% для новых клиентов
            </span>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href="https://n1280394.alteg.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-[#182040] text-[#243665] font-extrabold rounded-2xl px-10 py-5 shadow-2xl text-2xl transition-all duration-200 border-4 border-[#b69e7b]"
                            style={{ letterSpacing: "1px" }}
                        >
                            Онлайн-запись
                        </a>
                        <a
                            href="http://wa.me/996227999555"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl px-7 py-3 shadow-lg text-lg flex items-center gap-2"
                        >
                            <img src={wa} alt="wa" className="h-6" /> WhatsApp
                        </a>
                    </div>
                </div>
            </motion.div>
            {/* Баннер */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
            >
                <img src={banner} alt="Tsekh Studio" className="w-full h-[320px] object-cover" />
            </motion.div>
            {/* Почему выбирают нас */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-16 w-full max-w-3xl bg-[#e7dbc7] rounded-3xl shadow-xl p-8 text-center text-black"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#243665]">Почему выбирают нас?</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
                    <div>
                        <span className="font-bold text-[#243665]">Опытные специалисты</span><br />
                        Все мастера с медицинским образованием и большим стажем.
                    </div>
                    <div>
                        <span className="font-bold text-[#243665]">Современное оборудование</span><br />
                        Только сертифицированные препараты и передовые техники.
                    </div>
                    <div>
                        <span className="font-bold text-[#243665]">Комфорт и забота</span><br />
                        Атмосфера уюта, индивидуальный подход и анонимность.
                    </div>
                </div>
            </motion.div>
            {/* Что вы получите */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 w-full max-w-3xl bg-[#ede2cf] rounded-3xl shadow-lg p-8 text-center text-black"
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#243665]">Что вы получите у нас?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg">
                    <li>🧑‍⚕️ Бесплатная консультация врача-косметолога</li>
                    <li>🪄 Видимый результат с первой процедуры</li>
                    <li>🧴 Индивидуальный подбор программ и средств</li>
                    <li>💎 Гарантию стерильности и качества</li>
                    <li>🎁 Приятные бонусы и акции</li>
                    <li>🌸 Абсолютный комфорт в уютной атмосфере</li>
                </ul>
            </motion.div>
            {/* Все услуги: кликабельные карточки */}
            <h2 className="mt-20 mb-8 text-3xl font-bold text-[#243665] text-center">Услуги</h2>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
                {services.map((serv, i) => (
                    <motion.div
                        key={serv.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.12 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white/95 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl cursor-pointer transition border border-[#b69e7b]"
                        onClick={() => onServiceClick(serv.id)}
                    >
                        <img src={serv.img} alt={serv.title} className="w-full h-52 object-cover" />
                        <div className="flex-1 p-5 flex flex-col justify-between">
                            <h3 className="text-xl font-bold text-[#243665] mb-2">{serv.title}</h3>
                            <p className="text-black text-base mb-3">{serv.text}</p>
                            <span className="text-[#243665] hover:underline font-semibold mt-auto">Подробнее</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Контакты и призыв */}
            <footer className="w-full max-w-5xl mx-auto mt-24 pt-10 border-t border-[#b69e7b] text-black flex flex-col md:flex-row justify-between gap-6 text-base px-2">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <img src={logo} alt="logo" className="h-8 w-8 rounded-full bg-white" />
                        <span className="font-bold text-[#243665] text-lg">TSEKH BEAUTY</span>
                    </div>
                    <div className="mb-2">Бишкек, ул. Примерная, 12</div>
                    <div>Ежедневно: 09:00–21:00</div>
                </div>
                <div className="flex flex-col gap-2">
                    <a href="https://instagram.com/tsekh.kg" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 hover:text-[#d61c70] text-black font-semibold">
                        <img src={insta} alt="insta" className="h-6" /> @tsekh.kg
                    </a>
                    <a href="http://wa.me/996227999555" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 hover:text-green-700 text-black font-semibold">
                        <img src={wa} alt="wa" className="h-6" /> WhatsApp
                    </a>
                    <a href="https://n1280394.alteg.io" target="_blank" rel="noopener noreferrer"
                       className="hover:text-[#243665] text-black font-semibold">Онлайн-запись</a>
                </div>
            </footer>
        </div>
    );
}

// Остальные вкладки (about, услуги...) — везде text-black!
const pageContent = {
    home: null, // будет ниже
    about: (
        <div className="w-full h-full flex flex-col items-center justify-center text-black">
            <h1 className="text-4xl font-bold mb-6 text-center text-[#243665]">Обо мне</h1>
            <p className="text-xl text-center max-w-2xl">
                Меня зовут Анна, я дипломированный косметолог с 5+ лет стажа...
            </p>
        </div>
    ),
    // аналогично остальные секции — делай text-black и убирай text-slate-...
    // ...
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
    };

    // Вставляем обновлённый HomeSection!
    pageContent.home = <HomeSection onServiceClick={handleMenuClick} />;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full" style={{ backgroundColor: "#f6e9d7" }}>
            {/* Header */}
            <header className="w-full flex items-center justify-between px-6 md:px-12 py-8 bg-[#ede2cf] bg-opacity-80 shadow-md text-black fixed top-0 left-0 z-20 backdrop-blur border-b border-[#b69e7b]">
                <div className="text-3xl md:text-4xl font-bold text-[#243665] tracking-tight select-none">
                    <img src={logo} alt="Логотип" className="h-10 md:h-12" />
                </div>
                {/* Burger button */}
                <div className="relative">
                    <button
                        className="flex flex-col justify-center items-center w-12 h-12 bg-[#b69e7b] rounded-full shadow transition hover:bg-[#243665]"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Открыть меню"
                    >
                        <span className="block h-1 w-8 bg-[#243665] mb-1 rounded"></span>
                        <span className="block h-1 w-8 bg-[#243665] mb-1 rounded"></span>
                        <span className="block h-1 w-8 bg-[#243665] rounded"></span>
                    </button>
                    {menuOpen && (
                        <div
                            ref={menuRef}
                            className="absolute right-0 mt-3 w-64 bg-[#e7dbc7] border border-[#b69e7b] rounded-xl shadow-2xl py-3 z-50"
                        >
                            {menuItems.map((item) =>
                                item.sub ? (
                                    <div key={item.id} className="mb-1">
                                        <button
                                            onClick={() => setServicesOpen((open) => !open)}
                                            className="text-lg px-6 py-3 w-full text-left text-[#243665] hover:bg-[#f3ebdb] rounded flex justify-between items-center"
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
                                                        className="block text-base px-6 py-2 text-left text-[#243665] hover:bg-[#f3ebdb] rounded"
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
                                                ? "bg-[#243665] text-white font-semibold"
                                                : "text-[#243665] hover:bg-[#f3ebdb]"
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                )
                            )}
                        </div>
                    )}
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
