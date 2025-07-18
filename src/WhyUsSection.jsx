import { motion } from "framer-motion";
import videoBg from "./assets/video/main.mp4";

export default function WhyUsSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-8 sm:py-14 px-3 sm:px-4 bg-[#F8F5F2]">
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 sm:gap-12">
                {/* Почему выбирают нас */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="rounded-2xl sm:rounded-3xl shadow-xl bg-[#fff8e6dd] flex flex-col justify-center items-center text-center px-3 py-7 sm:p-10 w-full"
                >
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#B69E7B]">
                        Почему выбирают нас?
                    </h2>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#181818] max-w-xl mx-auto">
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

                {/* Видео + Что вы получите */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {/* Видео блок */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden bg-white flex flex-col justify-center items-center w-full"
                    >
                        <div className="w-full flex justify-center items-center py-5 sm:py-8 px-2 sm:px-4">
                            <video
                                src={videoBg}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="aspect-[9/16] w-full max-w-[420px] min-h-[220px] max-h-[440px] rounded-xl object-cover shadow bg-[#ecebe7]"
                            />
                        </div>
                        <div className="p-2 sm:p-4 text-center">
                            <span className="text-[#B69E7B] font-semibold text-sm sm:text-base">
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
                        className="rounded-2xl sm:rounded-3xl shadow-xl bg-[#fff] flex flex-col justify-center items-center text-center px-3 py-6 sm:p-7 w-full"
                    >
                        <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B69E7B]">
                            Что вы получите у нас?
                        </h2>
                        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#181818]">
                            <li>️Бесплатная консультация врача-косметолога</li>
                            <li>Видимый результат с первой процедуры</li>
                            <li>Индивидуальный подбор программ и средств</li>
                            <li>Гарантию стерильности и качества</li>
                            <li>Приятные бонусы и акции</li>
                            <li>Абсолютный комфорт в уютной атмосфере</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
