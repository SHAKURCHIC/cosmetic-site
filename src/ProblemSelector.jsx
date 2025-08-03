// ProblemSelector.jsx
import React, { useState } from "react";
import { serviceNames } from "./servicesMap"; // Импорт отображаемых названий услуг

const problemsData = {
    face: [
        {
            id: "wrinkles",
            title: "Морщины",
            services: ["botox", "contour", "collagen", "threads"],
        },
        {
            id: "dry",
            title: "Сухость кожи",
            services: ["peelings", "facecare"]
        },
        {
            id: "acne",
            title: "Акне и пост-акне",
            services: ["peelings", "facecare", "exosomes"]
        },
        {
            id: "sensitivity",
            title: "Чувствительность кожи",
            services: ["facecare"]
        }
    ],
    body: [
        {
            id: "cellulite",
            title: "Целлюлит",
            services: ["lipolytics", "hardware"]
        },
        {
            id: "fat",
            title: "Локальные жировые отложения",
            services: ["lipolytics", "hardware"]
        }
    ],
    hair: [
        {
            id: "hair_loss",
            title: "Выпадение волос",
            services: ["exosomes", "collagen"]
        },
        {
            id: "dull",
            title: "Тусклость волос",
            services: ["ivdrips", "collagen"]
        }
    ],
    gynecology: [
        {
            id: "intimate_rejuvenation",
            title: "Интимное омоложение",
            services: ["exosomes", "collagen", "threads"]
        },
        {
            id: "dryness_discomfort",
            title: "Сухость и дискомфорт",
            services: ["exosomes", "collagen"]
        },
        {
            id: "recovery_after_childbirth",
            title: "Восстановление после родов",
            services: ["exosomes", "collagen", "ivdrips"]
        }
    ],
};

const categories = [
    { key: "face", label: "Лицо" },
    { key: "body", label: "Тело" },
    { key: "hair", label: "Волосы" },
    { key: "gynecology", label: "Гинекология" },

];

const ProblemSelector = ({ onProblemSelect }) => {
    const [selectedCategory, setSelectedCategory] = useState("face");

    return (
        <section className="max-w-6xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
                Выберите свою проблему — мы подскажем решение
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setSelectedCategory(key)}
                        className={`px-5 py-2 rounded-full border transition-all duration-200 text-sm font-semibold 
              ${
                            selectedCategory === key
                                ? "bg-[#f3e8d2] border-[#b69e7b]"
                                : "bg-white border-gray-300 hover:bg-[#f3e8d2]"
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {problemsData[selectedCategory].map((problem) => (
                    <div
                        key={problem.id}
                        onClick={() => onProblemSelect(problem)}
                        className="border rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all bg-white"
                    >
                        <h4 className="text-lg font-semibold mb-2">{problem.title}</h4>
                        <p className="text-sm text-gray-500">
                            Подходит: {problem.services.map((s) => `«${serviceNames[s] || s}»`).join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProblemSelector;
