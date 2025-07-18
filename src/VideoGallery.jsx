// VideoGallery.jsx
import React from "react";


import video1 from "./assets/video/IMG_3215.MOV";
import video2 from "./assets/video/IMG_3218.MOV";
import video3 from "./assets/video/IMG_4801.mov";
import video4 from "./assets/video/IMG_4845.MOV";
import video5 from "./assets/video/IMG_4846.MOV";
// Кидай свои видео вот так, либо ссылками, либо импортируй как файлы!
const videos = [
    {
        src: video1, // или './assets/videos/0896cc7d-d155-4973-91e4-0d318bcc41ae.MOV'
        alt: "Погружение в атмосферу заботы и релакса в TSEKH BEAUTY\"",
        description: "Ощутите особую заботу в каждом моменте. В TSEKH BEAUTY мы создаём пространство для полного расслабления, чтобы вы могли забыть о суете и посвятить время только себе.",
    },
    {
        src: video2, // или './assets/videos/4182eed2-286f-4310-9871-ecd14e2ca364.MOV'
        alt: "Ритуал восстановления, уют и профессиональный уход в салоне",
        description: "Идеальное сочетание профессионализма и комфорта. Наши специалисты — это команда, которая заботится о вашем настроении и здоровье, чтобы после процедуры вы сияли уверенностью.",
    },
    {
        src: video3, // или './assets/videos/4182eed2-286f-4310-9871-ecd14e2ca364.MOV'
        alt: "Атмосфера современного спа-ухода и расслабления",
        description: "Вдохновляющая атмосфера красоты. Современные технологии и уютный интерьер создают ощущение настоящего спа-ритуала и гарантируют результат с первого визита.",
    },
    {
        src: video4, // или './assets/videos/4182eed2-286f-4310-9871-ecd14e2ca364.MOV'
        alt: "Момент спокойствия и заботы о себе в TSEKH BEAUTY",
        description: "Каждый кадр — как приглашение сделать паузу и позаботиться о себе. Пусть ваша красота раскрывается гармонично и естественно, а каждый визит в TSEKH BEAUTY станет приятным ритуалом.",
    },
    {
        src: video5, // или './assets/videos/4182eed2-286f-4310-9871-ecd14e2ca364.MOV'
        alt: "Эстетика, мягкий свет и тишина для полного расслабления",
        description: "Мягкий свет, изысканная эстетика и абсолютная тишина. Здесь можно остановить время, почувствовать себя особенной и обновлённой.",
    },
];

export default function VideoGallery() {
    return (
        <section className="w-full flex flex-col gap-16 my-24">
            {videos.map((vid, idx) => (
                <div
                    key={idx}
                    className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""} max-w-5xl mx-auto`}
                >
                    <video
                        src={vid.src}
                        autoPlay
                        loop={true}
                        controls={false}
                        muted
                        playsInline
                        className="w-full md:w-2/3 rounded-3xl shadow-2xl"
                        style={{ maxHeight: 420, background: "#ddd" }}
                        poster=""
                    />
                    <div className="flex-1 px-2 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#B69E7B] mb-4">{vid.alt}</h3>
                        <p className="text-lg text-[#3B3227] font-medium">{vid.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}