import React, { useState } from "react";

export default function HeroSection() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    // Замени на свою ссылку
    const redirectUrl = "https://n1280394.alteg.io/company/1194471/personal/menu?fbclid=PAZXh0bgNhZW0CMTEAAac6b0iQh7sfMRea6r_MWjMW-bONhbO-zNnFSCLvEEoAMKzqaptVY8jzcSIIvA_aem_oNgH3aj_5wwdi4-_Wqa3HQ&o=";

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
        // Если все ок — редирект
        window.location.href = redirectUrl;
    };

    return (
        <section className="relative min-h-[480px] md:min-h-[680px] flex items-center justify-center bg-black overflow-hidden">
            {/* Фоновое видео */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="https://www.w3schools.com/howto/rain.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>
            {/* Затемнение */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Контент поверх */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-2 sm:px-6 pt-20 md:pt-32 pb-8 md:pb-10 gap-8 md:gap-10">
                {/* Левый текст */}
                <div className="flex-1 flex flex-col justify-center items-start text-white max-w-xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                        TSEKH BEAUTY<br />
                        Премиальный аппаратный<br />
                        и эстетический уход
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-medium mb-8 drop-shadow-lg">
                        Почувствуйте красоту и заботу.<br />
                        Экспресс-услуги, уют и качество в каждом визите.
                    </p>
                </div>
                {/* Форма справа */}
                <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm mt-8 md:mt-0 md:ml-10">
                    <div className="bg-[#f5f3ef]/90 rounded-2xl shadow-xl px-5 sm:px-7 py-7 border border-[#b6a287]">
                        <h3 className="text-[#181818] text-lg sm:text-xl font-bold mb-2">Записаться онлайн</h3>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
                            <input
                                type="text"
                                placeholder="Имя"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full py-3 px-4 border-b border-[#b6a287] bg-transparent outline-none text-[#181818] placeholder-[#b6a287] focus:border-[#8c7a5d] transition"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="+996 (___) ___-___"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                className="w-full py-3 px-4 border-b border-[#b6a287] bg-transparent outline-none text-[#181818] placeholder-[#b6a287] focus:border-[#8c7a5d] transition"
                                required
                            />
                            {error && <div className="text-red-500 text-sm">{error}</div>}
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
