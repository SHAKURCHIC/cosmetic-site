import wa from "./assets/bi--whatsapp.svg";

export default function CallToActionSoft() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 bg-[#f8f5f2]">
            <div className="w-full max-w-screen-md text-center">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#B69E7B] mb-4">
                    Здесь всегда рады вам
                </h2>
                <div className="space-y-4 text-base sm:text-lg md:text-xl text-[#3B3227] mb-8 leading-relaxed">
                    <p>Иногда лучшая забота — это позволить себе время только для себя.</p>
                    <p>
                        В уютной атмосфере <b>TSEKH BEAUTY</b> мы с радостью позаботимся о вашем комфорте, красоте и спокойствии.
                    </p>
                    <p>Не спешите — просто прислушайтесь к себе, а если захотите узнать больше, мы всегда на связи.</p>
                </div>
                <a
                    href="http://wa.me/996227999555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-wrap items-center justify-center gap-3 min-w-[220px] px-6 sm:px-7 py-3 rounded-full bg-[#EDE2CF] hover:bg-[#b6a287] text-[#181818] shadow-xl font-semibold text-base sm:text-lg transition-all duration-200 border border-[#B69E7B]"
                    style={{ letterSpacing: "1px" }}
                >
                    <img src={wa} alt="WhatsApp" className="h-6 w-auto shrink-0" />
                    Написать в WhatsApp
                </a>
            </div>
        </section>
    );
}
