// WhyUsSection.jsx
import { motion } from "framer-motion";

import videoBg from "./assets/video/main.mp4"; // твой путь к видео

export default function WhyUsSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-20 px-2 bg-[#F8F5F2]">
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-10">
                {/* Почему выбирают нас? */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="rounded-3xl shadow-2xl bg-[#fff8e6dd] flex flex-col justify-center items-center text-center p-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#B69E7B]">
                        Почему выбирают нас?
                    </h2>
                    <ul className="space-y-4 text-lg text-[#181818] max-w-2xl mx-auto">
                        <li>
                            <span className="font-bold text-[#B69E7B]">Опытные специалисты</span> — все мастера с медицинским образованием и стажем.
                        </li>
                        <li>
                            <span className="font-bold text-[#B69E7B]">Современное оборудование</span> — сертифицированные препараты и техники.
                        </li>
                        <li>
                            <span className="font-bold text-[#B69E7B]">Комфорт и забота</span> — уютная атмосфера, индивидуальный подход и анонимность.
                        </li>
                    </ul>
                </motion.div>

                {/* Вторая строка: Видео + Что вы получите */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Видео блок */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-3xl shadow-2xl overflow-hidden bg-white flex flex-col justify-center items-center"
                        style={{ minHeight: 540 }} // увеличь по вкусу
                    >
                        <div className="w-full flex justify-center items-center py-8 px-4">
                            <video
                                src={videoBg}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-[440px] w-auto max-w-[300px] rounded-2xl object-cover bg-[#eee] shadow"
                                style={{ aspectRatio: "9/16" }}
                            />
                        </div>
                        <div className="p-4 pb-2 text-center">
        <span className="text-[#B69E7B] font-semibold text-lg">
            Ваш комфорт — наш главный приоритет
        </span>
                        </div>
                    </motion.div>

                    {/* Что вы получите */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-3xl shadow-2xl bg-[#fff] flex flex-col justify-center items-center text-center p-7"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-[#B69E7B]">Что вы получите у нас?</h2>
                        <ul className="space-y-3 text-base">
                            <li> Бесплатная консультация врача-косметолога</li>
                            <li> Видимый результат с первой процедуры</li>
                            <li> Индивидуальный подбор программ и средств</li>
                            <li> Гарантию стерильности и качества</li>
                            <li> Приятные бонусы и акции</li>
                            <li> Абсолютный комфорт в уютной атмосфере</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
