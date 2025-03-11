'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var filled_la_png_1 = require("../../../../public/filled_la.png");
var filled_ra_png_1 = require("../../../../public/filled_ra.png");
var bigImages = [
    '/strona_d/3gracje.jpg',
    '/strona_d/batszeba.jpg',
    '/strona_d/bezglowy.jpg',
    '/strona_d/ex3.jpg',
    '/strona_d/ex4.jpg',
    '/strona_d/ex5.jpg',
    '/strona_d/ex6.jpg',
    '/strona_d/ex7.jpg',
    '/strona_d/interior.jpg',
    '/strona_d/judyta.jpg',
    '/strona_d/lezaca.jpg',
    '/strona_d/trans1.jpg',
    '/strona_d/trans2.jpg',
    '/strona_d/trans3.jpg',
    '/strona_d/wenus.jpg',
    '/strona_d/zuzanna.jpg',
];
var Duze = function () {
    var _a = react_1.useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var prevImage = function () {
        setCurrentIndex(function (prev) { return (prev === 0 ? bigImages.length - 1 : prev - 1); });
    };
    var nextImage = function () {
        setCurrentIndex(function (prev) { return (prev === bigImages.length - 1 ? 0 : prev + 1); });
    };
    return (React.createElement("div", { className: "h-screen flex flex-col justify-between bg-dark bg-opacity-90 py-6 px-4 sm:px-6" },
        React.createElement("h2", { className: "text-3xl font-bold text-center text-beigeLight mb-6" }, "Galeria Du\u017Cej Formy"),
        React.createElement("nav", { className: "mb-6 flex justify-center gap-4 flex-wrap" },
            React.createElement(link_1["default"], { href: "/galeria/male", className: "text-beigeLight font-semibold rounded-md p-3 bg-darkLight  hover:text-white transition" }, "Ma\u0142e Formy"),
            React.createElement(link_1["default"], { href: "/galeria/exlibrys", className: "text-beigeLight font-semibold rounded-md p-3 bg-darkLight  hover:text-white transition" }, "Exlibrys"),
            React.createElement(link_1["default"], { href: "/galeria/wielkoformatowe", className: "text-beigeLight font-semibold rounded-md p-3 bg-darkLight  hover:text-white transition" }, "Wielkoformatowe")),
        React.createElement("div", { className: "relative w-full flex justify-center items-center" },
            React.createElement("div", { className: "absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block" },
                React.createElement("button", { onClick: prevImage, className: "p-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80 transition" },
                    React.createElement(image_1["default"], { src: filled_la_png_1["default"], alt: "Poprzednie", width: 50, height: 50 }))),
            React.createElement("div", { className: "w-full flex justify-center items-center overflow-x-auto" },
                React.createElement("div", { className: "flex sm:flex-nowrap flex-wrap justify-center items-center sm:gap-4 gap-6" },
                    React.createElement(image_1["default"], { src: bigImages[currentIndex], alt: "Du\u017Ce formy " + (currentIndex + 1), className: "rounded-lg shadow-lg max-w-full sm:max-w-[800px] max-h-[500px] sm:max-h-[600px] object-contain transition-all duration-300 ease-in-out", width: 800, height: 600, quality: 75, priority: true }))),
            React.createElement("div", { className: "absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block" },
                React.createElement("button", { onClick: nextImage, className: "p-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80 transition" },
                    React.createElement(image_1["default"], { src: filled_ra_png_1["default"], alt: "Nast\u0119pne", width: 50, height: 50 })))),
        React.createElement("div", { className: "mt-4 flex justify-center sm:overflow-x-auto sm:whitespace-nowrap gap-2 flex-wrap sm:flex-nowrap" }, bigImages.map(function (src, index) { return (React.createElement("button", { key: index, onClick: function () { return setCurrentIndex(index); }, className: "border-2 rounded-lg overflow-hidden " + (currentIndex === index
                ? 'border-beigeLight'
                : 'border-transparent') + " hover:border-beigeLight transition" },
            React.createElement(image_1["default"], { src: src, alt: "Miniatura " + (index + 1), className: "w-24 h-16 object-cover rounded-lg", width: 100, height: 66, quality: 75 }))); })),
        React.createElement("div", { className: "mt-8 text-center" },
            React.createElement(link_1["default"], { href: "/#galeria", className: "px-6 py-3 bg-beigeLight text-dark font-bold rounded-lg shadow-md hover:bg-opacity-80 transition" }, "Powr\u00F3t do galerii"))));
};
exports["default"] = Duze;
