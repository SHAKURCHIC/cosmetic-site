// services.js
import service1 from "./assets/service1.png";
import service2 from "./assets/aparatcosmetic.png";
import boteno from "./assets/botexLips.jpg";
import hipergidroz from "./assets/hipergidroz.png";
import ecsosomal from "./assets/ecsosomal.png";
import kologenothero from "./assets/kologenotherapy.jpg";
import lipolitica from "./assets/Lipolitiki.png";
import pilinger from "./assets/piling.png";
import kapelnici from "./assets/kapelnici.png";
import natyazkista from "./assets/Natyazki.png";
import uhod from "./assets/uhod.png";

export const services = [
    {
        id: "contour",
        title: "Контурная пластика",
        description: [
            "Моделирование овала лица",
            "Увеличение губ и скул",
            "Коррекция морщин",
            "Восстановление объема мягких тканей"
        ],
        image: service1,
    },
    {
        id: "hardware",
        title: "Косметология аппаратная",
        description: [
            "Ультраформер МРТ",
            "Эндосфера-терапия",
            "Inmode",
            "Jet Peel"
        ],
        image: service2,
    },
    {
        id: "botox",
        title: "Ботулинотерапия",
        description: ["Коррекция мимических морщин (ботокс/диспорт/ксеомин)."],
        image: boteno,
    },
    {
        id: "hyperhidrosis",
        title: "Гипергидроз",
        description: ["Лечение чрезмерной потливости (ботулинотерапия)."],
        image: hipergidroz,
    },
    {
        id: "exosomes",
        title: "Эксосомальная терапия",
        description: ["Продвинутая регенерация и омоложение кожи."],
        image: ecsosomal,
    },
    {
        id: "collagen",
        title: "Кологенотерапия",
        description: ["Укрепление и восстановление структуры кожи."],
        image: kologenothero,
    },
    {
        id: "lipolytics",
        title: "Липолитики",
        description: ["Удаление локальных жировых отложений без операции."],
        image: lipolitica,
    },
    {
        id: "peelings",
        title: "Пилинги",
        description: ["Омолаживающие, очищающие и отбеливающие процедуры."],
        image: pilinger,
    },
    {
        id: "ivdrips",
        title: "Капельницы",
        description: ["Детокс, витамины, восстановление, антистресс."],
        image: kapelnici,
    },
    {
        id: "threads",
        title: "Омоложение нитями",
        description: ["Лифтинг лица с помощью современных нитей."],
        image: natyazkista,
    },
    {
        id: "facecare",
        title: "Уход и чистка лица",
        description: ["Глубокая чистка, экспресс-уход, индивидуальные программы."],
        image: uhod,
    },
];
