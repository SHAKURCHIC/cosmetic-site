import React from "react";
import { serviceNames } from "./servicesMap";
import { problemsInfo } from "./problemsInfo";
import CallToActionSoft from "./CallToActionSoft"; // <-- правильный импорт



const ProblemDetail = ({ problem, onBack }) => {
    const info = problemsInfo[problem.id];

    if (!info) {
        return (
            <section className="max-w-6xl mx-auto py-16 px-4 text-center text-red-600">
                <p>Ошибка: не найдена информация по проблеме.</p>
                <button onClick={onBack} className="underline text-[#B69E7B] mt-4">
                    ← Назад
                </button>
            </section>
        );
    }

    const { title, descriptions, images } = info;
    const services = problem.services || [];

    return (
        <section className="max-w-6xl mx-auto py-16 px-4">
            <button
                onClick={onBack}
                className="mb-6 text-[#B69E7B] hover:underline text-sm font-semibold"
            >
                ← Назад к выбору проблемы
            </button>

            <h2 className="text-4xl font-bold mb-8 text-[#3B3227]">{title}</h2>

            {/* Блок с изображениями и описанием */}
            <div className="space-y-12">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={img}
                                alt={`${title} ${index + 1}`}
                                className="rounded-xl shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-[#3B3227] text-base leading-relaxed">
                            {descriptions[index] || descriptions[descriptions.length - 1]}
                        </div>
                    </div>
                ))}
            </div>

            {/* Блок с услугами */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold mb-4 text-[#B69E7B]">
                    Рекомендуемые процедуры
                </h3>
                <div className="flex flex-wrap gap-4">
                    {services.map((s) => (
                        <button
                            key={s}
                            onClick={() => {
                                if (window.handleMenuClick) {
                                    window.handleMenuClick("price", s);
                                }
                            }}
                            className="px-5 py-2 rounded-full border border-[#B69E7B] text-[#B69E7B] bg-white hover:bg-[#f3e8d2] transition"
                        >
                            {serviceNames[s] || s}
                        </button>
                    ))}
                </div>
            </div>


<CallToActionSoft/>
        </section>

    );

};

export default ProblemDetail;
