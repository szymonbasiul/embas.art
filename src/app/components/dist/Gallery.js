"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var galleryLinks = [
    {
        title: 'Małe formy',
        path: '/galeria/male',
        imageSrc: '/strona_m/samson.jpg',
        width: 400,
        height: 250
    },
    {
        title: 'Duże formy',
        path: '/galeria/duze',
        imageSrc: '/strona_d/batszeba.jpg',
        width: 400,
        height: 250
    },
    {
        title: 'Exlibrys',
        path: '/galeria/exlibrys',
        imageSrc: '/strona_ex/t_mse.jpg',
        width: 400,
        height: 250
    },
    {
        title: 'Wielkoformatowe',
        path: '/galeria/wielkoformatowe',
        imageSrc: '/strona_w/mb_wenus.jpg',
        width: 400,
        height: 250
    },
];
var Gallery = function () {
    return (React.createElement("section", { id: "galeria", className: "bg-dark text-beigeLight py-16" },
        React.createElement("div", { className: "max-w-7xl mx-auto p-6 bg-dark bg-opacity-90" },
            React.createElement("h2", { className: "text-3xl font-bold text-center text-beigeLight mb-6" }, "Galeria"),
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8" }, galleryLinks.map(function (link, index) { return (React.createElement("div", { key: index, className: "gallery-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl group" },
                React.createElement(link_1["default"], { href: link.path },
                    React.createElement("div", { className: "relative block h-full" },
                        React.createElement(image_1["default"], { src: link.imageSrc, alt: link.title, className: "w-full h-64 object-cover object-center sm:h-80 md:h-96", width: link.width, height: link.height }),
                        React.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" },
                            React.createElement("span", { className: "text-xl font-bold text-beigeLight uppercase tracking-widest" }, "Zobacz")),
                        React.createElement("div", { className: "p-4" },
                            React.createElement("h3", { className: "text-xl font-semibold text-dark text-center z-20" }, link.title)))))); })))));
};
exports["default"] = Gallery;
