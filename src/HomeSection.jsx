import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import logo from "./assets/logo.png";
import insta from "./assets/bi--instagram.svg";
import wa from "./assets/bi--whatsapp.svg";
import banner from "./assets/banner.png";
import GallerySlider from "./GallerySlider";
import VideoGallery from "./VideoGallery.jsx";
import CallToActionSoft from "./CallToActionSoft.jsx";
import WhyUsSection from "./WhyUsSection.jsx";

export default function HomeSection({ onServiceClick }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full bg-[#F8F5F2]">
            {/* HERO */}
            <HeroSection />

            {/* Приветственный информационный блок */}
            <section className="w-full flex flex-col items-center justify-center px-4 mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-2xl text-center bg-white/70 rounded-3xl p-8 shadow-xl border border-[#EDE2CF] relative"
                    style={{ backdropFilter: "blur(2px)" }}
                >
                    <img
                        src={logo}
                        alt="Логотип"
                        className="h-16 w-16 rounded-full bg-white shadow-xl mx-auto mb-5 ring-2 ring-[#B69E7B]/30"
                    />
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#3B3227] tracking-tight">
                        Почувствуйте свой<br />идеальный момент
                    </h1>
                    <div className="text-lg md:text-xl mb-4 text-[#B69E7B] font-semibold">
                        Ваша красота начинается с заботы о себе
                    </div>
                    <p className="mb-2 text-[#6b655f] text-lg">
                        Вдохновитесь на перемены, подарите себе гармонию, уют и особое внимание.<br />
                        С нами каждая деталь создана для вашего удовольствия и уверенности.<br />
                        <span className="block mt-3 text-[#B69E7B] font-bold">
                Атмосфера, которую вы запомните.<br />
            </span>
                    </p>
                    <div className="w-16 h-1 mx-auto my-6 bg-gradient-to-r from-[#B69E7B] via-[#EDE2CF] to-[#B69E7B] rounded-full opacity-70"></div>
                    <div className="text-base text-[#93816A] mb-6">
                        Просто начните заботиться о себе сегодня — мы позаботимся обо всём остальном.
                    </div>
                    {/* Красивая кнопка WhatsApp — не навязчивая, но заметная */}
                    <motion.a
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        href="http://wa.me/996227999555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-[#B69E7B]/90 hover:bg-[#B69E7B] text-white shadow-xl font-semibold text-lg transition-all duration-200"
                        style={{ letterSpacing: "1px" }}
                    >
                        <img src={wa} alt="wa" className="h-6" />
                        Бесплатная WhatsApp-консультация
                    </motion.a>
                </motion.div>
            </section>


           <WhyUsSection/>
            {/* Услуги */}
            <h2 className="mt-20 mb-8 text-3xl font-bold text-[#B69E7B] text-center">Услуги</h2>
            <ServicesGrid onServiceClick={onServiceClick} />

            {/* Галерея после карточек */}
            <section id = "about-gallery" className="w-full flex flex-col items-center justify-center my-20 px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B3227] text-center mb-2">
                    Почувствуйте внутреннюю красоту TSEKH BEAUTY
                </h2>
                <div className="text-lg md:text-xl text-[#A89A89] text-center mb-8 font-medium">
                    Приглашаем Вас посетить нашу уютную студию — посмотрите, как у нас красиво и современно!
                </div>
                <GallerySlider />
            </section>
            <VideoGallery/>
            <CallToActionSoft />

            {/* Контакты, соцсети и КАРТА */}
            <footer className="w-full max-w-5xl mx-auto mt-24 pt-10 border-t border-[#B69E7B] text-[#181818] flex flex-col md:flex-row justify-between gap-6 text-base px-2">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <img src={logo} alt="logo" className="h-8 w-8 rounded-full bg-white" />
                        <span className="font-bold text-[#B69E7B] text-lg">TSEKH BEAUTY</span>
                    </div>
                    <div className="mb-2">Бишкек, Аалы Токомбаева улица, 21/3д</div>
                    <div>Ежедневно: 09:00–21:00</div>
                </div>
                <div className="flex flex-col gap-2 min-w-[170px]">
                    <a
                        href="https://instagram.com/tsekh.kg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#D6B274] text-[#181818] font-semibold transition"
                    >
                        <img src={insta} alt="insta" className="h-6" /> @tsekh.kg
                    </a>
                    <a
                        href="http://wa.me/996227999555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#B69E7B] text-[#181818] font-semibold transition"
                    >
                        <img src={wa} alt="wa" className="h-6" /> WhatsApp
                    </a>
                </div>
                {/* Карта Google */}
                <div className="w-full md:w-[320px] h-[200px] rounded-2xl overflow-hidden shadow-lg mt-8 md:mt-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.491438283025!2d74.61871011187921!3d42.820231871033606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb5dea402bd99%3A0xecdb6d5b523eca72!2zMjEsIDPQsSDRg9C7LiDQkNCw0LvRiyDQotC-0LrQvtC80LHQsNC10LLQsCwg0JHQuNGI0LrQtdC6LCDQmtGL0YDQs9GL0LfRgdGC0LDQvQ!5e0!3m2!1sru!2spl!4v1752834529218!5m2!1sru!2spl"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </footer>
        </div>
    );
}
