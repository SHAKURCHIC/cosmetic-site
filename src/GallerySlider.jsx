import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "./assets/inside/784BB72D-69EA-4B6E-901B-E98D02B1D37D.jpg";
import img2 from "./assets/inside/A7B00FBA-78CF-49E3-B113-411B016F81F1.jpg";
import img3 from "./assets/inside/B68558D4-CC92-4B43-8801-DBEBDF7B23A3.jpg";
import img4 from "./assets/inside/IMG_0755.jpg";
import img5 from "./assets/inside/IMG_1978.jpg";
import img7 from "./assets/inside/IMG_6328.jpg";
import img8 from "./assets/inside/IMG_6921.jpg";

const images = [img1, img2, img3, img4, img5, img7, img8];

export default function GallerySlider() {
    return (
        <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto my-8 sm:my-12 md:my-20 px-2 sm:px-4 overflow-hidden transition-all">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-2xl md:rounded-3xl shadow-xl overflow-hidden"
                style={{ background: "#fff" }}
            >
                {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <img
                            src={src}
                            alt={`Слайд ${idx + 1}`}
                            loading="lazy"
                            className="
                                w-full
                                h-[210px] sm:h-[260px] md:h-[370px] lg:h-[420px] xl:h-[500px]
                                max-h-[70vh] min-h-[160px]
                                object-cover object-center
                                rounded-2xl md:rounded-3xl
                                transition-all
                            "
                            draggable="false"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
