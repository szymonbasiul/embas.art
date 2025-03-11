'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var close_svg_1 = require("../../../public/close.svg");
var burger_menu_svg_1 = require("../../../public/burger-menu.svg");
function Navbar() {
    var sectionIds = ['home', 'biografia', 'galeria', 'kontakt'];
    var _a = react_1.useState(false), scroll = _a[0], setScroll = _a[1];
    var _b = react_1.useState(false), isVisible = _b[0], setIsVisible = _b[1];
    var _c = react_1.useState('home'), activeLink = _c[0], setActiveLink = _c[1];
    // Funkcja do określania aktywnej sekcji na podstawie scrolla
    var determineActiveSection = function () {
        sectionIds.forEach(function (id) {
            var section = document.getElementById(id);
            if (section) {
                var rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActiveLink(id);
                }
            }
        });
    };
    // Funkcja do obsługi scrolla
    react_1.useEffect(function () {
        var handleScroll = function () {
            setScroll(window.scrollY > 100);
            determineActiveSection();
        };
        window.addEventListener('scroll', handleScroll);
        return function () { return window.removeEventListener('scroll', handleScroll); };
    }, []);
    var toggleMenu = function () { return setIsVisible(!isVisible); };
    return (React.createElement("nav", { className: "fixed top-0 w-full h-[110px] flex justify-between items-center px-5 bg-dark text-beigeLight transition-all duration-500 ease-in-out z-30 " + (scroll ? 'bg-opacity-85 shadow-lg' : 'bg-opacity-100') },
        React.createElement("div", { className: "flex items-center" },
            React.createElement(link_1["default"], { href: "#home", className: "flex items-center" },
                React.createElement(image_1["default"], { src: "/icon.jpg", width: 80, height: 80, alt: "Logo MB", className: "h-[80px] w-[80px] rounded-md object-cover" }),
                React.createElement("p", { className: "text-2xl px-4 uppercase font-bold" }, "Marek Basiul"))),
        React.createElement("ul", { className: "hidden md:flex space-x-8 uppercase font-semibold h-full" }, sectionIds.map(function (id) { return (React.createElement("li", { key: id, className: "flex-1 h-full" },
            React.createElement(link_1["default"], { href: "#" + id, className: "flex items-center justify-center w-full h-full p-8 transition duration-300 " + (id === activeLink
                    ? 'bg-darkLight text-white'
                    : 'hover:bg-darkLight hover:bg-opacity-75') }, id.charAt(0).toUpperCase() + id.slice(1)))); })),
        React.createElement("button", { className: "md:hidden z-30", onClick: toggleMenu },
            React.createElement(image_1["default"], { src: isVisible ? close_svg_1["default"] : burger_menu_svg_1["default"], width: 40, height: 40, alt: "Menu toggle" })),
        React.createElement("div", { className: "fixed top-0 right-0 w-full h-screen bg-dark bg-opacity-95 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out z-20 " + (isVisible ? 'translate-x-0' : 'translate-x-full') },
            React.createElement("ul", { className: "space-y-8 text-2xl font-semibold" }, sectionIds.map(function (id) { return (React.createElement("li", { key: id, className: "w-full text-center" },
                React.createElement(link_1["default"], { href: "#" + id, onClick: toggleMenu, className: "block w-full py-4 px-6 rounded-md text-white transition duration-300 ease-in-out " + (id === activeLink
                        ? 'bg-darkLight text-white' // Aktywna sekcja
                        : 'hover:bg-darkLight hover:bg-opacity-75' // Efekt hover
                    ) }, id.charAt(0).toUpperCase() + id.slice(1)))); })))));
}
exports["default"] = Navbar;
