import React from "react";
import { motion } from "framer-motion";

import video1 from "./assets/video/IMG_3215.MOV";
import video2 from "./assets/video/IMG_3218.MOV";
import video3 from "./assets/video/IMG_4801.mov";
import video4 from "./assets/video/IMG_4845.MOV";
import video5 from "./assets/video/IMG_4846.MOV";

const videos = [
    {
        src: video1,
        alt: "Погружение в атмосферу заботы и релакса в TSEKH BEAUTY",
        description:
            "Ощутите особую заботу в каждом моменте. В TSEKH BEAUTY мы создаём пространство для полного расслабления, чтобы вы могли забыть о суете и посвятить время только себе.",
    },
    {
        src: video2,
        alt: "Ритуал восстановления, уют и профессиональный уход в салоне",
        description:
            "Идеальное сочетание профессионализма и комфорта. Наши специалисты — это команда, которая заботится о вашем настроении и здоровье, чтобы после процедуры вы сияли уверенностью.",
    },
    {
        src: video3,
        alt: "Атмосфера современного спа-ухода и расслабления",
        description:
            "Вдохновляющая атмосфера красоты. Современные технологии и уютный интерьер создают ощущение настоящего спа-ритуала и гарантируют результат с первого визита.",
    },
    {
        src: video4,
        alt: "Момент спокойствия и заботы о себе в TSEKH BEAUTY",
        description:
            "Каждый кадр — как приглашение сделать паузу и позаботиться о себе. Пусть ваша красота раскрывается гармонично и естественно, а каждый визит в TSEKH BEAUTY станет приятным ритуалом.",
    },
    {
        src: video5,
        alt: "Эстетика, мягкий свет и тишина для полного расслабления",
        description:
            "Мягкий свет, изысканная эстетика и абсолютная тишина. Здесь можно остановить время, почувствовать себя особенной и обновлённой.",
    },
];

export default function VideoGallery() {
    return (
        <section className="w-full flex flex-col gap-12 sm:gap-16 my-12 sm:my-24 px-3 sm:px-6">
            {videos.map((vid, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${
                        idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } items-center gap-6 sm:gap-10 max-w-2xl sm:max-w-3xl md:max-w-5xl mx-auto`}
                >
                    {/* Видео */}
                    <div className="w-full md:w-[50%] flex justify-center items-center mb-4 md:mb-0">
                        <video
                            src={vid.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="none"
                            onClick={(e) => {
                                const video = e.currentTarget;
                                video.paused ? video.play() : video.pause();
                            }}
                            className="aspect-[9/16] w-full max-w-[440px] min-h-[220px] max-h-[440px] rounded-2xl shadow-2xl object-cover cursor-pointer"
                        />
                    </div>

                    {/* Текст */}
                    <div
                        className="w-full md:w-[50%] max-w-xl px-2 sm:px-4 text-center md:text-left"
                        tabIndex={0}
                        aria-label={vid.alt}
                    >
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#B69E7B] mb-2 sm:mb-4">
                            {vid.alt}
                        </h3>
                        <p className="text-base sm:text-lg text-[#3B3227] font-medium leading-relaxed">
                            {vid.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
