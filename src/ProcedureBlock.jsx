import React, { useState, useRef } from "react";

export default function ProcedureBlock({
                                           id,
                                           title,
                                           description,
                                           indications = [],
                                           services = [],
                                           gallery = [],
                                           conclusion,
                                           videoBlocks = [],
                                       }) {
    return (
        <section id={id} className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 space-y-16">

            {/* Заголовок + описание */}
            <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#B69E7B]">{title}</h2>
                {description && (
                    <p className="text-base sm:text-lg text-[#3B3227] leading-relaxed">{description}</p>
                )}
            </div>

            {/* Показания */}
            {indications.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold text-[#B69E7B] mb-2">Показания</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#181818] text-sm sm:text-base">
                        {indications.map((item, index) => (
                            <li key={index}>• {item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Видеоблоки */}
            {videoBlocks.length > 0 && (
                <div className="space-y-16">
                    {videoBlocks.map((block, idx) => {
                        const reverse = idx % 2 === 1;
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6`}
                            >
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <video
                                        src={block.src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="aspect-square w-full max-w-[280px] rounded-xl shadow-xl object-cover"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h4 className="text-lg sm:text-xl font-semibold text-[#B69E7B] mb-2">{block.title}</h4>
                                    <p className="text-sm sm:text-base text-[#3B3227] leading-relaxed">{block.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Услуги */}
            {services.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold text-[#B69E7B] mb-4">Услуги и цены</h3>
                    <div className="space-y-4">
                        {services.map((srv, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#EDE2CF] rounded-xl shadow p-4 sm:p-6"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm sm:text-base text-[#181818] font-medium">{srv.name}</span>
                                    <span className="text-[#B69E7B] font-semibold text-sm sm:text-base">{srv.price}</span>
                                </div>
                                {srv.description && (
                                    <p className="text-sm text-[#3B3227] leading-snug">{srv.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Галерея до/после */}
            {gallery.length === 1 && gallery[0].before && gallery[0].after && (
                <div>
                    <h3 className="text-xl font-semibold text-[#B69E7B] mb-4">Результат процедуры</h3>
                    <BeforeAfterSlider before={gallery[0].before} after={gallery[0].after} />
                </div>
            )}

            {/* Завершение */}
            {conclusion && (
                <div className="text-[#3B3227] text-sm sm:text-base leading-relaxed border-t pt-6 border-[#EDE2CF]">
                    {conclusion}
                </div>
            )}
        </section>
    );
}

// ⬅️ Добавляем before/after слайдер
function BeforeAfterSlider({ before, after }) {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (e) => {
        const bounds = containerRef.current.getBoundingClientRect();
        const pos = ((e.clientX - bounds.left) / bounds.width) * 100;
        setSliderPos(Math.max(0, Math.min(100, pos)));
    };

    const handleTouchMove = (e) => {
        if (!e.touches.length) return;
        const bounds = containerRef.current.getBoundingClientRect();
        const pos = ((e.touches[0].clientX - bounds.left) / bounds.width) * 100;
        setSliderPos(Math.max(0, Math.min(100, pos)));
    };

    // Градиентная маска (переводим % в px внутри CSS)
    const maskStyle = {
        WebkitMaskImage: `linear-gradient(to right, transparent ${sliderPos - 5}%, black ${sliderPos}%)`,
        maskImage: `linear-gradient(to right, transparent ${sliderPos - 5}%, black ${sliderPos}%)`,
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-video overflow-hidden rounded-xl shadow-xl cursor-ew-resize select-none"
        >
            {/* BEFORE подложка */}
            <img
                src={before}
                alt="до"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* AFTER с градиентной маской */}
            <img
                src={after}
                alt="после"
                className="absolute inset-0 w-full h-full object-cover z-10"
                style={maskStyle}
            />

            {/* Ползунок */}
            <div
                className="absolute top-0 bottom-0 z-20"
                style={{ left: `${sliderPos}%` }}
            >
                <div className="w-1 h-full bg-white opacity-90" />
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs bg-white text-[#B69E7B] px-2 py-1 rounded shadow">
                    ⬌
                </div>
            </div>
        </div>
    );
}
