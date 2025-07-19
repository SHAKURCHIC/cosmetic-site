import React, { useState } from "react";
import video from "./assets/video/main.mp4"

export default function PriceHero() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const redirectUrl =
        "https://n1280394.alteg.io/company/1194471/personal/menu?fbclid=PAZXh0bgNhZW0CMTEAAac6b0iQh7sfMRea6r_MWjMW-bONhbO-zNnFSCLvEEoAMKzqaptVY8jzcSIIvA_aem_oNgH3aj_5wwdi4-_Wqa3HQ&o=";

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (!name.trim()) {
            setError("Введите имя");
            return;
        }
        const onlyNums = phone.replace(/\D/g, "");
        if (onlyNums.length < 10) {
            setError("Введите корректный телефон");
            return;
        }
        window.location.href = redirectUrl;
    };

    return (
        <section className="relative min-h-[430px] sm:min-h-[520px] md:min-h-[680px] flex items-center justify-center bg-black overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={video}
                autoPlay
                loop
                muted
                playsInline
            ></video>

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 md:px-6 pt-16 md:pt-32 pb-8 md:pb-12 gap-8 md:gap-10">
                <div className="flex-1 flex flex-col justify-center items-start text-white max-w-full md:max-w-xl text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-5 sm:mb-6 leading-tight drop-shadow-lg">
                        Услуги и прайсы TSEKH BEAUTY
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-medium mb-6 sm:mb-8 drop-shadow-lg">
                        Ознакомьтесь с нашими процедурами, выберите нужное направление и запишитесь онлайн.
                        Мы используем сертифицированные препараты и индивидуальный подход
                        — для вашего идеального выражения лица и уверенности.
                    </p>
                </div>

                <div className="w-full max-w-xs sm:max-w-sm flex-shrink-0 mt-8 md:mt-0 md:ml-10">
                    <div className="bg-[#f5f3ef]/90 rounded-2xl shadow-xl px-3 sm:px-5 py-6 sm:py-8 border border-[#b6a287]">
                        <h3 className="text-[#181818] text-lg sm:text-xl font-bold mb-2">Запись на процедуру</h3>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
                            <input
                                type="text"
                                placeholder="Имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full py-3 px-4 border-b border-[#b6a287] bg-transparent outline-none text-[#181818] placeholder-[#b6a287] focus:border-[#8c7a5d] transition"
                                required
                            />
                            <input
                                type="tel"
                                inputMode="tel"
                                autoComplete="tel"
                                placeholder="+996 (___) ___-___"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full py-3 px-4 border-b border-[#b6a287] bg-transparent outline-none text-[#181818] placeholder-[#b6a287] focus:border-[#8c7a5d] transition"
                                required
                            />
                            <div className="text-red-500 text-sm min-h-[20px]">{error}</div>
                            <button
                                type="submit"
                                className="mt-2 w-full bg-[#b6a287] hover:bg-[#a7936b] text-white font-bold py-3 rounded-xl text-center transition shadow-lg"
                                style={{ letterSpacing: "1px" }}
                            >
                                Записаться
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
