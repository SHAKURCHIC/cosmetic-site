import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import logo from "./assets/logo.png";
import insta from "./assets/bi--instagram.svg";
import wa from "./assets/bi--whatsapp.svg";
import GallerySlider from "./GallerySlider";
import VideoGallery from "./VideoGallery.jsx";
import CallToActionSoft from "./CallToActionSoft.jsx";
import WhyUsSection from "./WhyUsSection.jsx";

export default function HomeSection({ onServiceClick }) {
    return (
        <div className="w-full bg-[#F8F5F2]">
            {/* HERO */}
            <HeroSection />

            {/* Приветственный блок */}
            <section className="w-full flex flex-col items-center justify-center mt-10 sm:mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full max-w-2xl text-center bg-white/70 rounded-3xl p-4 sm:p-8 shadow-xl border border-[#EDE2CF] relative"
                    style={{ backdropFilter: "blur(2px)" }}
                >
                    <img
                        src={logo}
                        alt="Логотип"
                        className="h-16 w-16 rounded-full bg-white shadow-xl mx-auto mb-5 ring-2 ring-[#B69E7B]/30"
                    />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-[#3B3227] tracking-tight leading-snug">
                        Почувствуйте свой<br />идеальный момент
                    </h1>
                    <div className="text-base sm:text-lg md:text-xl mb-4 text-[#B69E7B] font-semibold">
                        Ваша красота начинается с заботы о себе
                    </div>
                    <p className="mb-2 text-[#6b655f] text-base sm:text-lg leading-relaxed">
                        Вдохновитесь на перемены, подарите себе гармонию, уют и особое внимание.
                        <br className="hidden sm:inline" />
                        С нами каждая деталь создана для вашего удовольствия и уверенности.
                        <br className="hidden sm:inline" />
                        <span className="block mt-3 text-[#B69E7B] font-bold">
                            Атмосфера, которую вы запомните.
                        </span>
                    </p>
                    <div className="w-16 h-1 mx-auto my-6 bg-gradient-to-r from-[#B69E7B] via-[#EDE2CF] to-[#B69E7B] rounded-full opacity-70"></div>
                    <div className="text-sm sm:text-base text-[#93816A] mb-6">
                        Просто начните заботиться о себе сегодня — мы позаботимся обо всём остальном.
                    </div>
                    <motion.a
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        href="http://wa.me/996227999555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#B69E7B]/90 hover:bg-[#B69E7B] text-white shadow-xl font-semibold text-base sm:text-lg transition-all duration-200"
                        style={{ letterSpacing: "1px" }}
                    >
                        <img src={wa} alt="wa" className="h-6 w-auto shrink-0" />
                        Бесплатная WhatsApp-консультация
                    </motion.a>
                </motion.div>
            </section>

            {/* Почему выбирают нас */}
            <WhyUsSection />

            {/* Услуги */}
            <h2 className="mt-16 md:mt-24 mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-[#B69E7B] text-center">
                Услуги
            </h2>
            <ServicesGrid onServiceClick={onServiceClick} />

            {/* Галерея */}
            <section id="about-gallery" className="w-full flex flex-col items-center justify-center my-16 sm:my-20">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3227] text-center mb-2 leading-snug">
                    Почувствуйте внутреннюю красоту TSEKH BEAUTY
                </h2>
                <div className="text-base sm:text-lg md:text-xl text-[#A89A89] text-center mb-8 font-medium">
                    Приглашаем Вас посетить нашу уютную студию — посмотрите, как у нас красиво и современно!
                </div>
                <GallerySlider />
            </section>

            {/* Видео */}
            <VideoGallery />

            {/* Call to Action */}
            <CallToActionSoft />
        </div>
    );
}
