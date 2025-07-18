// CallToActionSoft.jsx
import wa from "./assets/bi--whatsapp.svg";

export default function CallToActionSoft() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-14 bg-[#f8f5f2]">
            <div className="max-w-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#B69E7B] mb-4">
                    Здесь всегда рады вам
                </h2>
                <p className="text-lg md:text-xl text-[#3B3227] mb-8">
                    Иногда лучшая забота — это позволить себе время только для себя.<br />
                    В уютной атмосфере <b>TSEKH BEAUTY</b> мы с радостью позаботимся о вашем комфорте, красоте и спокойствии.<br />
                    Не спешите — просто прислушайтесь к себе, а если захотите узнать больше, мы всегда на связи.
                </p>
                <a
                    href="http://wa.me/996227999555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-[#EDE2CF] hover:bg-[#b6a287] text-[#181818] shadow-lg font-semibold text-lg transition-all duration-200"
                    style={{ letterSpacing: "1px" }}
                >
                    <img src={wa} alt="WhatsApp" className="h-6" />
                    Написать в WhatsApp
                </a>
            </div>
        </section>
    );
}
