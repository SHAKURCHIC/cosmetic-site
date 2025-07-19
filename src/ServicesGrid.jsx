import React from "react";
import { services } from "./services";

export default function ServicesGrid({ onServiceClick }) {
    return (
        <div
            className="
                w-full
                max-w-6xl
                mx-auto
                mt-8
                px-3 sm:px-4
                grid
                grid-cols-1
                gap-5
                sm:gap-6
                md:grid-cols-2
                lg:grid-cols-3
            "
        >
            {services.map((card) => (
                <div
                    key={card.id}
                    className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        min-h-[180px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[280px] xl:min-h-[320px]
                        flex flex-col justify-end
                        shadow-lg
                        cursor-pointer
                        group
                        transition-all
                        hover:scale-[1.025]
                        active:scale-[0.98]
                    "
                    style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    onClick={() => onServiceClick && onServiceClick("price", card.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Подробнее об услуге ${card.title}`}
                >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all"></div>
                    <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full">
                        <h3 className="text-lg sm:text-2xl font-bold mb-2 text-white drop-shadow">
                            {card.title}
                        </h3>
                        {card.description && (
                            <ul className="mb-3 sm:mb-4 max-h-[120px] overflow-y-auto pr-1">
                                {card.description.map((line, i) => (
                                    <li
                                        key={i}
                                        className="text-xs sm:text-base text-white/90 leading-snug"
                                    >
                                        {line}
                                    </li>
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
