// ServicesGrid.jsx
import React from "react";
import { services } from "./services";

export default function ServicesGrid({ onServiceClick }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto mt-8 px-2 sm:px-4">
            {services.map((card) => (
                <div
                    key={card.id}
                    className="relative overflow-hidden rounded-2xl min-h-[220px] md:min-h-[260px] flex flex-col justify-end shadow-lg cursor-pointer group transition"
                    style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    onClick={() => onServiceClick && onServiceClick(card.id)}
                >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                    <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white drop-shadow">{card.title}</h3>
                        {card.description && (
                            <ul className="mb-4">
                                {card.description.map((line, i) => (
                                    <li key={i} className="text-sm sm:text-base text-white/90">{line}</li>
                                ))}
                            </ul>
                        )}
                        <span className="uppercase font-semibold tracking-wide text-white underline underline-offset-4 hover:text-[#b6a287] mt-auto transition">
                            Подробнее
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
